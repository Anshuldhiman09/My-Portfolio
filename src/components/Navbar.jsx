import React, { useState, useEffect } from "react"

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
  }, [open])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-slate-950/70 ring-1 ring-white/10" : ""}`}>
      <nav className="container-lg h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg tracking-tight">PORTFOLIO</a>
        <div className="hidden md:flex gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>
        <div className="md:hidden">
          <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="nav-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="container-lg pb-6">
            <div className="card p-2 divide-y divide-white/10">
              {links.map(l => (
                <a key={l.href} href={l.href} className="block px-4 py-3" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
