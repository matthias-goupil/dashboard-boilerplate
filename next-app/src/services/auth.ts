import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { users } from "@/db/schemas";
import { checkPassword, hashPassword } from "@/lib/hash";
import { accounts } from "@/db/schemas/accounts";
import { generateJWT } from "@/lib/jwt";

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
  if (
    !user ||
    !user.hashedPassword ||
    !(await checkPassword(password, user.hashedPassword!))
  ) {
    throw new Error("Wrong credentials");
  }
  const token = await generateJWT(user.id);
  return { user, token };
}

export async function siginWithOAuth(
  provider: "google",
  providerId: string,
  email: string,
  name: string
) {
  let existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!existingUser) {
    [existingUser] = await db
      .insert(users)
      .values({
        name: name,
        email: email,
      })
      .returning();

    await db.insert(accounts).values({
      userId: existingUser.id,
      provider,
      providerAccountId: providerId,
    });
  }
  const token = await generateJWT(existingUser.id);

  return { user: existingUser, token };
}
