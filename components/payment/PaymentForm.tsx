'use client';

import { useState, FormEvent } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { colors } from '@/lib/colors';

interface PaymentFormProps {
  onCancel: () => void;
  clientSecret: string;
  amount: string;
  customerName: string;
  customerEmail: string;
}

export default function PaymentForm({ onCancel, clientSecret, amount, customerName, customerEmail }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePaymentSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
        redirect: 'if_required',
      });

      if (error) {
        setErrorMessage(error.message || 'Payment failed');
        setPaymentStatus('error');
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        setPaymentStatus('success');
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'An unexpected error occurred');
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  if (paymentStatus === 'success') {
    return (
      <div
        style={{
          padding: '2rem',
          backgroundColor: '#d1fae5',
          border: '2px solid #6ee7b7',
          borderRadius: '4px',
          textAlign: 'center'
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
        <h3
          className="heading-sm font-bold mb-2"
          style={{ color: '#065f46' }}
        >
          Payment Successful!
        </h3>
        <p style={{ color: '#065f46', marginBottom: '1.5rem' }}>
          Thank you for your payment. You will receive a confirmation email shortly.
        </p>
        <button
          onClick={onCancel}
          className="btn-primary"
          style={{ backgroundColor: '#059669' }}
        >
          Done
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handlePaymentSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <div
              style={{
                padding: '1rem',
                backgroundColor: colors.neutral.offWhite,
                borderRadius: '4px',
                marginBottom: '1.5rem'
              }}
            >
              <p style={{ fontSize: '0.875rem', color: colors.secondary.mediumGray }}>
                <strong>Amount:</strong> ${parseFloat(amount).toFixed(2)}
              </p>
              <p style={{ fontSize: '0.875rem', color: colors.secondary.mediumGray }}>
                <strong>Name:</strong> {customerName}
              </p>
              <p style={{ fontSize: '0.875rem', color: colors.secondary.mediumGray }}>
                <strong>Email:</strong> {customerEmail}
              </p>
            </div>

            <PaymentElement />
          </div>

          {errorMessage && (
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#fee2e2',
                border: '1px solid #fca5a5',
                borderRadius: '4px',
                color: '#991b1b',
                fontSize: '0.875rem',
                marginBottom: '1rem'
              }}
            >
              {errorMessage}
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="button"
              onClick={onCancel}
              className="btn-secondary"
              style={{ flex: 1 }}
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              style={{ flex: 1 }}
              disabled={isProcessing || !stripe || !elements}
            >
              {isProcessing ? 'Processing...' : `Pay $${parseFloat(amount).toFixed(2)}`}
            </button>
          </div>
        </form>
    </div>
  );
}
