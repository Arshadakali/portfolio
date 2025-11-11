"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roadmapsOpen, setRoadmapsOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);
  return (
    <nav className="w-full max-w-5xl mx-auto flex justify-between items-center py-3 px-3 sm:px-6 bg-white/80 dark:bg-gray-900/80 shadow-sm rounded-xl fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur border border-gray-200 dark:border-gray-800">
      <Link
        href="/"
        className="text-xl font-bold text-blue-700 dark:text-blue-400 tracking-tight"
      >
        Arshad Ali
      </Link>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-base font-medium items-center">
        <li>
          <Link
            href="/#about"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/#projects"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </li>
        {/* Roadmaps Dropdown */}
        <li className="relative group">
          <button className="hover:text-blue-600 dark:hover:text-blue-400 transition focus:outline-none flex items-center gap-1">
            Roadmaps
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-50">
            <li>
              <Link
                href="/node-roadmap"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Node.js Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="/fullstack-roadmap"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                MERN Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="/frontend-roadmap"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Frontend Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="/backend-roadmap"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Backend Roadmap
              </Link>
            </li>
            {/* Add more roadmap links here as needed */}
            {/* <li>
              <a
                href="/react-roadmap"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                React Roadmap
              </a>
            </li> */}
          </ul>
        </li>
        {/* Socials Dropdown */}
        <li className="relative group">
          <button className="hover:text-blue-600 dark:hover:text-blue-400 transition focus:outline-none flex items-center gap-1">
            Socials
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-50">
            <li>
              <Link
                href="https://github.com/Arshadakali"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/arshad-ali-38991b279/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 p-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 md:hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-3">
          <div className="flex flex-col gap-3 text-base font-medium">
            <Link href="/#about" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">About</Link>
            <Link href="/#projects" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Projects</Link>
            <Link href="/#contact" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Contact</Link>
            {/* Roadmaps toggle */}
            <button
              className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-expanded={roadmapsOpen}
              onClick={() => setRoadmapsOpen((v) => !v)}
            >
              <span>Roadmaps</span>
              <svg className={`w-4 h-4 transition-transform ${roadmapsOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {roadmapsOpen && (
              <div className="ml-2 flex flex-col gap-1">
                <Link href="/node-roadmap" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Node.js Roadmap</Link>
                <Link href="/fullstack-roadmap" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">MERN Roadmap</Link>
                <Link href="/frontend-roadmap" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Frontend Roadmap</Link>
                <Link href="/backend-roadmap" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">Backend Roadmap</Link>
              </div>
            )}
            {/* Socials toggle */}
            <button
              className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-expanded={socialsOpen}
              onClick={() => setSocialsOpen((v) => !v)}
            >
              <span>Socials</span>
              <svg className={`w-4 h-4 transition-transform ${socialsOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {socialsOpen && (
              <div className="ml-2 flex flex-col gap-1">
                <Link href="https://github.com/Arshadakali" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">GitHub</Link>
                <Link href="https://www.linkedin.com/in/arshad-ali-38991b279/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">LinkedIn</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
