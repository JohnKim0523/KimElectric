'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { colors } from '@/lib/colors';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownClosing, setIsDropdownClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMobileMenuOpen &&
        !isDropdownClosing &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsDropdownClosing(true);
        setTimeout(() => {
          setIsMobileMenuOpen(false);
          setIsDropdownClosing(false);
        }, 250);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen, isDropdownClosing]);

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

  // Determine logo class based on mobile/desktop and scroll state
  const getLogoClass = () => {
    if (isMobile) {
      if (isHomePage) {
        return isScrolled ? 'navbar-logo-mobile-scrolled' : 'navbar-logo-mobile';
      }
      return isScrolled ? 'navbar-logo-mobile-page-scrolled' : 'navbar-logo-mobile-page';
    } else {
      if (isHomePage) {
        return isScrolled ? 'navbar-logo-desktop-scrolled' : 'navbar-logo-desktop';
      }
      return isScrolled ? 'navbar-logo-desktop-page-scrolled' : 'navbar-logo-desktop-page';
    }
  };

  return (
    <div
      className="navbar-container"
      style={{
        top: isScrolled ? (isMobile ? '-2rem' : '-2.5rem') : '0'
      }}
    >
      {/* Info Header Bar */}
      <div className="navbar-info-bar">
        Fire Alarm Systems and Monitoring - Electric - Construction
      </div>

      {/* Main Navigation */}
      <nav
        ref={navRef}
        className="navbar-main"
        style={{
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
          )
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full" style={isHomePage ? { height: '100%' } : {}}>
          {!isMobile ? (
            // Desktop Layout: Left links, Logo in center, Right links
            <>
              {/* Left Side - Navigation Links */}
              <div className="navbar-links" style={{ flex: 1 }}>
                {leftNavLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`navbar-link ${isActive ? 'navbar-link-active' : ''}`}
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
                  className={`navbar-logo ${getLogoClass()}`}
                  priority
                />
              </Link>

              {/* Right Side - Navigation Links */}
              <div className="navbar-links" style={{ flex: 1, justifyContent: 'flex-end' }}>
                {rightNavLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`navbar-link ${isActive ? 'navbar-link-active' : ''}`}
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
                  className={`navbar-logo ${getLogoClass()}`}
                  priority
                />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => {
                  if (isMobileMenuOpen) {
                    // Start closing animation
                    setIsDropdownClosing(true);
                    setTimeout(() => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownClosing(false);
                    }, 250); // Match the animation duration
                  } else {
                    setIsMobileMenuOpen(true);
                  }
                }}
                className="navbar-mobile-menu"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? '✕' : '☰'}
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div
            className={`navbar-mobile-dropdown ${isMobileMenuOpen ? 'dropdown-open' : ''} ${isDropdownClosing ? 'dropdown-closing' : ''}`}
          >
            {[...leftNavLinks, ...rightNavLinks].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navbar-link ${isActive ? 'navbar-link-active' : ''}`}
                  style={{ color: isActive ? colors.primary.navy : '#6B7280' }}
                  onClick={() => {
                    setIsDropdownClosing(true);
                    setTimeout(() => {
                      setIsMobileMenuOpen(false);
                      setIsDropdownClosing(false);
                    }, 250);
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
}
