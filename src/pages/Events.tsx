import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";

const events = [
  { title: "AfricaCom 2026",            date: "May 14–16, 2026",     location: "Cape Town, South Africa", tag: "Conference", featured: true,  blurb: "Smart Infraco joins Africa's largest telecoms gathering as a featured infrastructure partner — meet the team at booth A12." },
  { title: "Ghana Digital Summit",       date: "June 8–9, 2026",      location: "Accra, Ghana",            tag: "Summit",     featured: false, blurb: "Sponsoring the keynote stage on sovereign cloud and AI infrastructure for the public sector." },
  { title: "West Africa Tech Week",      date: "July 20–22, 2026",    location: "Lagos, Nigeria",          tag: "Tech Week",  featured: false, blurb: "Workshop track on building resilient interconnect across West African markets." },
  { title: "Cloud Africa Conference",    date: "September 5, 2026",   location: "Nairobi, Kenya",          tag: "Conference", featured: false, blurb: "Panel session: Sovereign cloud strategy for regulated sectors across the continent." },
];

const monthOf = (d: string) => d.split(" ")[0].slice(0, 3).toUpperCase();
const dayOf   = (d: string) => d.split(" ")[1].replace(",", "").split("–")[0];

export default function EventsPage() {
  const featured = events.find((e) => e.featured)!;
  const rest = events.filter((e) => e !== featured);

  return (
    <Layout>
      <PageHero
        eyebrow="Events"
        title="Where you'll find us next."
        description="Conferences, summits and roundtables across the African continent and beyond."
      />

      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          {/* Featured */}
          <Reveal>
            <article className="group grid lg:grid-cols-12 gap-0 border border-hairline overflow-hidden bg-card hover:border-primary/40 transition-colors duration-500">
              <div className="lg:col-span-4 relative bg-gradient-aurora p-10 flex flex-col justify-between min-h-[260px]">
                <GridBackdrop variant="lines" className="opacity-50" />
                <Eyebrow tone="accent" className="text-primary-foreground">Featured event</Eyebrow>
                <div className="relative">
                  <div className="font-display text-7xl lg:text-8xl text-primary-foreground leading-none tabular-nums">{dayOf(featured.date)}</div>
                  <div className="text-xs uppercase tracking-[0.22em] text-primary-foreground/80 mt-2">{monthOf(featured.date)} · 2026</div>
                </div>
              </div>
              <div className="lg:col-span-8 p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] px-3 py-1.5 border border-hairline text-foreground/85">{featured.tag}</span>
                </div>
                <h2 className="font-display mt-6 text-3xl lg:text-4xl text-foreground">{featured.title}</h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl">{featured.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-5 text-sm text-foreground/85">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-secondary" /> {featured.date}</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> {featured.location}</span>
                </div>
                <button className="group/btn mt-8 self-start inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                  Register Interest
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>
            </article>
          </Reveal>

          {/* Rest */}
          <RevealGroup className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {rest.map((e) => (
              <RevealItem key={e.title} className="bg-background">
                <article className="group h-full p-7 lg:p-8 transition-colors hover:bg-card">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-left">
                      <div className="font-display text-4xl text-foreground leading-none tabular-nums">{dayOf(e.date)}</div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-1.5">{monthOf(e.date)} · 2026</div>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-secondary">{e.tag}</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground story-link inline leading-snug">{e.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.blurb}</p>
                  <div className="mt-5 pt-5 border-t border-hairline flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {e.location}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
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
