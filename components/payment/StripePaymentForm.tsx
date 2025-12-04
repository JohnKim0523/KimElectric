'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import PaymentDetailsForm from './PaymentDetailsForm';
import { colors } from '@/lib/colors';

type PaymentMethodType = 'card' | 'ach' | 'apple_pay' | 'google_pay';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripePaymentForm() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [clientSecret, setClientSecret] = useState<string>('');
  const [paymentDetails, setPaymentDetails] = useState({ amount: '', name: '', email: '', paymentMethod: 'card' as PaymentMethodType });

  const handleClientSecretReady = (secret: string, amount: string, name: string, email: string, paymentMethod: PaymentMethodType) => {
    setClientSecret(secret);
    setPaymentDetails({ amount, name, email, paymentMethod });
  };

  const handleCancel = () => {
    setShowPaymentForm(false);
    setClientSecret('');
    setPaymentDetails({ amount: '', name: '', email: '', paymentMethod: 'card' });
  };

  return (
    <div
      className="card-padding"
      style={{
        backgroundColor: colors.primary.white,
        borderRadius: '4px',
        border: `2px solid ${colors.secondary.borderGray}`,
        borderLeft: `6px solid ${colors.primary.navy}`,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}
    >
      <h3
        className="heading-sm font-bold mb-4"
        style={{ color: colors.primary.navy }}
      >
        Online Payment
      </h3>

      <p
        className="text-base mb-4"
        style={{
          color: colors.secondary.mediumGray,
          lineHeight: '1.7'
        }}
      >
        Pay securely online using credit or debit card.
      </p>

      {!showPaymentForm ? (
        <button
          onClick={() => setShowPaymentForm(true)}
          className="btn-primary"
          style={{
            width: '100%'
          }}
        >
          Pay Now
        </button>
      ) : !clientSecret ? (
        <PaymentDetailsForm onCancel={handleCancel} onClientSecretReady={handleClientSecretReady} />
      ) : (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm
            onCancel={handleCancel}
            clientSecret={clientSecret}
            amount={paymentDetails.amount}
            customerName={paymentDetails.name}
            customerEmail={paymentDetails.email}
            paymentMethod={paymentDetails.paymentMethod}
          />
        </Elements>
      )}
    </div>
  );
}
