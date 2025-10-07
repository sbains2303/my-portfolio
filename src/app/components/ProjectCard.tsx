import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, link }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700 mb-2">{description}</p>
    <div className="mb-2">
      {tech.map((t) => (
        <span key={t} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 text-xs">
          {t}
        </span>
      ))}
    </div>
    <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </div>
);

const projects = [
  { title: "Portfolio Omptimisation Tool", description: "Risk analysis analysis app", tech: ["Python", "Streamlit"], link: "#" },
  { title: "Blockchain Voting", description: "Decentralized app", tech: ["React", "Solidity"], link: "#" },
];

export default function ProjectsPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </section>
  );
}