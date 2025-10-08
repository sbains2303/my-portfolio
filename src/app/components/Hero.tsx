"use client";
import { useState, useEffect } from "react";

const descriptors = ["Computer Science Graduate", "Software Engineer", "Full-Stack Developer"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % descriptors.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
      {/* Radial gradient background using inline style */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at center, #1e3a8a, #1e40af, #0f172a)",
        }}
      ></div>

      <h1
        className="text-6xl md:text-7xl font-extrabold text-white mb-8"
        style={{ fontFamily: "'San Francisco', sans-serif" }}
      >
        Hi, I’m Saihajpreet
      </h1>

      <p className="text-3xl md:text-4xl font-semibold text-white mb-4">
        I’m a{" "}
        <span
          className={`transition-opacity duration-500 inline-block ${
            fade ? "opacity-100" : "opacity-0"
          } text-blue-400`}
        >
          {descriptors[currentIndex]}
        </span>
      </p>

      <p className="text-xl md:text-2xl font-medium text-blue-300 max-w-3xl mx-auto">
        Passionate about building modern applications with AI, web technologies, and scalable backend systems.
      </p>
    </section>
  );
}
