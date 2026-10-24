import { NextResponse, type NextRequest } from "next/server";

const locales = ["uz", "ru", "en"];
const defaultLocale = "ru";

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

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /*
    If someone opens:
    /uz/admin/login
    /ru/admin/login
    /en/admin/login

    redirect to:
    /admin/login
  */
  const parts = pathname.split("/");

  if (
    parts.length >= 3 &&
    locales.includes(parts[1]) &&
    parts[2] === "admin"
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/${parts.slice(2).join("/")}`;
    return NextResponse.redirect(url);
  }

  /*
    Do not add locale to:
    /admin
    /admin/login
    /api
    /_next
    static files
  */
  if (isSystemPath(pathname)) {
    return NextResponse.next();
  }

  /*
    Public site locale redirect:
    /        -> /ru
    /contact -> /ru/contact
  */
  if (!hasLocale(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
