import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { KEY_COOKIE } from './utils/constants';

const publicPath = (path: string) => {
  return (
    path.startsWith('/login') ||
    path.startsWith('/_next') ||
    path.startsWith('/favicon') ||
    path.startsWith('/register')
  );
};

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const accessToken = request.cookies.get(KEY_COOKIE);

  if (
    accessToken !== undefined &&
    (url.startsWith('/login') || url.startsWith('/register'))
  ) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (publicPath(url)) {
    return NextResponse.next();
  }

  if (!publicPath(url)) {
    if (accessToken == undefined) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}
