"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const email = "saihajpreet.bains@gmail.com";

  return (
    <section
      id="Contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-20"
    >
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-blue-400 mb-8 text-center">
        Contact Me
      </h2>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-300 mb-12 text-center max-w-2xl">
        I’m always excited to connect! Whether it’s about opportunities, collaboration, 
        or just a friendly chat — feel free to reach out. Click on any of the bubbles below.
      </p>

      {/* Contact Bubbles */}
      <div className="flex space-x-6 mb-12">
        {/* Email Bubble */}
        <a
          href={`mailto:${email}`}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-4 rounded-full text-white font-semibold text-lg transition-transform transform hover:scale-110"
        >
          {email}
        </a>

        {/* LinkedIn Icon Bubble */}
        <a
          href="https://www.linkedin.com/in/saihajpreet-bains-b7340b20a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 p-4 rounded-full text-white text-2xl transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon Bubble */}
        <a
          href="https://github.com/sbains2303"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 p-4 rounded-full text-white text-2xl transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>

      {/* Optional contact form */}
      <form className="w-full max-w-xl flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold text-white transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
