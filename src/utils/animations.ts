/**
 * GSAP Animation Library - Ultra Clean Landing
 * Core animation functions for dramatic section transitions and micro-interactions
 */

// Declare GSAP types for TypeScript
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

// Animation configuration
const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    dramatic: 1.5,
  },
  ease: {
    smooth: "power2.out",
    dramatic: "power3.inOut",
    elastic: "elastic.out(1, 0.3)",
    bounce: "back.out(1.7)",
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.2,
  },
};

/**
 * Initialize GSAP and register plugins
 */
export const initGSAP = () => {
  if (typeof window !== 'undefined' && window.gsap) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    
    // Set default ease
    window.gsap.defaults({
      ease: ANIMATION_CONFIG.ease.smooth,
      duration: ANIMATION_CONFIG.duration.normal,
    });
    
    // Configure ScrollTrigger
    window.ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });
    
    console.log('🎬 GSAP initialized with ScrollTrigger');
  }
};

/**
 * Text Animations - Ultra Clean Typography
 */
export const textAnimations = {
  /**
   * Split text reveal animation for hero titles
   */
  splitTextReveal: (element: string | Element, options: any = {}) => {
    if (!window.gsap) return;
    
    const {
      duration = ANIMATION_CONFIG.duration.dramatic,
      stagger = ANIMATION_CONFIG.stagger.normal,
      ease = ANIMATION_CONFIG.ease.dramatic,
      delay = 0,
    } = options;
    
    const tl = window.gsap.timeline({ delay });
    
    // Split text into characters
    const text = typeof element === 'string' ? document.querySelector(element) : element;
    if (!text) return;
    
    const chars = text.textContent?.split('') || [];
    text.innerHTML = chars.map(char => 
      char === ' ' ? ' ' : `<span class="split-char">${char}</span>`
    ).join('');
    
    const splitChars = text.querySelectorAll('.split-char');
    
    tl.from(splitChars, {
      duration,
      y: 100,
      opacity: 0,
      stagger,
      ease,
    });
    
    return tl;
  },
  
  /**
   * Text morph-in animation for section titles
   */
  textMorphIn: (element: string | Element, options: any = {}) => {
    if (!window.gsap) return;
    
    const {
      duration = ANIMATION_CONFIG.duration.normal,
      ease = ANIMATION_CONFIG.ease.bounce,
    } = options;
    
    return window.gsap.from(element, {
      duration,
      scale: 0.8,
      opacity: 0,
      y: 50,
      ease,
    });
  },
  
  /**
   * Explosive reveal for CTA titles
   */
  explosiveReveal: (element: string | Element, options: any = {}) => {
    if (!window.gsap) return;
    
    const {
      duration = ANIMATION_CONFIG.duration.fast,
      ease = ANIMATION_CONFIG.ease.bounce,
    } = options;
    
    return window.gsap.from(element, {
      duration,
      scale: 0,
      rotation: 180,
      opacity: 0,
      ease,
    });
  },
};

/**
 * Section Transition Animations - Dramatic Changes
 */
export const sectionTransitions = {
  /**
   * Curtain wipe down transition
   */
  curtainWipeDown: (fromSection: string | Element, toSection: string | Element) => {
    if (!window.gsap) return;
    
    const tl = window.gsap.timeline();
    
    tl.to(fromSection, {
      duration: ANIMATION_CONFIG.duration.dramatic,
      y: "-100%",
      ease: ANIMATION_CONFIG.ease.dramatic,
    })
    .from(toSection, {
      duration: ANIMATION_CONFIG.duration.dramatic,
      y: "100%",
      ease: ANIMATION_CONFIG.ease.dramatic,
    }, "-=0.5");
    
    return tl;
  },
  
  /**
   * Fade to white transition
   */
  fadeToWhite: (fromSection: string | Element, toSection: string | Element) => {
    if (!window.gsap) return;
    
    const tl = window.gsap.timeline();
    
    tl.to(fromSection, {
      duration: ANIMATION_CONFIG.duration.normal,
      opacity: 0,
      scale: 0.95,
      ease: ANIMATION_CONFIG.ease.smooth,
    })
    .from(toSection, {
      duration: ANIMATION_CONFIG.duration.normal,
      opacity: 0,
      scale: 1.05,
      ease: ANIMATION_CONFIG.ease.smooth,
    }, "-=0.3");
    
    return tl;
  },
  
  /**
   * Morph to orange transition
   */
  morphToOrange: (fromSection: string | Element, toSection: string | Element) => {
    if (!window.gsap) return;
    
    const tl = window.gsap.timeline();
    
    tl.to(fromSection, {
      duration: ANIMATION_CONFIG.duration.dramatic,
      backgroundColor: "#ff6b35",
      ease: ANIMATION_CONFIG.ease.dramatic,
    })
    .to(fromSection, {
      duration: ANIMATION_CONFIG.duration.normal,
      opacity: 0,
      ease: ANIMATION_CONFIG.ease.smooth,
    })
    .from(toSection, {
      duration: ANIMATION_CONFIG.duration.normal,
      opacity: 0,
      ease: ANIMATION_CONFIG.ease.smooth,
    }, "-=0.2");
    
    return tl;
  },
};

/**
 * Element Animations - Cards, Images, etc.
 */
