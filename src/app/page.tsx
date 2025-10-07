import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsPage from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />
      <ProjectsPage />
      <h1 className="text-5xl font-bold mb-4 text-blue-600">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-700">
        Built with Next.js, TypeScript, and Tailwind CSS
      </p>
    </main>
  );
}

