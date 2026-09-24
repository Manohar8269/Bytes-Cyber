import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  BriefcaseBusiness,
  LockKeyhole,
  Globe2,
} from "lucide-react";

import CyberGrid from "../components/CyberGrid";
import SectionLabel from "../components/SectionLabel";
import GlowButton from "../components/GlowButton";

const services = [
  "Penetration Testing",
  "Compliance & Audits",
  "Security Awareness",
  "Security Consulting",
  "Application Security",
  "Other",
];

const nextSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    text: "Share your security requirements, environment, or the problem you want to understand.",
  },
  {
    number: "02",
    title: "We review the scope",
    text: "The information helps define the right assessment or security engagement for your situation.",
  },
  {
    number: "03",
    title: "Plan the engagement",
    text: "We discuss scope, priorities, deliverables, and the practical next steps.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Frontend demo only.

      Later we can connect this form to:
      - your backend API
      - Formspree
      - EmailJS
      - Resend
      - a custom Node/Express endpoint
    */

    setSubmitted(true);
  };

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
              Contact Security Team
            </SectionLabel>

            <h1 className="text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Start with a conversation about
              <span className="block text-[#00f5c8] text-glow">
                your security.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Tell us about your environment, security concerns, or
              assessment requirements. We can help define the right
              next step.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          CONTACT MAIN
      ========================================================= */}
      <section className="relative bg-[#030a10]/55 px-5 py-20 sm:px-8 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">

          {/* =====================================================
              CONTACT INFO
          ===================================================== */}
          <div>

            <SectionLabel>
              Get in touch
            </SectionLabel>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Let's understand your
              <span className="text-[#00f5c8]">
                {" "}security needs.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
              Use the form to tell us what you are looking for.
              The information you provide helps frame the right
              conversation around your requirements.
            </p>

            {/* Contact cards */}
            <div className="mt-8 space-y-3">

              <ContactInfo
                icon={Mail}
                label="Email"
                value="security@example.com"
                href="mailto:security@example.com"
              />

              <ContactInfo
                icon={Phone}
                label="Phone"
                value="+91 XXXXX XXXXX"
                href="tel:+91XXXXXXXXXX"
              />

              <ContactInfo
                icon={MapPin}
                label="Location"
                value="India"
              />

              <ContactInfo
                icon={Clock3}
                label="Availability"
                value="Business enquiries"
              />

            </div>

            {/* Security badge */}
            <div className="mt-6 rounded-2xl border border-[#00f5c8]/15 bg-[#00f5c8]/[0.025] p-5">

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00f5c8]/[0.07]">
                  <LockKeyhole
                    size={18}
                    className="text-[#00f5c8]"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Share only what is necessary
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/35">
                    Avoid sending passwords, credentials, API keys,
                    payment information, or other sensitive secrets
                    through this form.
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* =====================================================
              FORM
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#061018]/55 p-6 sm:p-8 lg:p-9"
          >

            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00f5c8]/[0.04] blur-[80px]" />

            <div className="relative">

              <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Security enquiry
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Request an assessment
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00f5c8]/[0.06]">
                  <MessageSquare
                    size={18}
                    className="text-[#00f5c8]"
                  />
                </div>

              </div>

              {submitted ? (
                <SuccessMessage
                  onReset={() => {
                    setSubmitted(false);

                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      service: "",
                      message: "",
                    });
                  }}
                />
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-5"
                >

                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <FormField
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />

                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                    />

                  </div>

                  {/* Company + Service */}
                  <div className="grid gap-5 sm:grid-cols-2">

                    <FormField
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />

                    <div>
                      <label className="mb-2 block text-xs font-medium text-white/45">
                        Service
                      </label>

                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="h-12 w-full rounded-lg border border-white/[0.09] bg-black/20 px-4 text-sm text-white outline-none transition focus:border-[#00f5c8]/40"
                      >
                        <option
                          value=""
                          className="bg-[#061018]"
                        >
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                            className="bg-[#061018]"
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-white/45">
                      Tell us about your requirements
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={7}
                      required
                      placeholder="Describe your environment, security concern, assessment requirement, or project scope..."
                      className="w-full resize-none rounded-lg border border-white/[0.09] bg-black/20 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-[#00f5c8]/40"
                    />
                  </div>

                  {/* Consent/info */}
                  <div className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3.5">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-[#00f5c8]"
                    />

                    <p className="text-[11px] leading-5 text-white/30">
                      Please provide only the information required to
                      understand your enquiry. Do not include credentials
                      or secret keys.
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#00f5c8] px-5 py-3.5 text-sm font-semibold text-[#02070d] transition hover:bg-[#20ffd5]"
                  >
                    Send Security Enquiry

                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>

                  <p className="text-center text-[10px] text-white/20">
                    Frontend demo form — connect this form to your
                    email/backend service before production use.
                  </p>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          WHAT HAPPENS NEXT
      ========================================================= */}
      <section className="relative bg-[#02070d]/55 px-5 py-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <SectionLabel>
              What happens next
            </SectionLabel>

            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              A simple path from
              <span className="text-[#00f5c8]">
                {" "}enquiry to action.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              The initial conversation is about understanding your
              environment and the outcome you want from a security
              engagement.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">

            {nextSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5c8]/15 bg-[#00f5c8]/[0.05]">
                    <span className="font-mono text-xs font-bold text-[#00f5c8]">
                      {step.number}
                    </span>
                  </div>

                  {index < nextSteps.length - 1 && (
                    <ArrowRight
                      size={17}
                      className="hidden text-white/15 lg:block"
                    />
                  )}

                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  {step.text}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK SERVICES
      ========================================================= */}
      <section className="relative border-y border-white/[0.07] bg-[#030a10]/55 px-5 py-20 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <QuickService
              icon={ShieldCheck}
              title="Security Testing"
              text="Identify and validate security weaknesses."
            />

            <QuickService
              icon={BriefcaseBusiness}
              title="Consulting"
              text="Discuss security strategy and risk."
            />

            <QuickService
              icon={Globe2}
              title="Application Security"
              text="Assess applications and APIs."
            />

            <QuickService
              icon={LockKeyhole}
              title="Awareness"
              text="Build stronger security habits."
            />

          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative bg-[#02070d]/55 px-5 py-20 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-3xl border border-[#00f5c8]/15 bg-[#00f5c8]/[0.025] px-6 py-12 text-center sm:px-10 lg:px-16">

            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[#00f5c8]/[0.05] blur-[100px]" />

            <div className="relative">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06]">
                <ShieldCheck
                  size={27}
                  className="text-[#00f5c8]"
                />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Not sure where to start?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/40">
                Start with a conversation. We can help you frame the
                security problem before deciding what assessment or
                engagement makes sense.
              </p>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

/* =============================================================
   FORM FIELD
============================================================= */

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-white/45">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full rounded-lg border border-white/[0.09] bg-black/20 px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#00f5c8]/40"
      />
    </div>
  );
}

