import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck, ArrowUpRight } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (page) => {
    navigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 px-3 pt-3 transition-all duration-300 sm:px-5 ${
          scrolled ? "pt-2" : "pt-3"
        }`}
      >
        <div
          className={`mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:px-4 ${
            scrolled
              ? "border-white/[0.10] bg-[#040b12]/90 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              : "border-white/[0.07] bg-[#040b12]/65"
          } backdrop-blur-2xl`}
        >
          <button
            type="button"
            onClick={() => handleNavigation("home")}
            className="group flex items-center gap-3 rounded-xl px-2 py-1.5"
          >
            <motion.div
              whileHover={{ rotate: 6, scale: 1.04 }}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#00f5c8]/25 bg-[#00f5c8]/[0.06]"
            >
              <ShieldCheck size={22} className="relative z-10 text-[#00f5c8]" />
              <span className="absolute inset-0 rounded-xl bg-[#00f5c8]/10 blur-md transition group-hover:bg-[#00f5c8]/15" />
            </motion.div>

            <div className="hidden text-left sm:block">
              <div className="text-sm font-bold tracking-[0.18em] text-white">
                BYTE<span className="text-[#00f5c8]">S</span>
              </div>
              <div className="text-[8px] tracking-[0.27em] text-white/35">
                CYBER SECURITY
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = currentPage === item.page;

              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNavigation(item.page)}
                  className={`relative rounded-xl px-3.5 py-2 text-[13px] transition-colors duration-300 ${
                    active ? "text-[#00f5c8]" : "text-white/55 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-xl border border-[#00f5c8]/12 bg-[#00f5c8]/[0.055]"
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="hidden xl:flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00f5c8] shadow-[0_0_9px_rgba(0,245,200,0.8)]" />
              <span className="font-mono text-[9px] tracking-[0.16em] text-white/35">SYSTEM ONLINE</span>
            </div>

            <motion.button
              type="button"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => handleNavigation("contact")}
              className="group inline-flex items-center gap-2 rounded-xl border border-[#00f5c8]/25 bg-[#00f5c8]/[0.08] px-4 py-2.5 text-[13px] font-semibold text-[#00f5c8] transition hover:border-[#00f5c8]/45 hover:bg-[#00f5c8]/[0.12]"
            >
              Secure Your Business
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-3 top-[84px] z-40 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#040b12]/95 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item, index) => {
                const active = currentPage === item.page;

                return (
                  <motion.button
                    key={item.page}
                    type="button"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                    onClick={() => handleNavigation(item.page)}
                    className={`rounded-xl px-4 py-3 text-left text-sm transition ${
                      active
                        ? "bg-[#00f5c8]/[0.08] text-[#00f5c8]"
                        : "text-white/60 hover:bg-white/[0.035] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}

              <button
                type="button"
                onClick={() => handleNavigation("contact")}
                className="mt-1 rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8] px-4 py-3 text-center text-sm font-semibold text-[#02070d]"
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
