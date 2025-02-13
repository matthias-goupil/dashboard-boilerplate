import { db } from "@/db/db";
import { users } from "@/db/schemas/users";
import { checkPassword, hashPassword } from "@/lib/hash";
import { and, eq } from "drizzle-orm";

export async function getUsers() {
  return await db.query.users.findMany();
}

export async function updateUserPassword(
  user: typeof users.$inferSelect,
  currentPassword: string,
  newPassword: string
) {
  if (!(await checkPassword(currentPassword, user.hashedPassword))) {
    throw new Error("The current password is incorrect");
  }

  const hashedPassword = await hashPassword(newPassword);
  try {
    return (await db
      .update(users)
      .set({ hashedPassword })
      .where(eq(users.id, user.id))).length;
  } catch (e) {
    throw new Error("Une erreur est survenue");
  }
}
