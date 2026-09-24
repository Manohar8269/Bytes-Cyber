import {
  ShieldCheck,
  Mail,
  ArrowUpRight,
} from "lucide-react";

function Footer({ navigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#01050a]/10 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* =====================================================
              BRAND
          ===================================================== */}
          <div className="lg:col-span-2">

            <button
              type="button"
              onClick={() => navigate("home")}
              className="group mb-5 flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5c8]/30 bg-[#00f5c8]/5 transition group-hover:border-[#00f5c8]/50">
                <ShieldCheck
                  size={24}
                  className="text-[#00f5c8]"
                />
              </div>

              <div className="text-left">
                <div className="font-bold tracking-[0.2em] text-white">
                  BYTES
                </div>

                <div className="text-[9px] tracking-[0.25em] text-white/40">
                  CYBER SECURITY
                </div>
              </div>
            </button>

            <p className="max-w-md text-sm leading-7 text-white/45">
              Advanced cybersecurity services helping organizations
              identify vulnerabilities, reduce risk, and build resilient
              digital infrastructure.
            </p>

            {/* =================================================
                SOCIAL / CONTACT
            ================================================= */}
            <div className="mt-6 flex gap-3">

              {/* LinkedIn - Frontend Placeholder */}
              <button
                type="button"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xs font-bold text-white/50 transition-all duration-300 hover:border-[#00f5c8]/40 hover:bg-[#00f5c8]/5 hover:text-[#00f5c8]"
              >
                IN
              </button>

              {/* GitHub - Frontend Placeholder */}
              <button
                type="button"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xs font-bold text-white/50 transition-all duration-300 hover:border-[#00f5c8]/40 hover:bg-[#00f5c8]/5 hover:text-[#00f5c8]"
              >
                GH
              </button>

              {/* Email */}
              <a
                href="mailto:security@example.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all duration-300 hover:border-[#00f5c8]/40 hover:bg-[#00f5c8]/5 hover:text-[#00f5c8]"
              >
                <Mail size={17} />
              </a>

            </div>
          </div>

          {/* =====================================================
              COMPANY
          ===================================================== */}
          <div>

            <h3 className="mb-5 text-sm font-semibold text-white">
              Company
            </h3>

            <div className="space-y-3">

              <FooterButton
                onClick={() => navigate("about")}
              >
                About
              </FooterButton>

              <FooterButton
                onClick={() => navigate("services")}
              >
                Services
              </FooterButton>

              <FooterButton
                onClick={() => navigate("training")}
              >
                Training
              </FooterButton>

              <FooterButton
                onClick={() => navigate("careers")}
              >
                Careers
              </FooterButton>

            </div>
          </div>

          {/* =====================================================
              RESOURCES
          ===================================================== */}
          <div>

            <h3 className="mb-5 text-sm font-semibold text-white">
              Resources
            </h3>

            <div className="space-y-3">

              <FooterButton
                onClick={() => navigate("blog")}
                withIcon
              >
                Research & Blog
              </FooterButton>

              <FooterButton
                onClick={() => navigate("contact")}
              >
                Contact
              </FooterButton>

              <FooterButton
                onClick={() => navigate("contact")}
              >
                Request Assessment
              </FooterButton>

            </div>
          </div>

        </div>

        {/* =======================================================
            BOTTOM
        ======================================================= */}
        <div className="mt-12 border-t border-white/10 pt-6">

          <div className="flex flex-col justify-between gap-3 text-xs text-white/30 sm:flex-row">

            <p>
              © {year} Bytes Cyber Security. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <span>
                Security
              </span>

              <span className="text-white/15">
                •
              </span>

              <span>
                Privacy
              </span>

              <span className="text-white/15">
                •
              </span>

              <span>
                Resilience
              </span>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

/* =============================================================
   FOOTER BUTTON
============================================================= */

function FooterButton({
  children,
  onClick,
  withIcon = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-1 text-sm text-white/45 transition-colors duration-300 hover:text-[#00f5c8]"
    >
      {children}

      {withIcon && (
        <ArrowUpRight
          size={13}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </button>
  );
}

export default Footer;