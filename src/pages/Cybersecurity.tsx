import { AlertTriangle, Eye, Lock, Server, Shield, ShieldCheck, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import heroImage from "@/assets/service-cyber-custom.jpg";

const services = [
  { icon: Shield, title: "Threat Detection & Response", copy: "Continuous monitoring and rapid action against evolving cyber threats." },
  { icon: Lock, title: "Network Security", copy: "Managed firewalls, intrusion prevention and secure access controls across the network." },
  { icon: Eye, title: "Security Operations Centre", copy: "Dedicated analysts providing round-the-clock surveillance, triage and escalation." },
  { icon: AlertTriangle, title: "Vulnerability Management", copy: "Assessment and testing to identify, prioritise and remediate security gaps." },
  { icon: ShieldCheck, title: "Security Services", copy: "Multi-layered protection against attacks, including security hardening, IPS and IDS, vulnerability assessments, SIEM and gateway anti-virus controls." },
  { icon: Server, title: "Endpoint Protection", copy: "Managed safeguards for devices and servers connected to critical systems." },
  { icon: Users, title: "Security Awareness", copy: "Practical training that helps teams recognise attacks and make safer decisions." },
];

export default function CybersecurityPage() {
  return (
    <Layout>
      <PageHero eyebrow="Cybersecurity" title="See threats sooner. Respond with certainty." description="Sovereign, always-on cyber defence for the digital services, infrastructure and information Ghana depends on." bgImage={heroImage} />

      <section className="relative overflow-hidden bg-secondary py-24 text-white lg:py-36">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(hsl(0_0%_100%_/_0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%_/_0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="container-bleed relative">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5"><Eyebrow>Security posture</Eyebrow><h2 className="mt-6 font-display text-display-xl font-medium text-white">Protection that evolves with the threat.</h2><p className="mt-7 max-w-md text-sm leading-7 text-white/60">People, telemetry and response playbooks work together to reduce exposure and contain incidents.</p></Reveal>
            <RevealGroup className="grid grid-cols-2 gap-px bg-white/15 lg:col-span-6 lg:col-start-7">
              {[["24/7", "SOC operations"], ["< 5 min", "Mean time to detect"], ["DPI", "Traffic inspection"], ["SIEM", "Central visibility"]].map(([value, label]) => <RevealItem key={label} className="bg-secondary"><div className="p-7 lg:p-9"><div className="font-display text-3xl font-semibold text-white">{value}</div><div className="mt-3 font-mono text-[8px] uppercase tracking-[0.15em] text-white/45">{label}</div></div></RevealItem>)}
            </RevealGroup>
          </div>

          <RevealGroup className="mt-20 flex flex-wrap justify-center">
            {services.map((service, index) => <RevealItem key={service.title} className="w-full bg-secondary md:w-1/2 lg:w-1/3"><article className="group h-full border border-white/15 p-7 transition-colors duration-300 hover:bg-primary lg:p-9"><div className="flex items-center justify-between"><service.icon className="h-5 w-5 text-primary transition-colors group-hover:text-secondary" /><span className="font-mono text-[9px] text-white/30 transition-colors group-hover:text-secondary/50">0{index + 1}</span></div><h3 className="mt-14 font-display text-xl font-semibold text-primary transition-colors group-hover:text-secondary">{service.title}</h3><p className="mt-4 text-sm leading-7 text-white/55 transition-colors group-hover:text-secondary/70">{service.copy}</p></article></RevealItem>)}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-36">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.14]" />
        <div className="absolute inset-0 bg-white/88" />
        <div className="container-bleed relative grid gap-16 lg:grid-cols-12">
          <Reveal className="relative overflow-hidden bg-secondary p-8 text-white lg:col-span-4 lg:p-10"><img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" /><div className="absolute inset-0 bg-secondary/78" /><div className="relative"><Eyebrow>Operating model</Eyebrow><h2 className="mt-6 font-display text-display-lg font-medium text-white">Cyber resilience is a cycle, not a product.</h2></div></Reveal>
          <RevealGroup className="border-t border-secondary/15 lg:col-span-7 lg:col-start-6">
            {[{ n: "01", title: "Detect", copy: "SIEM, IDS/IPS and SOC analytics surface anomalies across the estate in real time." }, { n: "02", title: "Respond", copy: "Playbook-driven containment and structured incident management turn alerts into action." }, { n: "03", title: "Adapt", copy: "Threat intelligence and posture reviews continuously strengthen critical controls." }].map((step) => <RevealItem key={step.n}><article className="group grid grid-cols-[3rem_1fr] gap-5 border-b border-secondary/15 px-7 py-9 transition-colors duration-300 hover:bg-primary hover:text-secondary lg:px-8"><span className="font-mono text-[10px] text-secondary/40 transition-colors group-hover:text-secondary/60">{step.n}</span><div><h3 className="font-display text-3xl font-semibold text-secondary">{step.title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground transition-colors group-hover:text-secondary/75">{step.copy}</p></div></article></RevealItem>)}
          </RevealGroup>
        </div>
      </section>
    </Layout>
  );
}
