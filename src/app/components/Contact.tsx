"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const email = "saihajpreet.bains@gmail.com";

  return (
    <section
      id="Contact"
      className="min-h-screen flex flex-col items-center justify-center 
                 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
                 px-6 py-20 transition-colors duration-500"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-8 text-center">
        Contact Me
      </h2>

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-2xl">
        Feel free to reach out for any queries through email, LinkedIn, or view my Github page. 
      </p>

      <div className="flex space-x-6 mb-12">
        <a
          href={`mailto:${email}`}
          className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 
                     px-6 py-4 rounded-full text-white font-semibold text-lg transition-transform hover:scale-110"
        >
          {email}
        </a>

        <a
          href="https://www.linkedin.com/in/saihajpreet-bains-b7340b20a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 
                     p-4 rounded-full text-white text-2xl transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/sbains2303"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 
                     p-4 rounded-full text-white text-2xl transition-transform hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}