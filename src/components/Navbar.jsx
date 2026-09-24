import { useState } from "react";
import {
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", page: "home" },
  { label: "Services", page: "services" },
  { label: "About", page: "about" },
  { label: "Training", page: "training" },
  { label: "Blog", page: "blog" },
  { label: "Careers", page: "careers" },
  { label: "Contact", page: "contact" },
];

function Navbar({ currentPage, navigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = (page) => {
    navigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#02070d]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* Logo */}
          <button
            onClick={() => handleNavigation("home")}
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#00f5c8]/30 bg-[#00f5c8]/5">
              <ShieldCheck
                size={23}
                className="text-[#00f5c8]"
              />

              <span className="absolute inset-0 rounded-xl bg-[#00f5c8]/10 blur-md" />
            </div>

            <div className="text-left">
              <div className="text-sm font-bold tracking-[0.18em] text-white">
                BYTE<span className="text-[#00f5c8]">S</span>
              </div>

              <div className="text-[9px] tracking-[0.28em] text-white/40">
                CYBER SECURITY
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = currentPage === item.page;

              return (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`relative rounded-lg px-4 py-2 text-sm transition ${
                    active
                      ? "text-[#00f5c8]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}

                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-3 right-3 h-px bg-[#00f5c8]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavigation("contact")}
              className="group flex items-center gap-2 rounded-lg border border-[#00f5c8]/30 bg-[#00f5c8]/10 px-4 py-2.5 text-sm font-medium text-[#00f5c8] transition hover:border-[#00f5c8]/60 hover:bg-[#00f5c8]/15"
            >
              Secure Your Business
              <ChevronRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {mobileOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed left-0 right-0 top-20 z-40 border-b border-white/10 bg-[#02070d]/95 px-5 py-5 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = currentPage === item.page;

                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavigation(item.page)}
                    className={`rounded-lg px-4 py-3 text-left text-sm transition ${
                      active
                        ? "bg-[#00f5c8]/10 text-[#00f5c8]"
                        : "text-white/65 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <button
                onClick={() => handleNavigation("contact")}
                className="mt-3 rounded-lg bg-[#00f5c8] px-4 py-3 text-center text-sm font-semibold text-[#02070d]"
              >
                Secure Your Business
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;