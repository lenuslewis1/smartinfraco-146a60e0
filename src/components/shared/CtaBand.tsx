import { ReactNode } from "react";
import Eyebrow from "@/components/ui-system/Eyebrow";
import MagneticButton from "@/components/ui-system/MagneticButton";
import { Reveal } from "@/components/ui-system/RevealOnScroll";

interface CtaBandProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CtaBand({
  eyebrow = "Ready when you are",
  title,
  description,
  primaryLabel = "Start a conversation",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo,
}: CtaBandProps) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-wide">
        <Reveal>
          <div className="rounded-[24px] bg-secondary p-8 text-white lg:p-16">
            <Eyebrow tone="accent">{eyebrow}</Eyebrow>
            <h2 className="mt-6 max-w-4xl font-display text-display-xl font-medium text-white">
              {title}
            </h2>
            {description && (
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 lg:text-lg">{description}</p>
            )}
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton to={primaryTo} variant="primary">{primaryLabel}</MagneticButton>
              {secondaryLabel && secondaryTo && (
                <MagneticButton to={secondaryTo} variant="ghost">{secondaryLabel}</MagneticButton>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}