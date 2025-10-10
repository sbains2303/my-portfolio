"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  link: string;
};

const projects: ProjectCardProps[] = [
  {
    title: "Portfolio Optimisation Tool",
    description: "",
    fullDescription:
      "Built a sleek Python and Streamlit web app for interactive portfolio risk analysis. Fused real-time financial data via YFinance, applied ARIMA/GARCH models for forecasting, ran risk simulations (VaR, CVaR, drawdown, stress tests), visualized asset correlations, and recommended optimal allocations tailored to predicted returns and volatility.",
    tech: ["Python", "Streamlit", "Financial Modeling", "ARIMA", "GARCH", "Data Visualization"],
    image: "/portfolio_light.png",
    link: "#",
  },
  {
    title: "Blockchain Voting",
    description: "",
    fullDescription:
      "Crafted a decentralized voting platform leveraging Solidity smart contracts for secure and transparent elections. Engineered a React frontend with Web3.js to handle user registration, voting, and administrative tasks. Integrated real-time vote tracking with visualization, and deployed contracts on Ethereum, testing locally via Ganache for reliability.",
    tech: ["React", "Solidity", "Ethereum", "Web3.js"],
    image: "/blockchain.png",
    link: "#",
  },
  {
    title: "Game Of Life",
    description: "",
    fullDescription:
      "Engineered a parallelized version of Conway’s Game of Life in Golang, dramatically improving performance over single-threaded execution. Designed a worker-thread architecture to split computations across processes, cutting runtime by 40%. Added PGM file outputs and AWS-powered computation for large-scale interactive simulations.",
    tech: ["Golang", "AWS EC2", "Distributed Systems"],
    image: "/game_of_life.mp4",
    link: "#",
  },
  {
    title: "Embedded AES / Side-Channel Analysis",
    description: "",
    fullDescription:
      "Implemented AES-128 firmware on a SCALE development board as a secure co-processor prototype. Captured and analyzed power traces using a PicoScope 2206B to perform Differential Power Analysis (DPA) attacks. Introduced masking-based countermeasures to strengthen security while maintaining efficiency, and documented design trade-offs for future enhancements.",
    tech: ["C", "Cryptography", "PicoScope", "AES", "Embedded Systems"],
    image: "/scale_trace.png",
    link: "#",
  },
  {
    title: "Playlist Generator",
    description: "",
    fullDescription:
      "Created a web app that curates Spotify playlists based on user preferences like genre or artist. Integrated the Spotify API via axios for secure data access and personalization. Designed a responsive, interactive frontend using React.js, HTML, CSS, and JavaScript for smooth playlist exploration and interaction.",
    tech: ["React.js", "JavaScript", "CSS", "Spotify API"],
    image: "/playlist.png",
    link: "#",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
  },
};

// ParallaxMedia component
const ParallaxMedia = ({ src, title }: { src: string; title: string }) => {
  // Only use framer-motion hooks in client components
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  if (title === "Game Of Life") {
    return (
      <motion.video
        style={{ y }}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-64 md:h-80 object-contain"
      />
    );
  }

  if (title === "Playlist Generator") {
    return (
      <motion.div
        style={{ y }}
        className="w-full h-64 md:h-80 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 flex items-center justify-center"
      >
        <span className="text-white text-6xl animate-pulse">🎵</span>
      </motion.div>
    );
  }

  return (
    <motion.img
      style={{ y }}
      src={src}
      alt={title}
      className="w-full h-64 md:h-80 object-contain transition-transform duration-700 hover:scale-105"
    />
  );
};

const ProjectCard: React.FC<ProjectCardProps & { index: number }> = ({
  title,
  description,
  fullDescription,
  tech,
  image,
  index,
}) => {
  const isReversed = index % 2 !== 0;
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 md:gap-16 p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-500 bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/40 dark:border-blue-800/40 backdrop-blur-xl`}
    >
      {/* Media */}
      <div className="md:w-1/2 w-full overflow-hidden rounded-2xl shadow-lg">
        <ParallaxMedia src={image} title={title} />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-3">
          {description}
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-200 leading-relaxed mb-6">
          {fullDescription}
        </p>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black py-24">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold text-center leading-tight md:leading-[1.2] mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
        Projects
      </motion.h2>

      <section className="flex flex-col gap-24 px-6 md:px-20 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </section>
    </div>
  );
}