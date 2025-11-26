import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const { amount, description, customerEmail, customerName } = await request.json();

    console.log('Payment intent request:', { amount, description, customerEmail, customerName });

    // Validate amount
    const amountNum = parseFloat(amount);
    if (!amount || isNaN(amountNum) || amountNum < 0.50) { // Stripe minimum is $0.50
      console.log('Invalid amount:', amount, 'parsed:', amountNum);
      return NextResponse.json(
        { error: 'Amount must be at least $0.50' },
        { status: 400 }
      );
    }

    // Create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amountNum * 100), // Convert to cents
      currency: 'usd',
      description: description || 'Payment for Kim Electric LLC services',
      receipt_email: customerEmail,
      metadata: {
        customer_name: customerName || 'Unknown',
        business: 'Kim Electric LLC',
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });

  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
