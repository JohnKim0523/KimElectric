'use client';

import PageTransition from '@/components/PageTransition';
import { colors } from '@/lib/colors';

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
        <section className="section-padding-lg" style={{ backgroundColor: colors.neutral.offWhite }}>
          <div className="container-responsive">
            <div className="max-w-responsive-sm mx-auto text-center">
              <div
                className="card-padding"
                style={{
                  backgroundColor: colors.primary.white,
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: colors.primary.navy,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    fontSize: '3rem',
                    color: colors.primary.white
                  }}
                >
                  💳
                </div>

                <h2 className="heading-md font-bold mb-4" style={{ color: colors.primary.navy }}>
                  Payment Portal Coming Soon
                </h2>

                <p
                  className="text-md mb-responsive-lg"
                  style={{
                    color: colors.secondary.mediumGray,
                    lineHeight: '1.8'
                  }}
                >
                  We're currently setting up our secure online payment system. In the meantime,
                  please contact us directly for payment arrangements.
                </p>

                <div
                  className="card-padding"
                  style={{
                    backgroundColor: colors.neutral.offWhite,
                    borderRadius: '8px',
                    marginTop: '2rem'
                  }}
                >
                  <h3
                    className="font-bold mb-3"
                    style={{
                      fontSize: '1.25rem',
                      color: colors.primary.navy
                    }}
                  >
                    Alternative Payment Methods
                  </h3>
                  <ul
                    className="text-md"
                    style={{
                      textAlign: 'left',
                      display: 'inline-block',
                      color: colors.secondary.mediumGray,
                      lineHeight: '2'
                    }}
                  >
                    <li>• Check or Money Order</li>
                    <li>• Bank Transfer</li>
                    <li>• Credit Card (by phone)</li>
                  </ul>
                </div>

                <p
                  className="text-base"
                  style={{
                    color: colors.secondary.mediumGray,
                    marginTop: '2rem'
                  }}
                >
                  For payment inquiries, please contact us at{' '}
                  <a
                    href="mailto:info@kimelectricllc.com"
                    style={{
                      color: colors.primary.navy,
                      fontWeight: '600',
                      textDecoration: 'underline'
                    }}
                  >
                    info@kimelectricllc.com
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
