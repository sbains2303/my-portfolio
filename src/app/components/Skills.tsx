"use client";
import { useState, useEffect } from "react";
import { FiCode, FiGlobe, FiBarChart2, FiShield, FiCloud } from "react-icons/fi";

const skillCategories = {
  "Programming Languages": {
    icon: <FiCode size={28} className="text-blue-500" />,
    skills: ["Python", "Java", "Golang", "C", "Haskell", "JavaScript", "TypeScript"],
  },
  "Web Development": {
    icon: <FiGlobe size={28} className="text-blue-500" />,
    skills: ["React.js", "Next.js", "Flask", "HTML", "CSS", "Tailwind CSS", "Jinja2", "Web3.js", "Solidity"],
  },
  "Data Science & Modeling": {
    icon: <FiBarChart2 size={28} className="text-blue-500" />,
    skills: ["Pandas", "NumPy", "Matplotlib", "PyTorch", "ARIMA", "GARCH", "Machine Learning", "Deep Learning", "Data Visualization", "Financial Modeling"],
  },
  "Security & Embedded Systems": {
    icon: <FiShield size={28} className="text-blue-500" />,
    skills: ["Cryptography", "AES", "Firmware", "Embedded Systems", "Side-Channel Analysis", "PicoScope", "Network Security", "Cybersecurity"],
  },
  "Cloud & Blockchain": {
    icon: <FiCloud size={28} className="text-blue-500" />,
    skills: ["AWS", "EC2", "Ethereum", "Blockchain", "Smart Contracts", "Ganache"],
  },
};

export default function Skills() {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const allSkills = Object.values(skillCategories).flatMap(cat => cat.skills);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleIndex(index);
      index += 1;
      if (index >= allSkills.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <h2 className="text-5xl md:text-6xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
        Skills
      </h2>
      <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
        Here are a few technologies and tools I’ve worked with in past projects.
      </p>

      <div className="w-full max-w-5xl px-4 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillCategories).map(([category, data], idx) => {
          const delay = idx * 0.2;
          return (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm dark:shadow-none flex flex-col items-center transition-colors duration-300 opacity-0 animate-fadeIn"
              style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
            >
              <div className="mb-3">{data.icon}</div>
              <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400 mb-4">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {data.skills.map((skill) => {
                  const globalIndex = allSkills.indexOf(skill);
                  return (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-gray-900 dark:text-gray-100 text-sm font-medium border transition-all duration-300
                        ${
                          globalIndex <= visibleIndex
                            ? "opacity-100 border-blue-200 dark:border-blue-700"
                            : "opacity-0"
                        }
                        hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-800 cursor-default`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-duration: 0.5s;
        }
      `}</style>
    </section>
  );
}
