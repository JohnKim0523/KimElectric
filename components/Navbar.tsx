'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Meet Our Team' },
    { href: '/patients', label: 'Insurance Info' },
    { href: '/providers', label: 'Patient Portal' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full shadow-lg transition-all duration-500 ease-in-out`}
      style={{
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)',
        backdropFilter: isScrolled ? 'none' : 'blur(8px)',
        padding: isScrolled ? '1rem 0' : '1.5rem 0'
      }}
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 whitespace-nowrap hover:-translate-y-1 ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
                style={{
                  color: '#ffffff',
                  paddingBottom: '4px',
                  borderBottom: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottom = '2px solid #fbbf24';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottom = '2px solid transparent';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Request Appointment Button */}
          <Link
            href="/contact"
            className="font-bold transition-all duration-300 whitespace-nowrap hover:scale-105 hidden sm:inline-block"
            style={{
              backgroundColor: '#f8bbd0',
              color: '#000000',
              borderRadius: '8px',
              border: '2px solid #f8bbd0',
              boxShadow: '0 2px 8px rgba(248, 187, 208, 0.3)',
              padding: isScrolled ? '0.75rem 1.5rem' : '1rem 2rem',
              fontSize: isScrolled ? '0.875rem' : '1rem'
            }}
          >
            Request Appointment
          </Link>

          {/* Mobile Request Button (Icon) */}
          <Link
            href="/contact"
            className="sm:hidden font-bold transition-all duration-300"
            style={{
              backgroundColor: '#f8bbd0',
              color: '#000000',
              borderRadius: '8px',
              border: '2px solid #f8bbd0',
              padding: '0.5rem 1rem',
              fontSize: '0.875rem'
            }}
          >
            Request
          </Link>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white font-medium text-lg py-2 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
