import { motion } from "framer-motion";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

function CTA({ navigate }) {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="group relative overflow-hidden rounded-[28px] border border-[#00f5c8]/15 bg-[#00f5c8]/[0.035] px-6 py-12 shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:px-10 lg:px-16 lg:py-16"
        >
          <motion.div
            animate={{ x: ["-20%", "120%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#00f5c8]/60 to-transparent"
          />
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#00f5c8]/[0.08] blur-[110px] transition duration-500 group-hover:bg-[#00f5c8]/[0.12]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.07]">
                  <ShieldCheck size={22} className="text-[#00f5c8]" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f5c8]">
                  Security starts before the breach
                </span>
              </div>

              <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Find the weakness before someone else does.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                Get a practical view of your current security posture and understand where your organization can reduce exposure.
              </p>
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => navigate("contact")}
              className="group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#00f5c8]/30 bg-[#00f5c8] px-6 py-4 text-sm font-semibold text-[#02070d] shadow-[0_12px_35px_rgba(0,245,200,0.14)] transition-all duration-300 hover:bg-[#43ffdf] hover:shadow-[0_16px_45px_rgba(0,245,200,0.22)]"
            >
              Request Assessment
              <ArrowUpRight size={17} className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