export const elementAnimations = {
  /**
   * Staggered slide up for cards
   */
  staggerSlideUp: (elements: string | NodeList, options: any = {}) => {
    if (!window.gsap) return;
    
    const {
      duration = ANIMATION_CONFIG.duration.normal,
      stagger = ANIMATION_CONFIG.stagger.normal,
      ease = ANIMATION_CONFIG.ease.smooth,
      y = 100,
    } = options;
    
    return window.gsap.from(elements, {
      duration,
      y,
      opacity: 0,
      stagger,
      ease,
    });
  },
  
  /**
   * Scale in float for mockups
   */
  scaleInFloat: (element: string | Element, options: any = {}) => {
    if (!window.gsap) return;
    
    const {
      duration = ANIMATION_CONFIG.duration.dramatic,
      ease = ANIMATION_CONFIG.ease.bounce,
    } = options;
    
    const tl = window.gsap.timeline();
    
    tl.from(element, {
      duration,
      scale: 0,
      opacity: 0,
      ease,
    })
    .to(element, {
      duration: 2,
      y: "-=20",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    
    return tl;
  },
  
  /**
   * Progressive reveal for timeline
   */
  progressiveReveal: (elements: string | NodeList, options: any = {}) => {
    if (!window.gsap) return;
    
    const {
      duration = ANIMATION_CONFIG.duration.normal,
      stagger = ANIMATION_CONFIG.stagger.slow,
      ease = ANIMATION_CONFIG.ease.smooth,
    } = options;
    
    return window.gsap.from(elements, {
      duration,
      x: -100,
      opacity: 0,
      stagger,
      ease,
    });
  },
};

/**
 * Micro-Interactions - Hover Effects
 */
export const microInteractions = {
  /**
   * Magnetic button effect
   */
  magneticButton: (button: Element) => {
    if (!window.gsap) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      window.gsap.to(button, {
        duration: ANIMATION_CONFIG.duration.fast,
        x: x * 0.2,
        y: y * 0.2,
        ease: ANIMATION_CONFIG.ease.smooth,
      });
    };
    
    const handleMouseLeave = () => {
      window.gsap.to(button, {
        duration: ANIMATION_CONFIG.duration.normal,
        x: 0,
        y: 0,
        ease: ANIMATION_CONFIG.ease.elastic,
      });
    };
    
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  },
  
  /**
   * Gentle lift hover effect
   */
  gentleLift: (element: Element) => {
    if (!window.gsap) return;
    
    const handleMouseEnter = () => {
      window.gsap.to(element, {
        duration: ANIMATION_CONFIG.duration.fast,
        y: -10,
        scale: 1.02,
        ease: ANIMATION_CONFIG.ease.smooth,
      });
    };
    
    const handleMouseLeave = () => {
      window.gsap.to(element, {
        duration: ANIMATION_CONFIG.duration.normal,
        y: 0,
        scale: 1,
        ease: ANIMATION_CONFIG.ease.elastic,
      });
    };
    
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  },
};

/**
 * ScrollTrigger Setup - Section-based animations
 */
export const setupScrollTriggers = () => {
  if (!window.gsap || !window.ScrollTrigger) return;
  
  // Hero to Services transition
  window.ScrollTrigger.create({
    trigger: ".section-services",
    start: "top 80%",
    end: "top 20%",
    onEnter: () => {
      console.log('🎬 Transitioning to Services section');
      sectionTransitions.curtainWipeDown(".section-hero", ".section-services");
    },
    onLeaveBack: () => {
      console.log('🎬 Transitioning back to Hero section');
      sectionTransitions.curtainWipeDown(".section-services", ".section-hero");
    },
  });
  
  // Services to Process transition
  window.ScrollTrigger.create({
    trigger: ".section-process",
    start: "top 80%",
    end: "top 20%",
    onEnter: () => {
      console.log('🎬 Transitioning to Process section');
      sectionTransitions.fadeToWhite(".section-services", ".section-process");
    },
  });
  
  // Process to Trust transition
  window.ScrollTrigger.create({
    trigger: ".section-trust",
    start: "top 80%",
    end: "top 20%",
    onEnter: () => {
      console.log('🎬 Transitioning to Trust section');
      sectionTransitions.fadeToWhite(".section-process", ".section-trust");
    },
  });
  
  // Trust to CTA transition
  window.ScrollTrigger.create({
    trigger: ".section-cta",
    start: "top 80%",
    end: "top 20%",
    onEnter: () => {
      console.log('🎬 Transitioning to CTA section');
      sectionTransitions.morphToOrange(".section-trust", ".section-cta");
    },
  });
  
  console.log('🎯 ScrollTriggers initialized');
};

/**
 * Performance monitoring
 */
export const monitorPerformance = () => {
  if (!window.gsap) return;
  
  let frameCount = 0;
  let lastTime = performance.now();
  
  const checkFPS = () => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      
      if (fps < 50) {
        console.warn(`⚠️ Low FPS detected: ${fps}fps`);
      }
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(checkFPS);
  };
  
  requestAnimationFrame(checkFPS);
};

/**
 * Cleanup function for animations
 */
export const cleanupAnimations = () => {
  if (window.ScrollTrigger) {
    window.ScrollTrigger.killAll();
  }
  
  if (window.gsap) {
    window.gsap.killTweensOf("*");
  }
  
  console.log('🧹 Animations cleaned up');
};

/**
 * Main initialization function
 */
export const initAnimations = () => {
  // Wait for GSAP to load
  const checkGSAP = () => {
    if (window.gsap && window.ScrollTrigger) {
      initGSAP();
      setupScrollTriggers();
      
      // Monitor performance in development
      if (process.env.NODE_ENV === 'development') {
        monitorPerformance();
      }
      
      console.log('✨ Ultra Clean animations initialized');
    } else {
      setTimeout(checkGSAP, 100);
    }
  };
  
  checkGSAP();
};

// Export all animation functions
export default {
  initAnimations,
  textAnimations,
  sectionTransitions,
  elementAnimations,
  microInteractions,
  setupScrollTriggers,
  cleanupAnimations,
};