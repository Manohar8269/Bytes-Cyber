import { motion } from "framer-motion";
import { ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

function Footer({ navigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#01050a]/35 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <button type="button" onClick={() => navigate("home")} className="group mb-5 flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.04 }}
                className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5c8]/25 bg-[#00f5c8]/[0.06]"
              >
                <ShieldCheck size={24} className="relative z-10 text-[#00f5c8]" />
                <span className="absolute inset-0 rounded-xl bg-[#00f5c8]/10 blur-md" />
              </motion.div>
              <div className="text-left">
                <div className="font-bold tracking-[0.2em] text-white">BYTES</div>
                <div className="text-[9px] tracking-[0.25em] text-white/40">CYBER SECURITY</div>
              </div>
            </button>

            <p className="max-w-md text-sm leading-7 text-white/45">
              Advanced cybersecurity services helping organizations identify vulnerabilities, reduce risk, and build resilient digital infrastructure.
            </p>

            <div className="mt-6 flex gap-3">
              <SocialButton label="LinkedIn" text="IN" />
              <SocialButton label="GitHub" text="GH" />
              <a href="mailto:security@example.com" aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-white/50 transition hover:-translate-y-0.5 hover:border-[#00f5c8]/40 hover:bg-[#00f5c8]/[0.05] hover:text-[#00f5c8]">
                <Mail size={17} />
              </a>
            </div>
          </div>

          <FooterColumn title="Company">
            <FooterButton onClick={() => navigate("about")}>About</FooterButton>
            <FooterButton onClick={() => navigate("services")}>Services</FooterButton>
            <FooterButton onClick={() => navigate("training")}>Training</FooterButton>
            <FooterButton onClick={() => navigate("careers")}>Careers</FooterButton>
          </FooterColumn>

          <FooterColumn title="Resources">
            <FooterButton onClick={() => navigate("blog")} withIcon>Research & Blog</FooterButton>
            <FooterButton onClick={() => navigate("contact")}>Contact</FooterButton>
            <FooterButton onClick={() => navigate("contact")}>Request Assessment</FooterButton>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/[0.08] pt-6 text-xs text-white/30 sm:flex-row">
          <p>© {year} Bytes Cyber Security. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Security</span><span className="text-white/15">•</span><span>Privacy</span><span className="text-white/15">•</span><span>Resilience</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h3 className="mb-5 text-sm font-semibold text-white">{title}</h3>
      <div className="space-y-3">{children}</div>
    </motion.div>
  );
}

function FooterButton({ children, onClick, withIcon = false }) {
  return (
    <button type="button" onClick={onClick} className="group flex items-center gap-1 text-sm text-white/45 transition-colors duration-300 hover:text-[#00f5c8]">
      {children}
      {withIcon && <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
    </button>
  );
}

function SocialButton({ label, text }) {
  return (
    <button type="button" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-[10px] font-bold tracking-wide text-white/45 transition hover:-translate-y-0.5 hover:border-[#00f5c8]/40 hover:bg-[#00f5c8]/[0.05] hover:text-[#00f5c8]">
      {text}
    </button>
  );
}

export default Footer;
