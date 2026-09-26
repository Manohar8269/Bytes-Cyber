import { motion } from "framer-motion";
import {
  ShieldCheck,
  Terminal,
  Network,
  Code2,
  Bug,
  LockKeyhole,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Award,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import GlowButton from "../components/GlowButton";
import CTA from "../components/CTA";

const tracks = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Cybersecurity Fundamentals",
    level: "FOUNDATION",
    description:
      "Build a practical understanding of cybersecurity concepts, threats, vulnerabilities, security controls, and defensive practices.",
    topics: [
      "Cybersecurity fundamentals",
      "Threats & attack vectors",
      "Security controls",
      "Risk fundamentals",
      "Basic incident response",
    ],
  },
  {
    number: "02",
    icon: Terminal,
    title: "Ethical Hacking",
    level: "INTERMEDIATE",
    description:
      "Learn how security professionals approach vulnerability discovery, validation, reconnaissance, and controlled security testing.",
    topics: [
      "Reconnaissance",
      "Vulnerability discovery",
      "Web security fundamentals",
      "Security testing methodology",
      "Reporting & remediation",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Web Application Security",
    level: "INTERMEDIATE",
    description:
      "Understand common application security weaknesses and how developers and security teams can identify and reduce application risk.",
    topics: [
      "Authentication security",
      "Authorization",
      "Input validation",
      "API security",
      "Secure development concepts",
    ],
  },
  {
    number: "04",
    icon: Network,
    title: "Network Security",
    level: "INTERMEDIATE",
    description:
      "Develop practical knowledge of network architecture, network threats, segmentation, monitoring, and security controls.",
    topics: [
      "Network fundamentals",
      "Common network threats",
      "Segmentation",
      "Security monitoring",
      "Defensive controls",
    ],
  },
];

const awarenessPrograms = [
  {
    icon: Users,
    title: "Employee Awareness",
    text: "Help employees recognize suspicious activity, social engineering attempts, phishing messages, and common security mistakes.",
  },
  {
    icon: LockKeyhole,
    title: "Password & Identity Security",
    text: "Build better habits around passwords, authentication, account protection, and handling sensitive access.",
  },
  {
    icon: Bug,
    title: "Phishing Awareness",
    text: "Teach teams how phishing attacks work, what warning signs to look for, and how suspicious messages should be reported.",
  },
  {
    icon: Target,
    title: "Incident Readiness",
    text: "Prepare employees to recognize and report security incidents quickly and follow defined response procedures.",
  },
];

