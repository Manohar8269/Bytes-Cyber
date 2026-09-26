import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CyberGrid from "./components/CyberGrid";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About navigate={navigate} />;
      case "services":
        return <Services navigate={navigate} />;
      case "training":
        return <Training navigate={navigate} />;
      case "blog":
        return <Blog navigate={navigate} />;
      case "careers":
        return <Careers navigate={navigate} />;
      case "contact":
        return <Contact />;
      case "home":
        return <Home navigate={navigate} />;
      default:
        return <NotFound navigate={navigate} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#02070d] text-white">
      <CyberGrid />

      <motion.div
        className="fixed left-0 right-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-transparent via-[#00f5c8] to-white/60 shadow-[0_0_12px_rgba(0,245,200,0.65)]"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <div className="site-noise pointer-events-none fixed inset-0 z-[1]" />

      <div className="relative z-10">
        <Navbar currentPage={currentPage} navigate={navigate} />

        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderPage()}
          </motion.main>
        </AnimatePresence>

        <Footer navigate={navigate} />
      </div>
    </div>
  );
}

function NotFound({ navigate }) {
  return (
    <section className="flex min-h-screen items-center justify-center px-5 pt-24">
      <div className="relative max-w-xl text-center">
        <div className="font-mono text-7xl font-bold text-[#00f5c8]/15 sm:text-9xl">404</div>
        <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-white/40">The requested page does not exist.</p>
        <button
          type="button"
          onClick={() => navigate("home")}
          className="mt-7 rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8] px-6 py-3.5 text-sm font-semibold text-[#02070d] transition hover:bg-[#43ffdf]"
        >
          Return Home
        </button>
      </div>
    </section>
  );
}

export default App;
