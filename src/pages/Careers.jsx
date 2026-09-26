import { motion } from "framer-motion";
import {
  ShieldCheck,
  Terminal,
  Code2,
  Search,
  Users,
  Brain,
  Target,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Rocket,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import GlowButton from "../components/GlowButton";
import CTA from "../components/CTA";

const careerTracks = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Work across security assessments, vulnerability research, defensive security, and security operations.",
    skills: [
      "Security fundamentals",
      "Vulnerability assessment",
      "Security testing",
      "Threat awareness",
    ],
  },
  {
    number: "02",
    icon: Terminal,
    title: "Ethical Hacking",
    description:
      "Explore application, API, infrastructure, and network security testing through structured security methodologies.",
    skills: [
      "Reconnaissance",
      "Web security",
      "Network security",
      "Security validation",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Application Security",
    description:
      "Work with engineering and security teams to identify application weaknesses and improve secure development practices.",
    skills: [
      "Web applications",
      "API security",
      "Secure coding",
      "Application testing",
    ],
  },
];

const qualities = [
  {
    icon: Brain,
    title: "Curiosity",
    text: "You enjoy understanding how systems work and asking what could go wrong.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    text: "You approach technical challenges methodically and look for practical solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "You can communicate technical ideas clearly and work effectively with others.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    text: "You stay interested in evolving technologies, attack techniques, and security practices.",
  },
];

const benefits = [
  "Real-world cybersecurity exposure",
  "Technical learning opportunities",
  "Collaborative working environment",
  "Exposure to modern technologies",
  "Security-focused projects",
  "Continuous skill development",
];

