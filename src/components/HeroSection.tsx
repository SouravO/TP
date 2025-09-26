import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    const titleElement = titleRef.current;
    const backgroundElement = backgroundRef.current;

    if (heroElement && titleElement && backgroundElement) {
      // Initial setup
      gsap.set('.hero-letter', { opacity: 0, y: 100, rotationX: 90 });
      gsap.set('.hero-subtitle', { opacity: 0, y: 50 });
      gsap.set('.floating-element', { opacity: 0, scale: 0 });

      // Create the staggered letter animation with 3D effect
      const tl = gsap.timeline({ delay: 1 });
      
      tl.to('.hero-letter', {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'back.out(1.7)'
      })
      .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out'
      }, '-=0.8')
      .to('.floating-element', {
        opacity: 0.6,
        scale: 1,
        duration: 2,
        stagger: 0.3,
        ease: 'elastic.out(1, 0.5)'
      }, '-=1');

      // Parallax scroll effect for background elements
      gsap.to('.floating-element', {
        y: -100,
        rotation: 180,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        ease: 'sine.inOut'
      });

      // Scroll-triggered parallax
      ScrollTrigger.create({
        trigger: heroElement,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(backgroundElement, {
            y: self.progress * 200,
            duration: 0.3
          });
          gsap.to('.floating-element', {
            y: self.progress * 150,
            rotation: self.progress * 360,
            duration: 0.3,
            stagger: 0.1
          });
        }
      });

      // Magnetic cursor effect for title
      const handleMouseMove = (e: MouseEvent) => {
        const rect = titleElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.1;
        const deltaY = (e.clientY - centerY) * 0.1;
        
        gsap.to(titleElement, {
          x: deltaX,
          y: deltaY,
          duration: 0.5,
          ease: 'power2.out'
        });
      };

      titleElement.addEventListener('mousemove', handleMouseMove);
      titleElement.addEventListener('mouseleave', () => {
        gsap.to(titleElement, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.3)' });
      });

      return () => {
        titleElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="hero-letter inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="floating-element absolute top-3/4 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-sm"></div>
        <div className="floating-element absolute top-1/2 left-3/4 w-16 h-16 border border-primary/30 rotate-45"></div>
        <div className="floating-element absolute bottom-1/4 left-1/2 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full"></div>
        <div className="floating-element absolute top-1/3 right-1/3 w-2 h-32 bg-primary/30 transform rotate-12"></div>
      </div>

      <div ref={heroRef} className="text-center max-w-6xl mx-auto relative z-10">
        <h1 ref={titleRef} className="text-hero mb-8 font-light perspective-1000">
          <div className="mb-4">
            {splitText('EPIC')}
            <span className="mx-8"></span>
            {splitText('EXPERIENCES')}
          </div>
          <div className="mb-4 text-4xl md:text-5xl lg:text-6xl">
            {splitText('SHAPING')}
            <span className="mx-6"></span>
            <span className="font-medium">
              {splitText('CULTURE')}
            </span>
          </div>
        </h1>
        
        <div className="hero-subtitle space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm letter-spaced font-light opacity-70">
            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">HONG KONG</span>
            <span>•</span>
            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">DUBAI</span>
            <span>•</span>
            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">ZURICH</span>
            <span>•</span>
            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">AMSTERDAM</span>
            <span>•</span>
            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">LOS ANGELES</span>
            <span>•</span>
            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">SHANGHAI</span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="hero-subtitle flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent opacity-50 animate-pulse"></div>
          <div className="mt-2 text-xs letter-spaced opacity-40">SCROLL</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;