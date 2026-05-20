const projects = [
  {
    title: "AddItAI LMS",
    tech: "Django + React",

    desc:
      "A role-based marketplace learning management system with JWT authentication, enrollment access, paid/free courses, cart, order management, reviews, dashboards, and secure file access.",

    features: [
      "Built REST APIs with Django REST Framework",
      "Integrated React frontend using Axios",
      "Added UUID-based certificate generation",
    ],

    github: "https://github.com/sreesandhyagit/SELF_PROJECTS/tree/master/Online_Learning_Management_System/AddItAI-LMS",
    demo: "#",
  },

  {
    title: "Virtual Cosmos",
    tech: "React + Node.js + Socket.IO",

    desc:
      "A real-time multiplayer proximity chat application where users move in a virtual 2D environment and communicate dynamically using WebSockets.",

    features: [
      "Implemented real-time multiplayer communication",
      "Built proximity-based chat system using Socket.IO",
      "Developed interactive UI using PixiJS and React",
    ],

    github:
      "https://github.com/sreesandhyagit/PROJECTS/tree/main/MERN/Virtual_Cosmos",

    demo:
      "https://drive.google.com/file/d/1tmikeH__pNXa4C60FfRNjMpk76Ypzdfb/view?usp=sharing",
  },

  {
    title: "Student Course Management System",
    tech: "Django + MySQL",

    desc:
      "A web system to manage students, courses, and enrollments with role-based access, CRUD functionality, validation, filtering, pagination, and optimized database handling.",

    features: [
      "Designed scalable Django backend architecture",
      "Improved manual course administration workflows",
      "Implemented secure role-specific access",
    ],

    github:
      "https://github.com/sreesandhyagit/DJANGO_PROJECT1",

    demo:
      "https://sreesandhya.pythonanywhere.com/",
  },

  {
    title: "ToDoList",
    tech: "Python + Django + React",

    desc:
      "A full-stack task management application with REST APIs, authentication, CRUD operations, and responsive UI for efficient daily task tracking.",

    features: [
      "Built backend APIs using Django REST Framework",
      "Integrated React frontend with REST APIs",
      "Used Bootstrap and SQLite3 for rapid development",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "Kerala State Youth Festival System",
    tech: "VB.NET + SQL Server",

    desc:
      "An academic project for automating participant registration, event scheduling, result processing, and administrative reporting using Crystal Reports.",

    features: [
      "Reduced manual event data processing",
      "Generated centralized reports",
      "Supported large-scale event management",
    ],

    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-emerald-700 font-semibold uppercase tracking-widest">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 dark:text-white">
            Selected work.
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-8">
            Full-stack applications, real-time systems, REST APIs,
            and academic software projects built using modern web technologies.
          </p>

        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500 border border-white/20"
            >

              {/* Tech Stack */}
              <p className="text-sm text-emerald-700 font-semibold mb-3 uppercase tracking-wider">
                {project.tech}
              </p>

              {/* Title + Live Badge */}
              <div className="flex items-center gap-3 mb-5 flex-wrap">

                <h3 className="text-3xl font-bold dark:text-white">
                  {project.title}
                </h3>

                {project.demo !== "#" && (
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">
                    LIVE
                  </span>
                )}

              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-8">
                {project.desc}
              </p>

              {/* Features */}
              <ul className="mt-6 space-y-3">

                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                  >
                    <span className="text-emerald-600 mt-1 text-lg">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}

              </ul>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-900 hover:bg-black text-white px-5 py-3 rounded-xl hover:scale-105 duration-300 shadow-lg"
                  >
                    GitHub
                  </a>
                )}

                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-3 rounded-xl hover:scale-105 duration-300 shadow-lg"
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;