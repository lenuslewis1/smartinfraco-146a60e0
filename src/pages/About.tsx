import {
  ArrowUpRight,
  Building2,
  Check,
  FileCheck,
  Network,
  ShieldCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Eyebrow from "@/components/ui-system/Eyebrow";
import AnimatedCounter from "@/components/ui-system/AnimatedCounter";
import MagneticButton from "@/components/ui-system/MagneticButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import aboutHero from "@/assets/about-hero.jpg";
import dataCentreBg from "@/assets/datacenter-bg.jpg";
import connectivityHero from "@/assets/connectivity-hero.jpg";

const stats = [
  { value: 1000, suffix: " km", label: "Eastern corridor fibre backbone" },
  { value: 10, suffix: "+", label: "regions reached through national infrastructure" },
  { value: 24, suffix: "/7", label: "support for critical operations" },
];

const operatingModel = [
  {
    icon: Network,
    title: "Neutral-access infrastructure",
    text: "A shared foundation for government, carriers, enterprises and service providers that need dependable national reach.",
  },
  {
    icon: ShieldCheck,
    title: "Operational resilience",
    text: "High-grade systems, technical support and secure facilities designed for services that cannot afford interruption.",
  },
  {
    icon: Building2,
    title: "Public-private enablement",
    text: "Extending national infrastructure capacity to private enterprises as well as public services.",
  },
];

const valuePromises = [
  "Access to unparalleled and equitable infrastructure",
  "Robust local and global technical support",
  "24/7 customer support",
  "International standard practices",
  "Competitive pricing",
  "Great socio-economic impact",
];

export default function AboutPage() {
  return (
    <Layout>
      <section className="relative min-h-[100svh] overflow-hidden bg-secondary text-white">
        <img
          src={aboutHero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(225_50%_8%_/_0.92)_0%,hsl(225_50%_8%_/_0.78)_34%,hsl(206_70%_50%_/_0.26)_66%,transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-secondary to-transparent" />

        <div className="relative flex min-h-[100svh] items-end px-5 pb-12 pt-36 sm:px-8 lg:px-12 lg:pb-20">
          <div className="mx-auto grid w-full max-w-[1500px] gap-12 lg:grid-cols-[1fr_420px] lg:items-end">
            <Reveal className="max-w-5xl">
              <h1 className="font-display text-[clamp(3rem,7vw,7.6rem)] font-semibold leading-[0.94] tracking-normal">
                Ghana's digital infrastructure partner for public and enterprise growth.
              </h1>
              <p className="mt-7 max-w-3xl text-base font-medium leading-7 text-white/82 lg:text-xl lg:leading-8">
                Smart Infraco commercialises and strengthens national digital infrastructure, giving organisations access to resilient fibre, data centre, cloud and support capabilities built for Ghana's digitalisation agenda.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <MagneticButton to="/contact" variant="primary">Start a conversation</MagneticButton>
                <MagneticButton to="/connectivity" variant="ghost">Explore services</MagneticButton>
              </div>
            </Reveal>

            <Reveal delay={0.16} className="group border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-primary/70 hover:bg-white/16 hover:shadow-[0_24px_80px_hsl(95_82%_55%_/_0.18)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">National role</p>
              <p className="mt-5 text-2xl font-medium leading-snug">
                Extending government-built fibre capacity into reliable services for the wider market.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-px bg-white/18">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-secondary/70 p-4 transition duration-300 group-hover:bg-secondary/90">
                    <div className="font-display text-2xl font-semibold tabular-nums text-primary">
                      <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-2 text-[11px] leading-4 text-white/62">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <Reveal>
            <Eyebrow tone="muted">Company overview</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.6vw,5.4rem)] font-semibold leading-[0.96] text-secondary">
              Built to turn national infrastructure into usable capacity.
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="space-y-6 text-base leading-8 text-slate-600 lg:text-lg">
            <p>
              The Government of Ghana's 1,010-km Eastern corridor fibre cable was originally built to digitalise government administration and amplify economic activity across the eastern side of the country.
            </p>
            <p>
              Smart Infraco adds the commercial systems, technical support and service operations needed to make that infrastructure work for public institutions and private enterprises alike.
            </p>
            <p>
              As demand for high-quality, affordable and equally available internet service grows, Smart Infraco helps more organisations benefit from Ghana's best-of-breed fibre, hosting and digital infrastructure.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-[1500px] gap-5 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
          <Reveal className="relative min-h-[520px] overflow-hidden bg-slate-100">
            <img src={aboutHero} alt="Ghana skyline" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/88 via-secondary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-md p-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/62">National footprint</p>
              <h3 className="mt-4 font-display text-4xl font-semibold leading-tight text-white">
                Backbone capacity for Ghana's next stage of digitalisation.
              </h3>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-5">
            {operatingModel.map((item) => (
              <RevealItem key={item.title}>
                <div className="group flex min-h-[160px] gap-5 bg-[hsl(206_70%_50%)] p-7 text-white transition duration-500 hover:-translate-y-2 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_22px_60px_hsl(206_70%_28%_/_0.22)]">
                  <item.icon className="mt-1 h-6 w-6 shrink-0 text-primary transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary-foreground" />
                  <div>
                    <h3 className="font-display text-2xl font-medium">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/72 transition duration-500 group-hover:text-primary-foreground/75">{item.text}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-secondary py-24 text-white lg:py-32">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-5xl">
            <Eyebrow tone="accent">Purpose</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,5.8rem)] font-semibold leading-[0.98]">
              Smart Infraco - Our purpose
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="border border-white/16 p-8 transition duration-500 hover:-translate-y-2 hover:border-primary/70 hover:bg-white/8 hover:shadow-[0_24px_80px_hsl(0_0%_0%_/_0.24)] lg:p-10">
              <p className="text-base leading-8 text-white/78 lg:text-lg">
                Smart Infraco provides infrastructure access to accelerate service delivery on the current 3G/4G networks and make the nation ready for 5G. We provide an open neutral-access digital infrastructure that facilitates best-in-class voice and data service for all businesses and consumers.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="bg-primary p-8 text-primary-foreground transition duration-500 hover:-translate-y-2 hover:brightness-105 hover:shadow-[0_24px_80px_hsl(95_82%_35%_/_0.24)] lg:p-10">
              <p className="text-base leading-8 lg:text-lg">
                Our purpose is not only to accelerate the growth and transformation of Ghana's telecoms sector, but also to ensure equal access to the robust infrastructure solutions that enable private players to digitalise and monetise their goals.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1500px] gap-5 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal className="group relative min-h-[560px] overflow-hidden bg-secondary text-white transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_80px_hsl(225_50%_12%_/_0.22)]">
            <img src={dataCentreBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-74 transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/42 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Infrastructure standard</p>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.6vw,4rem)] font-semibold leading-tight">
                Reliable facilities for services that need uptime, control and accountability.
              </h2>
            </div>
          </Reveal>

          <Reveal className="bg-slate-100 p-8 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_24px_80px_hsl(225_50%_12%_/_0.12)] lg:p-10">
            <Eyebrow tone="muted">Value promise</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.5vw,4rem)] font-semibold leading-tight text-secondary">
              Our promise of value
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Your lifeline to enterprise-grade connectivity, created through a seamless digital ecosystem that makes for superior management and operationalisation of your business and services.
            </p>
            <div className="mt-10 grid gap-px bg-slate-300">
              {valuePromises.map((promise) => (
                <div key={promise} className="group flex items-center gap-4 bg-white p-5 transition duration-300 hover:translate-x-2 hover:bg-primary hover:text-primary-foreground">
                  <Check className="h-5 w-5 shrink-0 text-primary transition duration-300 group-hover:text-primary-foreground" />
                  <span className="text-sm font-semibold text-secondary transition duration-300 group-hover:text-primary-foreground">{promise}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-4 border-t border-slate-300 pt-8">
              <FileCheck className="h-7 w-7 shrink-0 text-primary" />
              <p className="text-sm leading-7 text-slate-600">
                Smart Infraco combines infrastructure ownership, carrier-neutral access and operational support so customers can plan services around clear standards and a single accountable partner.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[hsl(206_70%_50%)] py-24 text-white lg:py-32">
        <img src={connectivityHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto grid w-full max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:px-12">
          <Reveal>
            <Eyebrow tone="accent">Public-private partnerships</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,6rem)] font-semibold leading-[0.96]">
              Enabling high-quality public-private partnerships
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 bg-secondary/72 p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:bg-secondary/86 hover:shadow-[0_24px_80px_hsl(225_50%_12%_/_0.24)] lg:p-10">
            <p className="text-base leading-8 text-white/82">
              Ghana's digitalisation progress has driven a rising demand for high-quality, affordable, and equally available internet service. Smart Infraco helps public and private enterprises alike access and benefit from the nation's best-of-breed fibre infrastructure.
            </p>
            <p className="text-base leading-8 text-white/82">
              Through our world-class, innovative, and reliable services, Smart Infraco enables businesses and government agencies to run all their critical business-applications on the network, to derive maximum output.
            </p>
            <MagneticButton to="/contact" variant="primary" className="mt-8">
              Talk to Smart Infraco
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </Reveal>
        </div>
      </section>

    </Layout>
  );
}
