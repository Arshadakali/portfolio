import Image from "next/image";

export default function NodeRoadmap() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f7f7f7] dark:bg-black p-0 sm:p-0">
      {/* Banner */}
      <div className="w-full bg-yellow-400 text-black flex items-center justify-between px-4 py-2 text-sm font-semibold">
        <span>📚 Master Node.js with our premium roadmap</span>
        <a
          href="https://nodejs.org/en/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-yellow-300 px-4 py-1 rounded hover:bg-gray-900 transition"
        >
          START LEARNING &rarr;
        </a>
      </div>
      {/* Main Roadmap Container */}
      <main className="w-full flex flex-col items-center mt-8">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
          {/* Left: Title and Intro */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
              Node.js Roadmap
            </h1>
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
              A visual guide for absolute beginners to become a Node.js
              developer. Follow the steps, checkpoints, and tips below!
            </p>
            <div className="flex gap-2 mb-4">
              <span className="bg-yellow-300 text-black px-3 py-1 rounded font-semibold text-xs">
                Key topics
              </span>
              <span className="bg-black text-white px-3 py-1 rounded font-semibold text-xs">
                Project ideas
              </span>
            </div>
          </div>
        </div>
        {/* Roadmap Graph - Enhanced like roadmap.sh */}
        <section className="w-full max-w-5xl mt-12 flex flex-col items-center">
          {/* Top Row: HTML, CSS, JavaScript, npm */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4 items-end">
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow">
              HTML
            </div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow">
              CSS
            </div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow">
              JavaScript
            </div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow">
              npm
            </div>
          </div>
          {/* Second Row: Checkpoints */}
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
          {/* Third Row: React, Tailwind CSS, GitHub, Git */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4 items-end">
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow">
              React
            </div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow">
              Tailwind CSS
            </div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow">
              GitHub
            </div>
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow">
              Git
            </div>
          </div>
          {/* Fourth Row: Checkpoint - Frontend Apps */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4">
            <div className="bg-black text-white border-2 border-black rounded-lg px-8 py-3 font-semibold shadow">
              Checkpoint - Frontend Apps
            </div>
          </div>
          {/* Fifth Row: Node.js */}
          <div className="flex flex-row justify-center gap-8 w-full mb-4">
            <div className="bg-yellow-300 border-2 border-black rounded-lg px-8 py-3 font-bold text-lg text-black shadow">
              Node.js
            </div>
          </div>
          {/* Tips Bar */}
          <div className="mt-4 flex items-center gap-2 bg-black text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold shadow">
            <span>
              💡 TIP: Right-click a topic to mark it as done (feature coming
              soon!)
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
