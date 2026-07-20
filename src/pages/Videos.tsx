import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal } from "@/components/ui-system/RevealOnScroll";

const video = {
  title: "Smart Infraco",
  category: "Company documentary",
  description: "A documentary on Smart Infraco's journey of digital transformation.",
  embedUrl: "https://www.youtube-nocookie.com/embed/e9zBbkL-1nU?rel=0",
  watchUrl: "https://www.youtube.com/watch?v=e9zBbkL-1nU",
};

export default function VideosPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Videos"
        title="See Smart Infraco in motion."
        description="Watch stories from the team building Ghana's digital infrastructure."
      />

      <section className="relative overflow-hidden bg-dark section-padding">
        <GridBackdrop variant="lines" className="opacity-30" />
        <div className="relative container-wide">
          <Reveal>
            <article className="overflow-hidden border border-white/15 bg-dark-foreground/[0.03] lg:grid lg:grid-cols-12">
              <div className="aspect-video bg-secondary lg:col-span-8">
                <iframe
                  className="h-full w-full"
                  src={video.embedUrl}
                  title="Smart Infraco documentary"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col justify-between p-8 lg:col-span-4 lg:p-12">
                <div>
                  <Eyebrow tone="accent">{video.category}</Eyebrow>
                  <h2 className="mt-6 font-display text-3xl leading-tight text-dark-foreground">{video.title}</h2>
                  <p className="mt-5 text-sm leading-relaxed text-dark-foreground/65">{video.description}</p>
                </div>
                <a
                  href={video.watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="story-link mt-10 inline-flex items-center gap-2 self-start text-sm text-secondary"
                >
                  Watch on YouTube <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
