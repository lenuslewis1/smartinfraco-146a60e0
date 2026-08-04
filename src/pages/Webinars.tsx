import { ArrowUpRight, Clock, PlayCircle, User } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import { webinars } from "@/data/webinars";

export default function WebinarsPage() {
  const [featured, ...rest] = webinars;

  return (
    <Layout>
      <PageHero
        eyebrow="Webinars"
        title="Ideas for a stronger digital future."
        description="Expert conversations, technical briefings and practical perspectives from across Ghana's digital infrastructure ecosystem."
      />

      <section className="relative overflow-hidden bg-secondary py-24 text-white lg:py-36">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(hsl(0_0%_100%_/_0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%_/_0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="container-bleed relative">
          <Reveal>
            <Eyebrow>Featured webinar</Eyebrow>
            <h2 className="mt-6 max-w-4xl font-display text-display-xl font-medium text-white">
              Explore Smart Infraco's webinar archive.
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60">
              Browse past webinars by topic and open each session for its panel, focus and key takeaways.
            </p>
          </Reveal>

          <Reveal className="mt-14">
            <Link to={`/webinars/${featured.slug}`} className="group grid overflow-hidden border border-white/15 bg-secondary transition-colors duration-500 hover:bg-primary lg:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary lg:col-span-7 lg:aspect-auto">
                <img src={featured.image} alt="" className="h-full w-full object-contain transition duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/72 via-secondary/12 to-transparent transition-opacity group-hover:opacity-50" />
                <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 bg-primary px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-secondary">
                  <PlayCircle className="h-4 w-4" />
                  Featured
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
                <Eyebrow>{featured.category}</Eyebrow>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-white transition-colors group-hover:text-secondary lg:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/62 transition-colors group-hover:text-secondary/75">{featured.excerpt}</p>
                <div className="mt-8 grid gap-3 text-xs text-white/58 transition-colors group-hover:text-secondary/65">
                  <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {featured.date} · {featured.status}</span>
                  <span className="flex items-center gap-2"><User className="h-3.5 w-3.5" /> {featured.speaker}</span>
                </div>
                <span className="mt-9 inline-flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary transition-colors group-hover:text-secondary">
                  View details
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-24 lg:py-36">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="container-bleed relative">
          <Reveal>
            <Eyebrow>Webinar library</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-display-lg font-medium text-secondary">
              Browse each session for its topic, panel and key takeaways.
            </h2>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            {rest.map((webinar, index) => (
              <RevealItem key={webinar.slug} className="bg-background">
                <Link to={`/webinars/${webinar.slug}`} className="group relative block h-full overflow-hidden bg-background transition-colors hover:bg-card">
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                    <img src={webinar.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/58 via-secondary/10 to-transparent opacity-80 transition-opacity group-hover:opacity-45" />
                    <span className="absolute right-5 top-5 font-display text-[10px] uppercase tracking-[0.22em] text-white/80">0{index + 2}</span>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center justify-between">
                      <Eyebrow tone="primary">{webinar.category}</Eyebrow>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-secondary group-hover:opacity-100" />
                    </div>
                    <h3 className="story-link mt-7 inline font-display text-2xl leading-tight text-foreground lg:text-3xl">
                      {webinar.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{webinar.excerpt}</p>
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                      <span>{webinar.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {webinar.status}</span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </Layout>
  );
}
