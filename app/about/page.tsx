'use client';

import PageTransition from '@/components/PageTransition';
import { colors } from '@/lib/colors';

export default function AboutPage() {
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
          className="header-spacing"
          style={{
            background: `linear-gradient(to bottom, ${colors.neutral.offWhite} 0%, ${colors.primary.white} 100%)`,
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <div className="container-responsive">
            <h1
              className="font-bold heading-lg"
              style={{
                color: colors.primary.navy,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              GET TO KNOW KIM ELECTRIC LLC
            </h1>
            <div
              className="divider-line"
              style={{
                width: '60px',
                height: '4px',
                backgroundColor: colors.primary.navy,
                margin: '0 auto'
              }}
            />
            <style jsx>{`
              @media (min-width: 768px) {
                .divider-line {
                  width: 80px;
                }
              }
            `}</style>
          </div>
        </section>

        {/* About Us & Service Areas */}
        <section
          className="section-padding"
          style={{
            backgroundColor: colors.primary.white
          }}
        >
          <div className="container-responsive">
            <div className="grid-responsive-2" style={{ alignItems: 'start' }}>
              {/* About Us */}
              <div
                className="card-padding"
                style={{
                  backgroundColor: colors.neutral.offWhite,
                  borderRadius: '4px',
                  border: `2px solid ${colors.secondary.borderGray}`,
                  borderLeft: `6px solid ${colors.primary.navy}`,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.06)'
                }}
              >
                <h2
                  className="font-bold heading-sm mb-responsive-lg"
                  style={{
                    color: colors.primary.navy
                  }}
                >
                  ABOUT US
                </h2>
                <p
                  className="text-base mb-responsive-lg"
                  style={{
                    color: colors.neutral.darkGray,
                    lineHeight: '1.9',
                    fontWeight: '400'
                  }}
                >
                  Kim Electric is a fire alarm systems and monitoring company. Located at Palisades Park NJ, Kim Electric LLC provides:
                </p>

                <div className="mb-responsive-lg">
                  <p
                    className="font-bold text-base"
                    style={{
                      color: colors.primary.navy,
                      marginBottom: '1.25rem',
                      lineHeight: '1.6'
                    }}
                  >
                    Fire Alarm systems and monitoring for over 60+ businesses throughout New Jersey, which includes:
                  </p>
                  <ul
                    className="text-base"
                    style={{
                      listStyleType: 'none',
                      paddingLeft: '0',
                      color: colors.neutral.darkGray,
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
                  className="text-base"
                  style={{
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
                className="card-padding"
                style={{
                  backgroundColor: colors.neutral.offWhite,
                  borderRadius: '4px',
                  border: `2px solid ${colors.secondary.borderGray}`,
                  borderLeft: `6px solid ${colors.primary.navy}`,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.06)'
                }}
              >
                <h2
                  className="font-bold heading-sm mb-responsive-lg"
                  style={{
                    color: colors.primary.navy
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
                      className="text-base"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
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
            paddingTop: '2rem',
            paddingBottom: '3rem',
            backgroundColor: colors.neutral.offWhite
          }}
        >
          <div className="container-responsive">
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
          <style jsx>{`
            @media (min-width: 768px) {
              section {
                padding-top: 3rem !important;
                padding-bottom: 5rem !important;
              }
            }
          `}</style>
        </section>

        {/* Our Team */}
        <section
          className="section-padding-lg"
          style={{
            backgroundColor: colors.primary.white
          }}
        >
          <div className="container-responsive">
            <div className="mb-responsive-lg" style={{ textAlign: 'center' }}>
              <h2
                className="font-bold heading-lg"
                style={{
                  color: colors.primary.navy,
                  marginBottom: '1rem'
                }}
              >
                OUR TEAM
              </h2>
              <div
                className="divider-line"
                style={{
                  width: '60px',
                  height: '4px',
                  backgroundColor: colors.primary.navy,
                  margin: '0 auto'
                }}
              />
              <style jsx>{`
                @media (min-width: 768px) {
                  .divider-line {
                    width: 80px;
                  }
                }
              `}</style>
            </div>

            <div className="grid-responsive-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="card-padding team-card"
                  style={{
                    backgroundColor: colors.neutral.offWhite,
                    borderRadius: '4px',
                    border: `2px solid ${colors.secondary.borderGray}`,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.06)',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    borderTop: `5px solid ${colors.primary.navy}`,
                    position: 'relative'
                  }}
                >
                  <div
                    className="avatar"
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: colors.primary.navy,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      fontSize: '1.75rem',
                      color: colors.primary.white,
                      fontWeight: 'bold'
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: '1.5rem',
                      color: colors.primary.navy,
                      marginBottom: '0.5rem',
                      lineHeight: '1.2'
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: colors.secondary.mediumGray,
                      marginBottom: member.phone ? '1.25rem' : '1.5rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {member.title}
                  </p>
                  {member.phone && (
                    <p
                      style={{
                        fontSize: '1.125rem',
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
                      className="text-base"
                      style={{
                        color: colors.neutral.darkGray,
                        lineHeight: '1.7',
                        fontWeight: '400'
                      }}
                    >
                      {member.description}
                    </p>
                  </div>
                  <style jsx>{`
                    @media (min-width: 768px) {
                      .avatar {
                        width: 70px !important;
                        height: 70px !important;
                        font-size: 2rem !important;
                      }
                      h3 {
                        font-size: 1.875rem !important;
                      }
                      .team-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15), 0 12px 32px rgba(0, 0, 0, 0.1);
                        border-color: ${colors.primary.navy};
                      }
                      p:nth-of-type(2) {
                        font-size: 0.9375rem !important;
                      }
                      p:nth-of-type(3) {
                        font-size: 1.25rem !important;
                      }
                    }
                  `}</style>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Info Section */}
        <section
          className="section-padding-lg"
          style={{
            background: colors.gradients.navy,
            color: colors.primary.white
          }}
        >
          <div
            className="container-responsive"
            style={{
              textAlign: 'center'
            }}
          >
            <h3
              className="font-bold heading-md"
              style={{
                marginBottom: '0.5rem',
                letterSpacing: '0.02em'
              }}
            >
              Kim Electric LLC
            </h3>
            <p
              className="phone-number"
              style={{
                fontSize: '1.375rem',
                marginBottom: '2.5rem',
                fontWeight: '600',
                letterSpacing: '1px'
              }}
            >
              201-919-5006
            </p>
            <div
              className="footer-info"
              style={{
                borderTop: '2px solid rgba(255, 255, 255, 0.3)',
                paddingTop: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                fontSize: '0.9375rem',
                opacity: 0.95
              }}
            >
              <p style={{ fontWeight: '500' }}>State of New Jersey Fire Protection Contractor Permit No. P01654</p>
              <p style={{ fontWeight: '500' }}>NJ HIC License No. 13VH12649700</p>
              <p className="copyright" style={{ marginTop: '1.5rem', opacity: 0.8, fontSize: '0.875rem' }}>
                Copyright © 2024 kimelectricllc - All Rights Reserved.
              </p>
            </div>
            <style jsx>{`
              @media (min-width: 768px) {
                .phone-number {
                  font-size: 1.625rem !important;
                }
                .footer-info {
                  font-size: 1rem !important;
                }
                .copyright {
                  font-size: 0.9375rem !important;
                }
              }
            `}</style>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
