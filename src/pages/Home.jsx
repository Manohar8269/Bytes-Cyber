import { motion } from "framer-motion";
import {
  ShieldCheck,
  Crosshair,
  FileCheck,
  Eye,
  LockKeyhole,
  Server,
  Terminal,
  CheckCircle2,
  Activity,
  ArrowRight,
  Zap,
  Globe2,
} from "lucide-react";

import CyberGrid from "../components/CyberGrid";
import SectionLabel from "../components/SectionLabel";
import GlowButton from "../components/GlowButton";
import ServiceCard from "../components/ServiceCard";
import ProcessTimeline from "../components/ProcessTimeline";
import CTA from "../components/CTA";

const services = [
  {
    number: "01",
    icon: Crosshair,
    title: "Penetration Testing",
    description:
      "Identify exploitable vulnerabilities across applications, infrastructure, networks, and digital assets.",
    items: [
      "Web Application Testing",
      "Network Security Testing",
      "API Security Assessment",
    ],
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Compliance & Audits",
    description:
      "Assess your security controls, identify compliance gaps, and strengthen your overall security posture.",
    items: [
      "Security Gap Assessment",
      "Control Validation",
      "Risk & Compliance Review",
    ],
  },
  {
    number: "03",
    icon: Eye,
    title: "Security Awareness",
    description:
      "Build a stronger security culture by helping teams recognize and respond to common cyber threats.",
    items: [
      "Security Awareness Training",
      "Phishing Simulations",
      "Employee Security Programs",
    ],
  },
  {
    number: "04",
    icon: LockKeyhole,
    title: "Security Consulting",
    description:
      "Get practical security guidance designed around your technology, business operations, and risk environment.",
    items: [
      "Security Strategy",
      "Risk Assessment",
      "Security Architecture",
    ],
  },
];

const stats = [
  {
    value: "24/7",
    label: "Security Mindset",
  },
  {
    value: "360°",
    label: "Attack Surface View",
  },
  {
    value: "100%",
    label: "Actionable Reporting",
  },
  {
    value: "01",
    label: "Security Partner",
  },
];

