'use client';

import { useState, FormEvent, useMemo } from 'react';
import { colors } from '@/lib/colors';

// Payment method types
type PaymentMethodType = 'card' | 'ach' | 'apple_pay' | 'google_pay';

interface PaymentMethod {
  id: PaymentMethodType;
  label: string;
  description: string;
  feeDescription: string;
}

const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 'card', label: 'Credit/Debit Card', description: 'Visa, Mastercard, Amex, Discover', feeDescription: '2.9% + $0.30' },
  { id: 'ach', label: 'Bank Transfer (ACH)', description: 'Pay directly from your bank account', feeDescription: '0.8% (max $5)' },
  { id: 'apple_pay', label: 'Apple Pay', description: 'Fast checkout with Apple Pay', feeDescription: '2.9% + $0.30' },
  { id: 'google_pay', label: 'Google Pay', description: 'Fast checkout with Google Pay', feeDescription: '2.9% + $0.30' },
];

// Fee structures
const CARD_PERCENT_FEE = 0.029;
const CARD_FIXED_FEE = 0.30;
const ACH_PERCENT_FEE = 0.008;
const ACH_MAX_FEE = 5.00;

// Calculate total amount that covers the fee based on payment method
function calculateTotalWithFee(invoiceAmount: number, paymentMethod: PaymentMethodType): { total: number; fee: number } {
  if (paymentMethod === 'ach') {
    // ACH: 0.8% capped at $5
    // The cap kicks in when total * 0.008 >= 5, meaning total >= 625
    // So if invoice >= 620 (625 - 5), we use the capped fee

    // First, calculate what the total would be without the cap
    const uncappedTotal = invoiceAmount / (1 - ACH_PERCENT_FEE);
    const uncappedFee = uncappedTotal * ACH_PERCENT_FEE;

    // If the fee on the total would exceed $5, use the capped amount
    if (uncappedFee >= ACH_MAX_FEE) {
      return { total: invoiceAmount + ACH_MAX_FEE, fee: ACH_MAX_FEE };
    }

    return { total: uncappedTotal, fee: uncappedFee };
  } else {
    // Card, Apple Pay, Google Pay: 2.9% + $0.30
    const total = (invoiceAmount + CARD_FIXED_FEE) / (1 - CARD_PERCENT_FEE);
    const fee = total - invoiceAmount;
    return { total, fee };
  }
}

interface PaymentDetailsFormProps {
  onCancel: () => void;
  onClientSecretReady: (secret: string, amount: string, name: string, email: string, paymentMethod: PaymentMethodType) => void;
}

export default function PaymentDetailsForm({ onCancel, onClientSecretReady }: PaymentDetailsFormProps) {
  const [amount, setAmount] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [description, setDescription] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Calculate the total with processing fee based on selected payment method
  const { totalAmount, processingFee, feeDescription } = useMemo(() => {
    const invoiceAmount = parseFloat(amount);
    if (isNaN(invoiceAmount) || invoiceAmount <= 0 || !paymentMethod) {
      return { totalAmount: 0, processingFee: 0, feeDescription: '' };
    }
    const { total, fee } = calculateTotalWithFee(invoiceAmount, paymentMethod);
    const selectedMethod = PAYMENT_METHODS.find(m => m.id === paymentMethod);
    return {
      totalAmount: Math.round(total * 100) / 100,
      processingFee: Math.round(fee * 100) / 100,
      feeDescription: selectedMethod?.feeDescription || ''
    };
  }, [amount, paymentMethod]);

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
          paymentMethod,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to initialize payment');
      }

      onClientSecretReady(data.clientSecret, totalAmount.toFixed(2), customerName, customerEmail, paymentMethod!);
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

        {/* Payment Method Selector */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: colors.neutral.darkGray,
              marginBottom: '0.75rem'
            }}
          >
            Payment Method *
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {PAYMENT_METHODS.map((method) => (
              <label
                key={method.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  padding: '1rem',
                  border: `2px solid ${paymentMethod === method.id ? colors.primary.navy : colors.secondary.borderGray}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backgroundColor: paymentMethod === method.id ? '#f0f4f8' : 'white',
                  transition: 'all 0.2s ease'
                }}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={() => setPaymentMethod(method.id)}
                  style={{ marginRight: '0.75rem', marginTop: '0.25rem' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '600', color: colors.primary.navy }}>{method.label}</span>
                    <span style={{ fontSize: '0.75rem', color: colors.secondary.mediumGray }}>{method.feeDescription}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: colors.secondary.mediumGray }}>{method.description}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Fee Breakdown */}
        {totalAmount > 0 && paymentMethod && (
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
                <span>Processing Fee ({feeDescription}):</span>
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
            disabled={isProcessing || !paymentMethod}
          >
            {isProcessing ? 'Processing...' : 'Continue to Payment'}
          </button>
        </div>
      </div>
    </form>
  );
}
