import { Shield, Lock, Eye, AlertTriangle, Server, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/shared/ServiceCard";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";

const services = [
  { icon: Shield,         title: "Threat Detection & Response",     description: "24/7 monitoring and rapid incident response to protect your infrastructure from evolving cyber threats." },
  { icon: Lock,           title: "Network Security",                description: "Firewall management, intrusion prevention, and secure access controls for your entire network." },
  { icon: Eye,            title: "Security Operations Centre (SOC)", description: "Dedicated SOC team providing continuous surveillance and threat intelligence." },
  { icon: AlertTriangle,  title: "Vulnerability Management",        description: "Regular assessments and penetration testing to identify and remediate security gaps." },
  { icon: Server,         title: "Endpoint Protection",             description: "Comprehensive endpoint security solutions to safeguard devices across your organisation." },
  { icon: Users,          title: "Security Awareness Training",     description: "Empower your team with the knowledge to recognise and prevent cyber attacks." },
];

const posture = [
  { k: "24/7", v: "SOC operations" },
  { k: "MTTD", v: "< 5 min mean time to detect" },
  { k: "ISO", v: "Aligned controls framework" },
  { k: "DPI",  v: "Deep packet inspection" },
];

export default function CybersecurityPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Cybersecurity"
        title="Defending the digital backbone."
        description="Comprehensive cybersecurity solutions to protect your digital assets, infrastructure and citizens — built on a sovereign, government-grade security posture."
      />

      {/* Posture strip */}
      <section className="relative bg-dark border-b border-hairline">
        <GridBackdrop variant="lines" className="opacity-30" />
        <div className="relative container-wide py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:divide-x lg:divide-hairline">
            {posture.map((p, i) => (
              <Reveal key={p.v} delay={i * 0.06} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <div className="font-display text-3xl lg:text-4xl text-dark-foreground tabular-nums">{p.k}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-dark-foreground/55">{p.v}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-foreground">
              End-to-end protection — from edge to endpoint.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative section-padding bg-dark overflow-hidden">
        <GridBackdrop variant="lines" className="opacity-30" />
        <div className="relative container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-dark-foreground">
              Detect. Respond. Adapt.
            </h2>
          </Reveal>
          <RevealGroup className="grid md:grid-cols-3 gap-px bg-hairline border border-hairline">
            {[
              { step: "01", title: "Detect",  desc: "SIEM, IDS/IPS and SOC analytics surface anomalies in real time across the entire estate." },
              { step: "02", title: "Respond", desc: "Playbook-driven response with rapid containment and structured incident management." },
              { step: "03", title: "Adapt",   desc: "Continuous threat intelligence and posture hardening keep defences ahead of the curve." },
            ].map((s) => (
              <RevealItem key={s.step} className="bg-dark">
                <div className="group p-8 lg:p-10 h-full transition-colors hover:bg-card">
                  <div className="font-display text-xs uppercase tracking-[0.22em] text-primary transition-colors group-hover:text-secondary">{s.step}</div>
                  <h3 className="font-display mt-4 text-2xl text-dark-foreground transition-colors group-hover:text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm text-dark-foreground/75 leading-relaxed transition-colors group-hover:text-muted-foreground">{s.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

    </Layout>
  );
}
