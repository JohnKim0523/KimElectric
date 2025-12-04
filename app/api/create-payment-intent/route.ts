import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type PaymentMethodType = 'card' | 'ach' | 'apple_pay' | 'google_pay';

// Map our payment method types to Stripe payment method types
function getStripePaymentMethodTypes(paymentMethod: PaymentMethodType): string[] {
  switch (paymentMethod) {
    case 'card':
      return ['card'];
    case 'ach':
      return ['us_bank_account'];
    case 'apple_pay':
    case 'google_pay':
      // Apple Pay and Google Pay use the 'card' type with wallet detection
      return ['card'];
    default:
      return ['card'];
  }
}

export async function POST(request: NextRequest) {
  try {
    const { amount, description, customerEmail, customerName, paymentMethod } = await request.json();

    console.log('Payment intent request:', { amount, description, customerEmail, customerName, paymentMethod });

    // Validate amount
    const amountNum = parseFloat(amount);
    if (!amount || isNaN(amountNum) || amountNum < 0.50) { // Stripe minimum is $0.50
      console.log('Invalid amount:', amount, 'parsed:', amountNum);
      return NextResponse.json(
        { error: 'Amount must be at least $0.50' },
        { status: 400 }
      );
    }

    const paymentMethodTypes = getStripePaymentMethodTypes(paymentMethod || 'card');

    // Create a PaymentIntent with specific payment method types
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amountNum * 100), // Convert to cents
      currency: 'usd',
      payment_method_types: paymentMethodTypes,
      description: description || 'Payment for Kim Electric LLC services',
      receipt_email: customerEmail,
      metadata: {
        customer_name: customerName || 'Unknown',
        business: 'Kim Electric LLC',
        payment_method_selected: paymentMethod || 'card',
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
