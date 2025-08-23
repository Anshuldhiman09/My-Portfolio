import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BottomNavBar from "./components/BottomNavbar";
import ContactForm from "./components/ContactPage"; // <-- new component for the form

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
                <BottomNavBar />
              </>
            }
          />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
