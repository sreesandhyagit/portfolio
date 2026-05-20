const education = [
  {
    title: "'A' Level Advanced Diploma",
    college:
      "St. Joseph's College, Devagiri, Kozhikode / DOEACC Society, New Delhi",
  },

  {
    title: "Post Graduate Diploma in Computer Applications",
    college:
      "St. Joseph's College, Devagiri, Kozhikode",
  },

  {
    title: "Bachelor of Commerce, Co-operation",
    college:
      "Mercy Arts College Vadakara / University of Calicut",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-emerald-700 font-semibold uppercase tracking-widest">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Academic background.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-5">
                {edu.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {edu.college}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;