function Careers({ navigate }) {
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
                Careers
              </SectionLabel>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Build the future of
                <span className="block text-[#00f5c8] text-glow">
                  cybersecurity.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
                Join a security-focused environment where curiosity,
                technical thinking, continuous learning, and practical
                problem solving matter.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GlowButton
                  onClick={() => navigate("contact")}
                >
                  Start a Conversation
                </GlowButton>

                <GlowButton
                  variant="secondary"
                  onClick={() => navigate("about")}
                >
                  Learn About Us
                </GlowButton>
              </div>
            </motion.div>

            {/* Career dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-10 rounded-full bg-[#00f5c8]/[0.035] blur-[100px]" />

              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#061018]/90 backdrop-blur-xl">

                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#00f5c8] shadow-[0_0_8px_rgba(0,245,200,0.7)]" />

                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">
                      CAREER_SYSTEM
                    </span>
                  </div>

                  <span className="font-mono text-[9px] text-[#00f5c8]/55">
                    OPEN
                  </span>

                </div>

                <div className="p-6 sm:p-7">

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06]">
                      <Briefcase
                        size={25}
                        className="text-[#00f5c8]"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                        Career Focus
                      </p>

                      <p className="mt-1 text-lg font-semibold text-white">
                        Security & Technology
                      </p>
                    </div>

                  </div>

                  <div className="mt-7 space-y-2.5">

                    <CareerStatus
                      number="01"
                      label="Cybersecurity"
                      value="ACTIVE"
                    />

                    <CareerStatus
                      number="02"
                      label="Ethical Hacking"
                      value="ACTIVE"
                    />

                    <CareerStatus
                      number="03"
                      label="Application Security"
                      value="ACTIVE"
                    />

                    <CareerStatus
                      number="04"
                      label="Research & Learning"
                      value="OPEN"
                    />

                  </div>

                  <div className="mt-6 rounded-xl border border-[#00f5c8]/10 bg-[#00f5c8]/[0.025] p-4">

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/30">
                        Learning Mindset
                      </span>

                      <span className="font-mono text-xs text-[#00f5c8]">
                        ALWAYS_ON
                      </span>
                    </div>

                    <div className="mt-4 flex gap-1.5">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div
                          key={item}
                          className="h-1 flex-1 rounded-full bg-[#00f5c8]/50"
                        />
                      ))}
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          WHY JOIN
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#030a10]/55 px-5 py-20 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 md:grid-cols-3">

            <JoinCard
              icon={GraduationCap}
              title="Keep Learning"
              text="Cybersecurity changes continuously. We value people who enjoy learning and expanding their technical knowledge."
            />

            <JoinCard
              icon={Terminal}
              title="Work on Real Problems"
              text="Apply security thinking to practical technology and security challenges rather than isolated theory."
            />

            <JoinCard
              icon={Users}
              title="Grow Together"
              text="Share ideas, learn from others, and develop stronger technical and communication skills."
            />

          </div>

        </div>
      </section>

      {/* =========================================================
          CAREER TRACKS
      ========================================================= */}
      <section className="relative bg-[#02070d]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <SectionLabel>
              Career Tracks
            </SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Find your place in the
              <span className="text-[#00f5c8]">
                {" "}security ecosystem.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              Different backgrounds can contribute to cybersecurity.
              Explore areas where your technical interests and skills
              can create value.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">

            {careerTracks.map((track, index) => {
              const Icon = track.icon;

              return (
                <motion.article
                  key={track.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-[#00f5c8]/20 hover:bg-[#00f5c8]/[0.018]"
                >

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00f5c8]/[0.035] blur-[60px]" />

                  <div className="relative flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5c8]/15 bg-[#00f5c8]/[0.05]">
                      <Icon
                        size={20}
                        className="text-[#00f5c8]"
                      />
                    </div>

                    <span className="font-mono text-[10px] text-white/15">
                      {track.number}
                    </span>

                  </div>

                  <h3 className="relative mt-6 text-xl font-semibold text-white">
                    {track.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-white/40">
                    {track.description}
                  </p>

                  <div className="relative mt-6 border-t border-white/[0.06] pt-5">

                    <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/20">
                      Core Areas
                    </p>

                    <div className="space-y-2.5">

                      {track.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-[#00f5c8]/65"
                          />

                          <span className="text-xs text-white/40">
                            {skill}
                          </span>
                        </div>
                      ))}

                    </div>
                  </div>

                  <button
                    onClick={() => navigate("contact")}
                    className="group/track mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#00f5c8]"
                  >
                    Discuss this career path
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/track:translate-x-1"
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
          WHAT WE LOOK FOR
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#030a10]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <SectionLabel>
                What We Look For
              </SectionLabel>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Skills matter.
                <span className="block text-[#00f5c8]">
                  Mindset matters too.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                Strong cybersecurity professionals combine technical
                curiosity with disciplined problem solving, clear
                communication, and a willingness to keep learning.
              </p>

              <GlowButton
                variant="outline"
                className="mt-7"
                onClick={() => navigate("contact")}
              >
                Get in Touch
              </GlowButton>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {qualities.map((item, index) => {
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
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-[#00f5c8]/20 hover:bg-[#00f5c8]/[0.02]"
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
          BENEFITS / CULTURE
      ========================================================= */}
      <section className="relative bg-[#02070d]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Benefits */}
            <div>

              <SectionLabel>
                Working With Us
              </SectionLabel>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                A place to turn
                <span className="text-[#00f5c8]">
                  {" "}interest into expertise.
                </span>
              </h2>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-[#00f5c8]"
                    />

                    <span className="text-sm text-white/45">
                      {benefit}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* Quote panel */}
            <div className="relative overflow-hidden rounded-2xl border border-[#00f5c8]/15 bg-[#00f5c8]/[0.025] p-7 sm:p-9">

              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#00f5c8]/[0.05] blur-[80px]" />

              <div className="relative">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06]">
                  <ShieldCheck
                    size={21}
                    className="text-[#00f5c8]"
                  />
                </div>

                <p className="mt-7 text-lg font-semibold leading-8 text-white sm:text-xl">
                  "The security field rewards people who stay curious,
                  think carefully, and keep learning."
                </p>

                <p className="mt-5 text-xs leading-6 text-white/30">
                  Whether you're starting your cybersecurity journey
                  or expanding an existing technical background,
                  continuous learning remains central to the field.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          OPPORTUNITY
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#030a10]/55 px-5 py-20 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06]">
            <Briefcase
              size={25}
              className="text-[#00f5c8]"
            />
          </div>

          <SectionLabel>
            Open Opportunities
          </SectionLabel>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to start your
            <span className="text-[#00f5c8]">
              {" "}security journey?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            Tell us about your background, technical interests, and the
            kind of security work you want to learn or contribute to.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <GlowButton
              onClick={() => navigate("contact")}
            >
              Send Your Profile
            </GlowButton>

            <GlowButton
              variant="secondary"
              onClick={() => navigate("contact")}
            >
              Ask About Opportunities
            </GlowButton>

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
   JOIN CARD
============================================================= */

function JoinCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-[#00f5c8]/20"
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

/* =============================================================
   CAREER STATUS
============================================================= */

function CareerStatus({ number, label, value }) {
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
          value === "OPEN"
            ? "text-[#00f5c8]"
            : "text-white/25"
        }`}
      >
        {value}
      </span>

    </div>
  );
}

export default Careers;