import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

declare global {
  interface Window {
    AOS: { init: (opts?: Record<string, unknown>) => void };
  }
}

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ once: true, duration: 800, offset: 50 });
    }

    const nav = document.querySelector(".main-nav");
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 50) {
        nav?.classList.add("nav-scrolled");
      } else {
        nav?.classList.remove("nav-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    const navCollapse = document.querySelector(".navbar-collapse.collapse");
    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      link.addEventListener("click", () => navCollapse?.classList.remove("show"));
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
