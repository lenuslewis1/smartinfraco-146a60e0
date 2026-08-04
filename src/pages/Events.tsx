import { ArrowUpRight, Calendar, GraduationCap, HeartHandshake, Leaf, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";

const events = [
  { title: "AfricaCom 2026", date: "May 14–16, 2026", location: "Cape Town, South Africa", tag: "Conference", blurb: "Meet the team and join the conversation on infrastructure that connects African markets." },
  { title: "Ghana Digital Summit", date: "June 8–9, 2026", location: "Accra, Ghana", tag: "Summit", blurb: "A national conversation on sovereign cloud and digital infrastructure for public services." },
  { title: "West Africa Tech Week", date: "July 20–22, 2026", location: "Lagos, Nigeria", tag: "Tech Week", blurb: "Exploring resilient interconnection and shared infrastructure across West Africa." },
  { title: "Cloud Africa Conference", date: "September 5, 2026", location: "Nairobi, Kenya", tag: "Conference", blurb: "Perspectives on sovereign cloud strategy for regulated sectors across the continent." },
];

const csrPillars = [
  { icon: GraduationCap, title: "Digital skills", copy: "Supporting practical knowledge and pathways into Ghana's digital economy." },
  { icon: HeartHandshake, title: "Community access", copy: "Helping communities benefit from the infrastructure and opportunities around them." },
  { icon: Leaf, title: "Responsible infrastructure", copy: "Advancing thoughtful, efficient and sustainable approaches to digital growth." },
];

const csrHighlight = {
  title: "Empowering the Next Generation: Ascend Digital's Career Day Visit to Palm University",
  date: "November 12, 2025",
  image: "https://ascenddigitalsol.com/wp-content/uploads/2025/11/IMG_7556-1024x685.jpg",
  url: "https://ascenddigitalsol.com/empowering-the-next-generation-ascend-digitals-career-day-visit-to-palm-university/",
};

export default function EventsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Events & CSR" title="Showing up where progress happens." description="Industry conversations, community initiatives and shared action across Ghana and the continent." />

      <section className="bg-white py-24 lg:py-36">
        <div className="container-bleed">
          <Reveal className="max-w-3xl"><Eyebrow>Events</Eyebrow><h2 className="mt-6 font-display text-display-lg font-medium text-secondary">Where ideas become partnerships.</h2></Reveal>
          <RevealGroup className="mt-14 border-t border-secondary/15">
            {events.map((event, index) => <RevealItem key={event.title}><article className="group grid gap-6 border-b border-secondary/15 py-8 transition-colors hover:bg-[#edf2f5] sm:px-4 lg:grid-cols-12 lg:items-center lg:py-10"><span className="font-mono text-[10px] text-secondary/35 lg:col-span-1">0{index + 1}</span><div className="lg:col-span-4"><span className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary">{event.tag}</span><h3 className="mt-3 font-display text-2xl font-semibold text-secondary">{event.title}</h3></div><p className="text-sm leading-7 text-muted-foreground lg:col-span-3">{event.blurb}</p><div className="space-y-2 text-xs text-secondary/65 lg:col-span-3 lg:col-start-10"><span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />{event.date}</span><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{event.location}</span></div></article></RevealItem>)}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-24 text-white lg:py-36">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(hsl(0_0%_100%_/_0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%_/_0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="container-bleed relative">
          <Reveal className="max-w-4xl"><Eyebrow>Corporate social responsibility</Eyebrow><h2 className="mt-6 font-display text-display-xl font-medium text-white">Infrastructure should create opportunity around it.</h2><p className="mt-7 max-w-xl text-sm leading-7 text-white/60">Our CSR direction centres on digital inclusion, community capacity and responsible infrastructure.</p></Reveal>
          <RevealGroup className="mt-16 grid gap-px bg-white/15 md:grid-cols-3">
            {csrPillars.map((pillar) => <RevealItem key={pillar.title} className="bg-secondary"><article className="group h-full p-8 transition-colors duration-300 hover:bg-primary lg:p-10"><pillar.icon className="h-5 w-5 text-primary transition-colors group-hover:text-secondary" /><h3 className="mt-14 font-display text-xl font-semibold text-white transition-colors group-hover:text-secondary">{pillar.title}</h3><p className="mt-4 text-sm leading-7 text-white/55 transition-colors group-hover:text-secondary/70">{pillar.copy}</p><ArrowUpRight className="mt-9 h-4 w-4 text-white/25 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-secondary" /></article></RevealItem>)}
          </RevealGroup>
          <Reveal className="mt-16">
            <article className="overflow-hidden border border-white/15 bg-white/[0.06] lg:grid lg:grid-cols-12">
              <div className="aspect-[4/3] overflow-hidden bg-primary lg:col-span-5 lg:aspect-auto">
                <img src={csrHighlight.image} alt="Students and the Ascend Digital team at Palm University Career Day" className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <div className="flex flex-col justify-center p-8 lg:col-span-7 lg:p-12">
                <Eyebrow tone="primary">CSR highlight</Eyebrow>
                <div className="mt-5 flex items-center gap-2 text-xs text-white/55"><Calendar className="h-3.5 w-3.5 text-primary" />{csrHighlight.date}</div>
                <h3 className="mt-6 max-w-3xl font-display text-3xl leading-tight text-white lg:text-4xl">{csrHighlight.title}</h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">Ascend Digital joined Palm University's Career Day to give students practical insight into the evolving digital landscape, technology career paths and the opportunities created by innovation across Africa.</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">Through interactive sessions and student project presentations, the initiative created space for questions, practical learning and the next generation of innovators.</p>
                <a href={csrHighlight.url} target="_blank" rel="noreferrer" className="story-link mt-8 inline-flex items-center gap-2 self-start text-sm text-primary">Read the full story <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
