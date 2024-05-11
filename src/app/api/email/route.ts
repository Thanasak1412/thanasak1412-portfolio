import Mail from 'nodemailer/lib/mailer';
import { NextRequest, NextResponse } from 'next/server';
import { CONTACT_EMAIL } from '@/app/config';
import { sendMailPromise } from '@/app/lib/send-email';

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  // Process a send email request
  const mailOptions: Mail.Options = {
    from: CONTACT_EMAIL,
    to: formData.get('email')?.toString(),
    subject: `Contact email from ${formData.get('name')?.toString()} ${formData.get('email')?.toString()}`,
    text: formData.get('message')?.toString(),
  };

  try {
    await sendMailPromise(mailOptions);

    return NextResponse.json({ message: 'Send email successful', status: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send email', status: false, error },
      { status: 500 }
    );
  }
}
