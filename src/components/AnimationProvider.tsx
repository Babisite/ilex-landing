'use client';

import { useEffect } from 'react';
import { initAnimations, cleanupAnimations } from '@/utils/animations';

/**
 * Animation Provider Component
 * Initializes GSAP animations and handles cleanup
 */
export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize animations when component mounts
    initAnimations();
    
    // Cleanup function
    return () => {
      cleanupAnimations();
    };
  }, []);
  
  return <>{children}</>;
}