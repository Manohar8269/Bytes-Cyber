import { ArrowUpRight } from "lucide-react";

function GlowButton({
  children,
  onClick,
  variant = "primary",
  icon = true,
  className = "",
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[#00f5c8] text-[#02070d] shadow-[0_0_30px_rgba(0,245,200,0.12)] hover:bg-[#20ffd5] hover:shadow-[0_0_40px_rgba(0,245,200,0.22)]",

    secondary:
      "border border-white/10 bg-white/[0.03] text-white hover:border-[#00f5c8]/40 hover:bg-[#00f5c8]/[0.05]",

    outline:
      "border border-[#00f5c8]/30 bg-[#00f5c8]/[0.05] text-[#00f5c8] hover:border-[#00f5c8]/60 hover:bg-[#00f5c8]/[0.10]",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}

      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </button>
  );
}

export default GlowButton;