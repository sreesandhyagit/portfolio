const skills = [
  {
    title: "Programming",
    items: "Python, C, C++",
  },

  {
    title: "Frontend",
    items:
      "HTML5, CSS3, JavaScript, React JS, Tailwind CSS, Bootstrap",
  },

  {
    title: "Backend",
    items:
      "Django, Django REST Framework, REST APIs",
  },

  {
    title: "Database",
    items: "MySQL, PostgreSQL",
  },

  {
    title: "Tools",
    items:
      "Git, GitHub, Docker, Postman, VS Code",
  },

  {
    title: "Concepts",
    items:
      "JWT Authentication, RBAC, Celery, Redis",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-emerald-700 font-semibold uppercase tracking-widest">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 dark:text-white">
            Tools and technologies I work with.
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
            >

              <h3 className="text-2xl font-bold mb-5 text-emerald-700">
                {skill.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-8">
                {skill.items}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;