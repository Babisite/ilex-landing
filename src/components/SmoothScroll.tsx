'use client';
import React, { useEffect } from 'react';

const SmoothScroll: React.FC = () => {
    useEffect(() => {
        const initializeScrollEffects = () => {
            if (typeof window !== 'undefined') {
                const gsap = (window as any).gsap;
                const ScrollTrigger = (window as any).ScrollTrigger;
                const ScrollSmoother = (window as any).ScrollSmoother;

                if (gsap && ScrollTrigger && ScrollSmoother) {
                    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

                    // Initialize ScrollSmoother
                    ScrollSmoother.create({
                        wrapper: "#smooth-wrapper",
                        content: "#smooth-content",
                        smooth: 1.2,
                        effects: true,
                        smoothTouch: 0.1,
                    });

                // Parallax effect for hero background
                gsap.to(".hero-bg", {
                    yPercent: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".hero-bg",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });

                // Reveal animations for sections
                gsap.utils.toArray(".reveal-section").forEach((section: any) => {
                    gsap.fromTo(section, {
                        opacity: 0,
                        y: 100
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            end: "top 20%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });

                // Scale animation for service cards
                gsap.utils.toArray(".service-card").forEach((card: any) => {
                    gsap.fromTo(card, {
                        scale: 0.8,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "top 20%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });

                // Counter animation
                gsap.utils.toArray(".counter").forEach((counter: any) => {
                    const target = parseInt(counter.getAttribute("data-target"));
                    const obj = { value: 0 };
                    
                    gsap.to(obj, {
                        value: target,
                        duration: 2,
                        ease: "power2.out",
                        onUpdate: function() {
                            counter.textContent = Math.round(obj.value);
                        },
                        scrollTrigger: {
                            trigger: counter,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    });
                });

                // Stagger animation for features
                gsap.utils.toArray(".feature-list").forEach((list: any) => {
                    gsap.fromTo(list.children, {
                        x: -50,
                        opacity: 0
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: list,
                            start: "top 85%",
                            end: "top 20%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });

                // Floating animation for elements
                gsap.utils.toArray(".float-element").forEach((element: any) => {
                    gsap.to(element, {
                        y: -20,
                        duration: 2,
                        ease: "power2.inOut",
                        yoyo: true,
                        repeat: -1
                    });
                });

                // Magnetic effect for buttons
                gsap.utils.toArray(".magnetic-btn").forEach((btn: any) => {
                    btn.addEventListener("mouseenter", () => {
                        gsap.to(btn, {
                            scale: 1.05,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });
                    
                    btn.addEventListener("mouseleave", () => {
                        gsap.to(btn, {
                            scale: 1,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });
                });

                    // Refresh ScrollTrigger on window resize
                    window.addEventListener('resize', () => {
                        ScrollTrigger.refresh();
                    });
                } else {
                    // Retry after a short delay if GSAP is not ready
                    setTimeout(initializeScrollEffects, 100);
                }
            }
        };

        // Initial call
        initializeScrollEffects();
        
        // Also try again after a delay to ensure GSAP is loaded
        setTimeout(initializeScrollEffects, 500);
    }, []);

    return null;
};

export default SmoothScroll;