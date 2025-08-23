import { Home, Github, Instagram, Linkedin, X, AtSign } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCircularNav() {
  const [isOpen, setIsOpen] = useState(false);

  const icons = [
    {
      id: "home",
      icon: <Home size={20} />,
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      id: "github",
      icon: <Github size={20} />,
      link: "https://github.com/Anshuldhiman09",
    },
    {
      id: "instagram",
      icon: <Instagram size={20} />,
      link: "https://instagram.com/dhimananshul_09",
    },
    {
      id: "linkedin",
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/anshul-dhiman-14a731353",
    },
    {
      id: "threads",
      icon: <AtSign size={20} />,
      link: "https://threads.net/@dhimananshul_09",
    },
  ];

  return (
<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
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

      {/* Semi-Circular Fan Menu */}
      <AnimatePresence>
        {isOpen &&
          icons.map((item, index) => {
            // Spread icons in semi-circle (top half)
            const angle = (index / (icons.length - 1)) * Math.PI; // 0 to 180 deg
            const radius = 150;

            const x = Math.cos(angle) * radius;
            const y = -Math.sin(angle) * radius;

            return (
              <motion.div
                key={item.id}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                animate={{ x, y, opacity: 1, scale: 1 }}
                exit={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
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
            );
          })}
      </AnimatePresence>
    </div>
  );
}
