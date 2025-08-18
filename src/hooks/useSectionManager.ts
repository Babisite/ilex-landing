'use client';

import { useState, useEffect, useCallback } from 'react';
import { SECTION_CONFIGS, SectionConfig } from '@/types/sections';
import { sectionTransitions } from '@/utils/animations';

export const useSectionManager = () => {
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sectionTheme, setSectionTheme] = useState(SECTION_CONFIGS.hero);

  // Get section configuration
  const getSectionConfig = useCallback((sectionId: string): SectionConfig => {
    return SECTION_CONFIGS[sectionId] || SECTION_CONFIGS.hero;
  }, []);

  // Update theme based on current section
  const updateTheme = useCallback((sectionId: string) => {
    const config = getSectionConfig(sectionId);
    setSectionTheme(config);
    
    // Update CSS custom properties for theme
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--current-bg', `var(--${config.background})`);
      root.style.setProperty('--current-text', `var(--${config.textColor})`);
      root.style.setProperty('--current-accent', `var(--${config.accentColor})`);
    }
  }, [getSectionConfig]);

  // Handle section transition
  const transitionToSection = useCallback(async (targetSection: string) => {
    if (isTransitioning || targetSection === currentSection) return;
    
    setIsTransitioning(true);
    
    const currentConfig = getSectionConfig(currentSection);
    // const targetConfig = getSectionConfig(targetSection);
    
    try {
      // Execute transition animation
      const fromElement = document.querySelector(`.section-${currentSection}`);
      const toElement = document.querySelector(`.section-${targetSection}`);
      
      if (fromElement && toElement) {
        // Get transition type from current section config
        const transitionType = currentConfig.transitions.exit;
        
        switch (transitionType) {
          case 'curtainWipeDown':
            await sectionTransitions.curtainWipeDown(fromElement, toElement);
            break;
          case 'fadeToWhite':
            await sectionTransitions.fadeToWhite(fromElement, toElement);
            break;
          case 'morphToOrange':
            await sectionTransitions.morphToOrange(fromElement, toElement);
            break;
          default:
            await sectionTransitions.fadeToWhite(fromElement, toElement);
        }
      }
      
      // Update current section and theme
      setCurrentSection(targetSection);
      updateTheme(targetSection);
      
    } catch (error) {
      console.error('Section transition failed:', error);
    } finally {
      setIsTransitioning(false);
    }
  }, [currentSection, isTransitioning, getSectionConfig, updateTheme]);

  // Setup scroll-based section detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (isTransitioning) return;

      const sections = Object.keys(SECTION_CONFIGS);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (sectionId !== currentSection) {
              updateTheme(sectionId);
              setCurrentSection(sectionId);
            }
            break;
          }
        }
      }
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial theme setup
    updateTheme(currentSection);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [currentSection, isTransitioning, updateTheme]);

  // Navigation helpers
  const goToNextSection = useCallback(() => {
    const currentConfig = getSectionConfig(currentSection);
    if (currentConfig.transitions.nextSection) {
      transitionToSection(currentConfig.transitions.nextSection);
    }
  }, [currentSection, getSectionConfig, transitionToSection]);

  const goToPrevSection = useCallback(() => {
    const currentConfig = getSectionConfig(currentSection);
    if (currentConfig.transitions.prevSection) {
      transitionToSection(currentConfig.transitions.prevSection);
    }
  }, [currentSection, getSectionConfig, transitionToSection]);

  const goToSection = useCallback((sectionId: string) => {
    transitionToSection(sectionId);
  }, [transitionToSection]);

  return {
    currentSection,
    sectionTheme,
    isTransitioning,
    getSectionConfig,
    goToNextSection,
    goToPrevSection,
    goToSection,
    transitionToSection,
    updateTheme
  };
};