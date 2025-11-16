'use client';

import Link from 'next/link';
import Image from 'next/image';
import { colors } from '@/lib/colors';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: colors.primary.navy, color: colors.primary.white }}>
      <div className="container-responsive" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="footer-grid">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.png"
              alt="Kim Electric LLC"
              width={140}
              height={47}
              style={{
                objectFit: 'contain',
                marginBottom: '1rem'
              }}
            />
            <p style={{
              fontSize: '0.875rem',
              color: '#D1D5DB',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Fire Protection - Commercial & Residential
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <p style={{
                fontSize: '0.875rem',
                color: '#9CA3AF',
                marginBottom: '0.5rem'
              }}>
                Contact us for professional fire protection services
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'Online Payment', href: '/payment' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.875rem',
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.white}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Our Services
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ fontSize: '0.875rem', color: '#D1D5DB' }}>
                Fire Alarm Systems
              </li>
              <li style={{ fontSize: '0.875rem', color: '#D1D5DB' }}>
                Fire Alarm Monitoring
              </li>
              <li style={{ fontSize: '0.875rem', color: '#D1D5DB' }}>
                Commercial Services
              </li>
              <li style={{ fontSize: '0.875rem', color: '#D1D5DB' }}>
                Residential Services
              </li>
            </ul>
          </div>
        </div>

        {/* Licensing & Credentials */}
        <div style={{
          borderTop: '1px solid #4B5563',
          paddingTop: '2rem',
          marginBottom: '1.5rem'
        }}>
          <h4 style={{
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Licensed & Certified
          </h4>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            fontSize: '0.875rem',
            color: '#9CA3AF'
          }}>
            <p>State of New Jersey Fire Protection Contractor Permit No. P01654</p>
            <p>NJ HIC License No. 13VH12649700</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #4B5563',
          paddingTop: '1.5rem',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#9CA3AF'
          }}>
            &copy; {new Date().getFullYear()} Kim Electric LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
