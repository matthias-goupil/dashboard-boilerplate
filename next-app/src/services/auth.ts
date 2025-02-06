import { eq } from "drizzle-orm";
import { createSession } from "./sessions";
import { db } from "@/db/db";
import { users } from "@/db/schemas";
import { checkPassword, hashPassword } from "@/lib/hash";

export async function signupWithCredentials(
  email: string,
  password: string,
  name: string
) {
  const hashedPassword = await hashPassword(password);

  try {
    const [newUser] = await db
      .insert(users)
      .values({
        email,
        name,
        hashedPassword,
      })
      .returning({ name: users.name, email: users.email });

    return newUser;
  } catch (e) {
    throw new Error("User already exist");
  }
}

export async function signinWithCredentials(email: string, password: string) {
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });
  if (!user || !(await checkPassword(password, user.hashedPassword))) {
    throw new Error("Wrong credentials");
  }
  const session = await createSession(user.id);
  return { user, session };
}

