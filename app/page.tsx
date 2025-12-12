'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { colors } from '@/lib/colors';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  const projects = [
    { name: '46 Plaza (Palisades Park)', description: 'Fire alarm system monitoring', image: '/project1.webp' },
    { name: 'Myung Dong Noodle House (Fort Lee)', description: 'Fire alarm installation and monitoring', image: '/project2.webp' },
    { name: 'Hey Yogurt (Hoboken & Palisades Park)', description: 'Fire alarm system monitoring', image: '/project3.webp' },
    { name: '20-26 S. Broad St. (Ridgewood)', description: 'Fire alarm monitoring', image: '/project4.webp' },
    { name: 'Galleria Plaza (Palisades Park)', description: 'Fire alarm system monitoring', image: '/project5.webp' },
    { name: 'Galleria 10 (Parsippany)', description: 'Fire alarm system installation and monitoring', image: '/project6.webp' },
    { name: '6-14 S. Broad St. (Ridgewood)', description: 'Fire alarm monitoring', image: '/project7.webp' },
    { name: 'Dream Pharmacy (Palisades Park)', description: 'HVAC and lighting installation', image: '/project8.webp' },
    { name: 'BBQ Chicken (Closter)', description: 'New construction, electric and HVAC', image: '/project9.webp' },
    { name: 'Animal Care of Closter (Closter)', description: 'New construction, electric, HVAC', image: '/project10.webp' },
    { name: 'MC Creations (Hackensack)', description: 'Two 15-ton commercial air condenser unit installation', image: '/project11.webp' },
    { name: '10 Court Tennis Facility (Hackensack)', description: 'Lighting, electrical and fire alarm system installation', image: '/project12.webp' },
    { name: 'SSUM Café & Karaoke (Palisades Park)', description: 'Fire alarm system installation and monitoring', image: '/project13.webp' },
    { name: 'Superfresh Supermarket (Perth Amboy)', description: 'Fire alarm system monitoring', image: '/project14.webp' }
  ];

  // Auto-advance carousel with timer reset
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, [currentSlide, projects.length]); // Reset timer when currentSlide changes

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <PageTransition>
      <div>
        {/* Hero Banner Section */}
        <section
          className="relative w-full"
          style={{
            minHeight: isMobile ? '85vh' : '82vh',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: isMobile ? '9rem' : '0',
            marginTop: isMobile ? '-1rem' : '0',
            backgroundColor: '#f5f5f5'
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/banner1.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />


          {/* Content Container */}
          <div
            className="relative z-10"
            style={{
              minHeight: isMobile ? 'calc(85vh - 9rem)' : '82vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: isMobile ? '4rem 1.5rem 2rem' : '9rem 3rem 3rem'
            }}
          >
            {/* Hero Content */}
            <div className="text-center">
              <h1
                className="heading-hero font-bold leading-tight mb-responsive"
                style={{
                  color: colors.primary.white,
                  textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                  letterSpacing: '-0.02em'
                }}
              >
                Fire Alarm System Company
              </h1>
              {/* Decorative divider line */}
              <div
                className="mb-responsive"
                style={{
                  width: isMobile ? '80px' : '120px',
                  height: '3px',
                  backgroundColor: colors.primary.white,
                  margin: '0 auto',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              />
              <p
                className="font-semibold"
                style={{
                  fontSize: isMobile ? '1.5rem' : '2.25rem',
                  color: '#D1D5DB',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
                  marginBottom: isMobile ? '2rem' : '2.5rem'
                }}
              >
                Commercial & Residential
              </p>
            </div>
          </div>
        </section>

        {/* Featured Project Section - Carousel */}
        <section
          className="section-padding"
          style={{
            backgroundColor: colors.neutral.offWhite,
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              maxWidth: '1400px',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingLeft: isMobile ? '1rem' : '2rem',
              paddingRight: isMobile ? '1rem' : '2rem'
            }}
          >
            <h2
              className="heading-lg font-bold text-center mb-responsive-lg"
              style={{
                color: colors.primary.navy
              }}
            >
              Notable Projects
            </h2>

            {/* Carousel Container */}
            <div
              className="carousel-container"
              onMouseEnter={() => setIsHoveringCarousel(true)}
              onMouseLeave={() => setIsHoveringCarousel(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slides Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  perspective: '1000px'
                }}
              >
                {projects.map((project, index) => {
                  // Calculate offset with circular wrapping for smooth looping
                  let offset = index - currentSlide;

                  // Normalize offset to always take the shortest path around the circle
                  if (offset > projects.length / 2) {
                    offset = offset - projects.length;
                  } else if (offset < -projects.length / 2) {
                    offset = offset + projects.length;
                  }

                  const isActive = offset === 0;

                  // Get card width as number
                  const getCardWidthNum = (cardIndex: number) => {
                    if (cardIndex === 2) return 48; // Hey Yogurt
                    if (cardIndex === 4) return 60; // Galleria Plaza
                    if (cardIndex === 8) return 34; // BBQ Chicken
                    return 52; // Regular cards
                  };

                  // Get card width as string
                  const getCardWidth = () => {
                    if (isMobile) return '90%'; // Full width on mobile
                    return `${getCardWidthNum(index)}%`;
                  };

                  // Calculate horizontal position in viewport % to prevent overlap
                  const getLeftPosition = () => {
                    const gap = 1; // 1% gap between cards
                    const activeWidth = getCardWidthNum(currentSlide);
                    const thisWidth = getCardWidthNum(index);

                    if (offset === 0) return '50%'; // Active - centered

                    if (offset === -1) {
                      // Previous card - position to the left
                      const prevCenter = 50 - (activeWidth / 2) - gap - (thisWidth / 2);
                      return `${prevCenter}%`;
                    }

                    if (offset === 1) {
                      // Next card - position to the right
                      const nextCenter = 50 + (activeWidth / 2) + gap + (thisWidth / 2);
                      return `${nextCenter}%`;
                    }

                    if (offset < -1) return '-30%'; // Far left - off screen
                    return '130%'; // Far right - off screen
                  };

                  return (
                    <div
                      key={index}
                      className="carousel-slide"
                      style={{
                        position: 'absolute',
                        width: getCardWidth(),
                        height: isMobile ? 'auto' : ((index === 2 || index === 4 || index === 8) ? 'auto' : '600px'),
                        maxHeight: isMobile ? '480px' : ((index === 2 || index === 4 || index === 8) ? '600px' : undefined),
                        left: getLeftPosition(),
                        top: '50%',
                        transform: `translate(-50%, -50%) scale(${isActive ? 1 : Math.abs(offset) === 1 ? 0.88 : 0.75})`,
                        transition: 'left 0.8s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.8s ease-in-out, transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)',
                        opacity: isMobile ? (isActive ? 1 : 0) : (isActive ? 1 : Math.abs(offset) === 1 ? 0.5 : 0),
                        pointerEvents: isActive ? 'auto' : 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: (index === 2 || index === 4 || index === 8) ? 'center' : undefined
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: (index === 2 || index === 4 || index === 8) ? 'auto' : '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          backgroundColor: colors.primary.white,
                          boxShadow: isActive
                            ? '0 20px 60px rgba(0, 0, 0, 0.3)'
                            : '0 10px 30px rgba(0, 0, 0, 0.15)',
                          overflow: 'hidden',
                          transition: 'box-shadow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}
                      >
                        {/* Image Container */}
                        <div
                          style={{
                            width: '100%',
                            height: (index === 2 || index === 4 || index === 8) ? 'auto' : '75%',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'block'
                          }}
                        >
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.name}
                              style={{
                                width: '100%',
                                height: (index === 2 || index === 4 || index === 8) ? 'auto' : '100%',
                                objectFit: (index === 2 || index === 4 || index === 8) ? undefined : 'cover',
                                display: 'block',
                                opacity: isActive ? 1 : 0.95,
                                transition: 'opacity 0.8s ease-in-out'
                              }}
                            />
                          ) : (
                            <ImagePlaceholder
                              height="400px"
                              text={project.name}
                              subtext={project.description}
                            />
                          )}
                        </div>

                        {/* Text Container */}
                        <div
                          style={{
                            width: '100%',
                            height: (index === 2 || index === 4 || index === 8) ? 'auto' : '25%',
                            padding: isMobile ? '1rem' : '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                          }}
                        >
                          <h3
                            className="font-bold mb-1"
                            style={{
                              fontSize: isMobile ? '1rem' : isActive ? '1.5rem' : '1.25rem',
                              color: colors.primary.navy,
                              transition: 'font-size 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease-in-out',
                              opacity: isActive ? 1 : 0.9
                            }}
                          >
                            {project.name}
                          </h3>
                          <p
                            style={{
                              fontSize: isMobile ? '0.75rem' : isActive ? '1rem' : '0.875rem',
                              color: colors.secondary.mediumGray,
                              transition: 'font-size 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease-in-out',
                              lineHeight: '1.4',
                              opacity: isActive ? 1 : 0.85
                            }}
                          >
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Previous Button - Only visible on hover */}
              <button
                onClick={prevSlide}
                className="carousel-button carousel-button-prev"
                style={{
                  opacity: isHoveringCarousel ? 0.8 : 0,
                  pointerEvents: isHoveringCarousel ? 'auto' : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <svg
                  width={isMobile ? '30' : '40'}
                  height={isMobile ? '30' : '40'}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.primary.navy}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.5))'
                  }}
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              {/* Next Button - Only visible on hover */}
              <button
                onClick={nextSlide}
                className="carousel-button carousel-button-next"
                style={{
                  opacity: isHoveringCarousel ? 0.8 : 0,
                  pointerEvents: isHoveringCarousel ? 'auto' : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <svg
                  width={isMobile ? '30' : '40'}
                  height={isMobile ? '30' : '40'}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.primary.navy}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.5))'
                  }}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Project Counter */}
            <div
              className="text-md"
              style={{
                textAlign: 'center',
                marginTop: '2rem',
                color: colors.secondary.mediumGray,
                fontWeight: '500'
              }}
            >
              {currentSlide + 1} / {projects.length}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="section-padding"
          style={{
            backgroundColor: colors.primary.white
          }}
        >
          <div className="container-responsive">
            <div className="grid-responsive-3">
              {/* Licensed & Insured */}
              <div
                className="card-padding"
                style={{
                  backgroundColor: colors.neutral.offWhite,
                  borderRadius: '12px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: colors.primary.navy,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '2rem',
                    color: colors.primary.white
                  }}
                >
                  ✓
                </div>
                <h3
                  className="heading-sm font-bold mb-3"
                  style={{
                    color: colors.primary.navy
                  }}
                >
                  Licensed & Insured
                </h3>
                <p
                  className="text-base"
                  style={{
                    color: colors.secondary.mediumGray,
                    lineHeight: '1.6'
                  }}
                >
                  Fully licensed fire protection contractor with comprehensive insurance coverage
                </p>
              </div>

              {/* Experience */}
              <div
                className="card-padding"
                style={{
                  backgroundColor: colors.neutral.offWhite,
                  borderRadius: '12px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: colors.primary.navy,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '2rem',
                    color: colors.primary.white
                  }}
                >
                  ★
                </div>
                <h3
                  className="heading-sm font-bold mb-3"
                  style={{
                    color: colors.primary.navy
                  }}
                >
                  Industry Experience
                </h3>
                <p
                  className="text-base"
                  style={{
                    color: colors.secondary.mediumGray,
                    lineHeight: '1.6'
                  }}
                >
                  Years of expertise in commercial and residential fire protection systems
                </p>
              </div>

              {/* Quality Service */}
              <div
                className="card-padding"
                style={{
                  backgroundColor: colors.neutral.offWhite,
                  borderRadius: '12px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: colors.primary.navy,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '2rem',
                    color: colors.primary.white
                  }}
                >
                  ♥
                </div>
                <h3
                  className="heading-sm font-bold mb-3"
                  style={{
                    color: colors.primary.navy
                  }}
                >
                  Quality Customer Service
                </h3>
                <p
                  className="text-base"
                  style={{
                    color: colors.secondary.mediumGray,
                    lineHeight: '1.6'
                  }}
                >
                  Dedicated to providing excellent service and customer satisfaction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Licensing Information */}
        <section
          className="section-padding"
          style={{
            backgroundColor: colors.primary.navy,
            color: colors.primary.white
          }}
        >
          <div
            className="container-responsive"
            style={{
              textAlign: 'center'
            }}
          >
            <h2
              className="heading-md font-bold mb-6"
            >
              Licensed & Certified
            </h2>
            <div
              className="text-md"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <p>State of New Jersey Fire Protection Contractor Permit No. P01654</p>
              <p>NJ HIC License No. 13VH12649700</p>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="section-padding-lg" style={{ backgroundColor: colors.neutral.offWhite }}>
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
            <h2
              className="heading-lg font-bold mb-4"
              style={{
                color: colors.primary.navy
              }}
            >
              Need Fire Protection Services?
            </h2>
            <p
              className="text-lg mb-8"
              style={{
                color: colors.secondary.mediumGray,
                lineHeight: '1.6'
              }}
            >
              Contact us today at{' '}
              <a
                href="tel:2019195006"
                style={{
                  color: colors.primary.navy,
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  borderBottom: `2px solid ${colors.primary.navy}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.secondary.darkNavy;
                  e.currentTarget.style.borderColor = colors.secondary.darkNavy;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.primary.navy;
                  e.currentTarget.style.borderColor = colors.primary.navy;
                }}
              >
                (201) 919-5006
              </a>{' '}
              for professional fire protection installation and monitoring services
            </p>
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                boxShadow: '0 4px 12px rgba(39, 52, 70, 0.3)',
                color: colors.primary.white
              }}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
