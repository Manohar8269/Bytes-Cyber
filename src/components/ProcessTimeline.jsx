import { motion } from "framer-motion";
import {
  Search,
  Crosshair,
  ShieldCheck,
  FileText,
  RotateCcw,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your attack surface, assets, technologies, and potential entry points.",
    icon: Search,
  },
  {
    number: "02",
    title: "Test",
    description:
      "Our security team performs controlled testing to identify exploitable weaknesses.",
    icon: Crosshair,
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Findings are validated to separate real security risks from false positives.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Report",
    description:
      "You receive clear technical findings, risk context, and practical remediation guidance.",
    icon: FileText,
  },
  {
    number: "05",
    title: "Retest",
    description:
      "After remediation, we verify that the identified vulnerabilities have been addressed.",
    icon: RotateCcw,
  },
];

function ProcessTimeline() {
  return (
    <div className="relative mt-12">
      {/* Desktop connecting line */}
      <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-white/10 lg:block" />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="relative"
            >
              {/* Mobile line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-14 hidden h-[calc(100%+2rem)] w-px bg-white/10 sm:block lg:hidden" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#00f5c8]/25 bg-[#061119] shadow-[0_0_25px_rgba(0,245,200,0.06)]">
                <Icon
                  size={20}
                  strokeWidth={1.7}
                  className="text-[#00f5c8]"
                />

                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border border-[#00f5c8]/20 bg-[#02070d] px-1 text-[8px] font-bold text-[#00f5c8]">
                  {step.number}
                </span>
              </div>

              <div className="mt-5 lg:pr-4">
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ProcessTimeline;