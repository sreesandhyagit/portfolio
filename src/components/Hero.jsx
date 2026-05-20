import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-12 pt-28"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[6px] text-emerald-700 font-semibold mb-5">
            Full Stack Python Developer
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-gray-900 dark:text-white">

            I build

            <span className="text-emerald-700">
              {" "}
              <Typewriter
                words={[
                  "Django Apps",
                  "React Interfaces",
                  "REST APIs",
                  "Full Stack Systems",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>

          </h1>

          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 leading-9 max-w-3xl">

            Full-Stack Python Developer with experience in Django,
            Django REST Framework, React JS, REST APIs,
            JWT Authentication, RBAC, MySQL, PostgreSQL,
            and responsive frontend development.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="bg-emerald-700 hover:bg-emerald-800 hover:scale-105 duration-300 text-white px-8 py-4 rounded-2xl shadow-xl"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-2xl transition"
            >
              Download Resume
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;