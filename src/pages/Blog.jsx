import { motion } from "framer-motion";
import {
  ShieldCheck,
  Search,
  FileText,
  Clock,
  ArrowUpRight,
  Tag,
  Bug,
  Cloud,
  Code2,
  LockKeyhole,
} from "lucide-react";

import CyberGrid from "../components/CyberGrid";
import SectionLabel from "../components/SectionLabel";
import GlowButton from "../components/GlowButton";
import CTA from "../components/CTA";

const featuredArticle = {
  category: "SECURITY RESEARCH",
  title: "Understanding the Modern Attack Surface",
  description:
    "A practical look at how applications, APIs, cloud services, identities, and exposed infrastructure contribute to modern security risk.",
  readTime: "8 min read",
  date: "Research",
};

const articles = [
  {
    category: "WEB SECURITY",
    title: "Common Web Application Security Weaknesses",
    description:
      "Understand recurring application security issues and the controls development teams can use to reduce exposure.",
    readTime: "6 min",
    icon: Code2,
  },
  {
    category: "API SECURITY",
    title: "Why API Security Belongs in Every Security Program",
    description:
      "APIs can expose business functionality and sensitive data. Learn the key areas to evaluate during an API security review.",
    readTime: "7 min",
    icon: ShieldCheck,
  },
  {
    category: "CLOUD SECURITY",
    title: "Building Better Cloud Security Visibility",
    description:
      "Explore practical ways to understand cloud assets, identity exposure, configuration risk, and security controls.",
    readTime: "9 min",
    icon: Cloud,
  },
  {
    category: "VULNERABILITY MANAGEMENT",
    title: "From Vulnerability Finding to Risk Decision",
    description:
      "Not every finding has the same impact. Learn how technical evidence and business context can improve remediation priorities.",
    readTime: "5 min",
    icon: Bug,
  },
  {
    category: "IDENTITY SECURITY",
    title: "Authentication Is More Than a Login Screen",
    description:
      "A security review should consider authentication flows, authorization, session management, account recovery, and access boundaries.",
    readTime: "8 min",
    icon: LockKeyhole,
  },
  {
    category: "SECURITY TESTING",
    title: "What Makes a Security Assessment Useful?",
    description:
      "Effective security testing is about more than finding issues. Explore the role of validation, evidence, reporting, and retesting.",
    readTime: "6 min",
    icon: Search,
  },
];

const categories = [
  "Web Security",
  "API Security",
  "Cloud Security",
  "Penetration Testing",
  "Vulnerability Research",
  "Security Awareness",
];

