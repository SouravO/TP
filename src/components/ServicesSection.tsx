import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const services = [
    {
      id: 1, title: "STONE CONSULTING", description: `At Quartz Stone Company, we understand the importance of sourcing high-quality stone for your projects. With our extensive network and deep knowledge of the industry, we accurately select the finest stones from around the world. Our commitment to sourcing ensures that every piece we work with meets the highest standards of beauty, durability, and sustainability.`,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2, title: "DIGITAL FABRICATION", description: `At Quartz Stone Company, we understand the importance of sourcing high-quality stone for your projects. With our extensive network and deep knowledge of the industry, we accurately select the finest stones from around the world. Our commitment to sourcing ensures that every piece we work with meets the highest standards of beauty, durability, and sustainability.`,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "STONE SOURCING",
      description: `At Quartz Stone Company, we understand the importance of sourcing high-quality stone for your projects. With our extensive network and deep knowledge of the industry, we accurately select the finest stones from around the world. Our commitment to sourcing ensures that every piece we work with meets the highest standards of beauty, durability, and sustainability.`,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4, title: "PROJECT INSTALLATION", description: `At Quartz Stone Company, we understand the importance of sourcing high-quality stone for your projects. With our extensive network and deep knowledge of the industry, we accurately select the finest stones from around the world. Our commitment to sourcing ensures that every piece we work with meets the highest standards of beauty, durability, and sustainability.`,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5, title: "FINE ART FABRICATION", description: `At Quartz Stone Company, we understand the importance of sourcing high-quality stone for your projects. With our extensive network and deep knowledge of the industry, we accurately select the finest stones from around the world. Our commitment to sourcing ensures that every piece we work with meets the highest standards of beauty, durability, and sustainability.`,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6, title: "STONE CLADDING", description: `At Quartz Stone Company, we understand the importance of sourcing high-quality stone for your projects. With our extensive network and deep knowledge of the industry, we accurately select the finest stones from around the world. Our commitment to sourcing ensures that every piece we work with meets the highest standards of beauty, durability, and sustainability.`,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7, title: "STONE RESTORATION", description: `At Quartz Stone Company, we understand the importance of sourcing high-quality stone for your projects. With our extensive network and deep knowledge of the industry, we accurately select the finest stones from around the world. Our commitment to sourcing ensures that every piece we work with meets the highest standards of beauty, durability, and sustainability.`,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
  ];

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    // Fade-in animation
    gsap.fromTo(
      sectionElement.querySelectorAll(".service-item"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionElement,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax effect
    ScrollTrigger.create({
      trigger: sectionElement,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        gsap.to(sectionElement, {
          y: self.progress * 40,
          duration: 0.3,
        });
      },
    });

    // Optional: subtle video scale effect
    if (videoRef.current) {
      ScrollTrigger.create({
        trigger: sectionElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(videoRef.current, {
            scale: 1 + self.progress * 0.05,
            duration: 0.3,
          });
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/stone-background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>

      <div className="relative z-20 max-w-6xl mx-auto px-6 py-20">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-6xl md:text-8xl font-light letter-spaced-wide mb-8 hover:tracking-widest transition-all duration-700 cursor-pointer inline-block">
            Services
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        <div className="absolute top-1/4 right-1/4 w-1 h-24 bg-primary/30 transform rotate-12 animate-pulse"></div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={service.id} className="service-item">
              <div
                className="flex items-center justify-between cursor-pointer border-b border-gray-700 py-4"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="text-xl font-semibold text-[#4895ef]">
                  {String(service.id).padStart(2, "0")} &nbsp; {service.title}
                </span>
                <span className="text-2xl text-[#4895ef]">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>


              <AnimatePresence initial={false}>
                {activeIndex === index && service.description && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-900/80 px-6 py-8 rounded-lg mt-4 flex flex-col md:flex-row gap-6 backdrop-blur-sm">
                      {service.image && (
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="w-full md:w-1/2 rounded-lg object-cover"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-6">{service.description}</p>
                        <button className="group border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition relative overflow-hidden">
                          <span className="relative z-10">LEARN MORE</span>
                          <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-1 h-24 bg-primary/30 transform rotate-12 animate-pulse"></div>

    </section>
  );
};

export default ServicesSection;
