import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";
import { i18nMiddlewareConfig } from "./config/i18n.config";
import { getJWT } from "./utils/jwt";

const I18nMiddleware = createI18nMiddleware(i18nMiddlewareConfig);

export async function middleware(request: NextRequest) {
  const userId = await getJWT();
  if (!userId) {
    if (request.url.includes("/dashboard")) {
      return NextResponse.redirect("http://localhost:3000/auth/signin");
    }
  } else {
    if (request.url.includes("/auth/")) {
      return NextResponse.redirect("http://localhost:3000/dashboard");
    }
  }
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
