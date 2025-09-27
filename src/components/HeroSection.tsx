import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    const titleElement = titleRef.current;

    if (heroElement && titleElement) {
      // Initial setup
      gsap.set(".hero-letter", { opacity: 0, y: 100, rotationX: 90 });
      gsap.set(".hero-subtitle", { opacity: 0, y: 50 });
      gsap.set(".floating-element", { opacity: 0, scale: 0 });

      // Create the staggered letter animation with 3D effect
      const tl = gsap.timeline({ delay: 1 });

      tl.to(".hero-letter", {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "back.out(1.7)",
      })
        .to(
          ".hero-subtitle",
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          ".floating-element",
          {
            opacity: 0.6,
            scale: 1,
            duration: 2,
            stagger: 0.3,
            ease: "elastic.out(1, 0.5)",
          },
          "-=1"
        );

      // Parallax scroll effect for background elements
      gsap.to(".floating-element", {
        y: -100,
        rotation: 180,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        ease: "sine.inOut",
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
          ease: "power2.out",
        });
      };

      titleElement.addEventListener("mousemove", handleMouseMove);
      titleElement.addEventListener("mouseleave", () => {
        gsap.to(titleElement, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        });
      });

      return () => {
        titleElement.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="hero-letter inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        // src="/assets/videos/hero.mp4"

        src='https://www.pexels.com/download/video/8213321/'
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none"></div>

      {/* Dark overlay for better text visibility (optional) */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Hero Content */}
      <div
        ref={heroRef}
        className="text-center max-w-6xl mx-auto relative z-10"
      >
        <h1
          ref={titleRef}
          className="text-hero mb-8 font-light perspective-1000"
        >
          {/* First line */}
          <div className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-wrap justify-center">
            {splitText("QUALITY")}
            <span className="mx-2 sm:mx-4 md:mx-6"></span>
            {splitText("TILES")}
          </div>

          {/* Second line */}
          <div className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex flex-wrap justify-center">
            {splitText("PREMIUM")}
            <span className="mx-2 sm:mx-4 md:mx-6"></span>
            <span className="font-medium">{splitText("ROOFING")}</span>
          </div>
        </h1>


        <div className="hero-subtitle space-y-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base lg:text-lg font-light opacity-70 tracking-wide">

            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              KALPETTA
            </span>
            <span className="hidden sm:inline">•</span>

            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              WAYANAD
            </span>
            <span className="hidden sm:inline">•</span>

            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              KERALA
            </span>
            <span className="hidden sm:inline">•</span>

            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              BYPASS ROAD
            </span>
            <span className="hidden sm:inline">•</span>

            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              97441 34363
            </span>
            <span className="hidden sm:inline">•</span>

            <span className="hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              96562 72272
            </span>

          </div>
        </div>

      </div>




      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="hero-subtitle flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent opacity-50 animate-pulse"></div>
          <div className="mt-2 text-xs letter-spaced opacity-40">SCROLL</div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
