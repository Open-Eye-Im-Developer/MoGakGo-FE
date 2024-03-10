import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.headers.get("cookie");
  const isAuthenticated = cookie?.includes("isAuthenticated=");

  if (isAuthenticated) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/chat/:path*", "/notification"],
};
