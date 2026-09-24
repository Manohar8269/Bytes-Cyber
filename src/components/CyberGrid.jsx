import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  { x: 12, y: 22, delay: 0 },
  { x: 27, y: 38, delay: 0.8 },
  { x: 43, y: 18, delay: 1.4 },
  { x: 57, y: 44, delay: 0.4 },
  { x: 73, y: 24, delay: 1.9 },
  { x: 87, y: 48, delay: 1.1 },
  { x: 18, y: 72, delay: 2.2 },
  { x: 38, y: 82, delay: 0.7 },
  { x: 62, y: 76, delay: 1.6 },
  { x: 82, y: 72, delay: 2.6 },
];

const connections = [
  [0, 1],
  [1, 2],
  [1, 7],
  [2, 3],
  [2, 4],
  [3, 8],
  [4, 5],
  [5, 9],
  [6, 7],
  [7, 8],
  [8, 9],
  [3, 4],
];

function CyberGrid() {
  const containerRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
    active: false,
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width) * 100;

      const y =
        ((event.clientY - rect.top) / rect.height) * 100;

      setMouse({
        x,
        y,
        active: true,
      });
    };

    const handleMouseLeave = () => {
      setMouse((previous) => ({
        ...previous,
        active: false,
      }));
    };

    container.addEventListener(
      "mousemove",
      handleMouseMove
    );

    container.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      container.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      container.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* =====================================================
          BASE
      ===================================================== */}

      <div className="absolute inset-0 bg-[#02070d]" />

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div className="cyber-grid absolute inset-0 opacity-50" />

      {/* =====================================================
          MOUSE FOLLOW GLOW
      ===================================================== */}

      <motion.div
        animate={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
          opacity: mouse.active ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 25,
          mass: 0.5,
        }}
        className="absolute h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00f5c8]/[0.05] blur-[70px]"
      />

      {/* =====================================================
          LARGE AMBIENT GLOW
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00f5c8]/[0.025] blur-[100px]"
      />

      {/* =====================================================
          RADAR
      ===================================================== */}

      <div className="absolute left-1/2 top-1/2 hidden h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 md:block">

        {/* Outer rings */}
        <div className="absolute inset-0 rounded-full border border-[#00f5c8]/[0.05]" />

        <div className="absolute inset-[12%] rounded-full border border-[#00f5c8]/[0.07]" />

        <div className="absolute inset-[24%] rounded-full border border-[#00f5c8]/[0.08]" />

        <div className="absolute inset-[36%] rounded-full border border-[#00f5c8]/[0.10]" />

        {/* Horizontal axis */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-[#00f5c8]/[0.06]" />

        {/* Vertical axis */}
        <div className="absolute bottom-0 left-1/2 top-0 w-px bg-[#00f5c8]/[0.06]" />

        {/* Diagonal axes */}
        <div className="absolute left-1/2 top-1/2 h-px w-full origin-center -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#00f5c8]/[0.035]" />

        <div className="absolute left-1/2 top-1/2 h-px w-full origin-center -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#00f5c8]/[0.035]" />

        {/* =================================================
            RADAR SWEEP
        ================================================= */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-bottom-left bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,245,200,0.16)_12deg,transparent_45deg)]" />
        </motion.div>

        {/* =================================================
            SECOND SWEEP
        ================================================= */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[12%]"
        >
          <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-bottom-left bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,245,200,0.07)_8deg,transparent_30deg)]" />
        </motion.div>

        {/* =================================================
            CENTER
        ================================================= */}

        <motion.div
          animate={{
            scale: [1, 1.07, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00f5c8] shadow-[0_0_25px_rgba(0,245,200,0.9)]"
        />
      </div>

      {/* =====================================================
          NETWORK CONNECTIONS
      ===================================================== */}

      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
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
              strokeWidth="0.12"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1],
                opacity: [0, 0.35, 0.1],
              }}
              transition={{
                duration: 4,
                delay: index * 0.35,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* =====================================================
          NODES
      ===================================================== */}

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.25, 1, 0.25],
          }}
          transition={{
            duration: 3 + (index % 3),
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#00f5c8] shadow-[0_0_12px_rgba(0,245,200,0.9)]"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        />
      ))}

      {/* =====================================================
          DATA PARTICLES
      ===================================================== */}

      {Array.from({ length: 18 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{
            x: `${(index * 17) % 100}vw`,
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 9 + (index % 5),
            delay: index * 0.6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-px w-px rounded-full bg-[#00f5c8]"
        />
      ))}

      {/* =====================================================
          HORIZONTAL SCAN
      ===================================================== */}

      <motion.div
        initial={{
          y: "-10%",
        }}
        animate={{
          y: "110%",
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f5c8]/25 to-transparent"
      />

      {/* =====================================================
          TOP LIGHT
      ===================================================== */}

      <motion.div
        animate={{
          x: ["-20%", "120%"],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[18%] h-px w-[25%] bg-[#00f5c8]/30 blur-sm"
      />

      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(2,7,13,0.25)_55%,#02070d_95%)]" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#02070d] to-transparent" />

      {/* Side fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#02070d] to-transparent" />

      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#02070d] to-transparent" />
    </div>
  );
}

export default CyberGrid;