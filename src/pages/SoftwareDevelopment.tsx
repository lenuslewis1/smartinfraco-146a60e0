import {
  Blocks,
  Code2,
  LayoutDashboard,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import heroImage from "@/assets/hero-internet.webp";
import deliveryImage from "@/assets/service-network.jpg";

const services = [
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    copy: "Responsive, accessible platforms built around real operational needs and measurable outcomes.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    copy: "Reliable mobile experiences for customers, field teams and connected service delivery.",
  },
  {
    icon: Blocks,
    title: "Enterprise Platforms",
    copy: "Secure systems that streamline workflows, information and collaboration across organisations.",
  },
  {
    icon: Code2,
    title: "API & Systems Integration",
    copy: "Well-structured integrations that connect existing platforms, data and digital services.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Security",
    copy: "Testing, performance reviews and security practices embedded throughout the delivery lifecycle.",
  },
  {
    icon: RefreshCcw,
    title: "Support & Modernisation",
    copy: "Ongoing maintenance and practical upgrades that keep critical applications useful and resilient.",
  },
];

const deliverySteps = [
  {
    n: "01",
    title: "Discover",
    copy: "Clarify users, workflows, technical constraints and the outcomes the product must deliver.",
  },
  {
    n: "02",
    title: "Design & Build",
    copy: "Turn agreed priorities into tested, usable releases with visible progress throughout delivery.",
  },
  {
    n: "03",
    title: "Launch & Improve",
    copy: "Deploy securely, monitor performance and evolve the product as needs and opportunities change.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Software Development"
        title="Digital products built for how your organisation works."
        description="Secure web, mobile and enterprise software designed to turn complex operations into dependable digital services."
        bgImage={heroImage}
        imagePosition="center 58%"
      />

      <section className="relative overflow-hidden bg-secondary py-24 text-white lg:py-36">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(hsl(0_0%_100%_/_0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%_/_0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="container-bleed relative">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Product capability</Eyebrow>
              <h2 className="mt-6 font-display text-display-xl font-medium text-white">
                From a clear need to dependable software.
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/60">
                Product thinking, engineering and infrastructure expertise come together in one accountable delivery team.
              </p>
            </Reveal>

            <RevealGroup className="grid grid-cols-2 gap-px bg-white/15 lg:col-span-6 lg:col-start-7">
              {[
                ["Web", "Responsive platforms"],
                ["Mobile", "Connected experiences"],
                ["API", "Systems integration"],
                ["Cloud", "Secure deployment"],
              ].map(([value, label]) => (
                <RevealItem key={label} className="bg-secondary">
                  <div className="p-7 lg:p-9">
                    <div className="font-display text-3xl font-semibold text-white">{value}</div>
                    <div className="mt-3 font-mono text-[8px] uppercase tracking-[0.15em] text-white/45">{label}</div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <RevealGroup className="mt-20 flex flex-wrap justify-center">
            {services.map((service, index) => (
              <RevealItem key={service.title} className="w-full bg-secondary md:w-1/2 lg:w-1/3">
                <article className="group h-full border border-white/15 p-7 transition-colors duration-300 hover:bg-primary lg:p-9">
                  <div className="flex items-center justify-between">
                    <service.icon className="h-5 w-5 text-primary transition-colors group-hover:text-secondary" />
                    <span className="font-mono text-[9px] text-white/30 transition-colors group-hover:text-secondary/50">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-14 font-display text-xl font-semibold text-primary transition-colors group-hover:text-secondary">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/55 transition-colors group-hover:text-secondary/70">
                    {service.copy}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-36">
        <div className="container-bleed grid items-center gap-16 lg:grid-cols-12">
          <Reveal className="relative min-h-[520px] overflow-hidden bg-secondary lg:col-span-5">
            <img
              src={deliveryImage}
              alt="Connected digital infrastructure"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent" />
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow>Delivery model</Eyebrow>
              <h2 className="mt-6 font-display text-display-lg font-medium text-secondary">
                Build with clarity at every stage.
              </h2>
            </Reveal>
            <RevealGroup className="mt-10 border-t border-secondary/15">
              {deliverySteps.map((step) => (
                <RevealItem key={step.n}>
                  <article className="group grid grid-cols-[3rem_1fr] gap-5 border-b border-secondary/15 py-8 transition-colors duration-300 hover:bg-primary/10 lg:px-5">
                    <span className="font-mono text-[10px] text-secondary/40">{step.n}</span>
                    <div>
                      <h3 className="font-display text-3xl font-semibold text-secondary">{step.title}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{step.copy}</p>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>
    </Layout>
  );
}
