import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Eye,
  Server,
  LockKeyhole,
  CheckCircle2,
  ArrowRight,
  Activity,
  Globe2,
} from "lucide-react";

import CyberGrid from "../components/CyberGrid";
import SectionLabel from "../components/SectionLabel";
import GlowButton from "../components/GlowButton";

const principles = [
  {
    icon: Eye,
    title: "Visibility First",
    text: "Security decisions become stronger when the organization has a clear picture of its exposed assets, technologies, and attack paths.",
  },
  {
    icon: Target,
    title: "Risk Focused",
    text: "We focus assessments on weaknesses that can create meaningful business or security impact instead of generating noise.",
  },
  {
    icon: Activity,
    title: "Evidence Driven",
    text: "Findings are validated with technical evidence so teams can understand what was discovered and why it matters.",
  },
  {
    icon: CheckCircle2,
    title: "Remediation Oriented",
    text: "A security assessment should not end with a report. The objective is to help teams fix issues and verify the result.",
  },
];

const capabilities = [
  "Web Application Security",
  "API Security",
  "Network Penetration Testing",
  "Cloud Security Assessment",
  "Security Architecture",
  "Risk & Compliance",
];

function About({ navigate }) {
  return (
    <div className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#02070d]/55 pt-32">

        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
            >
              <SectionLabel>
                About Bytes
              </SectionLabel>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Security should create
                <span className="block text-[#00f5c8] text-glow">
                  clarity, not complexity.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
                Bytes is a cybersecurity-focused organization helping
                businesses identify vulnerabilities, understand their
                exposure, and strengthen their digital security posture.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GlowButton
                  onClick={() => navigate("contact")}
                >
                  Talk to Our Security Team
                </GlowButton>

                <GlowButton
                  variant="secondary"
                  onClick={() => navigate("services")}
                >
                  Explore Capabilities
                </GlowButton>
              </div>
            </motion.div>

            {/* Security panel */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-full bg-[#00f5c8]/[0.035] blur-[90px]" />

              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#061018]/90 backdrop-blur-xl">

                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#00f5c8]" />
                    <span className="font-mono text-[10px] tracking-[0.18em] text-white/30">
                      SECURITY_CORE
                    </span>
                  </div>

                  <span className="font-mono text-[9px] text-[#00f5c8]/50">
                    ACTIVE
                  </span>
                </div>

                <div className="p-6">

                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06]">
                      <ShieldCheck
                        size={27}
                        className="text-[#00f5c8]"
                      />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                        Security Posture
                      </p>

                      <p className="mt-1 text-xl font-semibold text-white">
                        Understand. Secure. Verify.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">

                    <AboutStatus
                      icon={Globe2}
                      label="Attack Surface Visibility"
                      value="ACTIVE"
                    />

                    <AboutStatus
                      icon={Server}
                      label="Infrastructure Review"
                      value="READY"
                    />

                    <AboutStatus
                      icon={LockKeyhole}
                      label="Security Controls"
                      value="MONITORED"
                    />

                  </div>

                  <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/20 p-4">

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/35">
                        Security Approach
                      </span>

                      <span className="font-mono text-xs text-[#00f5c8]">
                        360°
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="h-1 rounded-full bg-[#00f5c8]/60"
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
          STORY
      ========================================================= */}
      <section className="relative bg-[#030a10]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <SectionLabel>
                Our approach
              </SectionLabel>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                We look at security from the
                <span className="text-[#00f5c8]">
                  {" "}attacker's perspective.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-white/45 sm:text-base">

              <p>
                Modern organizations operate across complex digital
                environments. Applications, APIs, cloud infrastructure,
                identities, third-party services, and internal systems
                can all contribute to an organization's attack surface.
              </p>

              <p>
                Our approach starts with understanding that environment.
                We then identify weaknesses, validate their technical
                impact, and communicate the findings in a way that
                security and engineering teams can act upon.
              </p>

              <p>
                The goal is not simply to find vulnerabilities. The goal
                is to help organizations understand where meaningful
                exposure exists and what can be done to reduce it.
              </p>

              <div className="border-l border-[#00f5c8]/30 pl-5">
                <p className="text-white/65">
                  "A useful security assessment should answer three
                  questions: what is exposed, why does it matter, and
                  what should happen next?"
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLES
      ========================================================= */}
      <section className="relative bg-[#02070d]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <SectionLabel>
              Our principles
            </SectionLabel>

            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Four ideas behind our
              <span className="text-[#00f5c8]">
                {" "}security methodology.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-[#00f5c8]/20 hover:bg-[#00f5c8]/[0.025]"
                >

                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5c8]/15 bg-[#00f5c8]/[0.05]">
                      <Icon
                        size={20}
                        className="text-[#00f5c8]"
                      />
                    </div>

                    <span className="font-mono text-[10px] text-white/15">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#030a10]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <SectionLabel>
                Technical capabilities
              </SectionLabel>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Coverage across the
                <span className="text-[#00f5c8]">
                  {" "}modern attack surface.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/40">
                Our security capabilities span applications,
                infrastructure, APIs, cloud environments, and
                organizational risk.
              </p>

              <GlowButton
                variant="outline"
                className="mt-7"
                onClick={() => navigate("services")}
              >
                View Services
              </GlowButton>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {capabilities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-[#00f5c8]/20 hover:bg-[#00f5c8]/[0.025]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00f5c8]/[0.06] font-mono text-[9px] text-[#00f5c8]/70">
                      0{index + 1}
                    </span>

                    <span className="text-sm text-white/65">
                      {item}
                    </span>
                  </div>

                  <ArrowRight
                    size={15}
                    className="text-white/20 transition group-hover:translate-x-1 group-hover:text-[#00f5c8]"
                  />
                </motion.div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#02070d]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[#00f5c8]/[0.025] blur-[100px]" />

        <div className="relative mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06]">
            <ShieldCheck
              size={27}
              className="text-[#00f5c8]"
            />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#00f5c8]">
            Our mission
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Help organizations become harder to
            <span className="text-[#00f5c8]">
              {" "}attack and easier to defend.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
            Better visibility. Better validation. Better security
            decisions. We believe cybersecurity should provide
            organizations with practical information they can use.
          </p>

          <div className="mt-8">
            <GlowButton
              onClick={() => navigate("contact")}
            >
              Start a Conversation
            </GlowButton>
          </div>

        </div>
      </section>

    </div>
  );
}

/* =============================================================
   STATUS ITEM
============================================================= */

function AboutStatus({ icon: Icon, label, value }) {
  return (
    <div className="relative z-10 flex items-center justify-between rounded-xl border border-white/10 bg-[#07131b]/85 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-[#00f5c8]/20 hover:bg-[#081821]/90">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00f5c8]/[0.05]">
          <Icon
            size={16}
            className="text-[#00f5c8]"
          />
        </div>

        <span className="text-xs text-white/45">
          {label}
        </span>

      </div>

      <span className="font-mono text-[9px] text-[#00f5c8]/60">
        {value}
      </span>

    </div>
  );
}

export default About;