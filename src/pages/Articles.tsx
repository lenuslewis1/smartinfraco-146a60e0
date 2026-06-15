import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import { articles } from "@/data/articles";

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
                <Link to={`/articles/${a.slug}`} className="group relative block h-full overflow-hidden bg-background transition-colors hover:bg-card">
                  <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                    <img src={a.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/58 via-secondary/10 to-transparent opacity-80 transition-opacity group-hover:opacity-45" />
                    <span className="absolute right-5 top-5 font-display text-[10px] uppercase tracking-[0.22em] text-white/80">0{i + 1}</span>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center justify-between">
                      <Eyebrow tone="primary">{a.category}</Eyebrow>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                    </div>
                    <h3 className="font-display mt-7 text-2xl lg:text-3xl text-foreground leading-tight story-link inline">
                      {a.title}
                    </h3>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">{a.excerpt}</p>
                    <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{a.author}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {a.read}</span>
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
