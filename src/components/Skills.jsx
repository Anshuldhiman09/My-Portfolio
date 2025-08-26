import { skills } from "../data"

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container-lg">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Languages, and frameworks</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map(s => (
            <span key={s} className="px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