function Home({ navigate }) {
  return (
    <div className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-screen bg-[#02070d]/55 pt-20">

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[#00f5c8]" />

                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#00f5c8]">
                  Cybersecurity • Intelligence • Resilience
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl xl:text-[80px]">
                Your attack surface
                <span className="block text-[#00f5c8] text-glow">
                  is bigger
                </span>
                than you think.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
                Modern businesses operate across applications, APIs,
                cloud infrastructure, identities, and connected systems.
                We help you discover where security weaknesses exist
                before attackers do.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <GlowButton
                  onClick={() => navigate("contact")}
                  variant="primary"
                >
                  Start Security Assessment
                </GlowButton>

                <GlowButton
                  onClick={() => navigate("services")}
                  variant="secondary"
                >
                  Explore Services
                </GlowButton>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.07] pt-7">

                <div className="flex items-center gap-2 text-xs text-white/35">
                  <CheckCircle2
                    size={15}
                    className="text-[#00f5c8]"
                  />
                  Practical Security Testing
                </div>

                <div className="flex items-center gap-2 text-xs text-white/35">
                  <CheckCircle2
                    size={15}
                    className="text-[#00f5c8]"
                  />
                  Clear Technical Reporting
                </div>

                <div className="flex items-center gap-2 text-xs text-white/35">
                  <CheckCircle2
                    size={15}
                    className="text-[#00f5c8]"
                  />
                  Actionable Remediation
                </div>

              </div>
            </motion.div>

            {/* RIGHT — SECURITY DASHBOARD */}
            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="relative"
            >

              {/* Glow */}
              <div className="absolute -inset-8 rounded-full bg-[#00f5c8]/[0.04] blur-[80px]" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#061018]/90 shadow-[0_25px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">

                {/* Window header */}
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">

                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>

                  <div className="font-mono text-[10px] tracking-[0.2em] text-white/25">
                    SECURITY_MONITOR // LIVE
                  </div>

                  <Activity
                    size={15}
                    className="text-[#00f5c8]"
                  />
                </div>

                {/* Dashboard */}
                <div className="p-5 sm:p-7">

                  <div className="mb-7 flex items-start justify-between">

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                        Current Security Status
                      </p>

                      <div className="mt-2 flex items-center gap-2.5">
                        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#00f5c8] shadow-[0_0_12px_rgba(0,245,200,0.8)]" />

                        <span className="text-lg font-semibold text-white">
                          Monitoring Active
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#00f5c8]/15 bg-[#00f5c8]/5 px-3 py-2">
                      <ShieldCheck
                        size={20}
                        className="text-[#00f5c8]"
                      />
                    </div>

                  </div>

                  {/* Fake graph */}
                  <div className="relative h-40 overflow-hidden rounded-xl border border-white/[0.06] bg-black/20 p-4">

                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute left-0 right-0 top-1/4 border-t border-white/[0.04]" />
                      <div className="absolute left-0 right-0 top-2/4 border-t border-white/[0.04]" />
                      <div className="absolute left-0 right-0 top-3/4 border-t border-white/[0.04]" />

                      <div className="absolute bottom-0 left-1/4 top-0 border-l border-white/[0.04]" />
                      <div className="absolute bottom-0 left-2/4 top-0 border-l border-white/[0.04]" />
                      <div className="absolute bottom-0 left-3/4 top-0 border-l border-white/[0.04]" />
                    </div>

                    {/* SVG line */}
                    <svg
                      viewBox="0 0 600 180"
                      preserveAspectRatio="none"
                      className="absolute inset-0 h-full w-full"
                    >
                      <defs>
                        <linearGradient
                          id="securityLine"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#00f5c8" stopOpacity="0.1" />
                          <stop offset="40%" stopColor="#00f5c8" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#00f5c8" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 135 C50 128 68 105 105 116 S165 150 200 97 S255 81 285 104 S335 135 365 68 S420 82 452 55 S515 85 550 45 S580 58 600 28"
                        fill="none"
                        stroke="url(#securityLine)"
                        strokeWidth="3"
                      />
                    </svg>

                    <div className="absolute bottom-3 left-4 text-[9px] text-white/20">
                      EXPOSURE
                    </div>

                    <div className="absolute right-4 top-3 font-mono text-[9px] text-[#00f5c8]/60">
                      LIVE
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">

                    <DashboardMetric
                      label="Assets"
                      value="248"
                    />

                    <DashboardMetric
                      label="Scanned"
                      value="96%"
                    />

                    <DashboardMetric
                      label="Critical"
                      value="03"
                      danger
                    />

                    <DashboardMetric
                      label="Resolved"
                      value="91%"
                    />

                  </div>

                  {/* Scan status */}
                  <div className="mt-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">

                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs text-white/40">
                        Attack Surface Assessment
                      </span>

                      <span className="font-mono text-xs text-[#00f5c8]">
                        78%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "78%" }}
                        transition={{
                          duration: 1.5,
                          delay: 0.6,
                        }}
                        className="h-full rounded-full bg-[#00f5c8] shadow-[0_0_12px_rgba(0,245,200,0.45)]"
                      />
                    </div>

                    <div className="mt-3 flex justify-between text-[10px] text-white/20">
                      <span>DISCOVERY</span>
                      <span>TESTING</span>
                      <span>REPORT</span>
                    </div>

                  </div>

                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-4 hidden rounded-xl border border-[#00f5c8]/20 bg-[#061018]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00f5c8]/10">
                    <Zap
                      size={17}
                      className="text-[#00f5c8]"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-white/25">
                      Risk Detection
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-white">
                      Continuous Analysis
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#030a10]/55 backdrop-blur-[2px]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`px-5 py-8 ${
                index !== 0
                  ? "border-l border-white/[0.07]"
                  : ""
              }`}
            >
              <div className="text-2xl font-bold text-[#00f5c8] sm:text-3xl">
                {stat.value}
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/30">
                {stat.label}
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="relative bg-[#02070d]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <SectionLabel>
              What we do
            </SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Security services built around
              <span className="text-[#00f5c8]">
                {" "}real-world risk.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              From discovering vulnerabilities to validating remediation,
              our services help organizations understand and reduce their
              exposure across the modern attack surface.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                number={service.number}
                icon={service.icon}
                title={service.title}
                description={service.description}
                items={service.items}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-start">
            <GlowButton
              variant="outline"
              onClick={() => navigate("services")}
            >
              View All Security Services
            </GlowButton>
          </div>

        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#030a10]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-[#00f5c8]/[0.025] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <SectionLabel>
              Our process
            </SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              From discovery to
              <span className="text-[#00f5c8]">
                {" "}verified security.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              A structured security assessment process designed to
              identify real weaknesses, communicate them clearly,
              and verify remediation.
            </p>
          </div>

          <ProcessTimeline />

        </div>
      </section>

      {/* =========================================================
          WHY BYTES
      ========================================================= */}
      <section className="relative bg-[#02070d]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            {/* Left */}
            <div>
              <SectionLabel>
                Why security matters
              </SectionLabel>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Visibility is the first
                <span className="text-[#00f5c8]">
                  {" "}layer of defense.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/40">
                Attackers only need one overlooked weakness. Effective
                cybersecurity begins by understanding exactly what is
                exposed and which weaknesses matter most.
              </p>

              <GlowButton
                className="mt-7"
                variant="secondary"
                onClick={() => navigate("about")}
              >
                Learn About Our Approach
              </GlowButton>
            </div>

            {/* Right cards */}
            <div className="grid gap-4 sm:grid-cols-2">

              <WhyCard
                icon={Globe2}
                title="Attack Surface"
                text="Understand internet-facing assets, applications, APIs, infrastructure, and connected systems."
              />

              <WhyCard
                icon={Server}
                title="Infrastructure"
                text="Identify weaknesses across servers, networks, cloud systems, and security controls."
              />

              <WhyCard
                icon={Terminal}
                title="Application Security"
                text="Find vulnerabilities in web applications, APIs, authentication, and business logic."
              />

              <WhyCard
                icon={ShieldCheck}
                title="Risk Reduction"
                text="Turn technical findings into practical remediation actions that teams can execute."
              />

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECURITY CREDENTIALS
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#030a10]/75 px-5 py-20 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-2xl">
              <SectionLabel>
                Security expertise
              </SectionLabel>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Built around technical depth,
                <span className="text-[#00f5c8]">
                  {" "}not security theater.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Security assessments should produce useful answers:
                what is exposed, why it matters, how it can be fixed,
                and whether the fix actually worked.
              </p>
            </div>

            <button
              onClick={() => navigate("contact")}
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#00f5c8]"
            >
              Discuss Your Security Requirements
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Web Application Security",
              "Network Penetration Testing",
              "API Security",
              "Cloud Security",
            ].map((item, index) => (
              <div
                key={item}
                className="group rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-[#00f5c8]/20 hover:bg-[#00f5c8]/[0.03]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/20">
                    0{index + 1}
                  </span>

                  <ShieldCheck
                    size={16}
                    className="text-[#00f5c8]/50 transition group-hover:text-[#00f5c8]"
                  />
                </div>

                <p className="text-sm font-medium text-white/75">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          TRAINING PREVIEW
      ========================================================= */}
      <section className="relative bg-[#02070d]/75 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] lg:grid-cols-[1fr_0.8fr]">

            <div className="p-7 sm:p-10 lg:p-14">

              <SectionLabel>
                Security awareness
              </SectionLabel>

              <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                Security is also a
                <span className="text-[#00f5c8]">
                  {" "}human problem.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                Technology alone cannot eliminate risk. Security-aware
                teams can identify suspicious activity, avoid common
                mistakes, and respond faster to emerging threats.
              </p>

              <GlowButton
                className="mt-7"
                variant="outline"
                onClick={() => navigate("training")}
              >
                Explore Training
              </GlowButton>
            </div>

            <div className="relative min-h-[300px] border-t border-white/[0.07] bg-[#061018] p-7 lg:border-l lg:border-t-0 lg:p-10">

              <div className="absolute inset-0 cyber-grid opacity-40" />

              <div className="relative space-y-3">

                {[
                  "Phishing Awareness",
                  "Password Security",
                  "Social Engineering",
                  "Incident Response",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-black/20 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00f5c8]/[0.07]">
                        <CheckCircle2
                          size={15}
                          className="text-[#00f5c8]"
                        />
                      </div>

                      <span className="text-sm text-white/65">
                        {item}
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-[#00f5c8]/50">
                      READY
                    </span>
                  </motion.div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <CTA navigate={navigate} />

    </div>
  );
}

/* =============================================================
   DASHBOARD METRIC
============================================================= */

function DashboardMetric({ label, value, danger = false }) {
  return (
    <div
      className="
        relative z-10
        rounded-xl
        border border-white/10
        bg-[#07131b]/90
        p-3.5
        shadow-[0_0_20px_rgba(0,0,0,0.18)]
        transition-all duration-300
        hover:border-[#00f5c8]/25
        hover:bg-[#081821]
      "
    >
      <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-white/45">
        {label}
      </p>

      <p
        className={`mt-1.5 font-mono text-xl font-bold ${
          danger ? "text-red-400" : "text-[#00f5c8]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
/* =============================================================
   WHY CARD
============================================================= */

function WhyCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="
        group
        relative
        z-10
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-[#07131b]/90
        p-6
        shadow-[0_10px_40px_rgba(0,0,0,0.2)]
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-[#00f5c8]/25
        hover:bg-[#081821]/95
        hover:shadow-[0_10px_50px_rgba(0,245,200,0.06)]
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-[#00f5c8]/[0.04]
          blur-[50px]
          transition-all
          duration-500
          group-hover:bg-[#00f5c8]/[0.10]
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border border-[#00f5c8]/20
          bg-[#00f5c8]/[0.07]
          transition-all
          duration-300
          group-hover:border-[#00f5c8]/35
          group-hover:bg-[#00f5c8]/[0.10]
        "
      >
        {Icon ? (
          <Icon
            size={20}
            strokeWidth={1.7}
            className="text-[#00f5c8]"
          />
        ) : (
          <span className="h-2 w-2 rounded-full bg-[#00f5c8]" />
        )}
      </div>

      {/* Title */}
      <h3 className="relative z-10 mt-5 text-base font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-2 text-sm leading-6 text-white/45">
        {text}
      </p>

      {/* Bottom hover line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-[#00f5c8]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.div>
  );
}

export default Home;