import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 p-4 sm:p-8">
      {/* Navbar */}
      <Navbar />
      <div className="h-20" />

      {/* Hero Section */}
      <section className="w-full max-w-3xl text-center mt-16 mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I&apos;m Arshad Ali
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
          I&apos;m a passionate web developer specializing in building modern,
          responsive, and accessible web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Link
            href="https://github.com/Arshadakali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/arshad-ali-38991b279/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition"
          >
            LinkedIn
          </Link>
        </div>
        <Link
          href="/#contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Contact Me
        </Link>
      </section>

      {/* About Section */}
      <section className="w-full max-w-2xl mb-20" id="about">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300">
          [Brief introduction about yourself, your background, and your skills.]
        </p>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-4xl mb-20" id="projects">
        <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Example Project Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Project Title</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Short project description goes here.
            </p>
            <Link href="#" className="text-blue-600 hover:underline mt-auto">
              View Project
            </Link>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      <section className="w-full max-w-4xl mb-20" id="roadmaps">
        <h2 className="text-2xl font-bold mb-8 text-center">Roadmaps</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Node.js Roadmap Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
            <Image
              src="/nodejs-logo.png"
              alt="Node.js Logo"
              width={80}
              height={80}
              className="w-20 h-20 mb-4"
              priority
            />
            <h3 className="text-xl font-semibold mb-2">Node.js Roadmap</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              A step-by-step guide to becoming a Node.js developer. Includes
              learning resources and project ideas.
            </p>
            <Link
              href="/node-roadmap"
              className="text-blue-600 hover:underline mt-auto font-semibold border border-blue-600 rounded px-4 py-2 transition hover:bg-blue-50 dark:hover:bg-blue-900"
            >
              View Roadmap
            </Link>
          </div>
          {/* MERN Roadmap Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
            <Image
              src="/window.svg"
              alt="MERN Stack Logo"
              width={80}
              height={80}
              className="w-20 h-20 mb-4"
              priority
            />
            <h3 className="text-xl font-semibold mb-2">MERN Roadmap</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              A visual guide for becoming a MERN Stack developer. Covers MongoDB, Express, React, and Node.js.
            </p>
            <Link
              href="/fullstack-roadmap"
              className="text-blue-600 hover:underline mt-auto font-semibold border border-blue-600 rounded px-4 py-2 transition hover:bg-blue-50 dark:hover:bg-blue-900"
            >
              View Roadmap
            </Link>
          </div>
          {/* Frontend Roadmap Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
            <Image
              src="/window.svg"
              alt="Frontend Logo"
              width={80}
              height={80}
              className="w-20 h-20 mb-4"
              priority
            />
            <h3 className="text-xl font-semibold mb-2">Frontend Roadmap</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              A step-by-step guide to becoming a modern frontend developer. Includes HTML, CSS, JS, React, and more.
            </p>
            <Link
              href="/frontend-roadmap"
              className="text-blue-600 hover:underline mt-auto font-semibold border border-blue-600 rounded px-4 py-2 transition hover:bg-blue-50 dark:hover:bg-blue-900"
            >
              View Roadmap
            </Link>
          </div>
          {/* Backend Roadmap Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
            <Image
              src="/window.svg"
              alt="Backend Logo"
              width={80}
              height={80}
              className="w-20 h-20 mb-4"
              priority
            />
            <h3 className="text-xl font-semibold mb-2">Backend Roadmap</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              A step-by-step guide to backend development. Covers Node.js, Express, REST APIs, databases, and more.
            </p>
            <Link
              href="/backend-roadmap"
              className="text-blue-600 hover:underline mt-auto font-semibold border border-blue-600 rounded px-4 py-2 transition hover:bg-blue-50 dark:hover:bg-blue-900"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-md mb-20" id="contact">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </section>

      <footer className="w-full text-center text-gray-500 dark:text-gray-400 py-8 border-t border-gray-200 dark:border-gray-700 mt-auto">
        &copy; 2025 Arshad Ali. All rights reserved.
      </footer>
    </div>
  );
}
