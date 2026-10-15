import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, message, consent, _honey_url, enquiryType } = data;

    // 1. Honeypot check for spam bots
    if (_honey_url) {
      return NextResponse.json({ success: true, message: 'Enquiry received' }, { status: 200 });
    }

    // 2. Validate required fields
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ error: 'Full name is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message content is required.' }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json({ error: 'Privacy consent agreement is required.' }, { status: 400 });
    }

    // 3. Log enquiry (for production server logs / cPanel stderr/stdout)
    const timestamp = new Date().toISOString();
    console.log(
      `[Enquiry Received - ${timestamp}] Type: ${enquiryType || 'General'} | From: ${name} <${email}> | Phone: ${phone || 'N/A'} | Company: ${company || 'N/A'}`
    );

    // 4. In a Node.js / cPanel production deployment, SMTP or mailer integration can be hooked here via env variables.
    // E.g. process.env.SMTP_HOST

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your enquiry. Our clinical team has received your message.',
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Internal Server Error';
    console.error('[Contact API Error]:', errMessage);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your enquiry.' },
      { status: 500 }
    );
  }
}
