import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  { x: 10, y: 25, delay: 0 },
  { x: 23, y: 42, delay: 0.7 },
  { x: 39, y: 18, delay: 1.3 },
  { x: 55, y: 39, delay: 0.35 },
  { x: 69, y: 21, delay: 1.8 },
  { x: 87, y: 46, delay: 1.1 },
  { x: 16, y: 74, delay: 2.1 },
  { x: 37, y: 83, delay: 0.6 },
  { x: 61, y: 76, delay: 1.5 },
  { x: 83, y: 72, delay: 2.4 },
];

const connections = [
  [0, 1], [1, 2], [1, 7], [2, 3], [2, 4], [3, 8],
  [4, 5], [5, 9], [6, 7], [7, 8], [8, 9], [3, 4],
];

function CyberGrid() {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50, active: false });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame = 0;
    const handleMouseMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        setMouse({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
          active: true,
        });
      });
    };

    const handleMouseLeave = () => {
      setMouse((previous) => ({ ...previous, active: false }));
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#02070d]" />
      <div className="absolute inset-0 cyber-grid opacity-45" />

      <motion.div
        animate={{ left: `${mouse.x}%`, top: `${mouse.y}%`, opacity: mouse.active ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 28, mass: 0.55 }}
        className="absolute h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00f5c8]/[0.055] blur-[85px]"
      />

      <motion.div
        animate={{ x: ["-10%", "8%", "-10%"], y: ["0%", "8%", "0%"], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[10%] top-[8%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.025] blur-[120px]"
      />
      <motion.div
        animate={{ x: ["5%", "-6%", "5%"], y: ["0%", "-5%", "0%"], scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-[12%] top-[35%] h-[600px] w-[600px] rounded-full bg-emerald-300/[0.02] blur-[130px]"
      />

      <div className="absolute left-1/2 top-[46%] hidden h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 md:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-[#00f5c8]/[0.045]"
        />
        <div className="absolute inset-[15%] rounded-full border border-[#00f5c8]/[0.05]" />
        <div className="absolute inset-[30%] rounded-full border border-[#00f5c8]/[0.06]" />
        <div className="absolute inset-[45%] rounded-full border border-[#00f5c8]/[0.075]" />

        <div className="absolute left-0 right-0 top-1/2 h-px bg-[#00f5c8]/[0.045]" />
        <div className="absolute bottom-0 left-1/2 top-0 w-px bg-[#00f5c8]/[0.045]" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-bottom-left bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,245,200,0.15)_16deg,transparent_48deg)]" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00f5c8] shadow-[0_0_25px_rgba(0,245,200,0.9)]"
        />
      </div>

      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        {connections.map(([from, to], index) => {
          const start = nodes[from];
          const end = nodes[to];
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="rgba(0,245,200,0.12)"
              strokeWidth="0.11"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1], opacity: [0, 0.3, 0.08] }}
              transition={{ duration: 4.5, delay: index * 0.3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          animate={{ scale: [1, 1.75, 1], opacity: [0.18, 0.8, 0.18] }}
          transition={{ duration: 3.2 + (index % 3), delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#00f5c8] shadow-[0_0_12px_rgba(0,245,200,0.85)]"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        />
      ))}

      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ x: `${(index * 19) % 100}vw`, y: "108vh", opacity: 0 }}
          animate={{ y: "-8vh", opacity: [0, 0.32, 0] }}
          transition={{ duration: 12 + (index % 4), delay: index * 0.8, repeat: Infinity, ease: "linear" }}
          className="absolute h-px w-px rounded-full bg-[#00f5c8]"
        />
      ))}

      <motion.div
        initial={{ y: "-10%" }}
        animate={{ y: "110%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5c8]/20 to-transparent"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_8%,rgba(2,7,13,0.22)_55%,#02070d_96%)]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#02070d] to-transparent" />
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#02070d] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#02070d] to-transparent" />
    </div>
  );
}

export default CyberGrid;
