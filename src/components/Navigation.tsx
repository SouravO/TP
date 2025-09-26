import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Animate nav items on load
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.5 }
    );
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="nav-item">
          <h1 className="text-2xl font-light tracking-widest text-primary">
            TP
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          <a
            href="#culture"
            className="nav-item text-sm font-light letter-spaced hover:opacity-70 transition-tp-fast text-primary"
          >
            CULTURE
          </a>
          <a
            href="#projects"
            className="nav-item text-sm font-light letter-spaced hover:opacity-70 transition-tp-fast text-primary"
          >
            PROJECTS
          </a>
          <a
            href="#services"
            className="nav-item text-sm font-light letter-spaced hover:opacity-70 transition-tp-fast text-primary"
          >
            SERVICES
          </a>
          <a
            href="#careers"
            className="nav-item text-sm font-light letter-spaced hover:opacity-70 transition-tp-fast text-primary"
          >
            CAREERS
          </a>
        </div>

        {/* Contact Button */}
        <div className="nav-item">
          <button className="text-sm font-light letter-spaced hover:opacity-70 transition-tp-fast text-primary">
            LET'S TALK
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className="block w-full h-0.5 bg-primary transition-tp-fast"></span>
            <span className="block w-full h-0.5 bg-primary transition-tp-fast"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background p-6">
          <div className="flex flex-col space-y-6">
            <a
              href="#culture"
              className="text-sm font-light letter-spaced text-primary"
            >
              CULTURE
            </a>
            <a
              href="#projects"
              className="text-sm font-light letter-spaced text-primary"
            >
              PROJECTS
            </a>
            <a
              href="#services"
              className="text-sm font-light letter-spaced text-primary"
            >
              SERVICES
            </a>
            <a
              href="#careers"
              className="text-sm font-light letter-spaced text-primary"
            >
              CAREERS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
