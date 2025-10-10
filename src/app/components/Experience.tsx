"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "University of Bristol",
    subtitle: "BSc Computer Science (<strong>First-Class Honours</strong>)",
    description:
      "Specialised in software engineering, data science, and cybersecurity. Awarded <strong>80/100</strong> for dissertation and <strong>recommended for academic publication</strong>. Modules included: Algorithms, Object-Oriented Programming, Data-Driven, Computer Systems, Cryptology, Security Behaviors, Machine Learning",
    date: "Oct 2022 – Jul 2025",
    details: [
      "Dissertation: Developed a custom lightweight Dynamic Graph Convolutional Neural Network (DGCNN) for UAV GPS spoofing detection.",
      "Conducted over <strong>150 hours</strong> of literature review on UAV spoofing detection and payload delivery research.",
      "Simulated <strong>13+ hours</strong> of UAV missions in PX4 SITL and Gazebo, including a sinusoidal drift spoofing attack.",
      "Authored <strong>700+ lines of comparative code</strong> to benchmark against baseline neural networks.",
    ],
    image: "/Op1.png",
  },
  {
    title: "Data Annotator – DataAnnotation",
    subtitle: "AI Training Data Contributor",
    description:
      "Enhanced AI model accuracy by curating and verifying high-quality datasets for text and image classification tasks.",
    date: "Feb 2024 – May 2024",
    details: [
      "Reviewed, labelled, and validated complex datasets to train and fine-tune large language models.",
      "Contributed to <strong>natural language processing (NLP)</strong> and <strong>computer vision</strong> tasks, improving precision of model outputs.",
      "Collaborated asynchronously with a distributed team, meeting quality and consistency standards.",
    ],
    image: "/annotation.png",
  },
  {
    title: "Software Engineer – Chatbot Platform",
    subtitle: "Team Project (Python, Flask, MySQL, ChatGPT API)",
    description:
      "Collaboratively engineered an API-integrated chatbot system for real-time interactions, showcasing full-stack development and client-focused delivery.",
    date: "Oct 2023 – May 2024",
    details: [
      "Built a modular chatbot platform using <strong>Python and Flask</strong>, integrating the <strong>ChatGPT API</strong> for intelligent query handling.",
      "Combined <strong>structured MySQL data</strong> with language model responses to improve contextual accuracy and personalization.",
      "Developed a public-facing <strong>recipe chatbot website</strong> supporting document uploads and varied conversational flows.",
      "Delivered a fully functional <strong>production prototype</strong> within deadlines, strengthening teamwork and client communication skills.",
      "Demonstrated ability to bridge algorithmic AI responses with backend data-driven logic for robust system design.",
    ],
    image: "/Chatbots.png",
  },
];

export default function Experience() {
  return (
    <section className="relative py-24 text-white">
      {/* Stronger bold text styling */}
      <style>{`
        section strong {
          color: #93c5fd; /* Tailwind blue-300 */
          font-weight: 800;
        }
      `}</style>

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

      <h3
        className="text-2xl font-semibold text-blue-300 mb-2"
        dangerouslySetInnerHTML={{ __html: exp.title }}
      />
      <p
        className="text-gray-300 italic mb-2"
        dangerouslySetInnerHTML={{ __html: exp.subtitle }}
      />
      <p
        className="text-gray-400 mb-3"
        dangerouslySetInnerHTML={{ __html: exp.description }}
      />

      {exp.details && (
        <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
          {exp.details.map((d: string, i: number) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: d }} />
          ))}
        </ul>
      )}

      {exp.image && (
        <img
          src={exp.image}
          alt={exp.title}
          className="mt-3 rounded-lg shadow-lg w-full max-h-64 object-cover border border-gray-700"
        />
      )}

      <span className="text-xs text-blue-400">{exp.date}</span>
    </motion.div>
  );
}