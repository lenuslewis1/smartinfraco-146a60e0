import { Award, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import awardsShowcase from "@/assets/awards/smart-infraco-awards.png";

const previousAwards = [
  { title: "Innovation in data centre technologies", crop: { x: 101, y: 94, width: 204, height: 259 } },
  { title: "Excellence in data centre operations", crop: { x: 394, y: 94, width: 205, height: 259 } },
  { title: "Public Sector Connectivity Services Provider of the Year", crop: { x: 696, y: 94, width: 206, height: 259 } },
  { title: "Innovative Service Offering Award", crop: { x: 974, y: 90, width: 205, height: 263 } },
];

const showcaseWidth = 1298;

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
            <p className="mt-7 max-w-md text-sm leading-7 text-white/60">Smart Infraco has been recognised for innovation, operational excellence and services that strengthen Ghana's digital infrastructure.</p>
          </Reveal>
          <Reveal className="group relative flex items-center overflow-hidden border border-white/15 bg-white lg:col-span-6 lg:col-start-7">
            <img src={awardsShowcase} alt="Smart Infraco award trophies and recognition summary" className="w-full object-contain transition duration-700 group-hover:scale-[1.02]" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-bleed">
          <Reveal>
            <Eyebrow>Previous awards</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-display-lg font-medium text-secondary">
              Recognition for service, innovation and operational excellence.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">
              Smart Infraco has been recognised across data centre technology, connectivity and service delivery.
            </p>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-px bg-secondary/15 md:grid-cols-2">
            {previousAwards.map((award, index) => (
              <RevealItem key={award.title} className="bg-white">
                <article className="group h-full overflow-hidden bg-white transition-colors duration-300 hover:bg-primary">
                  <div className="relative overflow-hidden bg-[#f3f3f1]" style={{ aspectRatio: `${award.crop.width} / ${award.crop.height}` }}>
                    <img
                      src={awardsShowcase}
                      alt={`${award.title} trophy`}
                      className="absolute max-w-none transition duration-700 group-hover:scale-[1.025]"
                      style={{
                        width: `${(showcaseWidth / award.crop.width) * 100}%`,
                        left: `${(-award.crop.x / award.crop.width) * 100}%`,
                        top: `${(-award.crop.y / award.crop.height) * 100}%`,
                        transformOrigin: "center",
                      }}
                    />
                    <span className="absolute right-4 top-4 bg-secondary px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white">0{index + 1}</span>
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary transition-colors group-hover:text-secondary" />
                      <Eyebrow>Previous award</Eyebrow>
                    </div>
                    <h3 className="mt-6 max-w-lg font-display text-2xl font-semibold leading-tight text-secondary">{award.title}</h3>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-px grid gap-8 bg-secondary p-8 text-white md:grid-cols-[auto_1fr] md:items-center lg:p-12">
            <div className="flex h-16 w-16 items-center justify-center bg-primary text-secondary">
              <Trophy className="h-7 w-7" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">2024 nomination</p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-white">Cloud Innovator of the Year</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">Smart Infraco was nominated for this award in 2024.</p>
            </div>
          </Reveal>
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
