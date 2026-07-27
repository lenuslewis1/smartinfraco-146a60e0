import { Check, Database, Globe, HardDrive, Server } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import heroImage from "@/assets/datacenter-bg.jpg";
import serviceDataCentreImage from "@/assets/service-data-center-custom.jpg";

const services = [
  {
    icon: Server,
    title: "Rack Colocation Services",
    kicker: "Premium rack hosting and colocation",
    copy:
      "House physical server hardware and storage at the data centre with resilient physical security, redundant network, redundant power and redundant cooling components. The service includes 24/7 support, service monitoring and quick access to co-located infrastructure on request.",
    highlights: [
      "Top-tier data centre with redundant ISP links",
      "Largest modern rack space available",
      "Redundant clean power intake and rack power distribution",
      "Precision efficient rack cooling solutions",
      "Top physical security access to racks",
    ],
  },
  {
    icon: Globe,
    title: "Web Hosting",
    kicker: "Dedicated website hosting on cost-sharing basis",
    copy:
      "Basic website hosting is available to government institutions for a stipulated and moderate fee. The service runs on a shared web server environment, bringing down the cost by spreading it across clients and their hosted packages.",
    highlights: [
      "Shared WHM hosting control panel",
      "Flexible customer control panel with cPanel",
      "Reliable 24/7 customer support",
      "99.9% guaranteed uptime",
    ],
  },
  {
    icon: HardDrive,
    title: "Storage as a Service",
    kicker: "Unlock flexibility and security with significant savings",
    copy:
      "Use our data centre and cloud storage resources to store data locally. STaaS is more cost-efficient than building private storage infrastructure, especially where regulatory requirements require data to remain in Ghana.",
    highlights: [
      "Storage as a service",
      "Meets IT administrators' needs for storage and backup",
      "Enables data protection with locally stored and secured data",
      "Supports local regulatory data storage requirements",
    ],
  },
  {
    icon: Database,
    title: "Back-up as a Service",
    kicker: "Offsite data storage to reduce possible loss",
    copy:
      "Government and enterprise clients can protect sensitive government, business or personal data through regular data transfer from on-premises systems to the data centre. The service uses a file server system to reduce maintenance and management overhead.",
    highlights: [
      "Meets IT administrators' storage and backup needs",
      "Uses a highly effective file server system",
      "Protects sensitive information",
      "Supports recovery from error, attack or disaster",
    ],
  },
];

export default function DataCentresPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Data Centre Solutions"
        title="Secure, resilient data centre services for critical infrastructure."
        description="Rack colocation, web hosting, storage and backup services delivered from Ghana-based facilities."
        bgImage={heroImage}
      />

      <section className="relative overflow-hidden bg-secondary py-24 text-white lg:py-36">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(hsl(0_0%_100%_/_0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(0_0%_100%_/_0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="container-bleed relative">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Data centre scale</Eyebrow>
              <h2 className="mt-6 font-display text-display-xl font-medium text-white">
                Premium colocation, hosting and storage in Ghana.
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/60">
                Our facility combines rack space, resilient power, cooling, network access and operational support for organisations that need dependable local infrastructure.
              </p>
            </Reveal>
            <RevealGroup className="grid grid-cols-2 gap-px bg-white/15 lg:col-span-6 lg:col-start-7">
              {[
                ["24/7", "Support and monitoring"],
                ["99.9%", "Hosting uptime"],
                ["Ghana", "Local data storage"],
                ["NOC", "Customer support"],
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
                  <h3 className="mt-14 font-display text-xl font-semibold text-primary transition-colors group-hover:text-secondary">{service.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/72 transition-colors group-hover:text-secondary/75">{service.kicker}</p>
                  <p className="mt-5 text-sm leading-7 text-white/58 transition-colors group-hover:text-secondary/70">{service.copy}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-36">
        <img src={serviceDataCentreImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.14]" />
        <div className="absolute inset-0 bg-white/88" />
        <div className="container-bleed relative grid gap-16 lg:grid-cols-12">
          <Reveal className="relative overflow-hidden bg-secondary p-8 text-white lg:col-span-4 lg:p-10">
            <img src={serviceDataCentreImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-secondary/78" />
            <div className="relative">
              <Eyebrow>Service highlights</Eyebrow>
              <h2 className="mt-6 font-display text-display-lg font-medium text-white">
                Data centre capabilities for resilient operations.
              </h2>
              <p className="mt-6 text-sm leading-7 text-white/72">
                Each service is structured around availability, local hosting, operational support and protection for critical data and applications.
              </p>
            </div>
          </Reveal>
          <RevealGroup className="border-t border-secondary/15 lg:col-span-7 lg:col-start-6">
            {services.map((service) => (
              <RevealItem key={service.title}>
                <article className="group grid gap-5 border-b border-secondary/15 px-7 py-9 transition-colors duration-300 hover:bg-primary hover:text-secondary lg:grid-cols-[14rem_1fr] lg:px-8">
                  <div>
                    <service.icon className="h-5 w-5 text-secondary" />
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
          </RevealGroup>
        </div>
      </section>
    </Layout>
  );
}
