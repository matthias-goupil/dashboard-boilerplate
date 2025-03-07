import { eq } from "drizzle-orm";
import { users } from "@/models";
import { accounts } from "@/models";
import { uploadImageByURL } from "./minio";
import { v4 as uuidv4 } from "uuid";
import { checkPassword, hashPassword } from "@/utils/hash";
import { db } from "@/utils/db";
import { generateJWT } from "@/utils/jwt";

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
  } catch {
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
  name: string,
  picture?: string
) {
  let existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!existingUser) {
    let pictureKey = null;
    if (picture) {
      const pictureName = uuidv4();
      const result = await uploadImageByURL(picture, pictureName);
      if (result?.ETag) {
        pictureKey = pictureName;
      }
    }
    [existingUser] = await db
      .insert(users)
      .values({
        name: name,
        email: email,
        picture: pictureKey,
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
