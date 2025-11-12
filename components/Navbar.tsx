'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        padding: isScrolled ? '1rem 0' : '2rem 0'
      }}
    >
      <div className="w-full" style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
        <div className="flex justify-between items-center">
          {/* Left Side - Navigation Links */}
          <div className="flex items-center" style={{ gap: '2.5rem' }}>
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

          {/* Right Side - Request Appointment Button */}
          <Link
            href="/contact"
            className="font-bold transition-all duration-300 whitespace-nowrap hover:scale-105"
            style={{
              backgroundColor: '#f8bbd0',
              color: '#000000',
              borderRadius: '8px',
              border: '2px solid #f8bbd0',
              boxShadow: '0 2px 8px rgba(248, 187, 208, 0.3)',
              padding: isScrolled ? '0.875rem 2rem' : '1.5rem 3.5rem',
              fontSize: isScrolled ? '0.875rem' : '1.125rem'
            }}
          >
            Request Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
