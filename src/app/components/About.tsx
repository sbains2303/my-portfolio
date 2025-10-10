"use client";
import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisible((v) => [true, v[1], v[2]]), 300),
      setTimeout(() => setVisible((v) => [v[0], true, v[2]]), 600),
      setTimeout(() => setVisible((v) => [v[0], v[1], true]), 900),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const highlightClass = "text-blue-600 dark:text-blue-400 font-semibold";

  return (
    <section className="relative flex flex-col items-center py-16 px-6 overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div
        className="absolute inset-0 -z-10 opacity-30 dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle at top left, #e0f2ff, #f8fafc)",
        }}
      ></div>

      <div className="relative w-full flex flex-col items-center mb-12">
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 text-center">
          About Me
        </h2>
        <div className="w-24 h-1 bg-blue-500 dark:bg-blue-400 rounded-full opacity-70"></div>
      </div>

      <p
        className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mb-6 transition-opacity duration-1000 ${
          visible[0] ? "opacity-100" : "opacity-0"
        }`}
      >
        I’m a <span className={highlightClass}>First-Class Computer Science graduate</span> from the
        University of Bristol with experience in <span className={highlightClass}>data-driven software engineering</span> and
        <span className={highlightClass}> full-stack development</span>.
      </p>

      <p
        className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mb-6 transition-opacity duration-1000 ${
          visible[1] ? "opacity-100" : "opacity-0"
        }`}
      >
        My technical expertise spans <span className={highlightClass}>Python</span>, <span className={highlightClass}>Java</span>, <span className={highlightClass}>Golang</span>,
        <span className={highlightClass}> React</span>, <span className={highlightClass}>SQL</span>, and <span className={highlightClass}>AWS</span>.
      </p>

      <p
        className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl transition-opacity duration-1000 ${
          visible[2] ? "opacity-100" : "opacity-0"
        }`}
      >
        Beyond coding, I’m passionate about <span className={highlightClass}>AI research</span> and <span className={highlightClass}>data visualization</span>. Please don't hesitate to reach out for collaboration or opportunities!
      </p>
    </section>
  );
}