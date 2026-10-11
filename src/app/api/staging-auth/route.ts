import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    const expectedPassword = process.env.STAGING_PASSWORD || 'xana2026';

    if (password === expectedPassword) {
      const response = NextResponse.json({ success: true });

      // Set auth cookie valid for 30 days
      response.cookies.set('xana_staging_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: 'Invalid review password. Please try again.' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Authentication request failed.' },
      { status: 400 }
    );
  }
}
