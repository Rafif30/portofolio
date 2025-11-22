import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { EMAIL_PASS, EMAIL_USER, RECEIVER_EMAIL } from '@/src/constant/config'

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, subject, message } = data;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL_USER,
    to: RECEIVER_EMAIL,
    subject: `[Portfolio Contact] ${subject} from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}