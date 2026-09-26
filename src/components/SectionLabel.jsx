import { motion } from "framer-motion";

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 34, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="h-px shrink-0 bg-gradient-to-r from-[#00f5c8] to-[#00f5c8]/10"
      />

      <span className="rounded-full border border-[#00f5c8]/15 bg-[#00f5c8]/[0.045] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#00f5c8]">
        {children}
      </span>
    </div>
  );
}

export default SectionLabel;
