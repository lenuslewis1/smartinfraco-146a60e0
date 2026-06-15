import { ArrowUpRight, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import connectivityHero from "@/assets/connectivity-hero.jpg";
import cloudBg from "@/assets/cloud-bg.jpg";
import ctaInfrastructure from "@/assets/cta-infrastructure.png";
import serviceCyber from "@/assets/service-cyber-custom.jpg";
import ghanaNetworkMap from "@/assets/ghana-network-map.jpg";
import heroDatacenter from "@/assets/hero-datacenter.jpg";

const posts = [
  { id: 1, category: "Network", date: "March 11, 2026", title: "Smart Infraco completes Eastern Corridor capacity upgrade", excerpt: "A milestone moment as backbone capacity is upgraded across the Eastern fibre corridor - unlocking new bandwidth for government and enterprise customers.", image: connectivityHero },
  { id: 2, category: "Cloud", date: "March 12, 2026", title: "New sovereign cloud region goes live in Accra", excerpt: "The expansion strengthens local data residency for regulated sectors - banking, government and healthcare.", image: cloudBg },
  { id: 3, category: "Partnerships", date: "March 13, 2026", title: "Smart Infraco signs strategic partnership with Tier-1 carrier", excerpt: "Direct interconnect deepens international reach via the South Atlantic submarine cable system.", image: ctaInfrastructure },
  { id: 4, category: "Security", date: "March 14, 2026", title: "SOC team launches 24/7 proactive threat-hunting service", excerpt: "A new managed cybersecurity offering combines analytics, response and continuous threat intelligence.", image: serviceCyber },
  { id: 5, category: "Network", date: "March 15, 2026", title: "Metro-fibre coverage expands across Accra & Tema", excerpt: "More dual-path metro rings are lit, taking last-mile reach into key business districts.", image: ghanaNetworkMap },
  { id: 6, category: "Events", date: "March 16, 2026", title: "Smart Infraco to host CIO summit at the Accra HQ", excerpt: "An invite-only roundtable on sovereign cloud, AI infrastructure and the future of African telecoms.", image: heroDatacenter },
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
          <Reveal>
            <article className="group grid overflow-hidden border border-hairline bg-card transition-colors duration-500 hover:border-primary/40 lg:grid-cols-12 lg:gap-8">
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary lg:col-span-7 lg:aspect-auto">
                <img src={featured.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/16 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-primary-foreground/80">
                  <span className="pulse-dot" /> Featured
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 lg:col-span-5 lg:p-12">
                <Eyebrow tone="primary">{featured.category}</Eyebrow>
                <h2 className="font-display mt-5 text-3xl leading-tight text-foreground lg:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                  <span className="story-link inline-flex items-center gap-1.5 text-secondary">Read story <ArrowUpRight className="h-3.5 w-3.5" /></span>
                </div>
              </div>
            </article>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-px border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <RevealItem key={p.id} className="bg-background">
                <article className="group h-full cursor-pointer overflow-hidden bg-background transition-colors hover:bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <img src={p.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/54 via-secondary/8 to-transparent opacity-75 transition-opacity group-hover:opacity-45" />
                  </div>
                  <div className="p-7 lg:p-8">
                    <div className="mb-5 flex items-center justify-between">
                      <Eyebrow tone="primary">{p.category}</Eyebrow>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-secondary group-hover:opacity-100" />
                    </div>
                    <h3 className="story-link inline font-display text-lg leading-snug text-foreground">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" /> {p.date}
                    </div>
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
