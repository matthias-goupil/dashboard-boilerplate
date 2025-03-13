import { sessions } from '@/models'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm'

export async function createSession(
  userId: string,
  expiresAt: Date,
  jwt: string
) {
  return await db
    .insert(sessions)
    .values({
      userId,
      token: jwt,
      expiresAt,
    })
    .returning({
      jwt: sessions.token,
    })
}

export async function deleteSession(jwt: string) {
  return await db.delete(sessions).where(eq(sessions.token, jwt))
}

export async function sessionExist(jwt: string): Promise<boolean> {
  return (
    (await db.query.sessions.findFirst({
      where: eq(sessions.token, jwt),
    })) != undefined
  )
}
