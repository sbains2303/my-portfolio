"use client";
import { useState, useEffect } from "react";

const skills = [
  "Python",
  "Java",
  "Golang",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "SQL",
  "AWS",
];

export default function Skills() {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleIndex(index);
      index += 1;
      if (index >= skills.length) clearInterval(interval);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center py-16">
      {/* Skills header */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-blue-400 mb-8">
        Skills
      </h2>

      {/* Intro text */}
      <p className="text-center text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
        Here’s a snapshot of my technical skill set — technologies I’ve worked
        with and enjoy building with.
      </p>

      {/* Skills list */}
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span
            key={skill}
            className={`px-4 py-2 rounded-full text-white font-semibold transition-all duration-300 
              ${idx <= visibleIndex ? "opacity-100 bg-blue-600" : "opacity-0"}
              hover:scale-110 hover:bg-blue-500 cursor-pointer`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
