import { motion } from "framer-motion";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

function CTA({ navigate }) {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[#00f5c8]/15 bg-[#00f5c8]/[0.035] px-6 py-12 sm:px-10 lg:px-16 lg:py-16"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#00f5c8]/[0.07] blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.07]">
                  <ShieldCheck
                    size={22}
                    className="text-[#00f5c8]"
                  />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00f5c8]">
                  Security starts before the breach
                </span>
              </div>

              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Find the weakness before someone else does.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                Get a practical view of your current security posture and
                understand where your organization can reduce exposure.
              </p>
            </div>

            <button
              onClick={() => navigate("contact")}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#00f5c8] px-6 py-4 text-sm font-semibold text-[#02070d] transition hover:bg-[#20ffd5]"
            >
              Request Assessment
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;