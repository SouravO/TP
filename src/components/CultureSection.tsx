import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CultureSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const textElement = textRef.current;

    if (sectionElement && textElement) {
      // Split text into words for animation
      const words = textElement.textContent?.split(' ') || [];
      textElement.innerHTML = words.map((word, index) => 
        `<span class="inline-block mr-2 fade-up word-${index}" style="perspective: 1000px;">${word}</span>`
      ).join('');

      // Enhanced word animation with 3D effects
      gsap.fromTo('.fade-up', 
        { opacity: 0, y: 60, rotationX: 90, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionElement,
            start: 'top 70%',
            end: 'bottom 30%',
          }
        }
      );

      // Parallax effect for section
      ScrollTrigger.create({
        trigger: sectionElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(sectionElement, {
            y: self.progress * 50,
            duration: 0.3
          });
        }
      });

      // Individual word hover effects
      words.forEach((_, index) => {
        const wordEl = sectionElement.querySelector(`.word-${index}`);
        if (wordEl) {
          wordEl.addEventListener('mouseenter', () => {
            gsap.to(wordEl, {
              scale: 1.2,
              color: 'hsl(var(--primary))',
              duration: 0.3,
              ease: 'power2.out'
            });
          });
          
          wordEl.addEventListener('mouseleave', () => {
            gsap.to(wordEl, {
              scale: 1,
              color: 'hsl(var(--foreground))',
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="culture" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-1 h-24 bg-primary/30 transform rotate-12 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-primary/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-light letter-spaced-wide mb-8 hover:tracking-widest transition-all duration-700 cursor-pointer">
            CULTURE
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p 
            ref={textRef} 
            className="text-section leading-relaxed letter-spaced cursor-pointer"
          >
            We foster a culture where humble hearts meet hungry minds. We believe in innovation, creative bravery, and being challengers of the status quo.
          </p>
          
          <div className="mt-12">
            <button className="group text-sm font-light letter-spaced border border-primary px-8 py-3 hover:bg-primary hover:text-background transition-all duration-500 relative overflow-hidden">
              <span className="relative z-10">READ MORE</span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;