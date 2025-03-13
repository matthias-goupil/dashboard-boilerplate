import { users } from '@/models'
import { db } from '@/utils/db'
import { checkPassword, hashPassword } from '@/utils/hash'
import { eq } from 'drizzle-orm'

export async function getUsers() {
  return await db.query.users.findMany()
}

export async function getUserById(id: string) {
  const user = await db.query.users.findFirst({
    where: eq(users.id, id),
  })
  return user
}

export async function updateUserPassword(
  user: typeof users.$inferSelect,
  currentPassword: string,
  newPassword: string
) {
  if (
    !user.hashedPassword ||
    !(await checkPassword(currentPassword, user.hashedPassword))
  ) {
    throw new Error('The current password is incorrect')
  }

  const hashedPassword = await hashPassword(newPassword)
  try {
    return await db
      .update(users)
      .set({ hashedPassword })
      .where(eq(users.id, user.id))
  } catch {
    throw new Error('Une erreur est survenue')
  }
}
