"use server"
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const COOKIE_NAME = "jwt";
const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET!);

interface IJWTPayload {
  userId: string;
}

export async function generateJWT(userId: string) {
  const token = await jwt.sign(
    {
      userId: userId,
    },
    process.env.NEXTAUTH_SECRET!,
    { expiresIn: "7d" }
  );

  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 jours
  });

  return token;
}

export async function getJWT(): Promise<string | null> {
  const cookie = (await cookies()).get(COOKIE_NAME);
  if (!cookie) return null;

  const { payload } = await jwtVerify<IJWTPayload>(cookie.value, secret);

  if (!payload.exp || payload.exp * 1000 < Date.now()) {
    await destroyJWT();
    return null;
  }

  return payload.userId;
}

export async function destroyJWT() {
  const cookie = (await cookies()).get(COOKIE_NAME);
  if (!cookie) return;

  (await cookies()).delete(COOKIE_NAME);
}
