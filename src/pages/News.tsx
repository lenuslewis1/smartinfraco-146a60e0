import { ArrowUpRight, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";

const posts = [
  { id: 1, category: "Network", date: "March 11, 2026", title: "Smart Infraco completes Eastern Corridor capacity upgrade", excerpt: "A milestone moment as backbone capacity is upgraded across the Eastern fibre corridor — unlocking new bandwidth for government and enterprise customers." },
  { id: 2, category: "Cloud",   date: "March 12, 2026", title: "New sovereign cloud region goes live in Accra",                excerpt: "The expansion strengthens local data residency for regulated sectors — banking, government and healthcare." },
  { id: 3, category: "Partnerships", date: "March 13, 2026", title: "Smart Infraco signs strategic partnership with Tier-1 carrier", excerpt: "Direct interconnect deepens international reach via the South Atlantic submarine cable system." },
  { id: 4, category: "Security",     date: "March 14, 2026", title: "SOC team launches 24/7 proactive threat-hunting service",     excerpt: "A new managed cybersecurity offering combines analytics, response and continuous threat intelligence." },
  { id: 5, category: "Network",      date: "March 15, 2026", title: "Metro-fibre coverage expands across Accra & Tema",            excerpt: "More dual-path metro rings are lit, taking last-mile reach into key business districts." },
  { id: 6, category: "Events",       date: "March 16, 2026", title: "Smart Infraco to host CIO summit at the Accra HQ",            excerpt: "An invite-only roundtable on sovereign cloud, AI infrastructure and the future of African telecoms." },
];

export default function NewsPage() {
  const [featured, ...rest] = posts;
  return (
    <Layout>
      <PageHero
        eyebrow="News"
        title="Field reports from Ghana's digital backbone."
        description="Network milestones, partnerships, and platform updates from the Smart Infraco team."
      />

      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          {/* Featured */}
          <Reveal>
            <article className="group grid lg:grid-cols-12 gap-8 border border-hairline bg-card overflow-hidden hover:border-primary/40 transition-colors duration-500">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto bg-gradient-aurora overflow-hidden">
                <GridBackdrop variant="lines" className="opacity-50" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-primary-foreground/80">
                  <span className="pulse-dot" /> Featured
                </div>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                <Eyebrow tone="primary">{featured.category}</Eyebrow>
                <h2 className="font-display mt-5 text-3xl lg:text-4xl text-foreground leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
                  <span className="story-link inline-flex items-center gap-1.5 text-secondary">Read story <ArrowUpRight className="w-3.5 h-3.5" /></span>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Grid */}
          <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline mt-10">
            {rest.map((p) => (
              <RevealItem key={p.id} className="bg-background">
                <article className="group h-full p-7 lg:p-8 transition-colors hover:bg-card cursor-pointer">
                  <div className="flex items-center justify-between mb-5">
                    <Eyebrow tone="primary">{p.category}</Eyebrow>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                  <h3 className="font-display text-lg text-foreground leading-snug story-link inline">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <div className="mt-6 text-xs text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> {p.date}
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </Layout>
  );
}
