import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'
import { i18nMiddlewareConfig } from './config/i18n.config'
import { handleAuthentication } from './utils/jwt'

const I18nMiddleware = createI18nMiddleware(i18nMiddlewareConfig)

export async function middleware(request: NextRequest) {
  const authResponse = await handleAuthentication(request)
  if (authResponse) return authResponse

  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
