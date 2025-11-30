import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="c-space section-spacing bg-[#0B0B0F] text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <h1 className="text-4xl font-bold text-white mb-3">Resume</h1>
        <p className="max-w-3xl text-gray-400 mb-12">
          Data Science and Software Engineering professional with hands-on experience in 
          AI/ML engineering, cloud platforms, generative AI, and end-to-end system deployment. 
          Skilled in building scalable ML pipelines, real-time inference systems, and delivering 
          actionable data-driven solutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-10">

            {/* SUMMARY */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Summary</h2>
              <p className="font-semibold text-white">Kevinkumar Tusharbhai Chaudhari</p>
              <p className="text-gray-400 mt-2 leading-relaxed">
                Computer Science graduate with extensive experience in AI/ML engineering, 
                cloud systems, data pipelines, and advanced software development. Passionate about 
                building intelligent systems for real-world impact.
              </p>

              <ul className="mt-4 space-y-1 text-gray-300 text-sm">
                <li>Stony Brook, New York</li>
                <li className="text-indigo-400">chaudharikevin21@gmail.com</li>
                <li className="text-indigo-400">+1 (307) 478-7906</li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/chaudhari-kevin/" 
                    className="text-indigo-400 hover:underline" 
                    target="_blank"
                  >
                    linkedin.com/in/chaudhari-kevin
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/kevin-chaudhari" 
                    className="text-indigo-400 hover:underline" 
                    target="_blank"
                  >
                    github.com/kevin-chaudhari
                  </a>
                </li>
              </ul>
            </div>

            {/* EDUCATION */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Education</h2>

              {/* MS */}
              <div className="mb-6">
                <p className="font-semibold text-white">Master of Science in Computer Science</p>
                <p className="text-gray-400">Stony Brook University (Aug 2025 – May 2027)</p>
                <p className="text-sm text-gray-500 mt-1">
                  Coursework: Artificial Intelligence, Data Science Fundamentals, Cyber-Security
                </p>
              </div>

              {/* BE */}
              <div>
                <p className="font-semibold text-white">
                  Bachelor of Engineering in Computer Science & Engineering (AI-ML)
                </p>
                <p className="text-gray-400">
                  Adani Institute of Infrastructure Engineering (Aug 2021 – May 2025)
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  CGPA: 9.76/10.00 (Goal Medalist) 
                </p>
                <p className="text-sm text-gray-500 mt-1">
                    Coursework: Operating Systems, ML, DL, NLP, OOP, Agile & DevOps
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-12">

            {/* EXPERIENCE */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Professional Experience</h2>

              {/* SDE INTERN */}
              <div className="border-l border-gray-700 pl-6 space-y-6">
                <div>
                  <h3 className="text-white font-semibold">Software Development Engineer Intern</h3>
                  <p className="text-gray-400 text-sm">Stynosoft Pvt Ltd • Jan 2025 – May 2025 • Gandhinagar, India</p>

                  <ul className="mt-2 list-disc text-sm text-gray-400 ml-4 space-y-1">
                    <li>Architected backend on linux using Express.js, WebSocket.io, and OSM within modular MVC frameworks; integrated C++ algorithms and CI/CD workflows to scale 10K+ users, cutting latency by 13% and improving accuracy by 18%.</li>
                    <li>Built frontend and cross-platform systems using React, Next.js, MongoDB, SQL; enhanced performance by 30% and reduced load time by 25%.</li>
                    <li>Implemented traffic clustering algorithms using OSM + C++, partitioning 42 clusters and reducing computation time by 8%.</li>
                    <li>Delivered React Native emergency app secured with AWS S3 storage and Agile/Jira sprint workflows.</li>
                  </ul>
                </div>

                {/* RESEARCH INTERN */}
                <div>
                  <h3 className="text-white font-semibold">Data Science Research Intern</h3>
                  <p className="text-gray-400 text-sm">Adani University • Jun 2024 – Jan 2025 • Ahmedabad, India</p>

                  <ul className="mt-2 list-disc text-sm text-gray-400 ml-4 space-y-1">
                    <li>Developed Hybrid CNN-VIT models for acoustic metasurface design using PyTorch + HuggingFace, achieving MAE 0.08 and improving accuracy by 15%.</li>
                    <li>Trained models on AWS & GCP using Dockerized pipelines; handled data ingestion for 100K+ entries.</li>
                    <li>Evaluated Mixture Density Networks (MDNs) for superlattice parameter prediction using TensorFlow/PyTorch, implementing peak-weighted MSE to reduce training loss by 18% and performing A/B testing for optimal generalization.</li>
                  </ul>
                </div>

                {/* ML INTERN */}
                <div>
                  <h3 className="text-white font-semibold">Machine Learning Engineering Intern</h3>
                  <p className="text-gray-400 text-sm">Adani University • May 2024 – Sep 2024 • Ahmedabad, India</p>

                  <ul className="mt-2 list-disc text-sm text-gray-400 ml-4 space-y-1">
                    <li>Devised deep learning pipelines on the BMI dataset using CNN, RNN, and LSTM models, achieving 80% BMI prediction accuracy; orchestrated a modular REST API with Flask to deliver personalized health and fitness in real time.</li>
                    <li>Formulated CNN–RNN architectures for 12K+ cancer case classification using protein expression data, attaining 78% accuracy, and deployed results via interactive dashboards and RESTful endpoints for real-time analytics.</li>
                    <li>Spearheaded a Q-learning–based reinforcement learning framework with Docker and combined feature-selection techniques, deploying it on AWS EC2 to provide scalable exercise recommendations.</li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
