import { Github, Instagram, Linkedin, AtSign } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { id: "github", icon: <Github size={20} />, link: "https://github.com/Anshuldhiman09" },
    { id: "instagram", icon: <Instagram size={20} />, link: "https://instagram.com/dhimananshul_09" },
    { id: "linkedin", icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/anshul-dhiman-14a731353" },
    { id: "threads", icon: <AtSign size={20} />, link: "https://threads.net/@dhimananshul_09" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-slate-400 py-12 mt-16 border-t border-white/10">
      <div className="container-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Anshul Dhiman</p>
          <p className="text-xs text-slate-500 mt-1">
            Aspiring Full-Stack Developer | Java | Spring Boot | React | PostgreSQL
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="text-sm text-slate-400 hover:text-white transition"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
