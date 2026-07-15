import connectivityHero from "@/assets/connectivity-hero.jpg";
import serviceCloud from "@/assets/service-cloud-custom.jpg";
import serviceCyber from "@/assets/service-cyber-custom.jpg";

export type WebinarSection = {
  heading: string;
  body: string[];
};

export type Webinar = {
  id: number;
  slug: string;
  category: string;
  title: string;
  date: string;
  duration: string;
  speaker: string;
  excerpt: string;
  image: string;
  youtubeUrl: string;
  hero: string;
  sections: WebinarSection[];
  takeaways: string[];
};

export const webinars: Webinar[] = [
  {
    id: 1,
    slug: "building-resilient-connectivity-for-public-services",
    category: "Connectivity",
    title: "Building resilient connectivity for public services",
    date: "June 18, 2026",
    duration: "48 min watch",
    speaker: "Network Engineering Team",
    excerpt:
      "A practical conversation on designing network capacity, route diversity and service continuity for public-sector digital platforms.",
    image: connectivityHero,
    youtubeUrl: "https://www.youtube.com/",
    hero:
      "How resilient connectivity planning helps institutions keep critical services available across regions, facilities and user groups.",
    takeaways: [
      "Route diversity and monitoring are central to dependable public-sector connectivity.",
      "Service continuity depends on the full path from backbone to last-mile access.",
      "Clear operating models help teams respond faster when incidents occur.",
    ],
    sections: [
      {
        heading: "What the session covers",
        body: [
          "This webinar explains how public institutions can think about national fibre, metro access, redundancy and service-level design as part of one operating model.",
          "The discussion focuses on practical decisions: how to plan for uptime, how to monitor critical links, and how to match connectivity design to the services citizens and teams depend on.",
        ],
      },
      {
        heading: "Who should watch",
        body: [
          "The session is useful for CIOs, network managers, programme teams and public-sector leaders responsible for digital service availability.",
          "It also helps enterprise teams understand how neutral-access infrastructure can support multi-site operations and business continuity.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "local-cloud-and-data-sovereignty",
    category: "Cloud",
    title: "Local cloud and data sovereignty",
    date: "July 9, 2026",
    duration: "42 min watch",
    speaker: "Cloud Architecture Team",
    excerpt:
      "A briefing on local hosting, workload control and the business case for keeping sensitive infrastructure closer to users.",
    image: serviceCloud,
    youtubeUrl: "https://www.youtube.com/",
    hero:
      "A cloud strategy conversation for organisations balancing modernisation, performance, data residency and operational control.",
    takeaways: [
      "Data sovereignty is a business, technical and governance decision.",
      "Local hosting can improve latency and simplify control for sensitive workloads.",
      "Hybrid cloud planning works best when connectivity, backup and security are designed together.",
    ],
    sections: [
      {
        heading: "What the session covers",
        body: [
          "The webinar walks through the role of local cloud services in regulated and critical environments, including when to keep workloads in-country and how to plan hybrid infrastructure.",
          "Speakers discuss migration readiness, storage and backup planning, and how operating teams can avoid losing visibility as workloads modernise.",
        ],
      },
      {
        heading: "Who should watch",
        body: [
          "This session is intended for technology leaders, operations teams, compliance stakeholders and organisations planning cloud adoption in Ghana.",
          "It is also relevant for teams comparing private infrastructure, public cloud and sovereign cloud options.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "cyber-resilience-for-critical-infrastructure",
    category: "Cybersecurity",
    title: "Cyber resilience for critical infrastructure",
    date: "August 6, 2026",
    duration: "55 min watch",
    speaker: "Security Operations Centre",
    excerpt:
      "A security operations briefing on monitoring, response playbooks and protection for always-on digital infrastructure.",
    image: serviceCyber,
    youtubeUrl: "https://www.youtube.com/",
    hero:
      "How organisations can combine people, telemetry and response discipline to improve protection around critical infrastructure.",
    takeaways: [
      "Continuous monitoring helps surface threats before they become service incidents.",
      "Response playbooks turn alerts into repeatable action.",
      "Security is strongest when integrated with network and hosting operations.",
    ],
    sections: [
      {
        heading: "What the session covers",
        body: [
          "This webinar introduces an operating model for cyber resilience, covering visibility, SIEM workflows, vulnerability management and incident response.",
          "The session also looks at how infrastructure providers and customer teams can coordinate around monitoring, escalation and remediation.",
        ],
      },
      {
        heading: "Who should watch",
        body: [
          "The discussion is built for security leads, infrastructure teams, risk owners and executives responsible for protecting digital services.",
          "It is especially relevant for organisations that depend on always-on networks, hosted systems or public-facing digital platforms.",
        ],
      },
    ],
  },
];

export function findWebinarBySlug(slug: string | undefined) {
  return webinars.find((webinar) => webinar.slug === slug);
}
