import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { KEY_COOKIE } from './utils/constants';
import { ApiService } from './service/api';

const publicPath = (path: string) => {
  return (
    path.startsWith('/login') ||
    path.startsWith('/_next') ||
    path.startsWith('/favicon') ||
    path.startsWith('/register')
  );
};

const privatePath = (path: string) => {
  return path.startsWith('/dashboard');
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

  if (privatePath(url)) {
    if (accessToken == undefined) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}
