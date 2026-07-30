import {
  Cable,
  Check,
  Database,
  Network,
  Route,
  Zap,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import heroImage from "@/assets/hero-internet.png";
import serviceConnectivityImage from "@/assets/service-connectivity-custom.jpg";

const services = [
  {
    icon: Zap,
    title: "Dedicated Internet",
    kicker: "Boost your network performance with ease",
    copy:
      "Plug into a reliable and dedicated connection to support your business-critical applications and large numbers of concurrent users. We offer bandwidths up to 10 Gbps delivered over our IP/MPLS network and high network resilience. The service comes with 24/7 support and monitoring with static IP options available. Our service is backed by stringent SLAs that assure service uptime for all our products.",
    highlights: [
      "Up to 100 Gbps bandwidth delivered over IP/MPLS",
      "High resiliency",
      "Robust, simplified, and clearly defined SLAs",
      "Superior speeds and uptime",
      "Connections to major providers and carriers",
    ],
  },
  {
    icon: Route,
    title: "MPLS L2VPN",
    kicker: "Safe, secure, and seamless multi-location connectivity",
    copy:
      "Enterprises choose MPLS VPN as the preferred solution for inter-office connectivity because it connects geographically dispersed users to the cloud privately and securely. The layer 2 version provides highly secure and dedicated site-to-site and site-to-multi-site connectivity. It is ideal for organisations with multi-location presence that need to share large files and data sets across branches or headquarters.",
    highlights: [
      "Seamless transfer of large files or data sets",
      "Enables sensitive data exchange",
      "Maximised network access, security, and scalability",
    ],
  },
  {
    icon: Network,
    title: "MPLS L3VPN",
    kicker: "Real-time connectivity and extreme scalability at lower cost",
    copy:
      "With our layer 3 MPLS VPN, your business can connect multiple locations while converging voice, video, and data onto a single IP-based network. Simplify WAN routing by peering with our Provider Edge routers, troubleshoot more easily, and reduce operational costs through a high-performing VPN architecture that can scale to thousands of customer sites.",
    highlights: [
      "Multi-site connections",
      "High QoS for real-time, business-critical applications",
      "Simplified network management",
      "Reduced opex and high scalability",
    ],
  },
  {
    icon: Cable,
    title: "Dark Fibre",
    kicker: "Go unlimited. Stay future-proof.",
    copy:
      "Dark Fibre is a high-capacity network solution for businesses that need unrestricted bandwidth, complete service control, and total reliability. We provide fibre networking solutions across a wide variety of industries, delivered through our nationwide fibre footprint.",
    highlights: [
      "Design your own network configurations, services, and applications",
      "Secure traffic on private physical network infrastructure",
      "Scale without additional cost on dedicated strands of fibre",
    ],
  },
  {
    icon: Database,
    title: "Network Colocation Solutions",
    kicker: "Optimum capacity support and efficient hosting services",
    copy:
      "Our technical advisors help deploy critical network infrastructure in secure, connected, and cost-effective data centres. We offer both data centre and PoP colocation services, supported by decades of data centre operations experience and a carrier-neutral tier III designed facility.",
    highlights: [
      "Broad customer base across carriers and ISPs",
      "Direct connection to all five undersea cables serving the South Atlantic Coast of Africa",
      "Carrier-neutral interconnect between carriers and customers",
    ],
  },
];

export default function ConnectivityPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Network Solutions"
        title="Intelligent network solutions for public and private enterprises."
        description="Dedicated internet, MPLS VPN, dark fibre and network colocation services engineered for secure, scalable connectivity."
        bgImage={heroImage}
        imagePosition="68% center"
      />

      <section className="relative overflow-hidden bg-secondary py-24 text-white lg:py-36">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(hsl(0_0%_100%_/_0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%_/_0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="container-bleed relative">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Network scale</Eyebrow>
              <h2 className="mt-6 font-display text-display-xl font-medium text-white">
                Reliable capacity for critical workloads.
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/68">
                Built on IP/MPLS, national fibre and carrier-neutral facilities, our network services give organisations the performance, security and uptime needed to operate at scale.
              </p>
            </Reveal>
            <RevealGroup className="grid grid-cols-2 gap-px bg-white/15 lg:col-span-6 lg:col-start-7">
              {[
                ["100 Gbps", "Available bandwidth"],
                ["24/7", "Support and monitoring"],
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
                    <span className="font-mono text-[9px] text-white/30 transition-colors group-hover:text-secondary/50">0{index + 1}</span>
                  </div>
                  <h3 className="mt-12 font-display text-xl font-semibold text-primary transition-colors group-hover:text-secondary">{service.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/72 transition-colors group-hover:text-secondary/75">{service.kicker}</p>
                  <p className="mt-5 text-sm leading-7 text-white/58 transition-colors group-hover:text-secondary/70">{service.copy}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-36">
        <img src={serviceConnectivityImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.14]" />
        <div className="absolute inset-0 bg-white/88" />
        <div className="container-bleed relative grid gap-16 lg:grid-cols-12">
          <Reveal className="relative overflow-hidden bg-secondary p-8 text-white lg:col-span-4 lg:p-10">
            <img src={serviceConnectivityImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-secondary/78" />
            <div className="relative">
            <Eyebrow>Service highlights</Eyebrow>
            <h2 className="mt-6 font-display text-display-lg font-medium text-white">
              Connectivity designed around performance, security and scale.
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/72">
              Each service is structured around resilient access, clear service levels and technical flexibility for public and private enterprises.
            </p>
            </div>
          </Reveal>
          <RevealGroup className="border-t border-secondary/15 lg:col-span-7 lg:col-start-6">
            {services.map((service) => (
              <RevealItem key={service.title}>
                <article className="group grid gap-5 border-b border-secondary/15 px-7 py-9 transition-colors duration-300 hover:bg-primary hover:text-secondary lg:grid-cols-[14rem_1fr] lg:px-8">
                  <div>
                    <service.icon className="h-5 w-5 text-secondary transition-colors group-hover:text-secondary" />
                    <h3 className="mt-4 font-display text-2xl font-semibold text-secondary">{service.title}</h3>
                  </div>
                  <ul className="grid gap-3">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground transition-colors group-hover:text-secondary/75">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary transition-colors group-hover:text-secondary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            ))}
            <RevealItem>
              <article className="group grid gap-5 border-b border-secondary/15 px-7 py-9 transition-colors duration-300 hover:bg-primary hover:text-secondary lg:grid-cols-[14rem_1fr] lg:px-8">
                <div>
                  <Database className="h-5 w-5 text-secondary" />
                  <h3 className="mt-4 font-display text-2xl font-semibold text-secondary">Colocation facility standards</h3>
                </div>
                <ul className="grid gap-3">
                  {[
                    "Tier III design standard constructed for resilient critical infrastructure",
                    "Independent dual power distribution, N+1 cooling, fire detection and suppression",
                    "Four layers of physical security for customer infrastructure",
                    "Elevated, earthquake-resistant facility design for different seismic zones",
                    "Climate-aware operating plans for customer power and cooling requirements",
                  ].map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground transition-colors group-hover:text-secondary/75">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary transition-colors group-hover:text-secondary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>
    </Layout>
  );
}
