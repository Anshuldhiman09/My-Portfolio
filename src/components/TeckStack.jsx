export default function TechStack() {
  const techs = [
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TailwindCSS", icon: "devicon-tailwindcss-original colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "Spring Boot", icon: "devicon-spring-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "VS Code", icon: "devicon-vscode-plain" },
    { name: "IntelliJ", icon: "devicon-intellij-plain" },
    { name: "GitHub", icon: "devicon-github-original" }
  ];

  return (
    <section className="section" id="techstack">
      <div className="container-lg text-center">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle mb-8">Tools & Technologies</p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center hover:scale-125 transition-transform"
              title={tech.name}
            >
              <i className={`${tech.icon} text-6xl`}></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
