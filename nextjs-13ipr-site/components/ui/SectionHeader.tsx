interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  const align = centered ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col ${align} mb-10`}>
      {label && <span className="section-label">{label}</span>}
      <span className={`gold-divider ${centered ? "gold-divider--center" : ""}`} />
      <h2 className="font-serif text-4xl md:text-5xl text-navy font-semibold mt-1 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-stone-600 font-sans font-light max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
