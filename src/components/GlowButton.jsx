import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function GlowButton({
  children,
  onClick,
  variant = "primary",
  icon = true,
  className = "",
}) {
  const variants = {
    primary:
      "border border-[#00f5c8]/40 bg-[#00f5c8] text-[#02070d] shadow-[0_12px_35px_rgba(0,245,200,0.12)] hover:border-[#4fffe1]/70 hover:bg-[#43ffdf] hover:shadow-[0_16px_45px_rgba(0,245,200,0.2)]",
    secondary:
      "border border-white/10 bg-white/[0.035] text-white shadow-[0_12px_35px_rgba(0,0,0,0.18)] hover:border-[#00f5c8]/35 hover:bg-[#00f5c8]/[0.055]",
    outline:
      "border border-[#00f5c8]/30 bg-[#00f5c8]/[0.045] text-[#00f5c8] hover:border-[#00f5c8]/55 hover:bg-[#00f5c8]/[0.08]",
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.2 }}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 opacity-0 blur-sm transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100" />

      <span className="relative">{children}</span>

      {icon && (
        <ArrowUpRight
          size={16}
          className="relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </motion.button>
  );
}

export default GlowButton;
