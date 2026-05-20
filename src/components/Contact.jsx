import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-emerald-700 to-teal-600 rounded-[40px] p-10 md:p-16 text-white shadow-2xl">

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let’s connect for Python, Django, and full-stack opportunities.
        </h2>

        <div className="mt-10 space-y-4 text-lg">
          <p>sreesandhyaajesh@gmail.com</p>
          <p>+91 94460 85901</p>
          <p>Kozhikode, Kerala, India</p>
        </div>

        <div className="flex flex-wrap gap-5 mt-10">

          <a
            href="mailto:sreesandhyaajesh@gmail.com"
            className="bg-white text-emerald-700 px-6 py-3 rounded-xl flex items-center gap-3 font-semibold"
          >
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://github.com/sreesandhyagit"
            target="_blank"
            className="bg-white text-emerald-700 px-6 py-3 rounded-xl flex items-center gap-3 font-semibold"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sreesandhya-ajesh"
            target="_blank"
            className="bg-white text-emerald-700 px-6 py-3 rounded-xl flex items-center gap-3 font-semibold"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="tel:+919446085901"
            className="bg-white text-emerald-700 px-6 py-3 rounded-xl flex items-center gap-3 font-semibold"
          >
            <FaPhone />
            Call
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;