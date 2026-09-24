import { useState } from "react";
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

  const navigate = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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

      {/* =====================================================
          GLOBAL FIXED BACKGROUND
      ===================================================== */}
      <CyberGrid />

      {/* =====================================================
          WEBSITE CONTENT
      ===================================================== */}
      <div className="relative z-10">

        <Navbar
          currentPage={currentPage}
          navigate={navigate}
        />

        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
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
    <section className="flex min-h-screen items-center justify-center px-5 pt-20">
      <div className="relative max-w-xl text-center">

        <div className="font-mono text-7xl font-bold text-[#00f5c8]/15 sm:text-9xl">
          404
        </div>

        <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
          Page not found
        </h1>

        <p className="mt-4 text-sm leading-7 text-white/40">
          The requested page does not exist.
        </p>

        <button
          type="button"
          onClick={() => navigate("home")}
          className="mt-7 rounded-lg bg-[#00f5c8] px-6 py-3.5 text-sm font-semibold text-[#02070d] transition hover:bg-[#20ffd5]"
        >
          Return Home
        </button>

      </div>
    </section>
  );
}

export default App;