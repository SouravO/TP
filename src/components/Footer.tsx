import React from "react";

export default function Footer() {
  return (
    <>



      <footer className="bg-[#0b0b0b] text-white px-6 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left: Call to Action */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Have a Cool Idea? <br />
              Let’s Collaborate<span className="text-red-600">.</span>
            </h2>

            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              Get In Touch
              <span className="bg-red-600 text-white ml-2 px-1 py-0.5 rounded-full text-sm text-[17px]">+</span>
            </button>

          </div>

          {/* Right: Info Grid 2x2 */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-gray-300">
            {/* Location */}
            <div className="" >
              <h4 className="text-white font-semibold mb-2 text-[17px]">Location</h4>
              <p>
                1330 Huffman Rd, Anchorage,
                <br />
                Alask, United States
              </p>
            </div>

            {/* Contact */}
            <div className="self-end text-right">
              <h4 className="text-white font-semibold mb-2 text-[17px]">Contact</h4>
              <p className="ml-1  text-[15px]">+661 2058 6987 20</p>
              <p className="ml-1 text-[15px]">Hello@Studio.com</p>
            </div>

            {/* Social */}
            <div className="mt-3">
              <h4 className="text-white font-semibold mb-2 text-[17px]">Social</h4>
              <ul className="space-y-1">
                {["Instagram", "X. Twitter/X", "YouTube", "Pinterest"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-red-600 text-[14px]">●</span>
                    <p className="ml-1  text-[15px]"> {item}</p>
                    {/* <span className="text-red-600 text-sm">●</span> {item} */}
                  </li>
                ))}
              </ul>
            </div>

            {/* Helpful Links */}
            <div className="self-end text-right mt-3">
              <h4 className="text-white font-semibold mb-2 text-[17px]">Helpful Links</h4>
              <ul className="space-y-1">
                {["Privacy Policy", "About", "Services", "Work", "Blog"].map((link) => (
                  <li key={link} className="flex items-center justify-end gap-2">
                    <span className="text-red-600 text-[14px]">●</span>
                    <p className="text-[15px]"> {link}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-500">
          &copy; Studiogram 2025 • All rights reserved.
        </div>
      </footer >
    </>
  );
}
