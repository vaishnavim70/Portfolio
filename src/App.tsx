import { useEffect } from "react";
import { ProfileProvider, useProfile } from "./context/ProfileContext";
import Navbar from "./components/Navbar";
import FrontendApp from "./components/FrontendApp";
import SalesforceApp from "./components/SalesforceApp";

declare global {
  interface Window {
    AOS: {
      init: (opts?: Record<string, unknown>) => void;
      refresh: () => void;
      refreshHard: () => void;
    };
  }
}

const AppContent = () => {
  const { profile } = useProfile();

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

  useEffect(() => {
    document.documentElement.setAttribute("data-profile", profile);
    window.scrollTo({ top: 0 });
    requestAnimationFrame(() => {
      if (window.AOS) {
        window.AOS.refreshHard();
      }
    });
  }, [profile]);

  return (
    <>
      <Navbar />
      {profile === "frontend" ? <FrontendApp /> : <SalesforceApp />}
    </>
  );
};

function App() {
  return (
    <ProfileProvider>
      <AppContent />
    </ProfileProvider>
  );
}

export default App;
