import { projects } from "../data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container-lg">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A few things I've built recently</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="card p-5 flex flex-col justify-between h-full"
            >
              {/* Content section */}
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-slate-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white/5 ring-1 ring-white/10 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons section */}
              <div className="mt-4 flex flex-col gap-2">
                {/* Always show Code button */}
                <a
                  className="btn"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>

                {/* 👇 Extra button only for Portfolio project */}
                {p.title === "Portfolio" && (
                  <a
                    className="btn bg-primary text-white hover:bg-primary/80"
                    href="https://manojDhiman-portfolio.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
