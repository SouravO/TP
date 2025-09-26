import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      // Enhanced service lines animation with 3D effects
      gsap.fromTo('.service-line', 
        { opacity: 0, x: -150, rotationY: 45, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scale: 1,
          duration: 1.8,
          stagger: 0.3,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionElement,
            start: 'top 70%',
            end: 'bottom 30%',
          }
        }
      );

      // Variable speed scrolling text animation
      services.forEach((_, index) => {
        gsap.to(`.scrolling-service-${index}`, {
          x: '-100%',
          duration: 80 + (index * 10), // Different speeds for each row
          repeat: -1,
          ease: 'none'
        });
      });

      // Parallax scroll effect for the entire section
      ScrollTrigger.create({
        trigger: sectionElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
        onUpdate: (self) => {
          gsap.to('.scrolling-service', {
            x: `${-50 + (self.progress * 20)}%`,
            duration: 0.3
          });
        }
      });

      // Interactive hover effects for service cards
      const serviceLines = sectionElement.querySelectorAll('.service-line');
      serviceLines.forEach((line, index) => {
        line.addEventListener('mouseenter', () => {
          gsap.to(line, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(line.querySelector('h3'), {
            color: 'hsl(var(--primary))',
            duration: 0.3
          });
        });
        
        line.addEventListener('mouseleave', () => {
          gsap.to(line, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.to(line.querySelector('h3'), {
            color: 'hsl(var(--foreground))',
            duration: 0.3
          });
        });
      });
    }
  }, []);

  const services = [
    { name: 'STRATEGY', description: 'Brand strategy and positioning' },
    { name: 'EXPERIENTIAL', description: 'Immersive brand experiences' },
    { name: 'AMPLIFICATION', description: 'Digital and social amplification' },
    { name: 'IMPLEMENTATION', description: 'Full-service execution' }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-primary"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-primary"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-primary"></div>
      </div>

      {/* Enhanced scrolling service names */}
      <div className="mb-20">
        {services.map((service, index) => (
          <div key={service.name} className="py-6 border-t border-border/20 last:border-b relative overflow-hidden">
            <div className={`scrolling-service scrolling-service-${index} flex whitespace-nowrap`}>
              {Array.from({ length: 25 }).map((_, i) => (
                <span 
                  key={i} 
                  className={`text-4xl md:text-6xl lg:text-8xl font-light letter-spaced mr-20 transition-opacity duration-300 ${
                    index % 2 === 0 ? 'opacity-15 hover:opacity-30' : 'opacity-10 hover:opacity-25'
                  }`}
                  style={{
                    background: `linear-gradient(90deg, transparent, hsl(var(--primary) / ${0.1 + (i % 3) * 0.05}), transparent)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                  }}
                >
                  {service.name} ·
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced service details */}
      <div className="px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={service.name} className="service-line group cursor-pointer p-6 rounded-lg border border-transparent hover:border-primary/20 transition-all duration-500">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-l border-t border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r border-b border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h3 className="text-xl font-light letter-spaced mb-4 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="mt-4 w-12 h-px bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;