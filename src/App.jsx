import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-gray-950 dark:via-gray-900 dark:to-black min-h-screen transition-all duration-500">

        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />

      </div>
    </div>
  );
}

export default App;