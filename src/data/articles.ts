import connectivityHero from "@/assets/connectivity-hero.jpg";
import cloudBg from "@/assets/cloud-bg.jpg";
import ghanaNetworkMap from "@/assets/ghana-network-map.jpg";
import serviceCyber from "@/assets/service-cyber-custom.jpg";

export type ArticleSection = {
  heading: string;
  body: string[];
};

export type Article = {
  id: number;
  slug: string;
  category: string;
  title: string;
  read: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  hero: string;
  sections: ArticleSection[];
  takeaways: string[];
};

export const articles: Article[] = [
  {
    id: 1,
    slug: "future-of-digital-infrastructure-west-africa",
    category: "Infrastructure Insight",
    title: "The future of digital infrastructure in West Africa",
    read: "5 min read",
    excerpt: "An in-depth look at how fibre connectivity and cloud services are transforming businesses across the region.",
    author: "Smart Infraco Editorial",
    date: "March 18, 2026",
    image: connectivityHero,
    hero: "A practical infrastructure view for enterprises, public institutions and service providers planning the next phase of digital growth.",
    takeaways: [
      "Resilient fibre remains the base layer for cloud, security and public-sector digitalisation.",
      "Local hosting and data-centre capacity reduce latency while improving control over sensitive workloads.",
      "Neutral-access infrastructure gives more organisations a clearer route to dependable national reach.",
    ],
    sections: [
      {
        heading: "Infrastructure is becoming a strategic operating layer",
        body: [
          "Across West Africa, digital infrastructure is moving from a back-office concern to a board-level priority. Enterprises, public agencies and service providers need connectivity that can support cloud applications, digital public services, high-volume customer platforms and secure data exchange.",
          "The next phase will depend less on isolated technology purchases and more on joined-up infrastructure: fibre backbone, metro access, data centres, cloud platforms, monitoring and cybersecurity working together as one dependable foundation.",
        ],
      },
      {
        heading: "Why national fibre capacity matters",
        body: [
          "National fibre capacity allows organisations to connect more locations, distribute workloads and reduce dependence on fragile last-mile arrangements. It also gives carriers and service providers a more reliable base for delivering services at scale.",
          "For Ghana and the wider region, the value is practical: lower latency, better resilience, broader reach and a stronger platform for digital services that cannot afford frequent interruption.",
        ],
      },
      {
        heading: "The role of local hosting and cloud services",
        body: [
          "As more organisations modernise their applications, local data-centre and cloud options become essential. Keeping workloads close to users improves performance and helps regulated sectors plan around data-residency expectations.",
          "The strongest infrastructure strategies combine local hosting with secure connectivity, proactive monitoring and clear support paths, so teams can scale without losing visibility or control.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "why-data-sovereignty-matters-for-african-enterprises",
    category: "Sovereign Cloud",
    title: "Why data sovereignty matters for African enterprises",
    read: "7 min read",
    excerpt: "How keeping workloads in-country unlocks regulatory clarity, lower latency and stronger resilience.",
    author: "Cloud Architecture Team",
    date: "March 20, 2026",
    image: cloudBg,
    hero: "A business case for keeping critical data, applications and operational control closer to the organisations that depend on them.",
    takeaways: [
      "Data sovereignty is about control, resilience and regulatory confidence.",
      "Local infrastructure can improve performance for Ghana-based users and services.",
      "Sovereign cloud strategy works best when paired with strong connectivity and security operations.",
    ],
    sections: [
      {
        heading: "Data location is now a business decision",
        body: [
          "For many African enterprises, data sovereignty is no longer a narrow compliance topic. It affects where applications run, who can access sensitive information, how incidents are handled and how quickly teams can respond to operational risk.",
          "Keeping critical workloads in-country can simplify governance while giving technical teams a clearer view of performance, access control and service continuity.",
        ],
      },
      {
        heading: "Latency and resilience are part of the same conversation",
        body: [
          "When applications sit closer to users, everyday performance can improve. The benefit is especially clear for public services, financial platforms, enterprise systems and customer-facing applications that depend on fast response times.",
          "Local hosting also strengthens resilience planning. Organisations can design backup, recovery and monitoring around known local facilities, support teams and network routes.",
        ],
      },
      {
        heading: "A practical path to sovereign cloud",
        body: [
          "The most effective path starts with workload classification. Organisations should identify which systems need local residency, which require high availability, and which can run in hybrid environments.",
          "From there, connectivity, storage, monitoring and security should be designed as part of the same architecture, not added after the migration is already complete.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "from-backbone-to-last-mile-national-network",
    category: "Connectivity",
    title: "From backbone to last mile: anatomy of a national network",
    read: "6 min read",
    excerpt: "What it takes to design, light and operate a 1,010 km national fibre backbone.",
    author: "Network Engineering",
    date: "March 22, 2026",
    image: ghanaNetworkMap,
    hero: "A network engineer's view of how backbone capacity becomes usable service for enterprises, carriers and public institutions.",
    takeaways: [
      "Backbone fibre only creates value when it is engineered into reachable, supportable services.",
      "Route diversity, monitoring and service-level design are central to dependable national connectivity.",
      "Last-mile planning connects national capacity to real operational outcomes.",
    ],
    sections: [
      {
        heading: "The backbone is the starting point",
        body: [
          "A national fibre backbone creates the high-capacity routes that connect regions, facilities and major service points. It is the physical foundation for bandwidth, latency and reach.",
          "But backbone fibre is only the beginning. To become useful to customers, it must be designed into access services, interconnect options, monitoring routines and support processes.",
        ],
      },
      {
        heading: "Network design is about resilience",
        body: [
          "Resilience depends on route planning, redundancy, equipment quality and operational visibility. A well-designed network anticipates faults and gives engineers the information needed to respond quickly.",
          "For critical users, service design must also consider power, facility standards, escalation paths and clear service-level expectations.",
        ],
      },
      {
        heading: "The last mile turns reach into service",
        body: [
          "The last mile determines how national capacity reaches offices, campuses, data centres and public institutions. Good last-mile design balances cost, speed, availability and future expansion.",
          "When backbone and last-mile planning work together, organisations gain connectivity that can grow with their applications and operating model.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "building-a-soc-for-the-african-continent",
    category: "Cybersecurity",
    title: "Building a SOC for the African continent",
    read: "8 min read",
    excerpt: "A blueprint for 24/7 detection and response operations tuned to local threat profiles.",
    author: "Security Operations",
    date: "March 24, 2026",
    image: serviceCyber,
    hero: "A security operations model for organisations that need continuous visibility, fast escalation and local response context.",
    takeaways: [
      "A SOC must combine people, process, telemetry and response discipline.",
      "Local context improves detection quality and incident prioritisation.",
      "Cybersecurity is strongest when integrated with network and hosting operations.",
    ],
    sections: [
      {
        heading: "Security operations must be continuous",
        body: [
          "Modern organisations cannot rely only on periodic audits or reactive support. Threats move quickly, and critical infrastructure needs continuous detection, triage and response.",
          "A Security Operations Centre brings together monitoring tools, trained analysts, escalation playbooks and reporting structures that keep security active around the clock.",
        ],
      },
      {
        heading: "Local context improves response",
        body: [
          "A SOC serving African organisations must understand local network patterns, common attack paths, regulatory expectations and the realities of hybrid infrastructure.",
          "That context helps analysts separate noise from genuine risk and respond in a way that fits the customer's operating environment.",
        ],
      },
      {
        heading: "Integrated infrastructure is easier to defend",
        body: [
          "Security improves when connectivity, hosting, monitoring and support are designed together. Better telemetry gives analysts a clearer view of events, while operational teams can act faster when remediation is required.",
          "For customers, the goal is simple: fewer blind spots, faster response and a stronger security posture across the infrastructure they depend on.",
        ],
      },
    ],
  },
];

export function findArticleBySlug(slug: string | undefined) {
  return articles.find((article) => article.slug === slug);
}
