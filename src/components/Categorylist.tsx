import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  {
    title: "ALL",
    count: 23,
    images: [
      "https://images.unsplash.com/photo-1683629357846-30eacff8f615?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hcmJsZSUyMGZsb29yfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1678373454088-8f75ac778fbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmJsZSUyMGZsb29yfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1550053808-52a75a05955d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hcmJsZSUyMGZsb29yfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1594706240576-1f668f6b1bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFyYmxlJTIwZmxvb3J8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    title: "MIX",
    count: 14,
    images: [
      "https://plus.unsplash.com/premium_photo-1722048810826-751afbcc98c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3JzfGVufDB8fDB8fHww",
      "https://media.istockphoto.com/id/2160552278/photo/elevated-with-wall-texture-mirror-shoe-cabinet-in-modern-entry-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=JaSmeuVzpuhEVxncW_fffTzm_i6uyZA7xV4DwuLa1fE=",
      "https://images.unsplash.com/photo-1616593918824-4fef16054381?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3JzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1615875474908-f403116f5287?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGludGVyaW9yc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    title: "SOUND DESIGN",
    count: 11,
    images: [
      "https://images.unsplash.com/photo-1589271243958-d61e12b61b97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1722034552807-6c8ede1aefca?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/1685858119/photo/3d-rendering-luxury-bedroom-suite-in-hotel-with-tv-and-cabinet-and-wardrobe.jpg?s=612x612&w=0&k=20&c=7zCJzCBK89YNx1eFgIaYyPsJPp0OuJs3bI-_TGauLvc=",
    ],
  },
  {
    title: "MUSIC",
    count: 7,
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://media.istockphoto.com/id/1990444472/photo/scandinavian-style-cozy-living-room-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=F5A3eF6myaJpITu5ABnGqNjacGWYskuxeZviU-KpxPE=",
      "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1522444195799-478538b28823?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
];

export default function CategoryCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const detailsRef = useRef<HTMLDivElement[]>([]);
  const bentoRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create timeline for the entire sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=400%", // 4x the viewport height for smooth progression
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Initial state - set all cards to default
    gsap.set(cardsRef.current, {
      scale: 1,
      color: "#000000",
      backgroundColor: "transparent",
      padding: "0.5rem",
      borderRadius: "0rem",
    });

    gsap.set(detailsRef.current, {
      opacity: 0,
      y: 10,
    });

    // Set initial state for bento grids - all hidden except first
    gsap.set(bentoRef.current, {
      opacity: 0,
      scale: 0.9,
    });

    if (bentoRef.current[0]) {
      gsap.set(bentoRef.current[0], {
        opacity: 1,
        scale: 1,
      });
    }

    // Create expanding sequence for each category
    categories.forEach((cat, index) => {
      const progress = index / (categories.length - 1);
      const startProgress = progress;
      const endProgress = Math.min(progress + 0.25, 1);

      // Expand current card
      tl.to(
        cardsRef.current[index],
        {
          scale: 1.05,
          color: "#ffffff",
          backgroundColor: "#000000",
          padding: "1.5rem",
          borderRadius: "1rem",
          duration: 0.3,
          ease: "power2.out",
        },
        startProgress
      )
        // Show details
        .to(
          detailsRef.current[index],
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          },
          startProgress + 0.1
        )
        // Show bento grid for current category
        .to(
          bentoRef.current[index],
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          startProgress + 0.05
        );

      // Contract previous cards (except on first iteration)
      if (index > 0) {
        tl.to(
          cardsRef.current[index - 1],
          {
            scale: 1,
            color: "#000000",
            backgroundColor: "transparent",
            padding: "0.5rem",
            borderRadius: "0rem",
            duration: 0.2,
            ease: "power2.in",
          },
          startProgress
        )
          .to(
            detailsRef.current[index - 1],
            {
              opacity: 0,
              y: 10,
              duration: 0.15,
              ease: "power2.in",
            },
            startProgress
          )
          // Hide previous bento grid
          .to(
            bentoRef.current[index - 1],
            {
              opacity: 0,
              scale: 0.9,
              duration: 0.2,
              ease: "power2.in",
            },
            startProgress
          );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  };

  const addToDetailsRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) detailsRef.current[index] = el;
  };

  const addToBentoRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) bentoRef.current[index] = el;
  };

  return (
    <>
      {/* Pinned fullscreen section */}
      <div
        ref={containerRef}
        className="h-screen bg-black flex items-center justify-between gap-10 p-10 font-bold uppercase tracking-tight z-[1000]"
      >
        {/* Left side - Categories */}
        <div className="flex flex-col items-start gap-6 flex-1">
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              ref={(el) => addToRefs(el, index)}
              className="flex flex-col items-start transition-all duration-300 ease-out"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                padding: "0.5rem",
                borderRadius: "0rem",
              }}
            >
              <span
                className={`${cat.title === "ALL"
                    ? "text-[8rem]"
                    : cat.title === "SOUND DESIGN"
                      ? "text-4xl"
                      : "text-6xl"
                  } leading-none`}
              >
                {cat.title}
              </span>

              <div
                ref={(el) => addToDetailsRefs(el, index)}
                className="mt-2 text-base text-gray-300"
                style={{ opacity: 0, transform: "translateY(10px)" }}
              >
                <p>
                  Expanded view for <b>{cat.title}</b> — Count: {cat.count}
                </p>
                <p className="text-sm opacity-80">
                  You can show more details, links, or stats here.
                </p>
              </div>

              <span className="text-xs opacity-60">({cat.count})</span>
            </div>
          ))}
        </div>

        {/* Right side - Bento Grid */}
        <div className="flex-1 relative h-full flex items-center justify-center">
          {categories.map((cat, index) => (
            <div
              key={`bento-${cat.title}`}
              ref={(el) => addToBentoRefs(el, index)}
              className="absolute inset-0 grid grid-rows-4 gap-4 p-8"
              style={{
                opacity: index === 0 ? 1 : 0,
                transform: index === 0 ? "scale(1)" : "scale(0.9)",
              }}
            >
              {/* Top image - 1 */}
              <div className="row-span-1 rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                <img
                  src={cat.images[0]}
                  alt={`${cat.title} image 1`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle images - 2 */}
              <div className="row-span-2 grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                  <img
                    src={cat.images[1]}
                    alt={`${cat.title} image 2`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                  <img
                    src={cat.images[2]}
                    alt={`${cat.title} image 3`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom image - 1 */}
              <div className="row-span-1 rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                <img
                  src={cat.images[3]}
                  alt={`${cat.title} image 4`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
