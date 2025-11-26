'use client';

import PageTransition from '@/components/PageTransition';
import { colors } from '@/lib/colors';
import StripePaymentForm from '@/components/payment/StripePaymentForm';

export default function PaymentPage() {
  return (
    <PageTransition>
      <div>
        {/* Header Section */}
        <section
          className="header-spacing text-center"
          style={{
            backgroundColor: colors.primary.navy,
            color: colors.primary.white
          }}
        >
          <div className="container-responsive">
            <h1 className="heading-xl font-bold mb-4">
              Online Payment
            </h1>
            <p className="text-lg max-w-responsive-sm mx-auto">
              Convenient online payment for your fire protection services
            </p>
          </div>
        </section>

        {/* Payment Content */}
        <section className="section-padding" style={{ backgroundColor: colors.neutral.offWhite }}>
          <div className="container-responsive">
            <div className="grid-responsive-2 gap-responsive">
              {/* Online Payment with Stripe */}
              <StripePaymentForm />

              {/* Traditional Payment Methods */}
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
                  Other Payment Methods
                </h3>
                <p
                  className="text-base"
                  style={{
                    color: colors.secondary.mediumGray,
                    lineHeight: '1.7'
                  }}
                >
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: colors.primary.navy }}>Check:</strong>
                  Please make checks payable to <strong>"Kim Electric LLC"</strong>
                </p>
                <p
                  className="text-base"
                  style={{
                    color: colors.secondary.mediumGray,
                    lineHeight: '1.7',
                    marginTop: '1rem'
                  }}
                >
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: colors.primary.navy }}>Zelle:</strong>
                  Send payments to <strong>"201-919-5006"</strong> or{' '}
                  <a href="mailto:kimelectricllc.us@gmail.com" style={{ color: colors.primary.navy, textDecoration: 'underline', fontWeight: '600' }}>
                    "kimelectricllc.us@gmail.com"
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