/* =============================================================
   CONTACT INFO
============================================================= */

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:border-[#00f5c8]/20">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00f5c8]/[0.05]">
        <Icon
          size={17}
          className="text-[#00f5c8]"
        />
      </div>

      <div>
        <p className="text-[9px] uppercase tracking-[0.15em] text-white/20">
          {label}
        </p>

        <p className="mt-1 text-sm text-white/65">
          {value}
        </p>
      </div>

    </div>
  );

  if (href) {
    return (
      <a href={href}>
        {content}
      </a>
    );
  }

  return content;
}

/* =============================================================
   QUICK SERVICE
============================================================= */

function QuickService({
  icon: Icon,
  title,
  text,
}) {
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

/* =============================================================
   SUCCESS MESSAGE
============================================================= */

function SuccessMessage({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex min-h-[480px] flex-col items-center justify-center text-center"
    >

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#00f5c8]/20 bg-[#00f5c8]/[0.06]">
        <CheckCircle2
          size={31}
          className="text-[#00f5c8]"
        />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        Enquiry captured
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
        The frontend form is working. The next step is connecting
        it to your actual email or backend service so submitted
        enquiries are delivered to you.
      </p>

      <button
        onClick={onReset}
        className="mt-7 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition hover:border-[#00f5c8]/30 hover:text-[#00f5c8]"
      >
        Send Another Enquiry
      </button>

    </motion.div>
  );
}

export default Contact;