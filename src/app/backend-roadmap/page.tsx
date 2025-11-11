"use client";
import Image from "next/image";
import Navbar from "../Navbar";
export default function BackendRoadmap() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f7f7f7] dark:bg-black p-0 sm:p-0">
      <Navbar />
      <main className="w-full flex flex-col items-center mt-8">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">Backend Roadmap</h1>
            {/* Estimated Duration */}
            <div className="mb-4 mt-2 flex items-center gap-2 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 px-4 py-2 rounded shadow text-blue-900 dark:text-blue-200 font-semibold text-base" role="status" aria-label="Estimated duration">
              <span>⏳ Estimated time to complete this roadmap:</span>
              <span className="ml-2 font-bold">14-22 weeks</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/window.svg" alt="Backend Logo" width={40} height={40} className="w-10 h-10" priority />
              <span className="text-lg font-semibold text-blue-700 dark:text-blue-400">Backend</span>
            </div>
            <p className="text-gray-800 dark:text-gray-200 mb-4 max-w-lg">A visual guide for becoming a Backend developer. Click any card to open official documentation or resources!</p>
          </div>
        </div>
        <section className="w-full max-w-5xl mt-12 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Backend Roadmap</h2>
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-4 items-end">
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
              onClick={() => window.open("https://www.mongodb.com/docs/", "_blank")}
            >
              Database
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-4 items-end">
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn Authentication" onClick={() => window.open("https://auth0.com/docs/get-started", "_blank")}>Authentication</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn Deployment" onClick={() => window.open("https://vercel.com/docs", "_blank")}>Deployment</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn CI/CD" onClick={() => window.open("https://www.jenkins.io/doc/", "_blank")}>CI/CD</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn Testing" onClick={() => window.open("https://jestjs.io/docs/getting-started", "_blank")}>Testing</div>
          </div>
          <div className="mt-4 flex items-center gap-2 bg-black text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold shadow">
            <span>💡 TIP: Click on any card to open official documentation or resources!</span>
          </div>
        </section>
      </main>
    </div>
  );
}
