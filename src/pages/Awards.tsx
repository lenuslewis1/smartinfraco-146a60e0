import { Award, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import ctaInfrastructure from "@/assets/cta-infrastructure.png";

type AwardItem = {
  title: string;
  year: string;
  category: string;
  copy: string;
  image?: string;
};

const awardItems: AwardItem[] = [
  {
    title: "Award image slot",
    year: "2026",
    category: "Recognition",
    copy:
      "Add an image file to the assets folder and assign it to this award entry to publish a verified award or recognition.",
    image: ctaInfrastructure,
  },
  {
    title: "Certification image slot",
    year: "2026",
    category: "Certification",
    copy:
      "Use this card for certificates, plaques, event photos, trophies or official recognition artwork.",
  },
  {
    title: "Milestone image slot",
    year: "2026",
    category: "Milestone",
    copy:
      "Additional awards can be added by creating another item in the awardItems array with title, year, category, copy and image.",
  },
];

const recognitionThemes = [
  { icon: Trophy, title: "Infrastructure leadership", copy: "Recognition of the people, partnerships and platforms advancing Ghana's digital backbone." },
  { icon: ShieldCheck, title: "Operational excellence", copy: "Milestones that reflect resilient delivery, trusted operations and dependable service." },
  { icon: Sparkles, title: "National impact", copy: "Acknowledgement of work that expands access and enables Ghana's digital economy." },
];

export default function AwardsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Awards & Recognition" title="Milestones worth recognising." description="A record of the industry recognition, partnerships and achievements that mark our progress." />

      <section className="relative overflow-hidden bg-secondary py-24 text-white lg:py-36">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(hsl(0_0%_100%_/_0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%_/_0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="container-bleed relative grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Recognition archive</Eyebrow>
            <h2 className="mt-6 font-display text-display-xl font-medium text-white">Built through trust. Measured through impact.</h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/60">This archive will bring together Smart Infraco's verified awards, certifications and industry milestones as they are published.</p>
          </Reveal>
          <Reveal className="flex min-h-[360px] flex-col justify-between border border-white/15 p-8 lg:col-span-6 lg:col-start-7 lg:p-12">
            <Award className="h-9 w-9 text-primary" />
            <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Archive update</p><h3 className="mt-5 max-w-xl font-display text-3xl font-semibold leading-tight text-white">Awards and recognitions will be published here as the official archive is updated.</h3></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-bleed">
          <Reveal>
            <Eyebrow>Awards gallery</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-display-lg font-medium text-secondary">
              Add award images as the recognition archive grows.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">
              Award cards support photos, plaques, certificates and event imagery. Cards without images show a branded placeholder until the final artwork is available.
            </p>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-px bg-secondary/15 md:grid-cols-2 lg:grid-cols-3">
            {awardItems.map((item) => (
              <RevealItem key={`${item.title}-${item.year}`} className="bg-white">
                <article className="group h-full overflow-hidden bg-white transition-colors duration-300 hover:bg-primary">
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-secondary p-8 text-center">
                        <div>
                          <Award className="mx-auto h-10 w-10 text-primary" />
                          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">Image pending</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute left-4 top-4 bg-primary px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-secondary">
                      {item.year}
                    </div>
                  </div>
                  <div className="p-7 lg:p-8">
                    <Eyebrow>{item.category}</Eyebrow>
                    <h3 className="mt-5 font-display text-2xl font-semibold text-secondary">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground transition-colors group-hover:text-secondary/75">{item.copy}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-bleed">
          <Reveal><Eyebrow>What recognition represents</Eyebrow><h2 className="mt-6 max-w-3xl font-display text-display-lg font-medium text-secondary">Progress made visible.</h2></Reveal>
          <RevealGroup className="mt-14 grid gap-px bg-secondary/15 md:grid-cols-3">
            {recognitionThemes.map((item) => <RevealItem key={item.title} className="bg-white"><article className="group h-full p-8 transition-colors duration-300 hover:bg-primary lg:p-10"><item.icon className="h-5 w-5 text-primary transition-colors group-hover:text-secondary" /><h3 className="mt-14 font-display text-xl font-semibold text-secondary">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground transition-colors group-hover:text-secondary/70">{item.copy}</p></article></RevealItem>)}
          </RevealGroup>
        </div>
      </section>
    </Layout>
  );
}
