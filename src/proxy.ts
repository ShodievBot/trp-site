import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale, isLocale, type Locale } from "@/lib/i18n";

function hasLocale(pathname: string) {
  return locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

function isSystemPath(pathname: string) {
  return (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.includes(".")
  );
}

// Pick language from browser (Accept-Language), otherwise defaultLocale (uz)
function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") || "";

  for (const part of header.split(",")) {
    const code = part.split(";")[0].trim().toLowerCase().slice(0, 2);
    if (isLocale(code)) {
      return code;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /uz/admin/... -> /admin/...
  const parts = pathname.split("/");

  if (parts.length >= 3 && isLocale(parts[1]) && parts[2] === "admin") {
    const url = request.nextUrl.clone();
    url.pathname = `/${parts.slice(2).join("/")}`;
    return NextResponse.redirect(url);
  }

  if (isSystemPath(pathname)) {
    return NextResponse.next();
  }

  // / -> /uz (or browser language), /contact -> /uz/contact
  if (!hasLocale(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${detectLocale(request)}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
