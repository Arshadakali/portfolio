"use client";
import Image from "next/image";
import Navbar from "../Navbar";
export default function NodeRoadmap() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f7f7f7] dark:bg-black p-0 sm:p-0">
      <Navbar />
      <main className="w-full flex flex-col items-center mt-8">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
          {/* Left: Title and Intro */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
              Node.js Roadmap
            </h1>
            {/* Estimated Duration */}
            <div className="mb-4 mt-2 flex items-center gap-2 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 px-4 py-2 rounded shadow text-blue-900 dark:text-blue-200 font-semibold text-base" role="status" aria-label="Estimated duration">
              <span>⏳ Estimated time to complete this roadmap:</span>
              <span className="ml-2 font-bold">8-14 weeks</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/nodejs-logo.png"
                alt="Node.js Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
              />
              <span className="text-lg font-semibold text-green-700 dark:text-green-400">
                Node.js
              </span>
            </div>
            <p className="text-gray-800 dark:text-gray-200 mb-4 max-w-lg">
              A step-by-step guide for becoming a Node.js backend developer. Click
              any card to open official documentation or resources!
            </p>
          </div>
          {/* Right: Resource Box */}
          <div className="flex-1 flex flex-col gap-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow max-w-md mx-auto">
            <div>
              <h2 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                Find the detailed version of this roadmap and more:
              </h2>
              <a
                href="https://roadmap.sh/nodejs"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-700 text-white text-center py-2 rounded font-semibold hover:bg-green-800 transition"
              >
                roadmap.sh/nodejs
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <span className="bg-yellow-300 w-6 h-6 rounded inline-block border-2 border-black mr-2"></span>
              <span className="text-sm">Core topics</span>
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
        {/* Node.js Roadmap Graph */}
        <section className="w-full max-w-5xl mt-12 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
            Node.js Roadmap
          </h2>
          {/* Row 1: Node.js, npm, JavaScript */}
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-4 items-end">
            <div
              className="bg-green-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Node.js"
              onClick={() =>
                window.open("https://nodejs.org/en/docs", "_blank")
              }
            >
              Node.js
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
            <div
              className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn JavaScript"
              onClick={() =>
                window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank")
              }
            >
              JavaScript
            </div>
          </div>
          {/* Row 2: Express, REST API, Database */}
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-4 items-end">
            <div
              className="bg-green-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Express"
              onClick={() =>
                window.open("https://expressjs.com/", "_blank")
              }
            >
              Express
            </div>
            <div
              className="bg-green-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn REST API"
              onClick={() =>
                window.open("https://restfulapi.net/", "_blank")
              }
            >
              REST API
            </div>
            <div
              className="bg-green-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
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
          {/* Row 3: Authentication, Deployment, CI/CD, Testing */}
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-4 items-end">
            <div
              className="bg-green-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
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
              className="bg-blue-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn Deployment"
              onClick={() =>
                window.open("https://vercel.com/docs", "_blank")
              }
            >
              Deployment
            </div>
            <div
              className="bg-blue-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Learn CI/CD"
              onClick={() =>
                window.open("https://www.jenkins.io/doc/", "_blank")
              }
            >
              CI/CD
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
          {/* Tips Bar */}
          <div className="mt-4 flex items-center gap-2 bg-black text-green-300 px-4 py-2 rounded-full text-sm font-semibold shadow">
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
