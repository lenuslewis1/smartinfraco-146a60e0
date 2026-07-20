import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";

const pictures = [
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7553-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7189-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7169-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7191-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7206-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7224-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7248-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7488-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7475-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7480-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7489-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7495-scaled.jpg",
  "https://smartinfraco.com/wp-content/uploads/2025/11/IMG_7539-scaled.jpg",
];

export default function PicturesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Pictures"
        title="People, partnerships and progress."
        description="A selection of moments from the Smart Infraco gallery."
      />

      <section className="relative overflow-hidden bg-background section-padding">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <Reveal>
            <div className="mb-10 flex flex-col gap-3 border-b border-hairline pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow tone="primary">Photo gallery</Eyebrow>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">Thirteen photographs from Smart Infraco's activities and events.</p>
              </div>
              <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">13 IMAGES</span>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {pictures.map((picture, index) => (
              <RevealItem key={picture} className="bg-background">
                <a href={picture} target="_blank" rel="noreferrer" className="group relative block aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={picture} alt={`Smart Infraco gallery image ${index + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/65 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-5 left-5 inline-flex translate-y-2 items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    View image <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </Layout>
  );
}
