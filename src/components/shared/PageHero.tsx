import { motion } from "framer-motion";
import Eyebrow from "@/components/ui-system/Eyebrow";
import MagneticButton from "@/components/ui-system/MagneticButton";
import heroSky from "@/assets/hero-sky.jpg";

interface PageHeroProps {
  title: string;
  description: string;
  bgImage?: string;
  eyebrow?: string;
  imagePosition?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHero({ title, description, bgImage, eyebrow, imagePosition }: PageHeroProps) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-secondary text-white">
      <img
        src={bgImage || heroSky}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: imagePosition }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-secondary/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/20 to-transparent" />

      <div className="relative flex min-h-[78vh] items-center px-5 pb-20 pt-32 lg:px-10 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          className="mx-auto w-full max-w-6xl"
        >
          <div className="max-w-4xl">
            {eyebrow && <Eyebrow tone="accent">{eyebrow}</Eyebrow>}
            <h1 className="mt-6 font-display text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.98] tracking-[-0.02em] text-white">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 lg:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <MagneticButton to="/contact" variant="primary">Start a conversation</MagneticButton>
              <MagneticButton to="/connectivity" variant="dark">View solutions</MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

