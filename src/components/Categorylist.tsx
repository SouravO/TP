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
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
    ],
  },
  {
    title: "MIX",
    count: 14,
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1574790398149-c0ccb19e8a93?w=400&h=200&fit=crop",
      "https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=400&h=300&fit=crop",
    ],
  },
  {
    title: "SOUND DESIGN",
    count: 11,
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop&hue=180",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop&hue=60",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop&hue=120",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop&hue=240",
    ],
  },
  {
    title: "MUSIC",
    count: 7,
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&sepia=100",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=200&fit=crop&sepia=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop&sepia=60",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop&sepia=40",
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
                className={`${
                  cat.title === "ALL"
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
