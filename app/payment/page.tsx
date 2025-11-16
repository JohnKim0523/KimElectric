'use client';

import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import { colors } from '@/lib/colors';

export default function PaymentPage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <PageTransition>
      <div>
        {/* Header Section */}
        <section
          style={{
            paddingTop: isMobile ? '180px' : '210px',
            paddingBottom: isMobile ? '3rem' : '4rem',
            backgroundColor: colors.primary.navy,
            color: colors.primary.white,
            textAlign: 'center'
          }}
        >
          <div
            style={{
              paddingLeft: isMobile ? '1.5rem' : '3rem',
              paddingRight: isMobile ? '1.5rem' : '3rem',
              maxWidth: '1200px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <h1
              className="font-bold mb-4"
              style={{
                fontSize: isMobile ? '2.5rem' : '4rem'
              }}
            >
              Online Payment
            </h1>
            <p
              style={{
                fontSize: isMobile ? '1.125rem' : '1.5rem',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              Convenient online payment for your fire protection services
            </p>
          </div>
        </section>

        {/* Payment Content */}
        <section
          style={{
            paddingTop: isMobile ? '4rem' : '6rem',
            paddingBottom: isMobile ? '4rem' : '6rem',
            backgroundColor: colors.neutral.offWhite
          }}
        >
          <div
            style={{
              paddingLeft: isMobile ? '1.5rem' : '3rem',
              paddingRight: isMobile ? '1.5rem' : '3rem',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                backgroundColor: colors.primary.white,
                borderRadius: '12px',
                padding: isMobile ? '2.5rem' : '4rem',
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

              <h2
                className="font-bold mb-4"
                style={{
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  color: colors.primary.navy
                }}
              >
                Payment Portal Coming Soon
              </h2>

              <p
                style={{
                  fontSize: isMobile ? '1.125rem' : '1.25rem',
                  color: colors.secondary.mediumGray,
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}
              >
                We're currently setting up our secure online payment system. In the meantime,
                please contact us directly for payment arrangements.
              </p>

              <div
                style={{
                  backgroundColor: colors.neutral.offWhite,
                  padding: isMobile ? '1.5rem' : '2rem',
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
                  style={{
                    textAlign: 'left',
                    display: 'inline-block',
                    fontSize: isMobile ? '1rem' : '1.125rem',
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
                style={{
                  fontSize: '1rem',
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
        </section>
      </div>
    </PageTransition>
  );
}
