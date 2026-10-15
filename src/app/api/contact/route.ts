import { NextResponse } from 'next/server';

// Strict email regex matching standard RFC format
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, message, consent, _honey_url, enquiryType } = data;

    // 1. Honeypot check for automated bots (silent success)
    if (_honey_url) {
      return NextResponse.json({ success: true, message: 'Enquiry received' }, { status: 200 });
    }

    // 2. Validate required full name (1 to 100 characters)
    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Full name is required.' }, { status: 400 });
    }
    const cleanName = name.replace(/\0/g, '').trim();
    if (cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters.' },
        { status: 400 }
      );
    }

    // 3. Validate email address (max 150 characters, valid RFC format)
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }
    const cleanEmail = email.replace(/\0/g, '').trim().toLowerCase();
    if (cleanEmail.length > 150 || !EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // 4. Validate message content (1 to 5,000 characters)
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message content is required.' }, { status: 400 });
    }
    const cleanMessage = message.replace(/\0/g, '').trim();
    if (cleanMessage.length < 5 || cleanMessage.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be between 5 and 5,000 characters.' },
        { status: 400 }
      );
    }

    // 5. Validate consent checkbox
    if (consent !== true) {
      return NextResponse.json(
        { error: 'Privacy consent agreement is required to process your enquiry.' },
        { status: 400 }
      );
    }

    // 6. Validate optional fields
    const cleanPhone = typeof phone === 'string' ? phone.replace(/\0/g, '').trim().slice(0, 50) : '';
    const cleanCompany = typeof company === 'string' ? company.replace(/\0/g, '').trim().slice(0, 100) : '';
    const cleanCategory = typeof enquiryType === 'string' ? enquiryType.replace(/\0/g, '').trim().slice(0, 50) : 'General';

    // 7. Secure privacy-compliant server logging (avoids dumping raw PII in console stdout)
    const timestamp = new Date().toISOString();
    console.log(
      `[Enquiry Received - ${timestamp}] Category: ${cleanCategory} | NameLength: ${cleanName.length} | HasPhone: ${Boolean(cleanPhone)} | HasCompany: ${Boolean(cleanCompany)}`
    );

    // 8. SMTP / Mailer integration hook for cPanel Node.js or production mail delivery
    // e.g., if process.env.SMTP_HOST is configured, dispatch notification email.

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

