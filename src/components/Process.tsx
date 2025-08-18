'use client';

import { useEffect, useRef } from 'react';
import { textAnimations, elementAnimations, microInteractions } from '@/utils/animations';

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  illustration: string;
  details: string[];
}

const processSteps: ProcessStep[] = [
  {
    id: 'order',
    number: '01',
    title: 'Commandez',
    description: 'Choisissez vos produits et passez commande en quelques clics',
    illustration: '📱',
    details: [
      'Interface intuitive',
      'Paiement sécurisé',
      'Confirmation instantanée'
    ]
  },
  {
    id: 'prepare',
    number: '02',
    title: 'Préparation',
    description: 'Nos équipes préparent votre commande avec soin',
    illustration: '📦',
    details: [
      'Emballage professionnel',
      'Vérification qualité',
      'Étiquetage précis'
    ]
  },
  {
    id: 'pickup',
    number: '03',
    title: 'Collecte',
    description: 'Notre livreur récupère votre colis chez le marchand',
    illustration: '🚴‍♂️',
    details: [
      'Géolocalisation temps réel',
      'Photo de confirmation',
      'Notification automatique'
    ]
  },
  {
    id: 'delivery',
    number: '04',
    title: 'Livraison',
    description: 'Réception de votre commande à l\'adresse indiquée',
    illustration: '🎯',
    details: [
      'Suivi en temps réel',
      'Livraison à domicile',
      'Confirmation de réception'
    ]
  }
];

const Process: React.FC = () => {
  // const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initProcessAnimations = () => {
      if (!window.gsap) {
        setTimeout(initProcessAnimations, 100);
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

      // Timeline progressive reveal
      if (timelineRef.current) {
        const steps = timelineRef.current.querySelectorAll('.process-step');
        elementAnimations.progressiveReveal(steps, {
          delay: 1.2,
          stagger: 0.3,
        });

        // Add hover effects to steps
        steps.forEach((step) => {
          microInteractions.gentleLift(step as Element);
        });
      }

      // CTA animation
      if (ctaRef.current) {
        const ctaButton = ctaRef.current.querySelector('.btn');
        if (ctaButton) {
          window.gsap.from(ctaButton, {
            duration: 0.6,
            scale: 0.8,
            opacity: 0,
            delay: 2.5,
            ease: "back.out(1.7)",
          });

          microInteractions.magneticButton(ctaButton as Element);
        }
      }
    };

    // Setup ScrollTrigger for this section
    const setupScrollTrigger = () => {
      if (!window.ScrollTrigger) return;

      window.ScrollTrigger.create({
        trigger: '.section-process',
        start: 'top 70%',
        onEnter: initProcessAnimations,
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
    <section id="process" className="relative">
      <div className="container">
        <div className="text-center mb-20">
          {/* Section Title */}
          <h2 
            ref={titleRef}
            className="text-section font-black mb-6 will-animate"
            style={{ color: 'var(--orange-soft)' }}
          >
            Comment ça marche
          </h2>
          
          <p 
            ref={subtitleRef}
            className="text-large font-medium opacity-0 will-animate"
            style={{ 
              color: 'var(--black-soft)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Un processus simple et transparent pour vos livraisons
          </p>
        </div>

        {/* Vertical Timeline */}
        <div ref={timelineRef} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
              style={{ 
                background: 'linear-gradient(to bottom, var(--orange-soft), var(--orange-vibrant))',
                opacity: 0.3
              }}
            ></div>

            {/* Process Steps */}
            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`process-step relative flex items-center will-animate ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Step Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                    <div 
                      className="p-8"
                      style={{
                        background: 'var(--white-warm)',
                        border: '2px solid var(--orange-soft)',
                        borderRadius: '0px' // Ultra clean = no border radius
                      }}
                    >
                      {/* Step Number */}
                      <div 
                        className="text-large font-black mb-4"
                        style={{ 
                          color: 'var(--orange-vibrant)',
                          background: 'var(--gradient-fire)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Step Title */}
                      <h3 
                        className="text-large font-bold mb-4"
                        style={{ color: 'var(--black-pure)' }}
                      >
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p 
                        className="text-body mb-6 leading-relaxed"
                        style={{ color: 'var(--black-soft)' }}
                      >
                        {step.description}
                      </p>

                      {/* Step Details */}
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li 
                            key={detailIndex}
                            className="flex items-center text-body"
                            style={{ color: 'var(--black-soft)' }}
                          >
                            <span 
                              className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                              style={{ background: 'var(--orange-vibrant)' }}
                            ></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div 
                      className="w-20 h-20 flex items-center justify-center text-4xl"
                      style={{
                        background: 'var(--gradient-fire)',
                        border: '4px solid var(--white-warm)',
                        borderRadius: '0px' // Ultra clean = no border radius
                      }}
                    >
                      {step.illustration}
                    </div>
                  </div>

                  {/* Empty Space for Alternating Layout */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="text-center mt-20">
          <div 
            className="p-12"
            style={{
              background: 'var(--gradient-fire)',
              borderRadius: '0px' // Ultra clean = no border radius
            }}
          >
            <h3 
              className="text-large font-bold mb-6"
              style={{ color: 'var(--black-pure)' }}
            >
              Prêt à commencer ?
            </h3>
            <p 
              className="text-body mb-8"
              style={{ color: 'var(--black-soft)' }}
            >
              Rejoignez des milliers de clients satisfaits
            </p>
            <button 
              className="btn will-animate"
              style={{
                background: 'var(--black-pure)',
                color: 'var(--white-pure)',
                border: '2px solid var(--black-pure)',
                fontSize: '1.125rem',
                minHeight: '60px',
                minWidth: '250px'
              }}
            >
              Commander maintenant
            </button>
          </div>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ background: 'var(--orange-vibrant)' }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full opacity-3 blur-3xl"
          style={{ background: 'var(--gradient-dawn)' }}
        ></div>
      </div>
    </section>
  );
};

export default Process;