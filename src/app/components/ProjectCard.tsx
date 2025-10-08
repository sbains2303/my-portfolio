import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

const projects = [
  { title: "Portfolio Omptimisation Tool", description: "Risk analysis analysis app", tech: ["Python", "Streamlit"], link: "#" },
  { title: "Blockchain Voting", description: "Decentralised voting platform", tech: ["React", "Solidity", "Ethereum"], link: "#" },
  { title: "Game Of Life", description: "Simulation of Conway's Game of Life", tech: ["Golang", "AWS EC2"], link: "#" },
  { title: "Sensor-Based Model for UAV GPS Spoofing Detection", description: "Research project on UAV security", tech: ["Python", "PX4", "PyTorch"], link: "#" },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, link }) => (
  <div className="bg-gray-900 hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-lg rounded-xl p-6 md:p-8 w-full max-w-md mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{title}</h2>
    <p className="text-gray-300 text-lg mb-4">{description}</p>
    <div className="mb-4 flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm md:text-base"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default function ProjectsPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 py-12">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </section>
  );
}
