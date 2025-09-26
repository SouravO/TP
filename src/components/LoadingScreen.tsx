import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "../../public/Tp-Logo.png";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const logoElement = logoRef.current;

    if (logoElement) {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsComplete(true);
          setTimeout(onComplete, 500);
        },
      });

      // Initial state
      gsap.set(".loading-logo", { opacity: 0, scale: 0.8 });

      // Animate logo
      tl.to(".loading-logo", {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
      })
        .to(
          ".loading-logo",
          {
            opacity: 0.7,
            duration: 0.5,
          },
          "+=0.5"
        )
        .to(".loading-logo", {
          opacity: 1,
          duration: 0.3,
        })
        .to(logoElement, {
          scale: 1.05,
          duration: 0.3,
        })
        .to(logoElement, {
          scale: 1,
          duration: 0.3,
        });
    }
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div ref={logoRef} className="text-center">
        <img
          src={logo}
          alt="Logo"
          className="loading-logo w-48 h-auto md:w-64 lg:w-80 mx-auto"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
