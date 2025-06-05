"use client";
import Image from "next/image";
import React from "react";
import Navbar from "../Navbar";
export default function FullstackRoadmap() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f7f7f7] dark:bg-black p-0 sm:p-0">
      {/* Navbar */}
      <Navbar />
      <main className="w-full flex flex-col items-center mt-8">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
          {/* Left: Title and Intro */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
              MERN Roadmap
            </h1>
            {/* Estimated Duration */}
            <div
              className="mb-4 mt-2 flex items-center gap-2 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 px-4 py-2 rounded shadow text-blue-900 dark:text-blue-200 font-semibold text-base"
              role="status"
              aria-label="Estimated duration"
            >
              <span>⏳ Estimated time to complete this roadmap:</span>
              <span className="ml-2 font-bold">3-12 months</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/window.svg"
                alt="MERN Stack Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
              />
              <span className="text-lg font-semibold text-blue-700 dark:text-blue-400">
                MERN Stack
              </span>
            </div>
            <p className="text-gray-800 dark:text-gray-200 mb-4 max-w-lg">
              A visual guide for becoming a MERN Stack developer. Follow the
              steps, checkpoints, and tips below!
            </p>
            <div className="flex gap-2 mb-4">
              <span className="bg-yellow-300 text-black px-3 py-1 rounded font-semibold text-xs">
                Frontend
              </span>
              <span className="bg-green-300 text-black px-3 py-1 rounded font-semibold text-xs">
                Backend
              </span>
              <span className="bg-blue-300 text-black px-3 py-1 rounded font-semibold text-xs">
                Deployment
              </span>
            </div>
            <div className="mt-2">
              <a
                href="https://roadmap.sh/full-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 font-semibold"
              >
                Reference: roadmap.sh/full-stack
              </a>
            </div>
          </div>
          {/* Right: Resource Box */}
          <div className="flex-1 flex flex-col gap-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow max-w-md mx-auto">
            <div>
              <h2 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Find the detailed version of this roadmap and more:
              </h2>
              <a
                href="https://roadmap.sh/full-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-700 text-white text-center py-2 rounded font-semibold hover:bg-blue-800 transition"
              >
                roadmap.sh/full-stack
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <span className="bg-yellow-300 w-6 h-6 rounded inline-block border-2 border-black mr-2"></span>
              <span className="text-sm">Frontend topics</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="bg-green-300 w-6 h-6 rounded inline-block border-2 border-black mr-2"></span>
              <span className="text-sm">Backend topics</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="bg-blue-300 w-6 h-6 rounded inline-block border-2 border-black mr-2"></span>
              <span className="text-sm">Deployment topics</span>
            </div>
          </div>
        </div>
        {/* Full Stack Roadmap Graph - Enhanced like roadmap.sh */}
        <section className="w-full max-w-5xl mt-12 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
            MERN Roadmap
          </h2>
          {/* Row 1: HTML, CSS, JavaScript, npm */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4 items-end">
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn HTML"
              onClick={() =>
                window.open(
                  "https://developer.mozilla.org/en-US/docs/Web/HTML",
                  "_blank"
                )
              }
            >
              HTML
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn CSS"
              onClick={() =>
                window.open(
                  "https://developer.mozilla.org/en-US/docs/Web/CSS",
                  "_blank"
                )
              }
            >
              CSS
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn JavaScript"
              onClick={() =>
                window.open(
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                  "_blank"
                )
              }
            >
              JavaScript
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn npm"
              onClick={() => window.open("https://docs.npmjs.com/", "_blank")}
            >
              npm
            </div>
          </div>
          {/* Row 2: Checkpoints */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4">
            <div className="bg-black text-white border-2 border-black rounded-lg px-8 py-3 font-semibold shadow">
              Checkpoint - Static Webpages
            </div>
            <div className="bg-black text-white border-2 border-black rounded-lg px-8 py-3 font-semibold shadow">
              Checkpoint - Interactivity
            </div>
            <div className="bg-black text-white border-2 border-black rounded-lg px-8 py-3 font-semibold shadow">
              Checkpoint - External Packages
            </div>
          </div>
          {/* Row 3: React, Tailwind CSS, GitHub, Git, Redux, Accessibility, Testing */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4 items-end">
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn React"
              onClick={() => window.open("https://react.dev/", "_blank")}
            >
              React
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Tailwind CSS"
              onClick={() =>
                window.open(
                  "https://tailwindcss.com/docs/installation",
                  "_blank"
                )
              }
            >
              Tailwind CSS
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn GitHub"
              onClick={() =>
                window.open("https://docs.github.com/en", "_blank")
              }
            >
              GitHub
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Git"
              onClick={() => window.open("https://git-scm.com/doc", "_blank")}
            >
              Git
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Redux"
              onClick={() =>
                window.open(
                  "https://redux.js.org/introduction/getting-started",
                  "_blank"
                )
              }
            >
              Redux
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Accessibility"
              onClick={() =>
                window.open(
                  "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
                  "_blank"
                )
              }
            >
              Accessibility
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Testing"
              onClick={() =>
                window.open("https://jestjs.io/docs/getting-started", "_blank")
              }
            >
              Testing
            </div>
          </div>
          {/* Row 4: Checkpoint - Frontend Apps */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4">
            <div className="bg-black text-white border-2 border-black rounded-lg px-8 py-3 font-semibold shadow">
              Checkpoint - Frontend Apps
            </div>
          </div>
          {/* Row 5: Node.js, Express, API, Database */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4">
            <a
              href="/node-roadmap"
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow focus:outline-none focus:ring-4 focus:ring-yellow-400 hover:bg-yellow-200 transition cursor-pointer inline-flex items-center gap-2"
              aria-label="View detailed Node.js roadmap"
            >
              <Image
                src="/nodejs-logo.png"
                alt="Node.js Logo"
                width={28}
                height={28}
                className="w-7 h-7 mr-2"
                priority
              />
              Node.js
            </a>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Express"
              onClick={() => window.open("https://expressjs.com/", "_blank")}
            >
              Express
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn REST API"
              onClick={() => window.open("https://restfulapi.net/", "_blank")}
            >
              REST API
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Database"
              onClick={() =>
                window.open("https://www.mongodb.com/docs/", "_blank")
              }
            >
              Database
            </div>
          </div>
          {/* Row 6: Checkpoint - Backend APIs */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4">
            <div className="bg-black text-white border-2 border-black rounded-lg px-8 py-3 font-semibold shadow">
              Checkpoint - Backend APIs
            </div>
          </div>
          {/* Row 7: Authentication, Deployment, CI/CD */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4">
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Authentication"
              onClick={() =>
                window.open("https://auth0.com/docs/get-started", "_blank")
              }
            >
              Authentication
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Deployment"
              onClick={() => window.open("https://vercel.com/docs", "_blank")}
            >
              Deployment
            </div>
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn CI/CD"
              onClick={() =>
                window.open("https://www.jenkins.io/doc/", "_blank")
              }
            >
              CI/CD
            </div>
          </div>
          {/* Row 8: Final Checkpoint - Full Stack Developer */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4">
            <div className="bg-green-500 text-white border-2 border-black rounded-lg px-8 py-3 font-bold text-lg shadow">
              Checkpoint - Full Stack Developer
            </div>
          </div>
          {/* Tips Bar */}
          <div className="mt-4 flex items-center gap-2 bg-black text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold shadow">
            <span>
              💡 TIP: Click on any card to open official documentation or
              resources!
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
