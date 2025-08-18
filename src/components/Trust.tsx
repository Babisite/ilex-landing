'use client';

import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
import { textAnimations } from '@/utils/animations';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

interface TrustStat {
  id: string;
  number: string;
  suffix: string;
  label: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aminata Koné',
    role: 'Directrice',
    company: 'Restaurant Le Palmier',
    content: 'ILEX a révolutionné notre service de livraison. Nos clients sont ravis de la rapidité et de la fiabilité.',
    avatar: '/images/testimonials/aminata.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'Ibrahim Traoré',
    role: 'Gérant',
    company: 'Boutique Mode CI',
    content: 'Service exceptionnel ! Les livreurs sont professionnels et les délais toujours respectés.',
    avatar: '/images/testimonials/ibrahim.jpg',
    rating: 5
  },
  {
    id: '3',
    name: 'Fatou Diabaté',
    role: 'Cliente',
    company: 'Particulier',
    content: 'Je recommande vivement ILEX. Application simple, suivi en temps réel, parfait !',
    avatar: '/images/testimonials/fatou.jpg',
    rating: 5
  }
];

const trustStats: TrustStat[] = [
  {
    id: 'clients',
    number: '50',
    suffix: 'K+',
    label: 'Clients satisfaits',
    color: 'var(--yellow-warm)'
  },
  {
    id: 'deliveries',
    number: '200',
    suffix: 'K+',
    label: 'Livraisons réussies',
    color: 'var(--yellow-electric)'
  },
  {
    id: 'cities',
    number: '15',
    suffix: '+',
    label: 'Villes couvertes',
    color: 'var(--yellow-warm)'
  },
  {
    id: 'satisfaction',
    number: '4.9',
    suffix: '/5',
    label: 'Note moyenne',
    color: 'var(--yellow-electric)'
  }
];

const partnerLogos = [
  { name: 'Restaurant 1', logo: '/images/partners/restaurant1.png' },
  { name: 'Boutique 1', logo: '/images/partners/boutique1.png' },
  { name: 'Pharmacie 1', logo: '/images/partners/pharmacie1.png' },
  { name: 'Supermarché 1', logo: '/images/partners/supermarche1.png' },
  { name: 'Boulangerie 1', logo: '/images/partners/boulangerie1.png' },
  { name: 'Électronique 1', logo: '/images/partners/electronique1.png' }
];

