'use client';

import { useState, FormEvent, useMemo } from 'react';
import { colors } from '@/lib/colors';

// Stripe fee: 2.9% + $0.30
const STRIPE_PERCENT_FEE = 0.029;
const STRIPE_FIXED_FEE = 0.30;

// Calculate total amount that covers the Stripe fee
function calculateTotalWithFee(invoiceAmount: number): number {
  // Formula: total = (invoice + fixed_fee) / (1 - percent_fee)
  return (invoiceAmount + STRIPE_FIXED_FEE) / (1 - STRIPE_PERCENT_FEE);
}

interface PaymentDetailsFormProps {
  onCancel: () => void;
  onClientSecretReady: (secret: string, amount: string, name: string, email: string) => void;
}

export default function PaymentDetailsForm({ onCancel, onClientSecretReady }: PaymentDetailsFormProps) {
  const [amount, setAmount] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate the total with processing fee
  const { totalAmount, processingFee } = useMemo(() => {
    const invoiceAmount = parseFloat(amount);
    if (isNaN(invoiceAmount) || invoiceAmount <= 0) {
      return { totalAmount: 0, processingFee: 0 };
    }
    const total = calculateTotalWithFee(invoiceAmount);
    const fee = total - invoiceAmount;
    return {
      totalAmount: Math.round(total * 100) / 100,
      processingFee: Math.round(fee * 100) / 100
    };
  }, [amount]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage('');

    try {
      // Create payment intent with the total amount (including processing fee)
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          description,
          customerEmail,
          customerName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to initialize payment');
      }

      onClientSecretReady(data.clientSecret, totalAmount.toFixed(2), customerName, customerEmail);
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to initialize payment');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: colors.neutral.darkGray,
              marginBottom: '0.5rem'
            }}
          >
            Amount (USD) *
          </label>
          <input
            type="number"
            step="0.01"
            min="0.50"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="Enter amount"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: `1px solid ${colors.secondary.borderGray}`,
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: colors.neutral.darkGray,
              marginBottom: '0.5rem'
            }}
          >
            Name *
          </label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
            placeholder="Your name"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: `1px solid ${colors.secondary.borderGray}`,
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: colors.neutral.darkGray,
              marginBottom: '0.5rem'
            }}
          >
            Email *
          </label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
            placeholder="Your email for receipt"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: `1px solid ${colors.secondary.borderGray}`,
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: colors.neutral.darkGray,
              marginBottom: '0.5rem'
            }}
          >
            Description (Optional)
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder="What is this payment for?"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: `1px solid ${colors.secondary.borderGray}`,
              borderRadius: '4px',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
        </div>

        {/* Fee Breakdown */}
        {totalAmount > 0 && (
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#f8fafc',
              border: `1px solid ${colors.secondary.borderGray}`,
              borderRadius: '4px',
            }}
          >
            <div style={{ fontSize: '0.875rem', color: colors.neutral.darkGray }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Invoice Amount:</span>
                <span>${parseFloat(amount).toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Processing Fee (2.9% + $0.30):</span>
                <span>${processingFee.toFixed(2)}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: '700',
                  paddingTop: '0.5rem',
                  borderTop: `1px solid ${colors.secondary.borderGray}`,
                  color: colors.primary.navy
                }}
              >
                <span>Total to Charge:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {errorMessage && (
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#fee2e2',
              border: '1px solid #fca5a5',
              borderRadius: '4px',
              color: '#991b1b',
              fontSize: '0.875rem'
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
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Continue to Payment'}
          </button>
        </div>
      </div>
    </form>
  );
}
