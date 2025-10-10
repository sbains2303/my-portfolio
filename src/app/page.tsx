import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsPage from "./components/ProjectCard";
import Experience from "./components/Experience";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col text-white scroll-smooth overflow-x-hidden">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow">
        <section id="Home" className="w-full min-h-screen relative">
          <Hero />
        </section>

        <section id="About" className="w-full relative">
          <About />
        </section>

        <section id="Projects" className="w-full min-h-screen relative">
          <ProjectsPage />
        </section>

        <section id="Experience" className="w-full min-h-screen relative">
          <Experience />
        </section>

        <section id="Skills" className="w-full relative">
          <Skills />
        </section>

        <section id="Contact" className="w-full min-h-screen relative">
          <Contact />
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-900 text-center text-gray-400">
        © {new Date().getFullYear()} Saihajpreet Bains. All rights reserved.
      </footer>
    </div>
  );
}

