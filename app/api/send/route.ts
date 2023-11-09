import { EmailTemplate } from '@/components/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, email, subject, content } = await req.json();

    //@ts-ignore
    const data = await resend.emails.send({
      from: `Gaurangk.me <gaurangsmail@resend.dev>`,
      to: ['khera.gaurang@gmail.com'],
      subject: subject,
      react: EmailTemplate({ firstName, email, subject, content }),
    });

    console.log(data)

    console.log('mail sent!')

    return NextResponse.json(data);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error });
  }
}
