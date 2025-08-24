export default function About() {
  return (
    <section className="section" id="about">
      <div className="container-lg grid md:grid-cols-3 gap-8">
        {/* Left/Main content */}
        <div className="md:col-span-2">
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">Who am I & what I do</p>
          <p className="mt-6 text-slate-300 leading-7">
            Passionate BCA student with hands-on experience in full-stack application development. 
            Skilled in Java, Spring Boot, React, PostgreSQL, and REST APIs, with strong backend and
            frontend integration knowledge. Experienced in AI-driven development, integrating Gemini API and 
            speech recognition for natural language order systems. Familiar with Git, GitHub, Postman, and modern IDEs 
            (VS Code, IntelliJ, STS). Creative problem solver and sketch artist, combining technical expertise with artistic vision.
          </p>

          {/* Certifications & Mentorship */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-2">Certifications & Mentorship</h3>
            <ul className="list-disc list-inside text-slate-300">
              <li>CSX Mentorship Program under guidance of an IITM alumnus</li>
            </ul>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
            <ul className="list-disc list-inside text-slate-300">
              <li>
                <strong>Bachelor of Computer Applications (BCA)</strong><br />
                Forte Institute of Technology, Meerut (2024 – Present)
              </li>
            </ul>
          </div>

          {/* Achievements & Interests */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-2">Achievements & Interests</h3>
            <ul className="list-disc list-inside text-slate-300">
              <li>Sketch Artist – Passionate about art, creativity, and design</li>
              <li>Enthusiastic learner – Continuously exploring new technologies and frameworks</li>
            </ul>
          </div>
        </div>

        {/* Right/Card content with heading inside */}
        <div>
          <ul className="card p-5 space-y-3">
            {/* Heading inside the card */}
            <li className="text-lg font-semibold text-white mb-3">Key Skills & Interests</li>

            <li className="flex items-center gap-3"><span>💻</span> <span>Full-stack Development (Java, Spring Boot, React)</span></li>
            <li className="flex items-center gap-3"><span>🤖</span> <span>AI & Speech Recognition Projects</span></li>
            <li className="flex items-center gap-3"><span>🎨</span> <span>Sketching & Creative Design</span></li>
            <li className="flex items-center gap-3"><span>📚</span> <span>Continuous Learning & Technology Exploration</span></li>
            <li className="flex items-center gap-3"><span>🌐</span> <span>Open-source Contributions</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
