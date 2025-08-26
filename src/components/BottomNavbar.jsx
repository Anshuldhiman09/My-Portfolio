import { Home, Github, Instagram, Linkedin, X, AtSign } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCircularNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [offset, setOffset] = useState(24); // default gap from bottom

  // Show nav after Hero
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setShowNav(window.scrollY > heroBottom);

      // Footer check
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (footerTop < windowHeight) {
          // nav is colliding with footer → move it up
          const overlap = windowHeight - footerTop;
          setOffset(overlap + 24); // 24px padding
        } else {
          setOffset(24); // normal bottom spacing
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const icons = [
    { id: "home", icon: <Home size={20} />, action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { id: "github", icon: <Github size={20} />, link: "https://github.com/Anshuldhiman09" },
    { id: "instagram", icon: <Instagram size={20} />, link: "https://instagram.com/dhimananshul_09" },
    { id: "linkedin", icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/anshul-dhiman-14a731353" },
    { id: "threads", icon: <AtSign size={20} />, link: "https://threads.net/@dhimananshul_09" },
  ];

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.3 }}
          style={{ bottom: offset, right: "1.5rem" }} // dynamic bottom
          className="fixed z-50 flex items-center justify-center"
        >
          {/* Main Button */}
          <div
            className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 text-white cursor-pointer shadow-lg hover:scale-110 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <img
                src="/anshulDhiman1.jpeg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            )}
          </div>

          {/* Expanding icons */}
          <AnimatePresence>
            {isOpen &&
              icons.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 0, opacity: 0, scale: 0.5 }}
                  animate={{ y: -(index + 1) * 70, opacity: 1, scale: 1 }}
                  exit={{ y: 0, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="absolute flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 text-white shadow-md cursor-pointer hover:bg-gray-700"
                >
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.icon}
                    </a>
                  ) : (
                    <button onClick={item.action}>{item.icon}</button>
                  )}
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
