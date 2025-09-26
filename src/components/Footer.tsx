import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Animate footer elements on scroll
    gsap.fromTo(
      ".footer-element",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-container",
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <footer className="footer-container py-20 px-6 border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="footer-element text-4xl md:text-6xl lg:text-7xl font-light letter-spaced-wide mb-8">
            LET'S CREATE
          </h2>
          <p className="footer-element text-xl md:text-2xl font-light opacity-70 mb-8">
            Ready to build something amazing?
          </p>
          <button className="footer-element text-sm font-light letter-spaced border border-primary px-12 py-4 hover:bg-primary hover:text-background transition-tp">
            GET QUOTE
          </button>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="footer-element text-center md:text-left">
            <h3 className="text-sm letter-spaced mb-4 opacity-50">CONTACT</h3>
            <p className="text-lg font-light">97441 34363</p>
            <p className="text-lg font-light">96562 72272</p>
            <p className="text-sm font-light mt-2">
              Bypass Road, Kalpetta, Wayanad
            </p>
            <p className="text-xs font-light opacity-70">
              GSTIN: 32AAEFT1442R1ZZ
            </p>
          </div>

          <div className="footer-element text-center">
            <h3 className="text-sm letter-spaced mb-4 opacity-50">FOLLOW</h3>
            <div className="space-x-6">
              <a
                href="#"
                className="text-lg font-light hover:opacity-70 transition-tp-fast"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-lg font-light hover:opacity-70 transition-tp-fast"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-lg font-light hover:opacity-70 transition-tp-fast"
              >
                Twitter
              </a>
            </div>
          </div>

          <div className="footer-element text-center md:text-right">
            <h3 className="text-sm letter-spaced mb-4 opacity-50">LOCATION</h3>
            <p className="text-lg font-light">Kerala,  </p>
            <p className="text-lg font-light">India  </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-element border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-50">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; 2025 TP Tiles Centre (TP Metals and Roofings). All rights
              reserved.
            </p>
          </div>
          <div className="space-x-8">
            <a href="#" className="hover:opacity-70 transition-tp-fast">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-70 transition-tp-fast">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
