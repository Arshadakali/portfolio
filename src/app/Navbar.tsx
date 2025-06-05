import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full max-w-5xl mx-auto flex justify-between items-center py-4 px-2 sm:px-6 bg-white/80 dark:bg-gray-900/80 shadow-sm rounded-xl fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur border border-gray-200 dark:border-gray-800">
      <Link
        href="/"
        className="text-xl font-bold text-blue-700 dark:text-blue-400 tracking-tight"
      >
        Arshad Ali
      </Link>
      <ul className="flex gap-6 text-base font-medium items-center">
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
    </nav>
  );
}
