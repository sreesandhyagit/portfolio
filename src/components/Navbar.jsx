import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-white/20">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-xl font-bold text-emerald-700">
            Sreesandhya Ajesh
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            Full Stack Python Developer
          </p>
        </div>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-200">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <a
            href="/resume.pdf"
            download
            className="bg-emerald-700 text-white px-6 py-3 rounded-xl"
          >
            Resume
          </a>

        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-6 space-y-5">

          <a href="#about" className="block">About</a>
          <a href="#skills" className="block">Skills</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#experience" className="block">Experience</a>
          <a href="#education" className="block">Education</a>
          <a href="#contact" className="block">Contact</a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;