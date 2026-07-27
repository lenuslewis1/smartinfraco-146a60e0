import { Cloud, Database, Globe, HardDrive, MonitorCheck, Server, Settings } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import heroImage from "@/assets/cloud-bg.jpg";
import serviceCloudImage from "@/assets/service-cloud-custom.jpg";

const services = [
  { icon: Cloud, title: "Hybrid Cloud", copy: "Connect on-premise infrastructure with flexible cloud resources for secure, cost-optimised workloads." },
  { icon: Server, title: "Virtual Private Server", copy: "High-performance physical servers are virtualised so server resources can be made available over a network with strong performance, flexibility and control." },
  { icon: Database, title: "Backup as a Service", copy: "Protected offsite copies that reduce the risk of data loss from error, attack or disaster." },
  { icon: HardDrive, title: "Storage as a Service", copy: "Secure, scalable local capacity without the cost of private storage infrastructure." },
  { icon: Globe, title: "Domain Registration", copy: "Acquire and manage the domain names and requirements needed for a credible online identity." },
  { icon: MonitorCheck, title: "Monitoring as a Service", copy: "24/7 proactive and reactive monitoring across IT assets, cyber threats, vulnerabilities and resource utilisation." },
  { icon: Settings, title: "Managed IT Infrastructure", copy: "End-to-end management across servers, networking, security and compliance." },
];

export default function CloudServicesPage() {
  return (
    <Layout>
      <PageHero eyebrow="Cloud & Managed Services" title="Your cloud. Closer, clearer, fully managed." description="Sovereign cloud infrastructure and expert operations for organisations modernising without giving up control." bgImage={heroImage} />

      <section className="relative overflow-hidden bg-secondary py-24 text-white lg:py-36">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(hsl(0_0%_100%_/_0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%_/_0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="container-bleed relative">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5"><Eyebrow>Cloud operations</Eyebrow><h2 className="mt-6 font-display text-display-xl font-medium text-white">Modern infrastructure, managed end to end.</h2><p className="mt-7 max-w-md text-sm leading-7 text-white/60">Move workloads, storage and operations onto a flexible local platform without carrying the complexity alone.</p></Reveal>
            <RevealGroup className="grid grid-cols-2 gap-px bg-white/15 lg:col-span-6 lg:col-start-7">
              {[["24/7", "NOC monitoring"], ["Ghana", "Data residency"], ["99.9%", "Hosting uptime"], ["SLA", "Backed support"]].map(([value, label]) => <RevealItem key={label} className="bg-secondary"><div className="p-7 lg:p-9"><div className="font-display text-3xl font-semibold text-white">{value}</div><div className="mt-3 font-mono text-[8px] uppercase tracking-[0.15em] text-white/45">{label}</div></div></RevealItem>)}
            </RevealGroup>
          </div>

          <RevealGroup className="mt-20 flex flex-wrap justify-center">
            {services.map((service, index) => <RevealItem key={service.title} className="w-full bg-secondary md:w-1/2 lg:w-1/3"><article className="group h-full border border-white/15 p-7 transition-colors duration-300 hover:bg-primary lg:p-9"><div className="flex items-center justify-between"><service.icon className="h-5 w-5 text-primary transition-colors group-hover:text-secondary" /><span className="font-mono text-[9px] text-white/30 transition-colors group-hover:text-secondary/50">0{index + 1}</span></div><h3 className="mt-14 font-display text-xl font-semibold text-primary transition-colors group-hover:text-secondary">{service.title}</h3><p className="mt-4 text-sm leading-7 text-white/55 transition-colors group-hover:text-secondary/70">{service.copy}</p></article></RevealItem>)}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-36">
        <img src={serviceCloudImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.14]" />
        <div className="absolute inset-0 bg-white/88" />
        <div className="container-bleed relative grid gap-16 lg:grid-cols-12">
          <Reveal className="relative overflow-hidden bg-secondary p-8 text-white lg:col-span-4 lg:p-10"><img src={serviceCloudImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" /><div className="absolute inset-0 bg-secondary/78" /><div className="relative"><Eyebrow>Service model</Eyebrow><h2 className="mt-6 font-display text-display-lg font-medium text-white">A clearer route to cloud value.</h2></div></Reveal>
          <RevealGroup className="border-t border-secondary/15 lg:col-span-7 lg:col-start-6">
            {[{ n: "01", title: "Provision", copy: "Deploy compute, storage and backup capacity around the workloads and controls your organisation needs." }, { n: "02", title: "Operate", copy: "Expert teams monitor infrastructure, manage incidents and keep services performing around the clock." }, { n: "03", title: "Optimise", copy: "Adjust resources as demand changes to improve utilisation, resilience and cost predictability." }].map((step) => <RevealItem key={step.n}><article className="group grid grid-cols-[3rem_1fr] gap-5 border-b border-secondary/15 px-7 py-9 transition-colors duration-300 hover:bg-primary hover:text-secondary lg:px-8"><span className="font-mono text-[10px] text-secondary/40 transition-colors group-hover:text-secondary/60">{step.n}</span><div><h3 className="font-display text-3xl font-semibold text-secondary">{step.title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground transition-colors group-hover:text-secondary/75">{step.copy}</p></div></article></RevealItem>)}
          </RevealGroup>
        </div>
      </section>
    </Layout>
  );
}
