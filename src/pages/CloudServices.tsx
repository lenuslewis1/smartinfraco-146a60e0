import {
  Cloud, Server, Database, HardDrive, MonitorCheck, Settings, Shield, Globe,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CtaBand from "@/components/shared/CtaBand";
import ServiceCard from "@/components/shared/ServiceCard";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import cloudBg from "@/assets/cloud-bg.jpg";

const services = [
  { icon: Cloud,        title: "Hybrid Cloud",                description: "Seamlessly integrate on-premise infrastructure with cloud resources for flexible, cost-optimised workloads. Smart Infraco's services underpin NITA's efforts to provide a cost-effective and secure cloud-based solution to address the government's need to store and manage its critical applications and data." },
  { icon: Server,       title: "Virtual Private Servers",     description: "Multi-tenant cloud hosting where high-performance physical servers are virtualised, offering higher levels of performance, flexibility, and control. End users have access to the infrastructure and enjoy the same flexibility and control in the virtual environment." },
  { icon: Database,     title: "Backup as a Service",         description: "Offsite data storage through regular data transfer from on-premises to data centre. Protect sensitive government, business, or personal data from loss associated with user error, hacking, or any other kind of technological and natural disaster." },
  { icon: HardDrive,    title: "Storage as a Service",        description: "Enable your organisation to use our data centre and cloud storage resources. More cost-efficient than building private storage infrastructure, especially based on regulatory requirements of storing data locally in the jurisdiction of Ghana." },
  { icon: MonitorCheck, title: "Monitoring as a Service",     description: "24×7 monitoring of various levels of IT assets with proactive and reactive measures, such as early detection alerts against cyber threats, vulnerabilities detection, and management of resource utilisation." },
  { icon: Settings,     title: "Managed IT Infrastructure",   description: "End-to-end management of your IT estate including servers, networking, security, and compliance. Through decades of data centre operations experience, we help you find the right solution for your business." },
];

const benefits = [
  { icon: Shield,       label: "Data Sovereignty",       desc: "All data hosted within Ghana, meeting local regulatory and compliance requirements for storing data locally in the jurisdiction of Ghana." },
  { icon: Globe,        label: "Cost Effective & Secure", desc: "Cloud computing has emerged as a more reliable, cost-effective, and scalable option for organisations to meet their computing needs." },
  { icon: MonitorCheck, label: "SLA Backed",             desc: "Enterprise-grade SLAs with proactive 24×7 NOC monitoring, incident management, and prompt notification system alerts." },
];

export default function CloudServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Cloud & Managed"
        title="Cloud & Managed Services"
        description="Simplify, scale, and secure end-to-end operations. Enterprise-grade cloud infrastructure hosted in Ghana for government and enterprise."
        bgImage={cloudBg}
      />

      {/* Services */}
      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
            <Reveal className="lg:col-span-7">
              <Eyebrow>What we offer</Eyebrow>
              <h2 className="font-display mt-5 text-display-lg text-foreground">
                A complete cloud & IT management stack.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-base text-muted-foreground leading-relaxed lg:ml-auto max-w-md">
                Cloud computing has become the most reliable, cost-effective and scalable way for organisations to meet their compute needs. Our services underpin NITA's secure cloud strategy.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative section-padding bg-dark overflow-hidden">
        <GridBackdrop variant="lines" className="opacity-30" />
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
             style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.5), transparent 70%)" }} />
        <div className="relative container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Why our cloud</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-dark-foreground">
              Local infrastructure. <span className="text-gradient-aurora">Global standards.</span>
            </h2>
          </Reveal>
          <RevealGroup className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
            {benefits.map((b) => (
              <RevealItem key={b.label} className="bg-dark">
                <div className="group p-8 lg:p-10 h-full transition-colors hover:bg-card">
                  <div className="w-12 h-12 glass flex items-center justify-center mb-6">
                    <b.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-display text-lg text-dark-foreground">{b.label}</h3>
                  <p className="mt-3 text-sm text-dark-foreground/70 leading-relaxed">{b.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        eyebrow="Migrate with confidence"
        title={<>Move to <span className="text-gradient-aurora">Smart Infraco Cloud</span>.</>}
        description="Our cloud architects will design a migration plan tailored to your enterprise needs."
        primaryLabel="Talk to an Expert"
        secondaryLabel="View Data Centres"
        secondaryTo="/data-centres"
      />
    </Layout>
  );
}
