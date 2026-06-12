import { Network, Globe, Zap, ArrowRight, Radio, Cable } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import CtaBand from "@/components/shared/CtaBand";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import GlassCard from "@/components/ui-system/GlassCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import connectivityHero from "@/assets/connectivity-hero.jpg";

const services = [
  {
    icon: Zap,
    title: "Dedicated Internet",
    description: "Plug into a reliable and dedicated connection to support your business-critical applications and large numbers of concurrent users. We offer bandwidths up to 100 Gbps delivered over our IP/MPLS network with high network resilience. The service comes with 24×7 support and monitoring with static IP options available.",
    features: ["Up to 100 Gbps bandwidth delivered over IP/MPLS", "High resiliency", "Robust, simplified, and clearly defined SLAs", "Superior speeds and uptime", "Connections to major providers and carriers"],
  },
  {
    icon: ArrowRight,
    title: "MPLS L2 VPN",
    description: "Enterprises choose MPLS VPN as the preferred solution for inter-office connectivity, due to its capability to connect users that are geographically dispersed to the cloud privately and securely. The layer 2 version is designed to provide highly secure and dedicated site-to-site and site-to-multi-site connectivity.",
    features: ["Seamless transfer of large files or data sets", "Enables sensitive data exchange", "Maximised network access, security, and scalability"],
  },
  {
    icon: Network,
    title: "MPLS L3 VPN",
    description: "Connect multiple locations together while converging voice, video, and data onto a single IP-based network. Simplify your WAN routing by peering with any of our Provider Edge (PE) routers. Our high-performing VPN architecture can scale to thousands of customer sites.",
    features: ["Multi-site connections", "High QoS for real-time, business-critical applications", "Simplified network management", "Reduced opex and high scalability"],
  },
  {
    icon: Cable,
    title: "Dark Fibre",
    description: "Go unlimited. Stay future-proof. Dark Fibre is a high-capacity network solution for businesses who need unrestricted bandwidth, complete service control and total reliability. We have fibre networking solutions for customers across a wide variety of sectors, delivered through our nationwide fibre footprint.",
    features: ["Design your own network", "Secure traffic with private physical infrastructure", "Scale without additional cost"],
  },
  {
    icon: Globe,
    title: "Network Colocation",
    description: "Depending on your requirements for power, cooling, redundancy, network, support, security, and compliance, our technical advisors will ensure your critical network infrastructure is deployed optimally in the most secure, connected, and cost-effective data centre.",
    features: ["Built-for-purpose facilities", "Carrier-neutral tier III facility", "Unrestricted interconnect between carriers and customers"],
  },
  {
    icon: Radio,
    title: "4G Fixed Wireless Access",
    description: "Wireless broadband solutions for areas where fibre deployment is not yet feasible, delivering reliable last-mile access across Ghana.",
    features: ["Last-mile connectivity", "Reliable wireless broadband", "Coverage expansion"],
  },
];

const highlights: [string, string][] = [
  ["Carrier Neutral", "Unrestricted interconnect between carriers and customers for better value, lower latency, and higher resilience"],
  ["Tier III Design Standard", "Designed with uptime tier III design standards with resilience across all critical infrastructures"],
  ["N+1 Cooling", "Independent dual power distribution, N+1 cooling infrastructure, state-of-art fire detection and suppression"],
  ["Earthquake-Resistant", "1-metre elevated earthquake-resistant building design, built for different seismic zones"],
  ["Operational Reliability", "Redundant systems (N+1 and 2(N+1)) with the latest technologies for high operational reliability"],
  ["All Telecom Carriers", "Including all telecommunication carriers in Ghana, ISPs, direct connection to all 5 undersea cables"],
];

export default function ConnectivityPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Connectivity"
        title="Network Solutions"
        description="Highly reliable, always available network solutions and support for your critical applications and end-users."
        bgImage={connectivityHero}
      />

      {/* Capabilities — sticky-left, scrolling-right */}
      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <Eyebrow>Our network</Eyebrow>
                  <h2 className="font-display mt-5 text-display-lg text-foreground">
                    Boost your network performance — with ease.
                  </h2>
                  <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                    From national backbone to last-mile access, Smart Infraco provides the complete connectivity stack for government, enterprise and service-provider networks.
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[
                      { v: "100", u: "Gbps DIA" },
                      { v: "1,010", u: "km Backbone" },
                      { v: "5", u: "Subsea Cables" },
                    ].map((m) => (
                      <div key={m.u}>
                        <div className="font-display text-2xl font-medium text-secondary tabular-nums">{m.v}</div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">{m.u}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>

            <RevealGroup className="lg:col-span-8 space-y-5">
              {services.map((s, i) => (
                <RevealItem key={s.title}>
                  <div className="group relative grid lg:grid-cols-12 gap-6 p-7 lg:p-8 border border-hairline bg-card overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                    <span className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 glass flex items-center justify-center">
                          <s.icon className="w-5 h-5 text-secondary" />
                        </div>
                        <div className="font-display text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          0{i + 1}
                        </div>
                      </div>
                      <h3 className="font-display mt-5 text-2xl text-foreground">{s.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                    <div className="lg:col-span-5 flex flex-wrap gap-2 content-start">
                      {s.features.map((f) => (
                        <span key={f} className="text-[11px] font-medium px-3 py-1.5 border border-hairline text-foreground/85 hover:border-secondary/40 transition-colors">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Network highlights */}
      <section className="relative section-padding bg-dark overflow-hidden">
        <GridBackdrop variant="lines" className="opacity-30" />
        <div className="relative container-wide">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>Network Highlights</Eyebrow>
            <h2 className="font-display mt-5 text-display-lg text-dark-foreground">
              Built for a continental customer base.
            </h2>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {highlights.map(([label, desc]) => (
              <RevealItem key={label} className="bg-dark">
                <GlassCard hoverable={false} className="p-7 lg:p-8 h-full bg-transparent border-0">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <div className="font-display text-base text-dark-foreground">{label}</div>
                      <div className="mt-2 text-sm text-dark-foreground/65 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                </GlassCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        eyebrow="Need a network solution?"
        title={<>Engineer a bespoke network <span className="text-gradient-aurora">with us</span>.</>}
        description="Our network engineering team can design a solution that maps to your scale, geography and SLA targets."
        primaryLabel="Request a Quote"
        secondaryLabel="View Data Centres"
        secondaryTo="/data-centres"
      />
    </Layout>
  );
}
