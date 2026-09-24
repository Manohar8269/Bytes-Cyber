import { motion } from "framer-motion";

function ServiceCard({
  icon: Icon,
  number,
  title,
  description,
  items = [],
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#00f5c8]/25 hover:bg-white/[0.04]"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00f5c8]/[0.06] blur-[60px] transition-opacity duration-300 group-hover:bg-[#00f5c8]/[0.11]" />

      {/* Number */}
      <div className="absolute right-5 top-5 text-xs font-medium tracking-[0.15em] text-white/15">
        {number}
      </div>

      {/* Icon */}
      <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06]">
        {Icon && (
          <Icon
            size={22}
            strokeWidth={1.7}
            className="text-[#00f5c8]"
          />
        )}
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="relative mt-3 text-sm leading-6 text-white/45">
        {description}
      </p>

      {/* Features */}
      {items.length > 0 && (
        <div className="relative mt-6 space-y-2.5 border-t border-white/[0.07] pt-5">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-xs text-white/40"
            >
              <span className="h-1 w-1 rounded-full bg-[#00f5c8]" />
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#00f5c8] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

export default ServiceCard;