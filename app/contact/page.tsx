'use client';

import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import { colors } from '@/lib/colors';

export default function ContactPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Work with Us
            </h1>
            <p
              style={{
                fontSize: isMobile ? '1.125rem' : '1.5rem',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              Get in touch for fire protection services
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section
          style={{
            paddingTop: isMobile ? '3rem' : '5rem',
            paddingBottom: isMobile ? '3rem' : '5rem',
            backgroundColor: colors.neutral.offWhite
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
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '3rem' : '4rem'
              }}
            >
              {/* Contact Form */}
              <div
                style={{
                  backgroundColor: colors.primary.white,
                  borderRadius: '4px',
                  padding: isMobile ? '2rem' : '3rem',
                  border: `2px solid ${colors.secondary.borderGray}`,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}
              >
                <h2
                  className="font-bold mb-4"
                  style={{
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    color: colors.primary.navy
                  }}
                >
                  Send Message
                </h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: `1px solid ${colors.secondary.borderGray}`,
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none'
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email*"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: `1px solid ${colors.secondary.borderGray}`,
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none'
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
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: `1px solid ${colors.secondary.borderGray}`,
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none'
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
                      Address (Street, City, Zip Code)
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Address (Street, City, Zip Code)"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: `1px solid ${colors.secondary.borderGray}`,
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none'
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
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Message"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: `1px solid ${colors.secondary.borderGray}`,
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: colors.primary.navy,
                      color: colors.primary.white,
                      padding: '1rem 2rem',
                      borderRadius: '4px',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = colors.secondary.darkNavy;
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.primary.navy;
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>

                  <p
                    style={{
                      fontSize: '0.75rem',
                      color: colors.secondary.mediumGray,
                      textAlign: 'center',
                      marginTop: '-0.5rem'
                    }}
                  >
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary.navy, textDecoration: 'underline' }}>Privacy Policy</a>
                    {' '}and{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: colors.primary.navy, textDecoration: 'underline' }}>Terms of Service</a>
                    {' '}apply.
                  </p>

                  {submitStatus === 'success' && (
                    <div
                      style={{
                        padding: '1rem',
                        backgroundColor: '#d1fae5',
                        border: '1px solid #6ee7b7',
                        borderRadius: '4px',
                        color: '#065f46',
                        fontSize: '0.875rem'
                      }}
                    >
                      Thank you! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
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
                      Error sending message. Please try again.
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2
                  className="font-bold mb-4"
                  style={{
                    fontSize: isMobile ? '1.75rem' : '2rem',
                    color: colors.primary.navy
                  }}
                >
                  Call For A Free Quote!
                </h2>
                <p
                  style={{
                    fontSize: isMobile ? '0.9375rem' : '1rem',
                    color: colors.secondary.mediumGray,
                    lineHeight: '1.7',
                    marginBottom: '2rem'
                  }}
                >
                  We strive to be in constant communication with our customers. To get a free quote, or if you have questions or special requests, just drop us an email or text. We look forward to working with you.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <h3
                      className="font-bold mb-3"
                      style={{
                        fontSize: isMobile ? '1.25rem' : '1.5rem',
                        color: colors.primary.navy
                      }}
                    >
                      Kim Electric LLC.
                    </h3>
                    <div style={{ fontSize: isMobile ? '0.9375rem' : '1rem', color: colors.secondary.mediumGray, lineHeight: '1.8' }}>
                      <p style={{ marginBottom: '0.75rem' }}>
                        <strong>Mailing Address:</strong> 74 W. Edsall Blvd. #B, Palisades Park, New Jersey 07650, United States
                      </p>
                      <p style={{ marginBottom: '0.75rem' }}>
                        <a href="mailto:kimelectricllc.us@gmail.com" style={{ color: colors.primary.navy, textDecoration: 'underline' }}>
                          kimelectricllc.us@gmail.com
                        </a>
                      </p>
                      <p>
                        <a href="tel:2019195006" style={{ color: colors.primary.navy, fontWeight: 'bold', textDecoration: 'none' }}>
                          (201) 919-5006
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="font-bold mb-3"
                      style={{
                        fontSize: isMobile ? '1.25rem' : '1.5rem',
                        color: colors.primary.navy
                      }}
                    >
                      Hours
                    </h3>
                    <div style={{ fontSize: isMobile ? '0.9375rem' : '1rem', color: colors.secondary.mediumGray, lineHeight: '1.8' }}>
                      <p style={{ marginBottom: '0.5rem' }}>Monday - Friday: 8am - 6pm</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Information Section */}
        <section
          style={{
            paddingTop: isMobile ? '3rem' : '4rem',
            paddingBottom: isMobile ? '3rem' : '4rem',
            backgroundColor: colors.neutral.offWhite
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
            <div
              style={{
                backgroundColor: colors.primary.white,
                padding: isMobile ? '2rem' : '3rem',
                borderRadius: '4px',
                border: `2px solid ${colors.secondary.borderGray}`,
                borderLeft: `6px solid ${colors.primary.navy}`,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                textAlign: 'center'
              }}
            >
              <p
                style={{
                  fontSize: isMobile ? '0.9375rem' : '1rem',
                  color: colors.secondary.mediumGray,
                  lineHeight: '1.7'
                }}
              >
                *Please make checks payable to <strong style={{ color: colors.primary.navy }}>"Kim Electric LLC"</strong> and Zelle payments to{' '}
                <strong style={{ color: colors.primary.navy }}>"201-919-5006"</strong> or{' '}
                <a href="mailto:kimelectricllc.us@gmail.com" style={{ color: colors.primary.navy, textDecoration: 'underline', fontWeight: '600' }}>
                  "kimelectricllc.us@gmail.com"
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* Licensing Section */}
        <section
          style={{
            paddingTop: isMobile ? '3rem' : '4rem',
            paddingBottom: isMobile ? '3rem' : '4rem',
            backgroundColor: colors.primary.navy,
            color: colors.primary.white
          }}
        >
          <div
            style={{
              paddingLeft: isMobile ? '1.5rem' : '3rem',
              paddingRight: isMobile ? '1.5rem' : '3rem',
              maxWidth: '1200px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center'
            }}
          >
            <h2
              className="font-bold mb-6"
              style={{
                fontSize: isMobile ? '1.75rem' : '2.5rem'
              }}
            >
              Licensed & Certified
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                fontSize: isMobile ? '1rem' : '1.125rem'
              }}
            >
              <p>State of New Jersey Fire Protection Contractor Permit No. P01654</p>
              <p>NJ HIC License No. 13VH12649700</p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