const Trust: React.FC = () => {
  // const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const initTrustAnimations = () => {
      if (!window.gsap) {
        setTimeout(initTrustAnimations, 100);
        return;
      }

      // Title animation
      if (titleRef.current) {
        textAnimations.textMorphIn(titleRef.current, {
          delay: 0.3,
        });
      }

      // Subtitle fade in
      if (subtitleRef.current) {
        window.gsap.from(subtitleRef.current, {
          duration: 0.8,
          y: 30,
          opacity: 0,
          delay: 0.8,
          ease: "power2.out",
        });
      }

      // Testimonials carousel animation
      if (testimonialsRef.current) {
        window.gsap.from(testimonialsRef.current, {
          duration: 1,
          x: 100,
          opacity: 0,
          delay: 1.2,
          ease: "power2.out",
        });
      }

      // Stats count-up animation
      if (statsRef.current) {
        const statElements = statsRef.current.querySelectorAll('.trust-stat');
        window.gsap.from(statElements, {
          duration: 0.8,
          y: 50,
          opacity: 0,
          stagger: 0.15,
          delay: 1.5,
          ease: "power2.out",
        });

        // Animate numbers
        statElements.forEach((stat, index) => {
          const numberElement = stat.querySelector('.stat-number');
          if (numberElement) {
            const finalNumber = trustStats[index].number;
            window.gsap.from({ value: 0 }, {
              duration: 2,
              value: parseFloat(finalNumber),
              delay: 2 + index * 0.1,
              ease: "power2.out",
              onUpdate: function() {
                const currentValue = this.targets()[0].value;
                numberElement.textContent = finalNumber.includes('.') 
                  ? currentValue.toFixed(1) 
                  : Math.round(currentValue).toString();
              }
            });
          }
        });
      }

      // Partners floating sequence
      if (partnersRef.current) {
        const logos = partnersRef.current.querySelectorAll('.partner-logo');
        window.gsap.from(logos, {
          duration: 0.6,
          scale: 0,
          opacity: 0,
          stagger: 0.1,
          delay: 2.5,
          ease: "back.out(1.7)",
        });

        // Add floating animation
        logos.forEach((logo, index) => {
          window.gsap.to(logo, {
            duration: 2 + index * 0.2,
            y: "-=10",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 3 + index * 0.1,
          });
        });
      }
    };

    // Setup ScrollTrigger for this section
    const setupScrollTrigger = () => {
      if (!window.ScrollTrigger) return;

      window.ScrollTrigger.create({
        trigger: '.section-trust',
        start: 'top 70%',
        onEnter: initTrustAnimations,
        once: true,
      });
    };

    if (window.ScrollTrigger) {
      setupScrollTrigger();
    } else {
      setTimeout(setupScrollTrigger, 100);
    }
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="trust" className="relative">
      <div className="container">
        <div className="text-center mb-20">
          {/* Section Title */}
          <h2 
            ref={titleRef}
            className="text-section font-black mb-6 will-animate"
            style={{ color: 'var(--white-pure)' }}
          >
            Ils nous font confiance
          </h2>
          
          <p 
            ref={subtitleRef}
            className="text-large font-medium opacity-0 will-animate"
            style={{ 
              color: 'var(--white-warm)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Découvrez pourquoi des milliers de clients choisissent ILEX
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Testimonials Carousel */}
          <div ref={testimonialsRef} className="will-animate">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div 
                    className="p-8"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '0px' // Ultra clean = no border radius
                    }}
                  >
                    {/* Rating Stars */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-2xl" style={{ color: 'var(--yellow-electric)' }}>
                          ⭐
                        </span>
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote 
                      className="text-large font-medium mb-8 leading-relaxed"
                      style={{ color: 'var(--white-warm)' }}
                    >
                      &quot;{testimonial.content}&quot;
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center">
                      <div 
                        className="w-16 h-16 mr-4 flex items-center justify-center text-2xl font-bold"
                        style={{
                          background: 'var(--gradient-fire)',
                          color: 'var(--black-pure)',
                          borderRadius: '0px' // Ultra clean = no border radius
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div 
                          className="text-body font-bold"
                          style={{ color: 'var(--white-pure)' }}
                        >
                          {testimonial.name}
                        </div>
                        <div 
                          className="text-sm"
                          style={{ color: 'var(--white-warm)', opacity: 0.8 }}
                        >
                          {testimonial.role} • {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 transition-all duration-300 ${
                      index === currentTestimonial ? 'opacity-100' : 'opacity-40'
                    }`}
                    style={{
                      background: 'var(--yellow-electric)',
                      borderRadius: '0px' // Ultra clean = no border radius
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Trust Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-8">
            {trustStats.map((stat) => (
              <div
                key={stat.id}
                className="trust-stat text-center will-animate"
              >
                <div 
                  className="text-section font-black mb-2"
                  style={{ color: stat.color }}
                >
                  <span className="stat-number">0</span>
                  <span className="text-large">{stat.suffix}</span>
                </div>
                <div 
                  className="text-body font-medium"
                  style={{ color: 'var(--white-warm)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <h3 
            className="text-large font-bold mb-12"
            style={{ color: 'var(--white-warm)' }}
          >
            Nos partenaires de confiance
          </h3>
          
          <div ref={partnersRef} className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className="partner-logo flex items-center justify-center p-4 will-animate"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0px', // Ultra clean = no border radius
                  minHeight: '80px'
                }}
              >
                <div 
                  className="w-12 h-12 flex items-center justify-center text-2xl"
                  style={{ color: 'var(--white-warm)' }}
                >
                  🏪
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-0 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ background: 'var(--yellow-electric)' }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-3 blur-3xl"
          style={{ background: 'var(--white-warm)' }}
        ></div>
      </div>
    </section>
  );
};

export default Trust;