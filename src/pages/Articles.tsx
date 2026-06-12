import { ArrowUpRight, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";

const articles = [
  { id: 1, category: "Infrastructure Insight", title: "The future of digital infrastructure in West Africa", read: "5 min read", excerpt: "An in-depth look at how fibre connectivity and cloud services are transforming businesses across the region.", author: "Smart Infraco Editorial" },
  { id: 2, category: "Sovereign Cloud", title: "Why data sovereignty matters for African enterprises",   read: "7 min read", excerpt: "How keeping workloads in-country unlocks regulatory clarity, lower latency and stronger resilience.",      author: "Cloud Architecture Team" },
  { id: 3, category: "Connectivity",    title: "From backbone to last mile: anatomy of a national network", read: "6 min read", excerpt: "What it takes to design, light and operate a 1,010 km national fibre backbone.",                              author: "Network Engineering" },
  { id: 4, category: "Cybersecurity",   title: "Building a SOC for the African continent",                read: "8 min read", excerpt: "A blueprint for 24/7 detection and response operations tuned to local threat profiles.",                  author: "Security Operations" },
];

export default function ArticlesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Articles"
        title="Insights, perspectives, and technical deep-dives."
        description="Long-form thought leadership from our network, cloud and security teams."
      />

      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <RevealGroup className="grid md:grid-cols-2 gap-px bg-hairline border border-hairline">
            {articles.map((a, i) => (
              <RevealItem key={a.id} className="bg-background">
                <article className="group relative h-full p-8 lg:p-12 transition-colors hover:bg-card cursor-pointer">
                  <div className="flex items-center justify-between">
                    <Eyebrow tone="primary">{a.category}</Eyebrow>
                    <span className="font-display text-[10px] uppercase tracking-[0.22em] text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="font-display mt-7 text-2xl lg:text-3xl text-foreground leading-tight story-link inline">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">{a.excerpt}</p>
                  <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{a.author}</span>
                    <span className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {a.read}</span>
                      <ArrowUpRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                    </span>
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
