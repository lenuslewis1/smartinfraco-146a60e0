import {
  Server, Shield, Thermometer, Flame, Eye, Zap,
  HardDrive, Network, Building, Globe, MonitorCheck, Lock, Database,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import GlassCard from "@/components/ui-system/GlassCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import dcBg from "@/assets/datacenter-bg.jpg";

const features = [
  { icon: Zap,         label: "Redundant Power",   desc: "Independent dual power distribution with redundant clean power intake and rack power distribution system." },
  { icon: Thermometer, label: "N+1 Cooling",       desc: "N+1 cooling infrastructure with precision efficient rack cooling solutions." },
  { icon: Flame,       label: "Fire Suppression",  desc: "State-of-the-art fire detection and suppression system." },
  { icon: Shield,      label: "Physical Security", desc: "Four layers of physical security with top-tier access controls to racks." },
  { icon: Eye,         label: "24/7 Monitoring",   desc: "Round-the-clock NOC monitoring with quick-access to client's co-located infrastructure on request." },
  { icon: Network,     label: "Carrier Neutral",   desc: "Carrier-neutral facility allowing unrestricted interconnect between carriers and customers." },
];

const tiers = [
  {
    name: "Tier III · Accra",
    badge: "Flagship",
    description: "Our primary data centre is a fully operational carrier-neutral tier III designed and constructed facility and it provides unrestricted interconnect between carriers and customers. The facility was designed with uptime tier III design standards and constructed in line with technical specifications to provide resilience across all of its critical infrastructures. Currently the largest modern facility of its kind in Ghana.",
    specs: ["Tier III Design Standard", "Carrier Neutral", "Earthquake-Resistant (1m Elevated)", "Dual Power Distribution", "N+1 Cooling", "4 Layers Physical Security"],
  },
  {
    name: "Tier II · Kumasi",
    badge: "Regional",
    description: "Our Kumasi facility provides redundant capacity for critical infrastructure components, delivering reliable hosting for regional operations and disaster recovery scenarios. Connected via our national fibre backbone for full redundancy.",
    specs: ["Redundant Components", "Regional Hub", "DR Capable", "Fibre Connected", "N+1 Redundancy"],
  },
];

const dcServices = [
  { icon: Server,       title: "Rack Colocation",            description: "Premium rack hosting and colocation with resilient physical security, redundant network, power, and cooling components. Quick and easy provisioning with powered servers and easy-to-scale storage." },
  { icon: HardDrive,    title: "Virtual Private Server",     description: "Multi-tenant cloud hosting where high-performance physical servers are virtualised, offering higher levels of performance, flexibility, and control in a virtual environment." },
  { icon: Globe,        title: "Web Hosting",                description: "Dedicated website hosting on a cost sharing basis. Shared WHM hosting control panel with flexible cPanel, reliable 24x7 customer support, and 99.9% guaranteed uptime." },
  { icon: Database,     title: "Domain Registration",        description: "NITA is the authoritative registrar for the gov.gh domain space. We help you acquire a domain name — gov.gh domains are available at no cost to eligible government institutions." },
  { icon: HardDrive,    title: "Storage as a Service (STaaS)", description: "Enable your organisation to use our data centre and cloud storage resources. More cost-efficient than building private storage infrastructure, especially for storing data locally in Ghana." },
  { icon: MonitorCheck, title: "Monitoring as a Service (MaaS)", description: "24×7 monitoring of various levels of IT assets with proactive and reactive measures, including early detection alerts against cyber threats, vulnerabilities detection, and resource utilisation management." },
  { icon: Database,     title: "Backup as a Service (BaaS)", description: "Offsite data storage through regular data transfer from on-premises to data centre. Protect sensitive government, business, or personal data from loss associated with user error, hacking, or disasters." },
  { icon: Lock,         title: "Security Services",          description: "Multi-layered security including VPS audit & hardening, IPS/IDS protections, web application vulnerability assessments, SIEM tools, and gateway anti-virus security services with deep packet inspection." },
];

const detailedDcServices = [
  {
    icon: Server,
    title: "Rack Colocation",
    tagline: "Premium rack hosting and colocation.",
    description: "House physical server hardware and storage in resilient facilities with redundant network, clean power, cooling, physical security, 24/7 support and service monitoring.",
    highlights: ["Redundant ISP links", "Largest modern rack space", "Top-tier rack access security"],
  },
  {
    icon: HardDrive,
    title: "Virtual Private Server",
    tagline: "Quick access, powered to scale.",
    description: "High-performance physical servers are virtualised so government and enterprise clients can access flexible, controlled, multi-tenant infrastructure over the network.",
    highlights: ["Flexible virtual resources", "Higher performance control", "Shared infrastructure efficiency"],
  },
  {
    icon: Globe,
    title: "Web Hosting",
    tagline: "Dedicated website hosting on a cost-sharing basis.",
    description: "Host institutional websites in a shared web server environment that spreads cost across hosted packages while maintaining dependable service standards.",
    highlights: ["Shared WHM control panel", "Flexible cPanel access", "99.9% guaranteed uptime"],
  },
  {
    icon: Database,
    title: "Domain Registration",
    tagline: "Give your organisation a digital presence.",
    description: "Acquire and manage domain names through NITA's gov.gh registrar capability, with general naming requirements and institution-specific rules for eligible public bodies.",
    highlights: ["gov.gh domain guidance", "DNS management", "nic.gh domain search"],
  },
  {
    icon: HardDrive,
    title: "Storage as a Service",
    tagline: "Flexible local storage with security and cost savings.",
    description: "Use Smart Infraco's data centre and cloud storage resources instead of building private storage infrastructure, especially where data must remain hosted in Ghana.",
    highlights: ["Local data protection", "Storage and backup support", "Cost-efficient capacity"],
  },
  {
    icon: MonitorCheck,
    title: "Monitoring as a Service",
    tagline: "All-round surveillance across every touch point.",
    description: "24/7 monitoring for IT assets with proactive and reactive measures, early cyber-threat alerts, vulnerability detection and resource-utilisation management.",
    highlights: ["NOC customer support", "Performance monitoring", "Prompt system alerts"],
  },
  {
    icon: Database,
    title: "Backup as a Service",
    tagline: "Offsite data storage to reduce loss risk.",
    description: "Regularly transfer data from on-premises environments into the data centre to protect government, business and personal information from user error, hacking or disaster.",
    highlights: ["File-server backup model", "Sensitive data protection", "Managed maintenance"],
  },
  {
    icon: Lock,
    title: "Security Services",
    tagline: "Multi-layered security for maximum protection.",
    description: "Protect hosted infrastructure through VPS audit and hardening, IPS/IDS defence, vulnerability assessment, SIEM monitoring, gateway anti-virus and deep packet inspection.",
    highlights: ["SOC event handling", "DDoS traffic protection", "Pen-test recommendations"],
  },
];

export default function DataCentresPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Data Centres"
        title="Data Centre Solutions"
        description="All-in-one, robust, reliable and secure data centre solutions. Purpose-built facilities in Accra and Kumasi engineered for maximum uptime, security, and scalability."
        bgImage={dcBg}
      />

      {/* Tiers */}
      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Our Facilities</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-foreground">
              Two strategic locations. <span className="text-gradient-aurora">Continental reach.</span>
            </h2>
          </Reveal>

          <RevealGroup className="grid lg:grid-cols-2 gap-6">
            {tiers.map((tier) => (
              <RevealItem key={tier.name}>
                <GlassCard className="p-8 lg:p-10 h-full bg-card">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 glass flex items-center justify-center">
                        <Building className="w-5 h-5 text-secondary" />
                      </div>
                      <Eyebrow tone="primary">{tier.badge}</Eyebrow>
                    </div>
                  </div>
                  <h3 className="font-display text-3xl text-foreground">{tier.name}</h3>
                  <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {tier.specs.map((s) => (
                      <span key={s} className="text-[11px] font-medium px-3 py-1.5 border border-hairline text-foreground/85 hover:border-secondary/40 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Features */}
      <section className="relative section-padding bg-dark overflow-hidden">
        <GridBackdrop variant="lines" className="opacity-30" />
        <div className="relative container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Facility Features</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-dark-foreground">
              Engineered for resilience.
            </h2>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <RevealItem key={f.label}>
                <div className="group h-full border border-white/18 bg-white/[0.09] p-7 transition duration-300 hover:border-primary/55 hover:bg-white/[0.14] lg:p-8">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center border border-white/22 bg-white/12 transition duration-300 group-hover:border-primary/55 group-hover:bg-primary/10">
                    <f.icon className="h-5 w-5 text-primary transition duration-300" />
                  </div>
                  <h3 className="font-display text-base font-medium text-white transition duration-300">{f.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200 transition duration-300 group-hover:text-white">{f.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* DC Services */}
      <section className="relative section-padding bg-background overflow-hidden">
        <div className="container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Services</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-foreground">
              Complete data centre service stack.
            </h2>
            <p className="mt-5 text-base text-muted-foreground max-w-xl leading-relaxed">
              From colocation to security services, we deliver the full spectrum of data centre solutions under one roof.
            </p>
          </Reveal>

          <RevealGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {detailedDcServices.map((s) => (
              <RevealItem key={s.title}>
                <div className="group flex h-full flex-col border border-hairline bg-white p-6 shadow-[0_14px_50px_hsl(225_50%_12%_/_0.08)] transition duration-300 hover:-translate-y-1 hover:border-secondary/35 hover:shadow-[0_22px_70px_hsl(225_50%_12%_/_0.14)] lg:p-7">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center border border-secondary/15 bg-secondary/5">
                    <s.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-tight text-foreground">{s.title}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary/70">{s.tagline}</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{s.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.highlights.map((highlight) => (
                      <span key={highlight} className="border border-secondary/15 bg-secondary/5 px-3 py-1.5 text-[11px] font-semibold leading-none text-secondary">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

    </Layout>
  );
}
