'use server'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'
import { deleteSession } from '@/services/sessions'
import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'jwt'
const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET!)
const REDIRECTS = {
  signin: '/auth/signin',
  dashboard: '/dashboard',
}

interface IJWTPayload {
  userId: string
}

export async function generateJWT(userId: string) {
  const token = await jwt.sign(
    {
      userId: userId,
    },
    process.env.NEXTAUTH_SECRET!,
    { expiresIn: '7d' }
  )

  ;(await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 jours
  })

  return token
}

export async function getJWT(): Promise<{
  jwt: string
  payload: IJWTPayload | null
} | null> {
  const cookie = (await cookies()).get(COOKIE_NAME)
  if (!cookie) return null

  const { payload } = await jwtVerify<IJWTPayload>(cookie.value, secret)

  if (!payload.exp || payload.exp * 1000 < Date.now()) {
    return { jwt: cookie.value, payload: null }
  }

  return { jwt: cookie.value, payload }
}

export async function destroyJWT() {
  const cookie = (await cookies()).get(COOKIE_NAME)
  if (!cookie) return
  ;(await cookies()).delete(COOKIE_NAME)
}

export async function handleAuthentication(
  request: NextRequest
): Promise<NextResponse | null> {
  const jwt = await getJWT()

  if (!jwt) {
    return request.nextUrl.pathname.includes('/dashboard')
      ? NextResponse.redirect(REDIRECTS.signin)
      : null
  }

  const isAuthenticated = jwt.payload
  // && (await sessionExist(jwt.jwt));

  if (isAuthenticated) {
    return request.nextUrl.pathname.includes('/auth/')
      ? NextResponse.redirect(REDIRECTS.dashboard)
      : null
  }

  await deleteSession(jwt.jwt)
  return request.nextUrl.pathname.includes('/dashboard')
    ? NextResponse.redirect(REDIRECTS.signin)
    : null
}
