import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone'];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      timestamp: new Date().toISOString(),
    });

    // Email content
    const emailContent = `
New Contact Form Submission - Kim Electric LLC

From: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address || 'Not provided'}

Message:
${data.message || 'No message provided'}

Submitted: ${new Date().toLocaleString()}
    `;

    // Send email notification using Resend
    console.log('📧 Attempting to send email...');
    console.log('From:', process.env.EMAIL_FROM || 'onboarding@resend.dev');
    console.log('To:', process.env.CONTACT_EMAIL || 'kimelectricllc.us@gmail.com');

    try {
      const emailResult = await resend.emails.send({
        from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
        to: process.env.CONTACT_EMAIL || 'kimelectricllc.us@gmail.com',
        subject: `New Contact Inquiry from ${data.name}`,
        text: emailContent,
      });

      console.log('✅ Email send result:', emailResult);

      // Check if email actually succeeded
      if (emailResult.error) {
        console.error('❌ Email sending failed:', emailResult.error);
        return NextResponse.json(
          { error: 'Failed to send message. Please contact us directly at kimelectricllc.us@gmail.com or call (201) 919-5006.' },
          { status: 500 }
        );
      }

    } catch (emailError) {
      console.error('❌ ERROR SENDING EMAIL:', emailError);
      return NextResponse.json(
        { error: 'Failed to send message. Please contact us directly at kimelectricllc.us@gmail.com or call (201) 919-5006.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        referenceId: `CONTACT-${Date.now()}`,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
