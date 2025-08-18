'use client';

import { useEffect, useRef } from 'react';
import { textAnimations, elementAnimations, microInteractions } from '@/utils/animations';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  icon: string;
}

const services: Service[] = [
  {
    id: 'express',
    name: 'Express',
    description: 'Livraison ultra-rapide en moins de 30 minutes',
    price: '2000',
    features: ['Livraison en 30min', 'Suivi en temps réel', 'Support prioritaire'],
    popular: true,
    icon: '⚡'
  },
  {
    id: 'normal',
    name: 'Normal',
    description: 'Livraison standard dans la journée',
    price: '1000',
    features: ['Livraison même jour', 'Suivi SMS', 'Support standard'],
    icon: '📦'
  },
  {
    id: 'demenagement',
    name: 'Déménagement',
    description: 'Service complet de déménagement',
    price: '15000',
    features: ['Équipe complète', 'Matériel fourni', 'Assurance incluse'],
    icon: '🚚'
  },
  {
    id: 'groupe',
    name: 'Groupé',
    description: 'Livraisons groupées économiques',
    price: '500',
    features: ['Prix réduit', 'Livraison 48h', 'Écologique'],
    icon: '📋'
  }
];

const Services: React.FC = () => {
  // const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initServicesAnimations = () => {
      if (!window.gsap) {
        setTimeout(initServicesAnimations, 100);
        return;
      }

      // Title morph-in animation
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

      // Cards staggered animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.service-card');
        elementAnimations.staggerSlideUp(cards, {
          delay: 1.2,
          stagger: 0.15,
        });

        // Add hover effects to cards
        cards.forEach((card) => {
          microInteractions.gentleLift(card as Element);
        });
      }
    };

    // Setup ScrollTrigger for this section
    const setupScrollTrigger = () => {
      if (!window.ScrollTrigger) return;

      window.ScrollTrigger.create({
        trigger: '.section-services',
        start: 'top 70%',
        onEnter: initServicesAnimations,
        once: true,
      });
    };

    if (window.ScrollTrigger) {
      setupScrollTrigger();
    } else {
      setTimeout(setupScrollTrigger, 100);
    }
  }, []);

  return (
    <section id="services" className="relative">
      <div className="container">
        <div className="text-center mb-20">
          {/* Section Title - Yellow Electric */}
          <h2 
            ref={titleRef}
            className="text-section font-black mb-6 will-animate"
            style={{ color: 'var(--yellow-electric)' }}
          >
            Nos Services
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
            Des solutions adaptées à tous vos besoins de livraison
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card relative p-8 will-animate ${
                service.popular ? 'popular-service' : ''
              }`}
              style={{
                background: service.popular 
                  ? 'var(--gradient-fire)' 
                  : 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: service.popular 
                  ? '2px solid var(--yellow-electric)' 
                  : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0px', // Ultra clean = no border radius
              }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 text-sm font-bold"
                  style={{
                    background: 'var(--yellow-electric)',
                    color: 'var(--black-pure)'
                  }}
                >
                  POPULAIRE
                </div>
              )}

              {/* Service Icon */}
              <div className="text-6xl mb-6 text-center">
                {service.icon}
              </div>

              {/* Service Name */}
              <h3 
                className="text-large font-bold mb-4 text-center"
                style={{ 
                  color: service.popular ? 'var(--black-pure)' : 'var(--white-pure)' 
                }}
              >
                {service.name}
              </h3>

              {/* Service Description */}
              <p 
                className="text-body mb-6 text-center leading-relaxed"
                style={{ 
                  color: service.popular 
                    ? 'var(--black-soft)' 
                    : 'var(--white-warm)',
                  opacity: 0.9
                }}
              >
                {service.description}
              </p>

              {/* Price - Emphasized */}
              <div className="text-center mb-6">
                <div 
                  className="text-section font-black"
                  style={{ 
                    color: service.popular 
                      ? 'var(--black-pure)' 
                      : 'var(--yellow-electric)',
                    background: service.popular 
                      ? 'transparent' 
                      : 'var(--gradient-fire)',
                    backgroundClip: service.popular ? 'initial' : 'text',
                    WebkitBackgroundClip: service.popular ? 'initial' : 'text',
                    WebkitTextFillColor: service.popular ? 'initial' : 'transparent'
                  }}
                >
                  {service.price}
                  <span className="text-large">F</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-body"
                    style={{ 
                      color: service.popular 
                        ? 'var(--black-soft)' 
                        : 'var(--white-warm)' 
                    }}
                  >
                    <span 
                      className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                      style={{ 
                        background: service.popular 
                          ? 'var(--black-pure)' 
                          : 'var(--yellow-electric)' 
                      }}
                    ></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full btn ${service.popular ? 'btn-fire' : 'btn-secondary'} will-animate`}
                style={{
                  background: service.popular 
                    ? 'var(--black-pure)' 
                    : 'transparent',
                  color: service.popular 
                    ? 'var(--white-pure)' 
                    : 'var(--yellow-electric)',
                  border: service.popular 
                    ? '2px solid var(--black-pure)' 
                    : '2px solid var(--yellow-electric)',
                  fontSize: '1rem',
                  minHeight: '50px'
                }}
              >
                Choisir {service.name}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p 
            className="text-large font-medium mb-8"
            style={{ color: 'var(--white-warm)' }}
          >
            Besoin d&apos;un service personnalisé ?
          </p>
          <button 
            className="btn btn-secondary will-animate"
            style={{
              background: 'var(--yellow-electric)',
              color: 'var(--black-pure)',
              border: '2px solid var(--yellow-electric)'
            }}
          >
            Contactez-nous
          </button>
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
          style={{ background: 'var(--gradient-fire)' }}
        ></div>
      </div>
    </section>
  );
};

export default Services;