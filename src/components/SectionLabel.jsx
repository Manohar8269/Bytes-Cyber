function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-[#00f5c8]" />

      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00f5c8]">
        {children}
      </span>
    </div>
  );
}

export default SectionLabel;