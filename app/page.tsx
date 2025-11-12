'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = ['/banner.jpg', '/banner2.jpg', '/banner3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Banner Section */}
      <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
        {/* Background Images with transition */}
        {banners.map((banner, index) => (
          <div
            key={banner}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000"
            style={{ opacity: currentBanner === index ? 1 : 0 }}
          >
            <Image
              src={banner}
              alt="Professional Wound Care Treatment"
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
              quality={100}
              unoptimized={true}
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" style={{ zIndex: 1 }}></div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center" style={{ zIndex: 2 }}>
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
            <div className="flex items-start" style={{ paddingLeft: '2rem' }}>
              {/* White vertical line */}
              <div style={{
                width: '6px',
                height: '250px',
                backgroundColor: '#ffffff',
                marginRight: '2.5rem',
                flexShrink: 0
              }}></div>

              {/* Text content */}
              <div>
                <h1 className="font-black mb-4 md:mb-6 leading-tight uppercase" style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  letterSpacing: '0.02em',
                  color: '#ffffff'
                }}>
                  Advanced Wound Care &<br />
                  Limb Preservation
                </h1>
                <p className="font-light leading-relaxed" style={{
                  fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                  color: '#ffffff'
                }}>
                  Providing advanced wound healing and limb preservation to help patients stay safe, healthy, and home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="max-w-6xl mx-auto" style={{ paddingLeft: '6rem', paddingRight: '6rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 inline-block" style={{
              borderBottom: '4px solid #000000',
              paddingBottom: '1rem'
            }}>
              About Stratum Wound Care
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-xl text-gray-700 leading-relaxed" style={{ marginBottom: '2rem' }}>
                At Stratum Wound Care, we specialize in providing comprehensive wound management services
                to patients throughout Pennsylvania. Our team of experienced healthcare professionals is
                dedicated to healing complex wounds and preventing amputations.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed" style={{ marginBottom: '2rem' }}>
                With years of experience in home health and community-based wound care, we understand
                the unique challenges faced by patients with chronic wounds. Our patient-centered approach
                combines cutting-edge treatments with compassionate care.
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl shadow-soft">
              <h3 className="text-3xl font-bold text-gray-900" style={{ marginBottom: '1.5rem' }}>Our Commitment</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-lg">CMS and PA Department of Health compliant</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-lg">HIPAA certified and secure practices</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-lg">Medicare and Medicaid certified</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-lg">Evidence-based treatment protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
          <div style={{
            backgroundColor: '#000000',
            borderRadius: '24px',
            padding: '4rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
              Our Specialized Services
            </h2>
            <p className="text-xl mb-12 max-w-3xl" style={{ color: '#e5e5e5' }}>
              Comprehensive wound care solutions tailored to your specific needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Diabetic Wounds", description: "Specialized care for diabetic foot ulcers and complications", emoji: "🩺" },
                { title: "Pressure Ulcers", description: "Treatment and prevention of bedsores and pressure injuries", emoji: "🛏️" },
                { title: "Surgical Wounds", description: "Post-operative wound management and healing optimization", emoji: "⚕️" },
                { title: "Venous Ulcers", description: "Advanced treatment for venous insufficiency wounds", emoji: "💉" }
              ].map((service, index) => (
                <div key={index} style={{
                  backgroundColor: '#1a1a1a',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2d2d2d';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <div className="text-5xl mb-4">{service.emoji}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#ffffff' }}>{service.title}</h3>
                  <p style={{ color: '#d1d1d1' }}>{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center" style={{ marginTop: '3rem' }}>
              <Link
                href="/services"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f0f0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent-red-600 mb-8">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 mb-12">HIPAA-compliant success stories</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The care I received was exceptional. The staff was knowledgeable and compassionate throughout my treatment.",
                author: "Patient - Diabetic Wound Care"
              },
              {
                quote: "Thanks to their advanced treatments, I was able to avoid amputation and return to my normal activities.",
                author: "Patient - Limb Preservation"
              },
              {
                quote: "The team made me feel comfortable and explained everything clearly. My wound healed faster than expected.",
                author: "Patient - Pressure Ulcer Treatment"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-soft">
                <div className="text-accent-red-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <p className="text-gray-900 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Contact us today to schedule an appointment or learn more about how we can help you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-pink-100 text-primary-900 px-8 py-4 rounded hover:bg-white transition-colors font-bold text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
