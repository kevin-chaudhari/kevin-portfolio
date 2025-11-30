import { useState } from "react";

const About = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const techStack = {
    "Programming Languages": ["Python", "C++", "Java", "JavaScript", "R", "SQL"],
    "Frontend": ["React.js", "Reaxt Native",  "HTML5", "CSS3", "Tailwind", "Bootstrap", "PHP"],
    "Backend & Databases": ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase"],
    "AI / ML": ["TensorFlow", "PyTorch", "Hugging Face", "FastAPI", "Scikit-Learn", "OpenCV", "YOLO", "NLTK"],
    "Cloud & DevOps": ["Git", "GitHub","AWS", "GCP", "Docker","Kubernetes", "CI/CD"]
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("chaudharikevin21@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="c-space section-spacing">
      <div className="max-w-7xl mx-auto">

        {/* ===== TOP HEADING ===== */}
        <h2 className="text-heading mb-6">About Me</h2>

        {/* ===== TOP INTRO PARAGRAPH (Like Sample) ===== */}
        <p className="text-gray-300 text-lg max-w-4xl leading-relaxed mb-12">
          An aspiring Software Engineer and Data Scientist with hands-on experience in 
          full-stack development, machine learning, and cloud-based AI applications. 
          Passionate about transforming complex problems into clean engineering solutions 
          and intelligent ML-driven systems. I enjoy building modern applications that 
          blend data, engineering, and automation to create meaningful real-world impact.
        </p>
        {/* ===== MAIN GRID (Image + Personal Details) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
          {/* LEFT — IMAGE SECTION */}
          <div className="bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-4">
            <img
              src="/Kevin-chaudhari.jpg"
              alt="Kevin Chaudhari"
              className="w-90 h-90 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT — PERSONAL INFO */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Software Engineer & AI/ML Practitioner
            </h3>
            <p className="text-gray-400 mb-6 italic">
              Dedicated to building scalable applications and intelligent data-driven systems.
            </p>

            {/* Two-column info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-gray-300">

              <p>
                <span className="font-semibold text-white">Website: </span>
                github.com/kevin-chaudhari
              </p>
              <p><span className="font-semibold text-white">Degree: </span> MS Computer Science</p>

              <p><span className="font-semibold text-white">Phone:</span> +1 (307) 478-7906</p>
              <p><span className="font-semibold text-white">Email:</span> chaudharikevin21@gmail.com</p>

              <p>
                <span className="font-semibold text-white">LinkedIn: </span>
                <a 
                  href="https://www.linkedin.com/in/chaudhari-kevin/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Kevin-chaudhari
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">GitHub: </span>
                <a 
                  href="https://github.com/kevin-chaudhari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  kevin-chaudhari
                </a>
              </p>

              <p><span className="font-semibold text-white">City:</span> Stony Brook, New York, USA</p>
              <p><span className="font-semibold text-white">Freelance:</span> Available</p>
            </div>

            {/* Email Copy Button */}
            <button
              onClick={handleCopy}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition flex items-center justify-center gap-2"
            >
              {copiedEmail ? "Email Copied ✓" : "Copy Email Address"}
            </button>
          </div>
        </div>



        {/* ===== TECH STACK SECTION (Below, Like Sample Skills) ===== */}
        <div className="mt-20">
          <h2 className="text-heading mb-6">Tech Stack</h2>
          <p className="text-gray-300 mb-10 max-w-3xl">
            Comprehensive experience in full-stack development, machine learning, 
            and cloud-based technologies to deliver scalable, modern applications.
          </p>

          {/* Categories */}
          <div className="space-y-12">
            {Object.entries(techStack).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-wider">
                  {title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:bg-white/10 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>


        {/* ===== STATS LIKE SAMPLE ===== */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-gray-400 text-sm">Hours of Research</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">5</p>
              <p className="text-gray-400 text-sm">Team Collaborations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">∞</p>
              <p className="text-gray-400 text-sm">Continuous Learning</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
