'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { textAnimations, elementAnimations, microInteractions } from '@/utils/animations';
import SectionWrapper from './SectionWrapper';

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initCTAAnimations = () => {
      if (!window.gsap) {
        setTimeout(initCTAAnimations, 100);
        return;
      }

      // Explosive reveal for title
      if (titleRef.current) {
        textAnimations.explosiveReveal(titleRef.current, {
          delay: 0.5,
        });
      }

      // Subtitle fade in
      if (subtitleRef.current) {
        window.gsap.from(subtitleRef.current, {
          duration: 0.8,
          y: 30,
          opacity: 0,
          delay: 1,
          ease: "power2.out",
        });
      }

      // Buttons magnetic float
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll('.btn');
        window.gsap.from(buttons, {
          duration: 0.8,
          scale: 0.8,
          opacity: 0,
          stagger: 0.2,
          delay: 1.5,
          ease: "back.out(1.7)",
        });

        // Add magnetic effects
        buttons.forEach((button) => {
          microInteractions.magneticButton(button as Element);
        });
      }

      // Mockup floating rotate
      if (mockupRef.current) {
        window.gsap.from(mockupRef.current, {
          duration: 1.2,
          scale: 0,
          rotation: 180,
          opacity: 0,
          delay: 2,
          ease: "back.out(1.7)",
        });

        // Add floating animation
        window.gsap.to(mockupRef.current, {
          duration: 3,
          y: "-=15",
          rotation: "+=5",
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 3,
        });
      }

      // Features stagger
      if (featuresRef.current) {
        const features = featuresRef.current.querySelectorAll('.cta-feature');
        window.gsap.from(features, {
          duration: 0.6,
          x: -50,
          opacity: 0,
          stagger: 0.1,
          delay: 2.5,
          ease: "power2.out",
        });
      }
    };

    // Setup ScrollTrigger for this section
    const setupScrollTrigger = () => {
      if (!window.ScrollTrigger) return;

      window.ScrollTrigger.create({
        trigger: '.section-cta',
        start: 'top 70%',
        onEnter: initCTAAnimations,
        once: true,
      });
    };

    if (window.ScrollTrigger) {
      setupScrollTrigger();
    } else {
      setTimeout(setupScrollTrigger, 100);
    }
  }, []);

  const features = [
    { icon: '⚡', text: 'Livraison ultra-rapide' },
    { icon: '📱', text: 'Application intuitive' },
    { icon: '🔒', text: 'Paiement sécurisé' },
    { icon: '🎯', text: 'Suivi en temps réel' },
    { icon: '💬', text: 'Support 24/7' },
    { icon: '🏆', text: 'Service premium' }
  ];

  return (
    <SectionWrapper sectionId="cta">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Explosive Title */}
            <div className="space-y-8">
              <h2 
                ref={titleRef}
                className="text-section font-black leading-tight will-animate"
                style={{ color: 'var(--black-pure)' }}
              >
                Commencez dès maintenant !
              </h2>
              
              <p 
                ref={subtitleRef}
                className="text-large font-medium leading-relaxed opacity-0 will-animate"
                style={{ 
                  color: 'var(--black-soft)',
                  maxWidth: '500px'
                }}
              >
                Rejoignez la révolution de la livraison en Côte d'Ivoire. 
                Téléchargez l'app et profitez de votre première livraison gratuite !
              </p>
            </div>

            {/* Key Features */}
            <div ref={featuresRef} className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="cta-feature flex items-center space-x-3 will-animate"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span 
                    className="text-body font-medium"
                    style={{ color: 'var(--black-soft)' }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Oversized */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6">
              <button 
                className="btn will-animate"
                style={{
                  background: 'var(--black-pure)',
                  color: 'var(--white-pure)',
                  border: '2px solid var(--black-pure)',
                  fontSize: '1.25rem',
                  minHeight: '70px',
                  minWidth: '280px',
                  fontWeight: '800'
                }}
              >
                📱 Télécharger l'app
              </button>
              <button 
                className="btn will-animate"
                style={{
                  background: 'transparent',
                  color: 'var(--black-pure)',
                  border: '2px solid var(--black-pure)',
                  fontSize: '1.25rem',
                  minHeight: '70px',
                  minWidth: '280px',
                  fontWeight: '800'
                }}
              >
                🚀 Commander maintenant
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 flex items-center justify-center text-white font-bold text-sm"
                      style={{ 
                        background: 'var(--gradient-fire)',
                        borderRadius: '0px' // Ultra clean = no border radius
                      }}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="ml-3">
                  <div 
                    className="text-body font-bold"
                    style={{ color: 'var(--black-pure)' }}
                  >
                    +50k téléchargements
                  </div>
                  <div 
                    className="text-sm"
                    style={{ color: 'var(--black-soft)' }}
                  >
                    ⭐⭐⭐⭐⭐ 4.9/5 sur les stores
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Perspective Mockup */}
          <div className="relative">
            <div ref={mockupRef} className="relative will-animate">
              {/* Main Mockup */}
              <div 
                className="relative z-10"
                style={{
                  transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Image
                  src="/images/hero-mockup.webp"
                  width={400}
                  height={500}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={true}
                  alt="Application ILEX - Interface finale"
                  className="w-full max-w-md mx-auto gpu-accelerated"
                  style={{
                    filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.3))',
                    maxHeight: '60vh',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Floating Elements */}
              <div 
                className="absolute -top-12 -right-12 w-24 h-24 flex items-center justify-center text-4xl"
                style={{
                  background: 'var(--gradient-fire)',
                  borderRadius: '0px', // Ultra clean = no border radius
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                ⚡
              </div>
              
              <div 
                className="absolute -bottom-8 -left-8 w-20 h-20 flex items-center justify-center text-3xl"
                style={{
                  background: 'var(--black-pure)',
                  color: 'var(--white-pure)',
                  borderRadius: '0px', // Ultra clean = no border radius
                  animation: 'float 3s ease-in-out infinite 1s'
                }}
              >
                🎯
              </div>
            </div>

            {/* Background Glow */}
            <div 
              className="absolute inset-0 -z-10 blur-3xl opacity-20"
              style={{ background: 'var(--gradient-fire)' }}
            ></div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-20 pt-12 border-t-2" style={{ borderColor: 'var(--black-pure)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div 
                className="text-large font-black mb-2"
                style={{ color: 'var(--black-pure)' }}
              >
                30min
              </div>
              <div 
                className="text-body font-medium"
                style={{ color: 'var(--black-soft)' }}
              >
                Livraison moyenne
              </div>
            </div>
            <div>
              <div 
                className="text-large font-black mb-2"
                style={{ color: 'var(--black-pure)' }}
              >
                24/7
              </div>
              <div 
                className="text-body font-medium"
                style={{ color: 'var(--black-soft)' }}
              >
                Service disponible
              </div>
            </div>
            <div>
              <div 
                className="text-large font-black mb-2"
                style={{ color: 'var(--black-pure)' }}
              >
                15+
              </div>
              <div 
                className="text-body font-medium"
                style={{ color: 'var(--black-soft)' }}
              >
                Villes couvertes
              </div>
            </div>
            <div>
              <div 
                className="text-large font-black mb-2"
                style={{ color: 'var(--black-pure)' }}
              >
                100%
              </div>
              <div 
                className="text-body font-medium"
                style={{ color: 'var(--black-soft)' }}
              >
                Satisfaction garantie
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-1/2 h-1/2 opacity-10"
          style={{
            background: 'radial-gradient(circle, var(--orange-vibrant) 0%, transparent 70%)'
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-5"
          style={{
            background: 'radial-gradient(circle, var(--yellow-electric) 0%, transparent 70%)'
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default CTA;