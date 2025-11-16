'use client';

import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import { colors } from '@/lib/colors';

export default function AboutPage() {
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
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const serviceAreas = [
    ['Palisades Park', 'Fort Lee'],
    ['Hackensack', 'Englewood Cliffs'],
    ['Ridgefield', 'Closter'],
    ['Cliffside Park', 'Ridgewood'],
    ['Englewood', 'Hoboken'],
    ['Woodbridge', 'Parsippany'],
    ['Stirling', 'Morris Plains'],
    ['Matawan', 'Little Ferry'],
    ['Belleville', 'Millburn']
  ];

  const teamMembers = [
    {
      name: 'Brandon',
      title: 'Owner',
      phone: '(201)-919-5006',
      description: 'Experienced in fire alarm systems and monitoring, electric, and construction.'
    },
    {
      name: 'Ki',
      title: 'Construction Manager',
      phone: '(201)-403-8089',
      description: 'Ki has over 30 years of experience in the construction and HVAC industry. He was also the owner of Han Rhim LLC (previously known as Han Nam Hi-Tech).'
    },
    {
      name: 'Chong',
      title: 'Electric and Fire Alarm Manager',
      phone: '',
      description: 'Previous owner of KOAM Fire Alarms located in Palisades Park.'
    }
  ];

  return (
    <PageTransition>
      <div>
        {/* Header Section with Gradient */}
        <section
          style={{
            paddingTop: isMobile ? '180px' : '210px',
            paddingBottom: isMobile ? '2.5rem' : '3rem',
            background: `linear-gradient(to bottom, ${colors.neutral.offWhite} 0%, ${colors.primary.white} 100%)`,
            textAlign: 'center',
            position: 'relative'
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
              className="font-bold"
              style={{
                fontSize: isMobile ? '2rem' : '3rem',
                color: colors.primary.navy,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}
            >
              GET TO KNOW KIM ELECTRIC LLC
            </h1>
            <div
              style={{
                width: isMobile ? '60px' : '80px',
                height: '4px',
                backgroundColor: colors.primary.navy,
                margin: '0 auto'
              }}
            />
          </div>
        </section>

        {/* About Us & Service Areas */}
        <section
          style={{
            paddingTop: isMobile ? '3rem' : '5rem',
            paddingBottom: isMobile ? '3rem' : '5rem',
            backgroundColor: colors.primary.white
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
                gap: isMobile ? '2rem' : '3rem',
                alignItems: 'start'
              }}
            >
              {/* About Us */}
              <div
                style={{
                  backgroundColor: colors.neutral.offWhite,
                  padding: isMobile ? '2rem' : '2.5rem',
                  borderRadius: '4px',
                  border: `2px solid ${colors.secondary.borderGray}`,
                  borderLeft: `6px solid ${colors.primary.navy}`,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.06)'
                }}
              >
                <h2
                  className="font-bold"
                  style={{
                    fontSize: isMobile ? '2rem' : '2.25rem',
                    color: colors.primary.navy,
                    marginBottom: isMobile ? '1.5rem' : '2rem',
                    lineHeight: '1.2'
                  }}
                >
                  ABOUT US
                </h2>
                <p
                  style={{
                    fontSize: isMobile ? '1rem' : '1.0625rem',
                    color: colors.neutral.darkGray,
                    lineHeight: '1.9',
                    marginBottom: '2rem',
                    fontWeight: '400'
                  }}
                >
                  Kim Electric is a fire alarm systems and monitoring company. Located at Palisades Park NJ, Kim Electric LLC provides:
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <p
                    className="font-bold"
                    style={{
                      fontSize: isMobile ? '1rem' : '1.0625rem',
                      color: colors.primary.navy,
                      marginBottom: '1.25rem',
                      lineHeight: '1.6'
                    }}
                  >
                    Fire Alarm systems and monitoring for over 60+ businesses throughout New Jersey, which includes:
                  </p>
                  <ul
                    style={{
                      listStyleType: 'none',
                      paddingLeft: '0',
                      color: colors.neutral.darkGray,
                      fontSize: isMobile ? '0.9375rem' : '1rem',
                      lineHeight: '2.2'
                    }}
                  >
                    <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: colors.primary.navy, fontWeight: 'bold' }}>•</span>
                      24/7 fire alarm systems monitoring
                    </li>
                    <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: colors.primary.navy, fontWeight: 'bold' }}>•</span>
                      Maintenance
                    </li>
                    <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: colors.primary.navy, fontWeight: 'bold' }}>•</span>
                      New fire alarm system installations
                    </li>
                    <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: colors.primary.navy, fontWeight: 'bold' }}>•</span>
                      Yearly inspections and reports
                    </li>
                  </ul>
                </div>

                <p
                  style={{
                    fontSize: isMobile ? '1rem' : '1.0625rem',
                    color: colors.neutral.darkGray,
                    lineHeight: '1.9',
                    fontWeight: '400'
                  }}
                >
                  Construction and electrical wiring of small businesses.
                </p>
              </div>

              {/* Service Areas */}
              <div
                style={{
                  backgroundColor: colors.neutral.offWhite,
                  padding: isMobile ? '2rem' : '2.5rem',
                  borderRadius: '4px',
                  border: `2px solid ${colors.secondary.borderGray}`,
                  borderLeft: `6px solid ${colors.primary.navy}`,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.06)'
                }}
              >
                <h2
                  className="font-bold"
                  style={{
                    fontSize: isMobile ? '2rem' : '2.25rem',
                    color: colors.primary.navy,
                    marginBottom: isMobile ? '1.5rem' : '2rem',
                    lineHeight: '1.2'
                  }}
                >
                  PROUDLY SERVICING OUR CUSTOMERS IN:
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '1rem'
                  }}
                >
                  {serviceAreas.map((pair, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: isMobile ? '0.9375rem' : '1rem',
                        color: colors.neutral.darkGray,
                        lineHeight: '1.6',
                        paddingBottom: '0.75rem',
                        borderBottom: index < serviceAreas.length - 1 ? `1px solid ${colors.secondary.borderGray}` : 'none'
                      }}
                    >
                      <span style={{
                        color: colors.primary.navy,
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginRight: '0.75rem'
                      }}>•</span>
                      <span style={{ fontWeight: '500' }}>{pair[0]}</span>
                      <span style={{
                        color: colors.primary.navy,
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        margin: '0 1rem'
                      }}>•</span>
                      <span style={{ fontWeight: '500' }}>{pair[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Image */}
        <section
          style={{
            paddingTop: isMobile ? '2rem' : '3rem',
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
            <img
              src="/aboutus.webp"
              alt="About Kim Electric LLC"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '4px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08)',
                border: `3px solid ${colors.secondary.borderGray}`,
                display: 'block'
              }}
            />
          </div>
        </section>

        {/* Our Team */}
        <section
          style={{
            paddingTop: isMobile ? '4rem' : '6rem',
            paddingBottom: isMobile ? '4rem' : '6rem',
            backgroundColor: colors.primary.white
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
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
              <h2
                className="font-bold"
                style={{
                  fontSize: isMobile ? '2.25rem' : '3rem',
                  color: colors.primary.navy,
                  marginBottom: '1rem',
                  lineHeight: '1.2'
                }}
              >
                OUR TEAM
              </h2>
              <div
                style={{
                  width: isMobile ? '60px' : '80px',
                  height: '4px',
                  backgroundColor: colors.primary.navy,
                  margin: '0 auto'
                }}
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                gap: isMobile ? '2rem' : '2.5rem'
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: colors.neutral.offWhite,
                    padding: isMobile ? '2.5rem' : '3rem',
                    borderRadius: '4px',
                    border: `2px solid ${colors.secondary.borderGray}`,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.06)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    borderTop: `5px solid ${colors.primary.navy}`,
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.borderColor = colors.primary.navy;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.06)';
                      e.currentTarget.style.borderColor = colors.secondary.borderGray;
                    }
                  }}
                >
                  <div
                    style={{
                      width: isMobile ? '60px' : '70px',
                      height: isMobile ? '60px' : '70px',
                      backgroundColor: colors.primary.navy,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      fontSize: isMobile ? '1.75rem' : '2rem',
                      color: colors.primary.white,
                      fontWeight: 'bold'
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: isMobile ? '1.5rem' : '1.875rem',
                      color: colors.primary.navy,
                      marginBottom: '0.5rem',
                      lineHeight: '1.2'
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: isMobile ? '1rem' : '1.0625rem',
                      color: colors.secondary.mediumGray,
                      marginBottom: member.phone ? '1.25rem' : '1.5rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: isMobile ? '0.875rem' : '0.9375rem'
                    }}
                  >
                    {member.title}
                  </p>
                  {member.phone && (
                    <p
                      style={{
                        fontSize: isMobile ? '1.125rem' : '1.25rem',
                        color: colors.primary.navy,
                        marginBottom: '1.5rem',
                        fontWeight: 'bold',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {member.phone}
                    </p>
                  )}
                  <div
                    style={{
                      borderTop: `2px solid ${colors.secondary.borderGray}`,
                      paddingTop: '1.25rem',
                      marginTop: '1.25rem'
                    }}
                  >
                    <p
                      style={{
                        fontSize: isMobile ? '0.9375rem' : '1rem',
                        color: colors.neutral.darkGray,
                        lineHeight: '1.7',
                        fontWeight: '400'
                      }}
                    >
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Info Section */}
        <section
          style={{
            paddingTop: isMobile ? '4rem' : '5rem',
            paddingBottom: isMobile ? '4rem' : '5rem',
            background: colors.gradients.navy,
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
            <h3
              className="font-bold"
              style={{
                fontSize: isMobile ? '2rem' : '2.5rem',
                marginBottom: '0.5rem',
                letterSpacing: '0.02em'
              }}
            >
              Kim Electric LLC
            </h3>
            <p
              style={{
                fontSize: isMobile ? '1.375rem' : '1.625rem',
                marginBottom: '2.5rem',
                fontWeight: '600',
                letterSpacing: '1px'
              }}
            >
              201-919-5006
            </p>
            <div
              style={{
                borderTop: `2px solid rgba(255, 255, 255, 0.3)`,
                paddingTop: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                fontSize: isMobile ? '0.9375rem' : '1rem',
                opacity: 0.95
              }}
            >
              <p style={{ fontWeight: '500' }}>State of New Jersey Fire Protection Contractor Permit No. P01654</p>
              <p style={{ fontWeight: '500' }}>NJ HIC License No. 13VH12649700</p>
              <p style={{ marginTop: '1.5rem', opacity: 0.8, fontSize: isMobile ? '0.875rem' : '0.9375rem' }}>
                Copyright © 2024 kimelectricllc - All Rights Reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
