import { db } from "@/db/db";
import { sessions } from "@/db/schemas";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

const COOKIE_NAME = "session_token";

export async function createSession(userId: number) {
  const sessionToken = crypto.randomUUID();
  const expires = new Date();
  expires.setDate(expires.getDate() + 7); // Expire dans 7 jours

  await db.insert(sessions).values({ userId, sessionToken, expires });

  (await cookies()).set(COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 jours
  });

  return sessionToken;
}

export async function getSession() {
  const cookie = (await cookies()).get(COOKIE_NAME);
  if (!cookie) return null;

  const session = await db.query.sessions.findFirst({
    where: eq(sessions.sessionToken, cookie.value),
    with: {
      user: true
    }
  });

  if (!session || new Date(session.expires) < new Date()) {
    return null;
  }

  return session;
}

export async function destroySession() {
  const cookie = (await cookies()).get(COOKIE_NAME);
  if (!cookie) return;

  await db.delete(sessions).where(eq(sessions.sessionToken, cookie.value));

  (await cookies()).delete(COOKIE_NAME);
}
