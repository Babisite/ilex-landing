/**
 * Section Configuration Types - Ultra Clean Landing
 * TypeScript interfaces for section management and theming
 */

export type BackgroundType = 'white-pure' | 'black-pure' | 'white-warm' | 'black-soft' | 'gradient-fire' | 'gradient-night' | 'gradient-dawn';
export type ColorType = 'black-pure' | 'black-soft' | 'white-pure' | 'white-warm' | 'orange-vibrant' | 'orange-soft' | 'yellow-electric' | 'yellow-warm';

export interface AnimationConfig {
  trigger: string;
  animation: string;
  duration: number;
  delay?: number;
  stagger?: number;
  ease: string;
}

export interface TransitionConfig {
  enter: string;
  exit: string;
  nextSection?: string;
  prevSection?: string;
}

export interface ContentConfig {
  title?: string;
  subtitle?: string;
  description?: string;
  cta?: CTAButton[];
  stats?: StatItem[];
  features?: FeatureItem[];
}

export interface CTAButton {
  text: string;
  href: string;
  style: 'primary' | 'secondary' | 'fire';
  animation?: string;
}

export interface StatItem {
  number: string;
  suffix?: string;
  label: string;
  animation?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
  animation?: string;
}

export interface SectionConfig {
  id: string;
  name: string;
  background: BackgroundType;
  textColor: ColorType;
  accentColor: ColorType;
  animations: AnimationConfig[];
  transitions: TransitionConfig;
  content: ContentConfig;
  className?: string;
}

// Predefined section configurations
export const SECTION_CONFIGS: Record<string, SectionConfig> = {
  hero: {
    id: 'hero',
    name: 'IMPACT',
    background: 'white-pure',
    textColor: 'black-pure',
    accentColor: 'orange-vibrant',
    animations: [
      {
        trigger: 'onLoad',
        animation: 'splitTextReveal',
        duration: 1.5,
        delay: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
      }
    ],
    transitions: {
      enter: 'fadeIn',
      exit: 'curtainWipeDown',
      nextSection: 'services'
    },
    content: {
      title: 'Livraison Ultra Rapide',
      subtitle: 'Commandez et recevez vos produits en moins de 30 minutes',
      cta: [
        { text: 'Commander maintenant', href: '#', style: 'primary' },
        { text: 'Télécharger l\'app', href: '#', style: 'secondary' }
      ]
    },
    className: 'section-hero'
  },
  
  services: {
    id: 'services',
    name: 'POWER',
    background: 'black-pure',
    textColor: 'white-pure',
    accentColor: 'yellow-electric',
    animations: [
      {
        trigger: 'onView',
        animation: 'textMorphIn',
        duration: 1.0,
        ease: 'back.out(1.7)'
      }
    ],
    transitions: {
      enter: 'curtainWipeDown',
      exit: 'fadeToWhite',
      nextSection: 'process',
      prevSection: 'hero'
    },
    content: {
      title: 'Nos Services',
      subtitle: 'Des solutions adaptées à tous vos besoins'
    },
    className: 'section-dark'
  },
  
  process: {
    id: 'process',
    name: 'CLARITY',
    background: 'white-warm',
    textColor: 'black-soft',
    accentColor: 'orange-soft',
    animations: [
      {
        trigger: 'onView',
        animation: 'progressiveReveal',
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      }
    ],
    transitions: {
      enter: 'fadeFromBlack',
      exit: 'slideToBlack',
      nextSection: 'trust',
      prevSection: 'services'
    },
    content: {
      title: 'Comment ça marche',
      subtitle: 'Un processus simple en 3 étapes'
    },
    className: 'section-warm'
  },
  
  trust: {
    id: 'trust',
    name: 'CONFIDENCE',
    background: 'black-soft',
    textColor: 'white-warm',
    accentColor: 'white-pure',
    animations: [
      {
        trigger: 'onView',
        animation: 'smoothSlide',
        duration: 1.0,
        ease: 'power2.out'
      }
    ],
    transitions: {
      enter: 'slideFromWhite',
      exit: 'morphToOrange',
      nextSection: 'cta',
      prevSection: 'process'
    },
    content: {
      title: 'Ils nous font confiance',
      subtitle: 'Plus de 50k clients satisfaits'
    },
    className: 'section-dark'
  },
  
  cta: {
    id: 'cta',
    name: 'ACTION',
    background: 'gradient-fire',
    textColor: 'black-pure',
    accentColor: 'white-pure',
    animations: [
      {
        trigger: 'onView',
        animation: 'explosiveReveal',
        duration: 0.8,
        ease: 'back.out(1.7)'
      }
    ],
    transitions: {
      enter: 'morphFromBlack',
      exit: 'fadeToFooter',
      prevSection: 'trust'
    },
    content: {
      title: 'Prêt à commencer ?',
      subtitle: 'Rejoignez des milliers de clients satisfaits',
      cta: [
        { text: 'Commander maintenant', href: '#', style: 'fire' },
        { text: 'Télécharger l\'app', href: '#', style: 'secondary' }
      ]
    },
    className: 'section-fire'
  }
};