function Training({ navigate }) {
  return (
    <div className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#02070d]/55 pt-32">

        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
            >
              <SectionLabel>
                Training & Awareness
              </SectionLabel>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Build skills that make
                <span className="block text-[#00f5c8] text-glow">
                  security practical.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
                Cybersecurity training designed to turn security concepts
                into practical knowledge — for technical teams,
                security professionals, and the wider organization.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GlowButton
                  onClick={() => navigate("contact")}
                >
                  Discuss Training
                </GlowButton>

                <GlowButton
                  variant="secondary"
                  onClick={() => navigate("services")}
                >
                  Explore Security Services
                </GlowButton>
              </div>
            </motion.div>

            {/* Training dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-10 rounded-full bg-[#00f5c8]/[0.035] blur-[100px]" />

              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#061018]/90 backdrop-blur-xl">

                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#00f5c8] shadow-[0_0_8px_rgba(0,245,200,0.7)]" />

                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">
                      TRAINING_SYSTEM
                    </span>
                  </div>

                  <GraduationCap
                    size={16}
                    className="text-[#00f5c8]"
                  />
                </div>

                <div className="p-6 sm:p-7">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06]">
                      <BookOpen
                        size={25}
                        className="text-[#00f5c8]"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                        Learning Path
                      </p>

                      <p className="mt-1 text-lg font-semibold text-white">
                        Security Fundamentals
                      </p>
                    </div>

                  </div>

                  <div className="mt-7 space-y-3">

                    <TrainingStatus
                      number="01"
                      label="Security Fundamentals"
                      status="READY"
                    />

                    <TrainingStatus
                      number="02"
                      label="Ethical Hacking"
                      status="READY"
                    />

                    <TrainingStatus
                      number="03"
                      label="Web Security"
                      status="ACTIVE"
                    />

                    <TrainingStatus
                      number="04"
                      label="Network Security"
                      status="READY"
                    />

                  </div>

                  <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/20 p-4">

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/35">
                        Training Progress
                      </span>

                      <span className="font-mono text-xs text-[#00f5c8]">
                        72%
                      </span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "72%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="h-full rounded-full bg-[#00f5c8] shadow-[0_0_12px_rgba(0,245,200,0.4)]"
                      />
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          TRAINING FORMAT
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#030a10]/55 px-5 py-16 sm:px-8 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">

          <FormatCard
            icon={BookOpen}
            title="Practical"
            text="Focus on concepts, workflows, examples, and practical security thinking."
          />

          <FormatCard
            icon={Terminal}
            title="Technical"
            text="Technical learning paths can cover security testing and application security concepts."
          />

          <FormatCard
            icon={Users}
            title="Team Ready"
            text="Awareness programs are designed for teams across technical and non-technical roles."
          />

        </div>
      </section>

      {/* =========================================================
          LEARNING TRACKS
      ========================================================= */}
      <section className="relative bg-[#02070d]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <SectionLabel>
              Learning Tracks
            </SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Choose a path that matches
              <span className="text-[#00f5c8]">
                {" "}your security goals.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              Training can be structured around foundational security
              knowledge, technical security testing, or specialized
              application and network security topics.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">

            {tracks.map((track, index) => {
              const Icon = track.icon;

              return (
                <motion.article
                  key={track.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-[#00f5c8]/20 hover:bg-[#00f5c8]/[0.02] sm:p-7"
                >

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00f5c8]/[0.035] blur-[60px] transition group-hover:bg-[#00f5c8]/[0.07]" />

                  <div className="relative flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06]">
                      <Icon
                        size={21}
                        className="text-[#00f5c8]"
                      />
                    </div>

                    <div className="text-right">
                      <p className="font-mono text-xs text-white/15">
                        {track.number}
                      </p>

                      <p className="mt-1 text-[9px] font-semibold tracking-[0.16em] text-[#00f5c8]/50">
                        {track.level}
                      </p>
                    </div>

                  </div>

                  <h3 className="relative mt-6 text-xl font-semibold text-white sm:text-2xl">
                    {track.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-white/40">
                    {track.description}
                  </p>

                  <div className="relative mt-6 border-t border-white/[0.06] pt-5">

                    <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/20">
                      Core Topics
                    </p>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {track.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2
                            size={13}
                            className="mt-0.5 shrink-0 text-[#00f5c8]/60"
                          />

                          <span className="text-xs leading-5 text-white/40">
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>

                  <button
                    onClick={() => navigate("contact")}
                    className="group/link relative mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#00f5c8]"
                  >
                    Enquire about this track
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </button>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#00f5c8] transition-all duration-500 group-hover:w-full" />

                </motion.article>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          AWARENESS
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#030a10]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <SectionLabel>
                Security Awareness
              </SectionLabel>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Your people are part of the
                <span className="text-[#00f5c8]">
                  {" "}security perimeter.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                Technical controls are important, but employees also
                interact with emails, identities, applications, devices,
                and sensitive information every day.
              </p>

              <GlowButton
                className="mt-7"
                variant="outline"
                onClick={() => navigate("contact")}
              >
                Request Awareness Program
              </GlowButton>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {awarenessPrograms.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-[#00f5c8]/20"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00f5c8]/[0.06]">
                      <Icon
                        size={18}
                        className="text-[#00f5c8]"
                      />
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          LEARNING OUTCOMES
      ========================================================= */}
      <section className="relative bg-[#02070d]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <SectionLabel>
              Learning Outcomes
            </SectionLabel>

            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Move from knowing security
              <span className="text-[#00f5c8]">
                {" "}to applying it.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <OutcomeCard
              icon={ShieldCheck}
              title="Understand"
              text="Recognize common threats, vulnerabilities, and security concepts."
            />

            <OutcomeCard
              icon={Target}
              title="Identify"
              text="Spot security weaknesses and suspicious activity more effectively."
            />

            <OutcomeCard
              icon={Terminal}
              title="Apply"
              text="Use practical security workflows and defensive thinking."
            />

            <OutcomeCard
              icon={Award}
              title="Improve"
              text="Build security habits that support stronger organizational resilience."
            />

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
   TRAINING STATUS
============================================================= */

function TrainingStatus({ number, label, status }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">

      <div className="flex items-center gap-3">

        <span className="font-mono text-[9px] text-[#00f5c8]/50">
          {number}
        </span>

        <span className="text-xs text-white/55">
          {label}
        </span>

      </div>

      <span
        className={`font-mono text-[9px] ${
          status === "ACTIVE"
            ? "text-[#00f5c8]"
            : "text-white/25"
        }`}
      >
        {status}
      </span>

    </div>
  );
}

/* =============================================================
   FORMAT CARD
============================================================= */

function FormatCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00f5c8]/[0.06]">
        <Icon
          size={19}
          className="text-[#00f5c8]"
        />
      </div>

      <h3 className="mt-5 text-base font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/40">
        {text}
      </p>
    </div>
  );
}

/* =============================================================
   OUTCOME CARD
============================================================= */

function OutcomeCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-[#00f5c8]/20 hover:bg-[#00f5c8]/[0.02]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5c8]/15 bg-[#00f5c8]/[0.05]">
        <Icon
          size={20}
          className="text-[#00f5c8]"
        />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/40">
        {text}
      </p>
    </motion.div>
  );
}

export default Training;