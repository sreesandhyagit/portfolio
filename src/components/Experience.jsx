const experiences = [
  {
    duration: "Jul 2025 - Present",
    role: "Full Stack Python Developer Intern",
    company: "OneTeam EdTech Pvt Ltd, Kochi | Remote",
    desc:
      "Working on Django modules, DRF APIs, React integration, CRUD operations, RBAC, JWT authentication, MySQL, responsive UI development, and Git-based collaboration.",
  },

  {
    duration: "Aug 2024 - Apr 2026",
    role: "Programming Faculty",
    company: "Microtech, Kozhikode",
    desc:
      "Training students in Python, C, C++, HTML, CSS, JavaScript, MS Office, and Ubuntu Linux with practical exercises and mini-projects.",
  },

  {
    duration: "Jul 2022 - Aug 2024",
    role: "Faculty in Computer Science",
    company: "Devine Management College, Kozhikode",
    desc:
      "Taught programming, DBMS, Linux, and practical lab sessions while guiding students through mini-projects.",
  },

  {
    duration: "May 2006 - Nov 2008",
    role: "Programming Faculty",
    company: "Lakhotia Computer Centre, Kozhikode",
    desc:
      "Delivered training in C, C++, Java basics, VB, C#, ASP, .NET technologies, JavaScript, HTML, CSS, databases, Linux, and MS Office.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-emerald-700 font-semibold uppercase tracking-widest">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Teaching, mentoring, and building web applications.
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg"
            >
              <p className="text-emerald-700 font-semibold mb-3">
                {exp.duration}
              </p>

              <h3 className="text-2xl font-bold">
                {exp.role}
              </h3>

              <p className="text-gray-500 mt-2">
                {exp.company}
              </p>

              <p className="text-gray-600 mt-5 leading-8">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;