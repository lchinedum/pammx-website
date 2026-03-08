import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "alt";
}

export function Section({
  children,
  className = "",
  variant = "default",
}: SectionProps) {
  const base = "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8";
  const alt = "border-t border-white/10 bg-pammx-dark-800/50";

  return (
    <section
      className={`${base} ${variant === "alt" ? alt : ""} ${className}`}
    >
      {children}
    </section>
  );
}