function Blog({ navigate }) {
  return (
    <div className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#02070d]/55 pt-32">

        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10 lg:pb-24">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <SectionLabel>
              Research & Insights
            </SectionLabel>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Security knowledge for a
              <span className="block text-[#00f5c8] text-glow">
                changing threat landscape.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Explore practical cybersecurity insights, research,
              vulnerability concepts, and security guidance designed
              for modern technology environments.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GlowButton
                onClick={() => navigate("contact")}
              >
                Discuss a Security Topic
              </GlowButton>

              <GlowButton
                variant="secondary"
                onClick={() => navigate("services")}
              >
                Explore Security Services
              </GlowButton>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          FEATURED RESEARCH
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#030a10]/55 px-5 py-16 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-center justify-between">
            <SectionLabel>
              Featured Research
            </SectionLabel>

            <span className="hidden font-mono text-[9px] tracking-[0.18em] text-white/20 sm:block">
              FEATURED // 001
            </span>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#061018]"
          >
            {/* Background decoration */}
            <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#00f5c8]/[0.05] blur-[100px]" />

            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

              {/* Content */}
              <div className="relative p-7 sm:p-10 lg:p-14">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-full border border-[#00f5c8]/20 bg-[#00f5c8]/[0.05] px-3 py-1.5 text-[9px] font-semibold tracking-[0.16em] text-[#00f5c8]">
                    {featuredArticle.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-[10px] text-white/25">
                    <Clock size={12} />
                    {featuredArticle.readTime}
                  </span>

                </div>

                <h2 className="mt-7 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  {featuredArticle.title}
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                  {featuredArticle.description}
                </p>

                <button
                  onClick={() => navigate("contact")}
                  className="group/read mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#00f5c8]"
                >
                  Read Research
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover/read:-translate-y-0.5 group-hover/read:translate-x-0.5"
                  />
                </button>

              </div>

              {/* Visual */}
              <div className="relative min-h-[340px] overflow-hidden border-t border-white/[0.07] bg-black/20 lg:border-l lg:border-t-0">

                <div className="absolute inset-0 cyber-grid opacity-50" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,200,0.06),transparent_60%)]" />

                <div className="relative flex h-full items-center justify-center p-8">

                  <div className="relative h-60 w-60">

                    <div className="absolute inset-0 rounded-full border border-[#00f5c8]/10" />
                    <div className="absolute inset-7 rounded-full border border-[#00f5c8]/15" />
                    <div className="absolute inset-14 rounded-full border border-[#00f5c8]/20" />

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-2"
                    >
                      <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#00f5c8] shadow-[0_0_15px_rgba(0,245,200,0.9)]" />
                    </motion.div>

                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-10"
                    >
                      <div className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/50" />
                    </motion.div>

                    <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#00f5c8]/20 bg-[#061018]/95 shadow-[0_0_40px_rgba(0,245,200,0.08)]">
                      <ShieldCheck
                        size={38}
                        strokeWidth={1.4}
                        className="text-[#00f5c8]"
                      />
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </motion.article>

        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================= */}
      <section className="relative bg-[#02070d]/55 px-5 py-20 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <SectionLabel>
                Explore Topics
              </SectionLabel>

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Browse security topics.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">

              {categories.map((category) => (
                <button
                  key={category}
                  className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs text-white/40 transition hover:border-[#00f5c8]/25 hover:bg-[#00f5c8]/[0.04] hover:text-[#00f5c8]"
                >
                  {category}
                </button>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          LATEST ARTICLES
      ========================================================= */}
      <section className="relative bg-[#030a10]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <SectionLabel>
              Latest Insights
            </SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Practical ideas for
              <span className="text-[#00f5c8]">
                {" "}better security decisions.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
              Security research is most useful when it helps teams
              understand real problems and take meaningful action.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {articles.map((article, index) => {
              const Icon = article.icon;

              return (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-[#00f5c8]/20 hover:bg-[#00f5c8]/[0.018]"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5c8]/15 bg-[#00f5c8]/[0.05]">
                      <Icon
                        size={19}
                        className="text-[#00f5c8]"
                      />
                    </div>

                    <span className="font-mono text-[9px] text-white/15">
                      0{index + 1}
                    </span>

                  </div>

                  <div className="mt-6 flex items-center gap-3">

                    <span className="text-[9px] font-semibold tracking-[0.15em] text-[#00f5c8]/60">
                      {article.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/15" />

                    <span className="flex items-center gap-1 text-[10px] text-white/20">
                      <Clock size={10} />
                      {article.readTime}
                    </span>

                  </div>

                  <h3 className="mt-4 text-lg font-semibold leading-6 text-white">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {article.description}
                  </p>

                  <button
                    onClick={() => navigate("contact")}
                    className="group/article mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#00f5c8]"
                  >
                    Read article
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover/article:-translate-y-0.5 group-hover/article:translate-x-0.5"
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
          RESEARCH PHILOSOPHY
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#02070d]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <SectionLabel>
                Research Philosophy
              </SectionLabel>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Security content should be
                <span className="text-[#00f5c8]">
                  {" "}useful.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                Good security research should help a reader understand
                a problem, evaluate its relevance, and decide what
                technical or organizational action makes sense.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">

              <ResearchPrinciple
                icon={Search}
                title="Understand"
                text="Explain the security problem clearly."
              />

              <ResearchPrinciple
                icon={FileText}
                title="Validate"
                text="Use evidence and technical context."
              />

              <ResearchPrinciple
                icon={Tag}
                title="Act"
                text="Translate findings into useful next steps."
              />

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
   RESEARCH PRINCIPLE
============================================================= */

function ResearchPrinciple({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-[#00f5c8]/20"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00f5c8]/[0.06]">
        <Icon
          size={18}
          className="text-[#00f5c8]"
        />
      </div>

      <h3 className="mt-5 text-sm font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-white/35">
        {text}
      </p>
    </motion.div>
  );
}

export default Blog;