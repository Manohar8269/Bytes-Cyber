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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -7 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.022] p-6 backdrop-blur-md transition-[border-color,background,box-shadow] duration-300 hover:border-[#00f5c8]/25 hover:bg-white/[0.035] hover:shadow-[0_22px_65px_rgba(0,0,0,0.3)]"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#00f5c8]/[0.07] blur-[65px] transition duration-500 group-hover:bg-[#00f5c8]/[0.14]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#00f5c8]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute right-5 top-5 font-mono text-[10px] tracking-[0.18em] text-white/15">
        {number}
      </div>

      <motion.div
        whileHover={{ rotate: 6, scale: 1.04 }}
        className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06] shadow-[0_0_0_1px_rgba(0,245,200,0.02),0_10px_30px_rgba(0,245,200,0.05)]"
      >
        {Icon && <Icon size={22} strokeWidth={1.7} className="text-[#00f5c8]" />}
      </motion.div>

      <h3 className="relative text-xl font-semibold tracking-tight text-white">
        {title}
      </h3>

      <p className="relative mt-3 text-sm leading-6 text-white/45">
        {description}
      </p>

      {items.length > 0 && (
        <div className="relative mt-6 space-y-2.5 border-t border-white/[0.07] pt-5">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="flex items-center gap-2 text-xs text-white/40"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00f5c8] shadow-[0_0_8px_rgba(0,245,200,0.65)]" />
              {item}
            </motion.div>
          ))}
        </div>
      )}

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#00f5c8] to-transparent transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}

export default ServiceCard;
