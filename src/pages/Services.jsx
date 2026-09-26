import { motion } from "framer-motion";
import {
  ShieldCheck,
  Crosshair,
  FileCheck,
  Eye,
  LockKeyhole,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import GlowButton from "../components/GlowButton";
import CTA from "../components/CTA";
import ProcessTimeline from "../components/ProcessTimeline";

const coreServices = [
  {
    number: "01",
    icon: Crosshair,
    title: "Penetration Testing",
    tagline: "Find vulnerabilities before attackers do.",
    description:
      "Controlled security testing designed to identify exploitable weaknesses across your external and internal attack surface.",
    capabilities: [
      "Web application penetration testing",
      "API security testing",
      "Network penetration testing",
      "Authentication & authorization testing",
      "Business logic testing",
      "Vulnerability validation",
    ],
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Compliance & Audits",
    tagline: "Turn security requirements into measurable controls.",
    description:
      "Security assessments that help organizations understand control gaps, document risks, and strengthen their security governance.",
    capabilities: [
      "Security gap assessment",
      "Control validation",
      "Risk assessment",
      "Security policy review",
      "Audit readiness",
      "Remediation tracking",
    ],
  },
  {
    number: "03",
    icon: Eye,
    title: "Security Awareness",
    tagline: "Build stronger security habits across your team.",
    description:
      "Security awareness programs designed to help employees recognize common threats and make safer decisions.",
    capabilities: [
      "Security awareness training",
      "Phishing awareness",
      "Social engineering awareness",
      "Password security",
      "Incident reporting awareness",
      "Security culture programs",
    ],
  },
  {
    number: "04",
    icon: LockKeyhole,
    title: "Security Consulting",
    tagline: "Practical guidance for complex security decisions.",
    description:
      "Cybersecurity consulting aligned with your technology environment, business requirements, and risk priorities.",
    capabilities: [
      "Security strategy",
      "Security architecture review",
      "Risk advisory",
      "Cloud security guidance",
      "Application security guidance",
      "Security roadmap planning",
    ],
  },
];

const coverage = [
  "Web Applications",
  "Mobile Applications",
  "APIs & Microservices",
  "Networks & Infrastructure",
  "Cloud Environments",
  "Authentication Systems",
  "Corporate Assets",
  "Security Controls",
];

function Services({ navigate }) {
  return (
    <div className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#02070d]/55 pt-32">


        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
            >
              <SectionLabel>
                Security Services
              </SectionLabel>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Know where you're
                <span className="block text-[#00f5c8] text-glow">
                  exposed.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
                From penetration testing to security consulting, our
                services help organizations discover vulnerabilities,
                understand risk, and improve their security posture.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GlowButton
                  onClick={() => navigate("contact")}
                >
                  Request Security Assessment
                </GlowButton>

                <GlowButton
                  variant="secondary"
                  onClick={() => navigate("about")}
                >
                  About Our Approach
                </GlowButton>
              </div>
            </motion.div>

            {/* Right security panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-10 rounded-full bg-[#00f5c8]/[0.035] blur-[100px]" />

              <div className="relative rounded-2xl border border-white/[0.08] bg-[#061018]/90 p-6 backdrop-blur-xl sm:p-7">

                <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00f5c8]/[0.06]">
                      <ShieldCheck
                        size={20}
                        className="text-[#00f5c8]"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                        Security Coverage
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Attack Surface Assessment
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[9px] text-[#00f5c8]/60">
                    ONLINE
                  </span>
                </div>

                <div className="mt-6 space-y-2.5">
                  {coverage.slice(0, 6).map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.015] px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] text-[#00f5c8]/50">
                          0{index + 1}
                        </span>

                        <span className="text-xs text-white/55">
                          {item}
                        </span>
                      </div>

                      <span className="h-1.5 w-1.5 rounded-full bg-[#00f5c8] shadow-[0_0_8px_rgba(0,245,200,0.7)]" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-[#00f5c8]/10 bg-[#00f5c8]/[0.025] p-4">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white/30">
                      SECURITY VISIBILITY
                    </span>

                    <span className="font-mono text-[#00f5c8]/70">
                      360°
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-8 gap-1">
                    {coverage.map((item) => (
                      <div
                        key={item}
                        className="h-1 rounded-full bg-[#00f5c8]/40"
                      />
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OVERVIEW
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#030a10]/55 px-5 py-16 sm:px-8 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">

          <OverviewCard
            number="01"
            title="Discover"
            text="Understand what assets, applications, systems, and services are exposed."
          />

          <OverviewCard
            number="02"
            title="Validate"
            text="Test discovered weaknesses and validate their actual technical impact."
          />

          <OverviewCard
            number="03"
            title="Improve"
            text="Turn findings into practical remediation actions and verify the results."
          />

        </div>
      </section>

      {/* =========================================================
          CORE SERVICES
      ========================================================= */}
      <section className="relative bg-[#02070d] px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <SectionLabel>
              Core Services
            </SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Security services designed around
              <span className="text-[#00f5c8]">
                {" "}real-world threats.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              Choose a focused assessment or combine multiple capabilities
              to build a broader view of your organization's security posture.
            </p>
          </div>

          <div className="mt-12 space-y-5">

            {coreServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#00f5c8]/20 hover:bg-[#00f5c8]/[0.018] sm:p-8"
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#00f5c8]/[0.025] blur-[90px] transition group-hover:bg-[#00f5c8]/[0.05]" />

                  <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* Service intro */}
                    <div>

                      <div className="flex items-center justify-between">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06]">
                          <Icon
                            size={22}
                            className="text-[#00f5c8]"
                          />
                        </div>

                        <span className="font-mono text-sm text-white/15">
                          {service.number}
                        </span>

                      </div>

                      <h3 className="mt-6 text-2xl font-bold text-white">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-[#00f5c8]/80">
                        {service.tagline}
                      </p>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
                        {service.description}
                      </p>

                    </div>

                    {/* Capabilities */}
                    <div>

                      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20">
                        Coverage
                      </p>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {service.capabilities.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 rounded-lg border border-white/[0.05] bg-black/10 px-3 py-3"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[#00f5c8]/70"
                            />

                            <span className="text-xs leading-5 text-white/45">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => navigate("contact")}
                        className="group/link mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#00f5c8]"
                      >
                        Discuss this service
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover/link:translate-x-1"
                        />
                      </button>

                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#00f5c8] transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          COVERAGE
      ========================================================= */}
      <section className="relative bg-[#030a10]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <SectionLabel>
                Assessment Coverage
              </SectionLabel>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                One assessment.
                <span className="block text-[#00f5c8]">
                  Multiple attack paths.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                Security weaknesses rarely exist in isolation. A single
                application, identity, API, or infrastructure weakness
                can expose a broader attack path.
              </p>

              <GlowButton
                className="mt-7"
                onClick={() => navigate("contact")}
                variant="outline"
              >
                Discuss Your Attack Surface
              </GlowButton>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {coverage.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-[#00f5c8]/20 hover:bg-[#00f5c8]/[0.025]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#00f5c8]/10 bg-[#00f5c8]/[0.04] font-mono text-[9px] text-[#00f5c8]/60">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-white/55">
                    {item}
                  </span>
                </motion.div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          ENGAGEMENT PROCESS
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#02070d]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="absolute left-1/2 top-0 h-96 w-[650px] -translate-x-1/2 rounded-full bg-[#00f5c8]/[0.02] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <SectionLabel>
              How engagements work
            </SectionLabel>

            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              A structured path from
              <span className="text-[#00f5c8]">
                {" "}testing to remediation.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Every engagement follows a clear process so technical
              findings remain understandable, actionable, and verifiable.
            </p>
          </div>

          <ProcessTimeline />

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <CTA navigate={navigate} />

    </div>
  );
}

/* =============================================================
   OVERVIEW CARD
============================================================= */

function OverviewCard({ number, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-[#00f5c8]/20"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00f5c8]/[0.06]">
          <span className="font-mono text-[10px] font-bold text-[#00f5c8]">
            {number}
          </span>
        </div>

        <span className="h-px flex-1 bg-white/[0.06] ml-4" />
      </div>

      <h3 className="mt-6 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/40">
        {text}
      </p>
    </motion.div>
  );
}

export default Services;