import { ArrowUpRight, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";

type Article = {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  url: string;
};

const articles: Article[] = [
  { id: 1, category: "Intelligence & AI", date: "June 3, 2026", title: "The Roadmap to Intelligence: Practical AI and the Ghanaian Enterprise", excerpt: "A practical, locally grounded view of AI across managed services, cloud optimisation and cybersecurity.", image: "https://smartinfraco.com/wp-content/uploads/2026/06/Frame-1-560x420.png", url: "https://smartinfraco.com/the-roadmap-to-intelligence-practical-ai-and-the-ghanaian-enterprise/" },
  { id: 2, category: "Connectivity", date: "May 19, 2026", title: "The Role of National Fibre Backbones in Ghana\u2019s Digital Economy", excerpt: "How national fibre infrastructure underpins the digital services used by citizens, businesses and public institutions.", image: "https://smartinfraco.com/wp-content/uploads/2026/05/Ghana-IT-Infrastructure-1-560x420.jpg", url: "https://smartinfraco.com/the-role-of-national-fibre-backbones-in-ghanas-digital-economy/" },
  { id: 3, category: "Cybersecurity", date: "May 8, 2026", title: "Securing Ghana\u2019s Digital Services with Local Infrastructure", excerpt: "Why digital resilience relies on secure, locally accountable connectivity, data centres, cloud and response operations.", image: "https://smartinfraco.com/wp-content/uploads/2026/05/MAIN-FLYER-SGDSL_L-2-560x420.png", url: "https://smartinfraco.com/securing-ghanas-digital-services-with-local-infrastructure/" },
  { id: 4, category: "Company update", date: "April 2, 2026", title: "Smart Infraco Newsletter - Q1 2026", excerpt: "A quarterly update on data-centre services, partnerships and secure local hosting.", image: "https://smartinfraco.com/wp-content/uploads/2026/04/IMG_3654-560x420.jpg", url: "https://smartinfraco.com/smart-infraco-newsletter-q1-2026/" },
  { id: 5, category: "Company update", date: "March 13, 2026", title: "Welcoming Our January and February 2026 Clients to the Smart Infraco Family", excerpt: "Smart Infraco welcomes new organisations across the public and private sectors.", image: "https://smartinfraco.com/wp-content/uploads/2026/03/ONBOARDING1-560x420.png", url: "https://smartinfraco.com/welcoming-our-january-and-february-2026-clients-to-the-smart-infraco-family/" },
  { id: 6, category: "Data centres", date: "September 3, 2025", title: "How Data Centres Drive Digital Transformation", excerpt: "The role dependable data-centre infrastructure plays in modern digital services.", image: "https://smartinfraco.com/wp-content/uploads/2025/09/digitall-560x420.png", url: "https://smartinfraco.com/how-data-centres-drive-digital-transformation/" },
  { id: 7, category: "Digital transformation", date: "July 21, 2025", title: "Why \u201cDigital-First\u201d Is No Longer Optional for African Enterprises", excerpt: "Why digital capability has become a core operating requirement for African enterprises.", image: "https://smartinfraco.com/wp-content/uploads/2025/07/digital-first-Africa-560x420.webp", url: "https://smartinfraco.com/why-digital-first-is-no-longer-optional-for-african-enterprises/" },
  { id: 8, category: "Connectivity", date: "April 8, 2025", title: "How Dedicated Internet Access Enhances Business Continuity", excerpt: "How reliable, dedicated connectivity helps organisations protect critical operations.", image: "https://smartinfraco.com/wp-content/uploads/2025/04/Dedicated-Internet-Gh-560x420.webp", url: "https://smartinfraco.com/how-dedicated-internet-access-enhances-business-continuity/" },
  { id: 9, category: "Company story", date: "March 19, 2025", title: "Kwame Nkrumah\u2019s Vision", excerpt: "A look at the journey from independence to Ghana\u2019s technological renaissance.", image: "https://smartinfraco.com/wp-content/uploads/2025/03/nkwam-560x420.webp", url: "https://smartinfraco.com/kwame-nkrumahs-vision-from-independence-to-technological-renaissance/" },
  { id: 10, category: "Events & partnerships", date: "June 18, 2024", title: "SmartInfraco as Silver Sponsor of the 8th Ghana CEO Summit", excerpt: "Smart Infraco joins business leaders at the Ghana CEO Summit as a silver sponsor.", image: "https://smartinfraco.com/wp-content/uploads/2024/06/ceosponsor-560x420.jpg", url: "https://smartinfraco.com/smartinfraco-as-silver-sponsor-of-the-8th-ghana-ceo-summit/" },
  { id: 11, category: "Awards", date: "June 18, 2024", title: "SmartInfraco Sweeps Two Awards at Premier Industry Events", excerpt: "Recognition for Smart Infraco at major industry events.", image: "https://smartinfraco.com/wp-content/uploads/2024/06/gitta-560x420.jpg", url: "https://smartinfraco.com/smartinfraco-sweeps-two-awards-at-premier-industry-events/" },
  { id: 12, category: "Cybersecurity", date: "April 24, 2024", title: "Smart Infraco, NITA, and Trend Micro Forge Strategic Partnership for Enhanced Cybersecurity", excerpt: "A strategic collaboration focused on stronger cybersecurity for Ghanaian organisations.", image: "https://smartinfraco.com/wp-content/uploads/2024/04/1713952975110-560x420.jpeg", url: "https://smartinfraco.com/smart-infraco-nita-and-trend-micro-forge-strategic-partnership-for-cybersecurity/" },
  { id: 13, category: "Connectivity", date: "March 20, 2024", title: "Lessons from Ghana\u2019s Internet Downtime", excerpt: "Key resilience lessons from a major interruption to internet connectivity.", image: "https://smartinfraco.com/wp-content/uploads/2024/03/downtime-blog-560x420.png", url: "https://smartinfraco.com/lessons-from-internet-downtime/" },
  { id: 14, category: "Data protection", date: "February 8, 2024", title: "Why Businesses Must Backup Their Data", excerpt: "Why regular backups are an essential part of business continuity planning.", image: "https://smartinfraco.com/wp-content/uploads/2024/02/Backup-early--560x420.png", url: "https://smartinfraco.com/why-businesses-must-backup-their-data/" },
  { id: 15, category: "Company news", date: "December 24, 2023", title: "A Night of Celebration and Partnership at Movenpick Ambassador Hotel", excerpt: "A look back at an evening celebrating partnership and shared progress.", image: "https://smartinfraco.com/wp-content/uploads/2023/12/DSC_3293-560x420.jpg", url: "https://smartinfraco.com/a-night-of-celebration-and-partnership-at-movenpick-ambassador-hotel/" },
  { id: 16, category: "Awards", date: "November 28, 2023", title: "SmartInfraco Receives Two (2) Awards", excerpt: "Smart Infraco receives two industry awards for its contribution to Ghana\u2019s digital ecosystem.", image: "https://smartinfraco.com/wp-content/uploads/2023/11/Smart-Infraco-NCA-Awards-560x420.png", url: "https://smartinfraco.com/smartinfraco-receives-two-2-awards/" },
  { id: 17, category: "Cloud services", date: "November 8, 2023", title: "The Benefits of Cloud Migration", excerpt: "How cloud migration can support flexibility, scale and operational resilience.", image: "https://smartinfraco.com/wp-content/uploads/2023/11/Core-Values-1-560x420.png", url: "https://smartinfraco.com/the-benefits-of-cloud-migration/" },
  { id: 18, category: "Events", date: "August 14, 2023", title: "Launch of National ICT Week and World Technology Forum", excerpt: "Smart Infraco takes part in the launch of two major technology-industry events.", image: "https://smartinfraco.com/wp-content/uploads/2023/08/Partners-560x420.jpg", url: "https://smartinfraco.com/launch-of-national-ict-week-and-world-technology-forum/" },
  { id: 19, category: "Cloud & data centres", date: "July 20, 2023", title: "Data Centers and Cloud Solutions: How to keep your data safe and secure in a digital world", excerpt: "A guide to protecting data with the right data-centre and cloud foundations.", image: "https://smartinfraco.com/wp-content/uploads/2023/07/IMG_1200-560x420.jpg", url: "https://smartinfraco.com/data-centers-and-cloud-solutions-why-they-matter/" },
  { id: 20, category: "Infrastructure", date: "November 11, 2022", title: "Smart Infraco intensifies infrastructure investment for robust digital ecosystem", excerpt: "Smart Infraco's investment in the infrastructure needed for a resilient digital ecosystem.", image: "https://smartinfraco.com/wp-content/uploads/2022/11/CTOSmartInfraco-560x420.png", url: "https://smartinfraco.com/smart-infraco-intensifies-infrastructure-investment-for-robust-digital-ecosystem/" },
];

export default function ArticlesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Articles"
        title="Smart Infraco insights and updates."
        description="Explore the complete archive of articles, news and milestones from Smart Infraco."
      />

      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <RevealGroup className="grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            {articles.map((article, index) => (
              <RevealItem key={article.id} className="bg-background">
                <article className="group h-full overflow-hidden bg-background transition-colors hover:bg-card">
                  <a href={article.url} target="_blank" rel="noreferrer" className="block h-full">
                    <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                      <img src={article.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/58 via-secondary/10 to-transparent opacity-80 transition-opacity group-hover:opacity-45" />
                      <span className="absolute right-5 top-5 font-display text-[10px] uppercase tracking-[0.22em] text-white/80">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center justify-between">
                        <Eyebrow tone="primary">{article.category}</Eyebrow>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-secondary group-hover:opacity-100" />
                      </div>
                      <h2 className="story-link mt-7 inline font-display text-2xl leading-tight text-foreground lg:text-3xl">{article.title}</h2>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                      <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {article.date}</span>
                        <span className="story-link inline-flex items-center gap-1.5 text-secondary">Read original article <ArrowUpRight className="h-3.5 w-3.5" /></span>
                      </div>
                    </div>
                  </a>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </Layout>
  );
}
