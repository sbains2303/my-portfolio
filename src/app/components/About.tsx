"use client";

export default function About() {
  return (
    <section
      id="About"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 text-center"
    >
      {/* Optional subtle radial background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500 via-transparent to-transparent opacity-20 blur-3xl -z-10"></div>

      <h2 className="text-5xl md:text-6xl font-extrabold text-blue-400 mb-8">
        About Me
      </h2>

      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-6">
        I’m a Computer Science graduate with a passion for building modern, scalable applications. I enjoy working on full-stack development projects, experimenting with AI, and creating interactive user experiences. My strengths lie in Python, React, TypeScript, and cloud technologies.
      </p>

      <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
        Outside of coding, I’m interested in AI research, data-driven solutions, and contributing to projects that have a real impact. I thrive in collaborative environments and love turning ideas into working products.
      </p>
    </section>
  );
}
