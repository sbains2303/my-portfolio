"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "University of Bristol",
    subtitle: "BSc Computer Science (First-Class Honours)",
    description:
      "Developed a strong foundation in software engineering, data science, and cybersecurity. Dissertation: Sensor-Based Model for UAV GPS Spoofing.",
    date: "Oct 2022 – Jul 2025",
  },
  {
    title: "Data Annotator – DataAnnotation",
    subtitle: "AI Training Data Contributor",
    description:
      "Created and verified datasets to improve AI model accuracy across text and image classification tasks.",
    date: "Feb 2024 – May 2024",
  },
  {
    title: "Software Engineer – Chatbot Platform",
    subtitle: "Team Project (Python, Flask, MySQL, ChatGPT API)",
    description:
      "Collaborated in a team to design and deliver a production-ready chatbot integrating database queries with natural language responses.",
    date: "Oct 2023 – May 2024",
  },
];

export default function Experience() {
  return (
    <section className="relative py-24  text-white">
      <h2 className="text-5xl font-bold text-center mb-16 text-blue-400">
        Experience
      </h2>
	  

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 w-1 bg-blue-600 h-full transform -translate-x-1/2" />

        {/* Timeline items */}
        <div className="flex flex-col space-y-32 relative z-10">
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index }: { exp: any; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative w-full flex items-start">
      {/* Left side */}
      <div className={`w-1/2 ${isLeft ? "flex justify-end pr-12" : ""}`}>
        {isLeft && <TimelineCard exp={exp} isLeft={isLeft} />}
      </div>

      {/* Center dot */}
      <div className="w-0 flex justify-center relative z-10">
        <motion.div
          className="w-5 h-5 bg-blue-400 rounded-full border-2 border-blue-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        />
      </div>

      {/* Right side */}
      <div className={`w-1/2 ${!isLeft ? "flex justify-start pl-12" : ""}`}>
        {!isLeft && <TimelineCard exp={exp} isLeft={isLeft} />}
      </div>
    </div>
  );
}

function TimelineCard({ exp, isLeft }: { exp: any; isLeft: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg w-[90%]"
    >
      {/* Arrow */}
      <div
        className={`absolute top-1/2 w-3 h-3 bg-gray-800 border border-gray-700 transform -translate-y-1/2 rotate-45 ${
          isLeft ? "right-[-6px]" : "left-[-6px]"
        }`}
      ></div>

      <h3 className="text-2xl font-semibold text-blue-300 mb-2">{exp.title}</h3>
      <p className="text-gray-300 italic mb-2">{exp.subtitle}</p>
      <p className="text-gray-400 mb-2">{exp.description}</p>
      <span className="text-xs text-blue-400">{exp.date}</span>
    </motion.div>
  );
}

