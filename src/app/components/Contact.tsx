"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const email = "saihajpreet.bains@gmail.com";

  return (
    <section
      id="Contact"
      className="min-h-screen flex flex-col items-center justify-center 
                 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
                 px-4 py-20 transition-colors duration-500"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-8 text-center">
        Contact Me
      </h2>

      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-2xl">
        Feel free to reach out for any queries through email, LinkedIn, or view my Github page. 
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 mb-12 w-full max-w-lg">
        <a
          href={`mailto:${email}`}
          className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 
                     px-4 py-3 rounded-full text-white font-semibold text-base md:text-lg transition-transform hover:scale-105 break-all"
          style={{ wordBreak: "break-all" }}
        >
          {email}
        </a>

        <a
          href="https://www.linkedin.com/in/saihajpreet-bains-b7340b20a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 
                     p-3 rounded-full text-white text-xl md:text-2xl transition-transform hover:scale-105 flex items-center justify-center"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/sbains2303"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 
                     p-3 rounded-full text-white text-xl md:text-2xl transition-transform hover:scale-105 flex items-center justify-center"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}