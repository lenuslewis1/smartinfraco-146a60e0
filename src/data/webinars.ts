import securingGhanasDigitalServices from "@/assets/webinars/securing-ghanas-digital-services.webp";
import technologyForecast from "@/assets/webinars/technology-forecast-2026.webp";
import dataSovereignty from "@/assets/webinars/data-sovereignty-trust.webp";
import digitalFirstBusiness from "@/assets/webinars/digital-first-business.webp";
import cybersecurityDigitalAge from "@/assets/webinars/cybersecurity-digital-age.webp";
import securingConnectivity from "@/assets/webinars/securing-connectivity.webp";
import dataCentresCloud from "@/assets/webinars/data-centres-cloud-solutions.webp";

export type WebinarSection = { heading: string; body: string[] };

export type Webinar = {
  id: number; slug: string; category: string; title: string; date: string; status: string; speaker: string;
  excerpt: string; image: string; hero: string; sections: WebinarSection[]; takeaways: string[];
};

export const webinars: Webinar[] = [
  {
    id: 1, slug: "securing-ghanas-digital-services-with-local-infrastructure", category: "Cybersecurity & infrastructure",
    title: "Securing Ghana's Digital Services with Local Infrastructure", date: "May 29, 2026, 2:00 PM", status: "Past webinar",
    speaker: "Emmanuel Afari Mpofor, Kelvin Nyameke, Isaac Dankyi-Koranteng and Nana Kwasi Ampem-Darko",
    excerpt: "A panel on protecting Ghana's digital services through secure, locally grounded infrastructure.", image: securingGhanasDigitalServices,
    hero: "A Smart Infraco webinar on the role of local infrastructure, cloud systems and cybersecurity in securing Ghana's digital services.",
    takeaways: ["Local infrastructure is central to digital-service resilience.", "Cybersecurity, cloud and connectivity need to work as one operating model.", "The session brought together perspectives from NITA, Smart Infraco and industry experts."],
    sections: [{ heading: "Session focus", body: ["The panel examined how local infrastructure can support trusted, resilient digital services across Ghana.", "The discussion connected enterprise architecture, cloud systems, cybersecurity and fraud-risk management."] }, { heading: "Panel", body: ["Emmanuel Afari Mpofor of NITA, Kelvin Nyameke of Smart Infraco, Isaac Dankyi-Koranteng of Hadley Technologies and Nana Kwasi Ampem-Darko joined the session. Ernestina Tawiah moderated."] }],
  },
  {
    id: 2, slug: "smart-infraco-technology-forecast-2026", category: "Technology strategy",
    title: "Smart Infraco Technology Forecast 2026: What Organisations Should Prepare For", date: "December 18, 2025, 2:00 PM", status: "Past webinar",
    speaker: "Maxwell A. Appiah, Robert-Nesta Gemadzie, Rocertha Akoto and Kelvin A. Nyameke",
    excerpt: "A forward-looking briefing on the technology priorities organisations should prepare for in 2026.", image: technologyForecast,
    hero: "A practical technology forecast for organisations planning their infrastructure, security and operations for 2026.",
    takeaways: ["Technology planning requires a joined-up view of facilities, networks, cloud and security.", "Organisations benefit from anticipating operational changes before they become urgent.", "The session brought together perspectives from Smart Infraco, NITA and network-security leadership."],
    sections: [{ heading: "Session focus", body: ["The webinar explored the technology and infrastructure considerations that organisations should prioritise for 2026.", "It connected practical planning with the realities of facilities, cloud systems, networks and cybersecurity."] }, { heading: "Panel", body: ["Maxwell A. Appiah, Robert-Nesta Gemadzie, Rocertha Akoto and Kelvin A. Nyameke shared their perspectives. Richard Owusu Koramoah moderated."] }],
  },
  {
    id: 3, slug: "data-sovereignty-and-trust", category: "Data sovereignty",
    title: "Data Sovereignty & Trust: Keeping Ghanaian Data in Ghana", date: "October 31, 2025, 2:00 PM", status: "Past webinar",
    speaker: "Robert-Nesta Gemadzie, Dela Adjei, Aseye Adzo-maa Nyadzi and Sylvia Gifty Appiah",
    excerpt: "A discussion on data protection, local accountability and the value of keeping Ghanaian data in Ghana.", image: dataSovereignty,
    hero: "A webinar on building trust through data sovereignty, protection and locally accountable digital infrastructure.",
    takeaways: ["Data sovereignty connects infrastructure choices with trust and accountability.", "Data protection requires governance as well as technology.", "The session combined perspectives from NITA, the Students Loan Trust Fund and IGIS."],
    sections: [{ heading: "Session focus", body: ["The panel examined how organisations can build trust by keeping Ghanaian data secure, protected and locally accountable.", "The conversation addressed data sovereignty alongside data-protection responsibilities."] }, { heading: "Panel", body: ["Robert-Nesta Gemadzie, Dela Adjei, Aseye Adzo-maa Nyadzi and Sylvia Gifty Appiah joined the discussion. Richard Owusu Koramoah moderated."] }],
  },
  {
    id: 4, slug: "building-a-digital-first-business", category: "Digital transformation",
    title: "Building a Digital-First Business: Scalable, Secure, and Future-Ready IT Solutions", date: "June 20, 2025, 2:00 PM", status: "Past webinar",
    speaker: "Kwame Anokye, Emmanuel Owusu and Palaksha Swamy", excerpt: "A practical conversation on building scalable, secure IT foundations for a digital-first business.", image: digitalFirstBusiness,
    hero: "A webinar on the technology choices organisations can make to become more scalable, secure and ready for the future.",
    takeaways: ["Digital-first operations need a strong technology foundation.", "Scalability and security should be designed together.", "The session brought together telecom, ICT and programme-management perspectives."],
    sections: [{ heading: "Session focus", body: ["The webinar explored how organisations can build IT solutions that support digital-first growth.", "The discussion focused on the relationship between scale, security and future readiness."] }, { heading: "Panel", body: ["Kwame Anokye of Afriwave Telecom, Emmanuel Owusu of AT Ghana and Palaksha Swamy of Ascend Digital Solutions shared their perspectives. Ernestina Tawiah moderated."] }],
  },
  {
    id: 5, slug: "cybersecurity-in-the-digital-age", category: "Cybersecurity", title: "Cybersecurity in the Digital Age", date: "October 4, 2024, 2:00 PM", status: "Past webinar",
    speaker: "Samuel Mensah Buabeng, Effie Bonful and Abubakar Issaka", excerpt: "An expert conversation on cybersecurity, risk and practical protection in the digital age.", image: cybersecurityDigitalAge,
    hero: "A Smart Infraco webinar bringing together cybersecurity and IT-advisory practitioners to discuss digital-age risk.",
    takeaways: ["Cybersecurity needs both technical and governance expertise.", "Risk management is an ongoing operational responsibility.", "The session combined independent, advisory and association perspectives."],
    sections: [{ heading: "Session focus", body: ["The webinar explored the cyber risks organisations face as their digital services and operations expand.", "Speakers shared perspectives from IT audit, advisory and cybersecurity leadership."] }, { heading: "Panel", body: ["Samuel Mensah Buabeng, Effie Bonful of KPMG Ghana and Abubakar Issaka of the Cyber Security Expert Association of Ghana joined the discussion. Ernestina Tawiah moderated."] }],
  },
  {
    id: 6, slug: "securing-connectivity-internet-uptime-cloud-hosting", category: "Connectivity & cloud", title: "Securing Connectivity: Internet Uptime & Cloud Hosting", date: "May 31, 2024, 2:00 PM", status: "Past webinar",
    speaker: "Courage Dogbe, Abdul Razak and Kelvin A. Nyameke", excerpt: "A session on dependable internet uptime and cloud hosting for business continuity.", image: securingConnectivity,
    hero: "A webinar on how network operations and cloud hosting can support more reliable, resilient connectivity.",
    takeaways: ["Internet uptime is a core part of business continuity.", "Cloud hosting and network operations should be planned together.", "The session brought together cloud, network and operations leadership."],
    sections: [{ heading: "Session focus", body: ["The webinar focused on the relationship between connectivity uptime, cloud hosting and dependable business operations.", "Speakers considered the operational practices required to keep critical services available."] }, { heading: "Panel", body: ["Courage Dogbe, Abdul Razak and Kelvin A. Nyameke shared their operational perspectives. Ernestina Tawiah moderated."] }],
  },
  {
    id: 7, slug: "data-centres-and-cloud-solutions", category: "Data centres & cloud", title: "Data Centers and Cloud Solutions: How to Keep Your Data Safe and Secure in a Digital World", date: "July 14, 2023, 2:00 PM", status: "Past webinar",
    speaker: "Michael Kwablah, Maxwell A. Appiah, Thomas Brien and Alfred Nkrow", excerpt: "A foundational webinar on protecting data through data-centre and cloud solutions.", image: dataCentresCloud,
    hero: "A Smart Infraco webinar on data-centre and cloud solutions for safeguarding data in a digital world.",
    takeaways: ["Data protection starts with dependable infrastructure choices.", "Data centres and cloud services support secure digital operations.", "The session brought together Smart Infraco technology, sales, marketing and commercial leadership."],
    sections: [{ heading: "Session focus", body: ["The webinar addressed how organisations can use data-centre and cloud solutions to keep their data safe and secure.", "It introduced the role of infrastructure in supporting reliable digital services."] }, { heading: "Panel", body: ["Michael Kwablah, Maxwell A. Appiah, Thomas Brien and Alfred Nkrow joined the session, with Thomas Brien serving as moderator."] }],
  },
];

export function findWebinarBySlug(slug: string | undefined) { return webinars.find((webinar) => webinar.slug === slug); }
