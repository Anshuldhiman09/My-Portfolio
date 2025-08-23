import { Home, Github, Instagram, Linkedin, X, AtSign } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCircularNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // Show nav after scrolling past Hero
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      if (window.scrollY > heroBottom) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
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
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
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
                src="/anshulDhiman.jpeg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            )}
          </div>

          {/* Icons sliding out vertically */}
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
