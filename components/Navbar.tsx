'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { colors } from '@/lib/colors';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const leftNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/payment', label: 'Online Payment' },
  ];

  const rightNavLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <div
      className="fixed left-0 right-0 z-50 w-full transition-all duration-300"
      style={{
        top: isScrolled ? `-${isMobile ? '2rem' : '2.5rem'}` : '0'
      }}
    >
      {/* Info Header Bar */}
      <div
        className="w-full text-center"
        style={{
          backgroundColor: colors.secondary.darkNavy,
          color: colors.primary.white,
          fontSize: isMobile ? '0.75rem' : '0.875rem',
          fontWeight: '500',
          letterSpacing: '0.5px',
          padding: isMobile ? '0.5rem 1rem' : '0.75rem 1rem',
          height: isMobile ? '2rem' : '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Fire Alarm Systems and Monitoring - Electric - Construction
      </div>

      {/* Main Navigation */}
      <nav
        className="w-full transition-all duration-300"
        style={{
          backgroundColor: '#F5F7FA',
          ...(isHomePage
            ? {
                height: isMobile
                  ? (isScrolled ? '45px' : '60px')
                  : (isScrolled ? '50px' : '70px'),
                paddingLeft: isMobile ? '1.5rem' : '3rem',
                paddingRight: isMobile ? '1.5rem' : '3rem',
                overflow: 'visible'
              }
            : {
                padding: isMobile
                  ? (isScrolled ? '0.2rem 1.5rem' : '0.25rem 1.5rem')
                  : (isScrolled ? '0.25rem 3rem' : '0.35rem 3rem')
              }
          ),
          boxShadow: '0 3px 12px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.08)',
          borderBottom: '1px solid #E5E7EB'
        }}
      >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full" style={isHomePage ? { height: '100%' } : {}}>
        {!isMobile ? (
          // Desktop Layout: Left links, Logo in center, Right links
          <>
            {/* Left Side - Navigation Links */}
            <div
              className="flex items-center"
              style={{
                gap: '2rem',
                flex: 1
              }}
            >
              {leftNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-semibold transition-colors duration-300 whitespace-nowrap"
                    style={{
                      color: isActive ? colors.primary.navy : '#6B7280',
                      fontSize: '1rem',
                      borderBottom: isActive ? `3px solid ${colors.primary.navy}` : 'none',
                      paddingBottom: '0.25rem',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = colors.primary.navy;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#6B7280';
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Center - Logo */}
            <Link
              href="/"
              className="flex items-center"
              style={{
                flex: '0 0 auto',
                alignSelf: 'flex-start',
                marginBottom: isHomePage ? '-35px' : '0'
              }}
            >
              <Image
                src="/logo1.webp"
                alt="Kim Electric LLC"
                width={600}
                height={600}
                style={{
                  objectFit: 'contain',
                  height: isHomePage
                    ? (isScrolled ? '75px' : '180px')
                    : (isScrolled ? '70px' : '85px'),
                  width: 'auto',
                  transition: 'height 0.3s ease',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))'
                }}
                priority
                quality={100}
              />
            </Link>

            {/* Right Side - Navigation Links */}
            <div
              className="flex items-center"
              style={{
                gap: '2rem',
                flex: 1,
                justifyContent: 'flex-end'
              }}
            >
              {rightNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-semibold transition-colors duration-300 whitespace-nowrap"
                    style={{
                      color: isActive ? colors.primary.navy : '#6B7280',
                      fontSize: '1rem',
                      borderBottom: isActive ? `3px solid ${colors.primary.navy}` : 'none',
                      paddingBottom: '0.25rem',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = colors.primary.navy;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#6B7280';
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          // Mobile Layout
          <>
            <Link href="/" className="flex items-center">
              <Image
                src="/logo1.webp"
                alt="Kim Electric LLC"
                width={500}
                height={500}
                style={{
                  objectFit: 'contain',
                  height: isHomePage
                    ? (isScrolled ? '50px' : '110px')
                    : (isScrolled ? '60px' : '75px'),
                  width: 'auto',
                  transition: 'height 0.3s ease',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))'
                }}
                priority
                quality={100}
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl ml-auto"
              style={{ color: colors.primary.navy }}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="mt-4 pt-4 border-t"
          style={{
            backgroundColor: '#F5F7FA',
            borderColor: '#E5E7EB'
          }}
        >
          <div className="flex flex-col gap-3">
            {[...leftNavLinks, ...rightNavLinks].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold transition-colors"
                  style={{
                    color: isActive ? colors.primary.navy : '#6B7280'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
    </div>
  );
}
