"use client";
import Image from "next/image";
import Navbar from "../Navbar";
export default function FrontendRoadmap() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f7f7f7] dark:bg-black p-0 sm:p-0">
      <Navbar />
      <main className="w-full flex flex-col items-center mt-8">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">Frontend Roadmap</h1>
            {/* Estimated Duration */}
            <div className="mb-4 mt-2 flex items-center gap-2 bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 px-4 py-2 rounded shadow text-blue-900 dark:text-blue-200 font-semibold text-base" role="status" aria-label="Estimated duration">
              <span>⏳ Estimated time to complete this roadmap:</span>
              <span className="ml-2 font-bold">12-20 weeks</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/window.svg" alt="Frontend Logo" width={40} height={40} className="w-10 h-10" priority />
              <span className="text-lg font-semibold text-blue-700 dark:text-blue-400">Frontend</span>
            </div>
            <p className="text-gray-800 dark:text-gray-200 mb-4 max-w-lg">A visual guide for becoming a Frontend developer. Click any card to open official documentation or resources!</p>
          </div>
        </div>
        <section className="w-full max-w-5xl mt-12 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Frontend Roadmap</h2>
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-4 items-end">
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn HTML" onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank")}>HTML</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn CSS" onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank")}>CSS</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn JavaScript" onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank")}>JavaScript</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn TypeScript" onClick={() => window.open("https://www.typescriptlang.org/docs/", "_blank")}>TypeScript</div>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-4 items-end">
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn React" onClick={() => window.open("https://react.dev/", "_blank")}>React</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn Next.js" onClick={() => window.open("https://nextjs.org/docs", "_blank")}>Next.js</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn Tailwind CSS" onClick={() => window.open("https://tailwindcss.com/docs/installation", "_blank")}>Tailwind CSS</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn Redux" onClick={() => window.open("https://redux.js.org/introduction/getting-started", "_blank")}>Redux</div>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-4 items-end">
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn GitHub" onClick={() => window.open("https://docs.github.com/en", "_blank")}>GitHub</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn Git" onClick={() => window.open("https://git-scm.com/doc", "_blank")}>Git</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn Testing" onClick={() => window.open("https://jestjs.io/docs/getting-started", "_blank")}>Testing</div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow hover:scale-105 transition cursor-pointer" tabIndex={0} role="button" aria-label="Learn Accessibility" onClick={() => window.open("https://www.w3.org/WAI/fundamentals/accessibility-intro/", "_blank")}>Accessibility</div>
          </div>
          <div className="mt-4 flex items-center gap-2 bg-black text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold shadow">
            <span>💡 TIP: Click on any card to open official documentation or resources!</span>
          </div>
        </section>
      </main>
    </div>
  );
}
