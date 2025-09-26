import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GlobalSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      // Enhanced city animation with 3D rotation
      gsap.fromTo(
        ".city-name",
        { opacity: 0, scale: 0.5, rotationY: 180, z: -200 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          z: 0,
          duration: 1.5,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionElement,
            start: "top 60%",
            end: "bottom 40%",
          },
        }
      );

      // Complex floating animation with rotation
      gsap.to(".city-name", {
        y: -15,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: "sine.inOut",
      });

      // Mouse interaction effects
      const cityElements = sectionElement.querySelectorAll(".city-name");
      cityElements.forEach((city, index) => {
        city.addEventListener("mouseenter", () => {
          gsap.to(city, {
            scale: 1.3,
            rotationY: 15,
            z: 50,
            color: "hsl(var(--primary))",
            duration: 0.4,
            ease: "power2.out",
          });

          // Ripple effect on surrounding cities
          cityElements.forEach((otherCity, otherIndex) => {
            if (Math.abs(otherIndex - index) === 1) {
              gsap.to(otherCity, {
                scale: 1.1,
                opacity: 0.7,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });
        });

        city.addEventListener("mouseleave", () => {
          gsap.to(city, {
            scale: 1,
            rotationY: 0,
            z: 0,
            color: "hsl(var(--foreground))",
            duration: 0.4,
            ease: "power2.out",
          });

          // Reset surrounding cities
          cityElements.forEach((otherCity, otherIndex) => {
            if (Math.abs(otherIndex - index) === 1) {
              gsap.to(otherCity, {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });
        });
      });
    }
  }, []);

  const cities = [
    { name: "H", fullName: "Hong Kong" },
    { name: "o", fullName: "" },
    { name: "n", fullName: "" },
    { name: "g", fullName: "" },
    { name: "K", fullName: "" },
    { name: "o", fullName: "" },
    { name: "n", fullName: "" },
    { name: "g", fullName: "" },
    { name: "D", fullName: "Dubai" },
    { name: "u", fullName: "" },
    { name: "b", fullName: "" },
    { name: "a", fullName: "" },
    { name: "i", fullName: "" },
    { name: "Z", fullName: "Zurich" },
    { name: "u", fullName: "" },
    { name: "r", fullName: "" },
    { name: "i", fullName: "" },
    { name: "c", fullName: "" },
    { name: "h", fullName: "" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Dynamic background grid */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-primary animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8 mb-16 perspective-1000">
          {cities.map((city, index) => (
            <div key={index} className="city-name cursor-pointer group">
              <div className="text-6xl md:text-8xl font-light mb-2 transition-all duration-300 group-hover:text-primary">
                {city.name}
              </div>
              {city.fullName && (
                <div className="text-xs letter-spaced opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {city.fullName}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-light letter-spaced hover:tracking-widest transition-all duration-700 cursor-pointer">
              TP TILES CENTRE
            </h2>
            <div
              className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full animate-spin"
              style={{ animationDuration: "15s" }}
            ></div>
          </div>

          <p className="text-xl font-light opacity-70 max-w-3xl mx-auto leading-relaxed hover:opacity-100 transition-opacity duration-500 cursor-pointer">
            Your trusted partner for premium tiles, metals, and roofing
            solutions in Wayanad. Quality products and expert service for all
            your construction needs.
          </p>

          <div className="flex justify-center space-x-8 mt-12">
            {["TILES", "METALS", "ROOFING"].map((service, index) => (
              <div key={service} className="group cursor-pointer">
                <div className="w-2 h-2 bg-primary rounded-full mb-2 group-hover:scale-150 transition-transform duration-300"></div>
                <div className="text-xs letter-spaced opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
