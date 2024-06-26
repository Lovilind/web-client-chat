import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken')?.value;

  if (accessToken && req.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', req.url));
  }
  NextResponse.next();
}

export const config = {
  matcher: ['/signin', '/signup'], // 매치되는 url에만 미들웨어 적용, matcher 없으면 모든 url에 적용
};
