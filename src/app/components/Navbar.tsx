"use client";
import { useState, useEffect, useRef } from "react";

const sections = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Track visible section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          const offsetBottom = offsetTop + el.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Move slider bubble
  useEffect(() => {
    const index = sections.indexOf(activeSection);
    const btn = buttonRefs.current[index];
    if (btn) {
      const left = btn.offsetLeft;
      const width = btn.offsetWidth;
      setSliderStyle({ left, width });
    }
  }, [activeSection]);

  const handleClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg z-50">
      <div className="relative inline-flex space-x-6">
        {/* Gradient Bubble Slider */}
        <span
          className="absolute top-0 bottom-0 rounded-full transition-all duration-500"
          style={{
            width: sliderStyle.width,
            left: sliderStyle.left,
            background:
              "linear-gradient(90deg, #4f46e5, #3b82f6, #06b6d4, #22c55e)",
            opacity: 0.3,
          }}
        />

        {/* Navigation Buttons */}
        {sections.map((section, idx) => (
          <button
            key={section}
            ref={(el) => {
              buttonRefs.current[idx] = el;
            }}
            onClick={() => handleClick(section)}
            className={`relative z-10 px-4 py-1 text-white transition-colors duration-300 ${
              activeSection === section ? "text-blue-400 font-semibold" : "hover:text-blue-300"
            }`}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  );
}
