import React, { useState, useEffect } from "react";

export default function AutamaticSliding() {

  const texts = [
    "DISCOVER THE WORLD IN A NEW WAY",
    "EXPLORE NEW HORIZONS EVERY DAY",
    "ADVENTURE AWAITS AROUND THE CORNER",
    "MAKE EVERY MOMENT COUNT",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // change text every 3 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full overflow-hidden bg-[#4361ee] py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...texts, ...texts].map((text, index) => (
          <span
            key={index}
            className="text-4xl md:text-5xl lg:text-5xl font-light mr-5 text-black "
          >
            {text}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>

  )
}
