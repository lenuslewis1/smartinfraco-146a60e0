import {
  ArrowUpRight,
  Check,
  FileCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Eyebrow from "@/components/ui-system/Eyebrow";
import AnimatedCounter from "@/components/ui-system/AnimatedCounter";
import MagneticButton from "@/components/ui-system/MagneticButton";
import { Reveal } from "@/components/ui-system/RevealOnScroll";
import aboutHero from "@/assets/about-hero.jpg";
import dataCentreBg from "@/assets/datacenter-bg.jpg";
import nationalNetwork from "@/assets/feature-national-reach-network.png";

const stats = [
  { value: 1000, suffix: " km", label: "Eastern corridor fibre backbone" },
  { value: 2, suffix: "", label: "Tier II (Kumasi) and Tier III (Accra)" },
  { value: 24, suffix: "/7", label: "support for critical operations" },
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
                Smart Infraco operates the national digital infrastructure, giving organisations access to resilient fibre, data centre, cloud and support capabilities built for Ghana's digitalisation agenda.
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

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="relative mx-auto grid w-full max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <Reveal>
            <Eyebrow tone="muted">Company overview</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.25rem,4.6vw,5.4rem)] font-semibold leading-[0.96] text-secondary">
              Turning National Infrastructure into Usable Capacity
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="space-y-6 text-base leading-8 text-slate-600 lg:text-lg">
            <p>
              The Government of Ghana's 1,000-km Eastern corridor fibre was originally built to digitalise government administration and amplify economic activity across the eastern side of the country.

            </p>
            <p>
              Smart Infraco adds the commercial systems, technical support and service operations needed to make that infrastructure work for public institutions and private enterprises alike.
            </p>
            <p>
              As demand for high-quality, affordable and equally available internet service grows, Smart Infraco helps more organisations benefit from Ghana's best-of-breed fibre, hosting and digital infrastructure.
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 grid w-full max-w-[1500px] overflow-hidden px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <Reveal className="group relative min-h-[430px] overflow-hidden bg-secondary lg:min-h-[620px]">
            <img src={aboutHero} alt="Ghana skyline" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/26 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-11">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Purpose</p>
              <h2 className="mt-5 max-w-xl font-display text-[clamp(2.4rem,4.4vw,5rem)] font-semibold leading-[0.98] text-white">
                Smart Infraco - Our purpose
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col justify-between bg-secondary p-8 text-white lg:p-12 xl:p-16">
            <div>
              <p className="font-display text-[clamp(1.8rem,3vw,3.4rem)] font-medium leading-[1.08] text-white">
                Open, neutral-access infrastructure for a more connected Ghana.
              </p>
              <div className="mt-10 space-y-7 border-t border-white/18 pt-9">
                <p className="text-base leading-8 text-white/78 lg:text-lg lg:leading-9">
                  Smart Infraco provides an open neutral-access digital infrastructure that facilitates best-in-class voice and data service for all businesses and consumers.
                </p>
                <p className="text-base leading-8 text-white/78 lg:text-lg lg:leading-9">
                  Our purpose is to accelerate the growth and transformation of Ghana’s telecoms sector while ensuring equal access to the robust infrastructure solutions that enable public and private institutions to digitalise and monetise their goals.
                </p>
              </div>
            </div>
            <div className="mt-12 h-1 w-24 bg-primary" />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(hsl(0_0%_100%_/_0.22)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%_/_0.22)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-6">
              <Eyebrow tone="accent">Strategic partnership</Eyebrow>
              <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.65rem,5.6vw,6.4rem)] font-semibold leading-[0.94] text-white">
                Smart Infraco - NITA Partnership
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
              <p className="text-lg font-medium leading-8 text-white/82 lg:text-xl lg:leading-9">
                Smart Infraco is the technical partner of the National Information Technology Agency (NITA) with the mandate to operate, maintain and commercialise Ghana's state-owned digital infrastructure, which includes the Eastern Corridor fibre network, national data centres in Accra and Kumasi, and the national cloud infrastructure (G-Cloud).
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-stretch">
            <Reveal className="group relative min-h-[380px] overflow-hidden bg-[#071223] sm:min-h-[480px] lg:col-span-5 lg:min-h-[620px]">
              <img
                src={nationalNetwork}
                alt="Illustration of connected digital infrastructure across Ghana"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 lg:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Technical partnership</p>
                <div className="mt-5 flex items-center gap-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                  <span>Smart Infraco</span>
                  <span className="text-primary">×</span>
                  <span>NITA</span>
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col justify-between lg:col-span-6 lg:col-start-7">
              <div className="space-y-8">
                <Reveal>
                  <p className="text-base leading-8 text-white/72 lg:text-lg lg:leading-9">
                    The Government of Ghana’s (GoG) 1010-Km Eastern corridor fibre cable was originally built to digitalise the government administration across the nation, and to amplify economic activity in the Eastern side of the country. It however lacked the required technical systems and support infrastructure to make it as effective as possible.
                  </p>
                </Reveal>
                <Reveal delay={0.08} className="border-t border-white/18 pt-8">
                  <p className="text-base leading-8 text-white/72 lg:text-lg lg:leading-9">
                    By acting as the commercial wing of NITA, with high-grade systems and support infrastructure, Smart Infraco has enabled the robust, effective and world-class infrastructure that we have today. It is built with the additional capacity and technical support system to meet all of the government’s needs, and to extend it to private enterprises as well.
                  </p>
                </Reveal>
              </div>

              <Reveal className="mt-10 border-t border-white/18 pt-8">
                <a
                  href="https://nita.gov.gh/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:text-white"
                >
                  Visit NITA
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 grid overflow-hidden border border-white/18 lg:grid-cols-[0.82fr_1.18fr]">
            <Reveal className="flex items-end bg-primary p-8 text-primary-foreground lg:p-11">
              <h3 className="max-w-xl font-display text-[clamp(2rem,3.5vw,4.2rem)] font-semibold leading-[1.02]">
                Enabling high-quality public-private partnerships
              </h3>
            </Reveal>
            <Reveal delay={0.08} className="bg-white/[0.045] p-8 lg:p-11">
              <div className="space-y-6 text-base leading-8 text-white/72 lg:text-lg lg:leading-9">
                <p>
                  Ghana’s digitalisation progress has driven a rising demand for high-quality, affordable, and equally available internet service. As the commercial wing of NITA, Smart Infraco has the responsibility of ensuring that all public and private enterprises alike have equal access to, and enjoy the full benefit of, the nation’s best-of-breed fibre infrastructure.
                </p>
                <p>
                  Through our world-class, innovative, and reliable services, Smart Infraco enables businesses and government agencies to run all their critical business-applications on the network, to derive maximum output.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="relative mx-auto grid w-full max-w-[1500px] gap-5 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
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

    </Layout>
  );
}
