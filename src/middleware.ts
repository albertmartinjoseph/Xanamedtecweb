import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only gate when STAGING is explicitly enabled
  const isStaging = process.env.STAGING === 'true';

  if (!isStaging) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow static assets, images, videos, and authentication endpoints
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/videos') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.startsWith('/staging-login') ||
    pathname.startsWith('/api/staging-auth') ||
    pathname.startsWith('/api/contact')
  ) {
    return NextResponse.next();
  }

  // 1. Check Cookie Authentication
  const authCookie = request.cookies.get('xana_staging_auth');
  if (authCookie?.value === 'authenticated') {
    return NextResponse.next();
  }

  // 2. Check HTTP Basic Auth Header (Optional reviewer convenience)
  const authHeader = request.headers.get('authorization');
  if (authHeader?.startsWith('Basic ')) {
    const expectedPassword = process.env.STAGING_PASSWORD;
    if (expectedPassword) {
      try {
        const base64Credentials = authHeader.split(' ')[1];
        const credentials = atob(base64Credentials);
        const [, password] = credentials.split(':');
        if (password === expectedPassword) {
          return NextResponse.next();
        }
      } catch {
        // Malformed auth header - fall through to redirect
      }
    }
  }

  // If not authenticated, redirect to the staging login screen
  const loginUrl = new URL('/staging-login', request.url);
  loginUrl.searchParams.set('redirect', pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     */
    '/((?!_next/static|_next/image).*)',
  ],
};
