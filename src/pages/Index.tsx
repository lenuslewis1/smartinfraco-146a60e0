import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  Cloud,
  FileText,
  Globe,
  Landmark,
  Network,
  Quote,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Star,
  Wifi,
  Zap,
  TrendingUp,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import Eyebrow from "@/components/ui-system/Eyebrow";
import AnimatedCounter from "@/components/ui-system/AnimatedCounter";
import MagneticButton from "@/components/ui-system/MagneticButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui-system/RevealOnScroll";
import heroSmartInfraco from "@/assets/hero-smart-infraco.png";
import heroInternet from "@/assets/hero-internet.png";
import heroCloud from "@/assets/hero-cloud.png";
import svcCloud from "@/assets/service-cloud.jpg";
import svcStorage from "@/assets/service-storage.jpg";
import svcManaged from "@/assets/service-managed.jpg";
import serviceConnectivityHome from "@/assets/service-connectivity-home.jpg";
import serviceDataCenterCustom from "@/assets/service-data-center-custom.jpg";
import serviceCloudCustom from "@/assets/service-cloud-custom.jpg";
import serviceCyberCustom from "@/assets/service-cyber-custom.jpg";
import featureSingleWindow from "@/assets/feature-single-window.png";
import featureReliabilitySecurity from "@/assets/feature-reliability-security.jpg";
import featureNationalReach from "@/assets/feature-national-reach-network.png";
import featureEnterpriseSupport from "@/assets/feature-enterprise-support.jpg";
import industriesBackground from "@/assets/industries-background.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import whyDefault from "@/assets/why-default.jpg";
import appMockup from "@/assets/app-mockup.png";
import appStoreBadge from "@/assets/app-store-badge.png";
import googlePlayBadge from "@/assets/google-play-badge.png";
import ghanaRepublic from "@/assets/customers/ghana-republic.png";
import gfza from "@/assets/customers/gfza.jpg";
import devtraco from "@/assets/customers/devtraco.png";
import broadspectrum from "@/assets/customers/broadspectrum-digital-payments.jpeg";
import ghanaPolice from "@/assets/customers/ghana-police.jpg";
import ghanaArmedForces from "@/assets/customers/ghana-armed-forces.png";
import ministryForeignAffairs from "@/assets/customers/ministry-foreign-affairs.png";
import ghanaImmigrationService from "@/assets/customers/ghana-immigration-service.jpg";
import judicialServiceGhana from "@/assets/customers/judicial-service-ghana.jpg";
import ghanaCivilAviationAuthority from "@/assets/customers/ghana-civil-aviation-authority.jpg";
import vodafoneBusiness from "@/assets/customers/vodafone-business.png";
import dolphin from "@/assets/customers/dolphin.png";
import via from "@/assets/customers/via.webp";
import nationalPetroleumAuthority from "@/assets/customers/national-petroleum-authority.webp";
import gepa from "@/assets/customers/gepa.png";
import electoralCommissionGhana from "@/assets/customers/electoral-commission-ghana.png";
import gifec from "@/assets/customers/gifec.jpeg";
import publicProcurementAuthority from "@/assets/customers/public-procurement-authority.jpeg";
import ministryLandsNaturalResources from "@/assets/customers/ministry-lands-natural-resources.png";

const ease = [0.22, 1, 0.36, 1] as const;
const heroSlides = [
  { headline: "Indigenous cloud services", href: "/cloud-services", image: heroCloud, position: "object-[70%_center]" },
  { headline: "Tier 3 data centre services", href: "/data-centres", image: heroSmartInfraco, position: "object-[66%_center] md:object-center" },
  { headline: "Dedicated internet services", href: "/connectivity", image: heroInternet, position: "object-[68%_center]" },
];
const heroHeadlines = heroSlides.map((slide) => slide.headline);
const longestHeroHeadline = heroHeadlines.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);

const customers = [
  {
    name: "Ministry of Lands and Natural Resources",
    src: ministryLandsNaturalResources,
  },
  {
    name: "MTN Ghana",
    src: "https://mtn.com.gh/wp-content/themes/mtn-vivid-wp/public/img/mtn-logo-footer.svg",
  },
  {
    name: "Orange",
    src: "https://logos-world.net/wp-content/uploads/2021/09/Orange-Emblem.png",
  },
  {
    name: "Telecel Ghana",
    src: "https://www.telecel.com.gh/img/Telecel-Icon-Red.png",
  },
  {
    name: "Afriwave Telecom",
    src: "https://www.afriwavetelecom.com/assets/afriwave123.png",
  },
  {
    name: "NGIC",
    src: "https://www.ngicgh.com/icon.svg",
  },
  { name: "Republic of Ghana", src: ghanaRepublic },
  { name: "Ghana Free Zones Authority", src: gfza },
  { name: "Devtraco Group", src: devtraco },
  { name: "Broadspectrum Digital Payments", src: broadspectrum },
  { name: "Ghana Police Service", src: ghanaPolice },
  { name: "Ghana Armed Forces", src: ghanaArmedForces },
  { name: "Ministry of Foreign Affairs", src: ministryForeignAffairs },
  { name: "Ghana Immigration Service", src: ghanaImmigrationService },
  { name: "Judicial Service of Ghana", src: judicialServiceGhana },
  { name: "Ghana Civil Aviation Authority", src: ghanaCivilAviationAuthority },
  { name: "Vodafone Business", src: vodafoneBusiness },
  { name: "Dolphin", src: dolphin },
  { name: "VIA", src: via },
  { name: "National Petroleum Authority", src: nationalPetroleumAuthority },
  { name: "Ghana Export Promotion Authority", src: gepa },
  { name: "Electoral Commission Ghana", src: electoralCommissionGhana },
  { name: "GIFEC", src: gifec },
  { name: "Public Procurement Authority", src: publicProcurementAuthority },
];

function TypewriterHeroText({ onPhraseChange }: { onPhraseChange: (index: number) => void }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);
  const activePhrase = heroHeadlines[phraseIndex];

  useEffect(() => {
    onPhraseChange(phraseIndex);
  }, [onPhraseChange, phraseIndex]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleChars(heroHeadlines[0].length);
      return;
    }

    const isFullyTyped = !isDeleting && visibleChars === activePhrase.length;
    const isFullyDeleted = isDeleting && visibleChars === 0;
    const delay = isFullyTyped ? 3000 : isDeleting ? 55 : 85;

    const timeout = window.setTimeout(() => {
      if (isFullyTyped) {
        setIsDeleting(true);
        return;
      }

      if (isFullyDeleted) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % heroHeadlines.length);
        return;
      }

      setVisibleChars((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [activePhrase.length, isDeleting, prefersReducedMotion, visibleChars]);

  const visiblePhrase = activePhrase.slice(0, visibleChars);
  const highlightStart = Math.max(0, visiblePhrase.lastIndexOf(" in Ghana"));
  const prefixVisible = highlightStart > 0 ? visiblePhrase.slice(0, highlightStart) : visiblePhrase;
  const highlightVisible = highlightStart > 0 ? visiblePhrase.slice(highlightStart) : "";

  return (
    <h1
      className="relative grid max-w-[11ch] font-display text-[2rem] font-light leading-[1.03] text-white sm:max-w-[12ch] sm:text-6xl md:text-7xl lg:text-8xl"
      aria-label={activePhrase}
    >
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        <span className="font-semibold">
          {longestHeroHeadline.replace(" in Ghana", "")}<span className="text-primary"> in Ghana</span>
        </span>
      </span>
      <span className="col-start-1 row-start-1 font-semibold" aria-hidden="true">
        {prefixVisible}
        <span className="text-primary">{highlightVisible}</span>
        <span className="typewriter-caret ml-1 inline-block h-[0.86em] w-[0.08em] translate-y-[0.08em] bg-primary" />
      </span>
    </h1>
  );
}

function Hero() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  return (
    <section className="bg-white px-3 py-3 text-white sm:px-5 sm:py-5">
      <div className="relative min-h-[calc(100svh-1.5rem)] overflow-hidden rounded-[2.4rem] bg-secondary sm:min-h-[calc(100svh-2.5rem)] lg:rounded-[3.2rem]">
        {heroSlides.map((slide, index) => (
          <motion.img
            key={slide.headline}
            src={slide.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${slide.position} ${
              index === activeHeroIndex ? "opacity-100" : "opacity-0"
            }`}
            initial={{ scale: 1.02, x: 0 }}
            animate={{
              opacity: index === activeHeroIndex ? 1 : 0,
              scale: index === activeHeroIndex ? 1.08 : 1.02,
              x: index === activeHeroIndex ? -12 : 0,
            }}
            transition={{
              opacity: { duration: 0.7, ease },
              scale: { duration: 4.8, ease },
              x: { duration: 4.8, ease },
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(203_92%_42%_/_0.86)_0%,hsl(203_88%_48%_/_0.58)_28%,hsl(203_88%_48%_/_0.18)_52%,transparent_72%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/18 via-transparent to-secondary/4" />
        <div className="absolute left-0 top-0 h-full w-[58%] bg-gradient-to-r from-sky-200/18 via-sky-200/8 to-transparent" />

        <div className="relative flex min-h-[calc(100svh-1.5rem)] flex-col justify-end px-6 pb-10 pt-40 sm:min-h-[calc(100svh-2.5rem)] sm:px-10 lg:justify-center lg:px-24 lg:pb-20 lg:pt-36">
          <div className="mx-auto grid w-full max-w-[1500px] items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="max-w-[980px] text-left"
            >
              <TypewriterHeroText onPhraseChange={setActiveHeroIndex} />
              <p className="mt-4 max-w-3xl text-pretty text-sm font-medium leading-6 text-white/90 sm:text-lg sm:leading-8 lg:mt-7 lg:text-2xl lg:leading-9">
                Smart Infraco powers Ghana's digital backbone - secure, scalable national infrastructure for public and private institutions.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-9 lg:gap-4">
                <MagneticButton
                  to={heroSlides[activeHeroIndex].href}
                  variant="dark"
                  className="min-h-12 pl-6 text-xs font-bold tracking-[0.12em] lg:min-h-16 lg:pl-9 lg:text-base"
                >
                  View More
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
function CustomerLogoStrip() {
  return (
    <section className="overflow-hidden bg-white py-10 lg:py-12">
      <div className="mx-auto mb-8 w-full max-w-[1500px] px-6 text-center sm:px-10">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-secondary sm:text-4xl">
          Our Customers
        </h2>
      </div>
      <div className="mask-fade-x">
        <div
          data-testid="customer-marquee"
          className="flex w-max animate-marquee-slow items-center gap-14 hover:[animation-play-state:paused] lg:gap-20"
        >
          {[...customers, ...customers, ...customers].map((customer, index) => (
            <img
              key={`${customer.name}-${index}`}
              src={customer.src}
              alt={`${customer.name} logo`}
              loading="lazy"
              className="h-11 w-auto max-w-[170px] shrink-0 object-contain transition duration-300 hover:scale-105 lg:h-14 lg:max-w-[190px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutBento() {
  return (
    <section className="bg-[#f4f7fa] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1260px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-[860px] text-center">
          <div className="flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
            <span className="h-px w-7 bg-slate-500/70" />
            About Us
          </div>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.35vw,3.35rem)] font-medium leading-[1.05] tracking-[-0.02em] text-secondary">
            A national technology partner<br className="hidden lg:block" />
            accelerating digital transformation through   
{" "}
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-secondary align-middle md:h-9 md:w-9">
              <Zap className="h-4 w-4" />
            </span>{" "}
            <span className="font-bold">smarter</span><br className="hidden lg:block" />
            and{" "}
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-secondary align-middle md:h-9 md:w-9">
              <TrendingUp className="h-4 w-4" />
            </span>{" "}
            <span className="font-bold">resilient</span> digital infrastructure.
          </h2>
        </Reveal>

        <RevealGroup className="mt-11 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <RevealItem>
            <div className="group relative flex min-h-[225px] flex-col justify-center rounded-[24px] bg-sky-600 p-7 text-white shadow-[0_24px_70px_hsl(204_88%_30%_/_0.16)] transition duration-500 hover:-translate-y-2 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_28px_80px_hsl(95_82%_35%_/_0.24)]">
              <div className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-secondary transition duration-500 group-hover:rotate-45 group-hover:bg-secondary group-hover:text-primary">
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/90 transition duration-500 group-hover:text-primary-foreground/70">Customers</p>
              <div className="mt-5 font-display text-[clamp(2.65rem,4vw,3.55rem)] font-semibold leading-none tracking-[-0.04em] tabular-nums">
                <AnimatedCounter to={400} duration={3.2} suffix="+" />
              </div>
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/78 transition duration-500 group-hover:text-primary-foreground/75">
                Customers served across Ghana in both the public and private sectors.
              </p>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="group flex min-h-[225px] flex-col justify-center rounded-[24px] border border-slate-300 bg-white p-7 text-secondary shadow-[0_24px_70px_hsl(215_45%_22%_/_0.06)] transition duration-500 hover:-translate-y-2 hover:border-primary hover:bg-secondary hover:text-white hover:shadow-[0_28px_80px_hsl(215_45%_22%_/_0.18)]">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 transition duration-500 group-hover:text-primary">Network availability</p>
              <div className="mt-5 font-display text-[clamp(2.65rem,4vw,3.55rem)] font-semibold leading-none tracking-[-0.04em] tabular-nums">
                <AnimatedCounter to={99} duration={3.2} suffix="%" />
              </div>
              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-600 transition duration-500 group-hover:text-white/72">
                "Smart Infraco completely reshaped how we operate. Resilient, secure and engineered for our scale."
              </p>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="group relative flex min-h-[225px] flex-col justify-center rounded-[24px] bg-primary p-7 text-secondary transition duration-500 hover:-translate-y-2 hover:brightness-105 hover:shadow-[0_28px_80px_hsl(95_82%_35%_/_0.24)]">
              <Network className="absolute right-6 top-6 h-5 w-5 transition duration-500 group-hover:scale-125 group-hover:rotate-6" />
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em]">Fibre backbone</p>
              <div className="mt-5 font-display text-[clamp(2.65rem,4vw,3.55rem)] font-semibold leading-none tracking-[-0.04em] tabular-nums">
                <AnimatedCounter to={1000} duration={3.2} suffix="+ Km" />
              </div>
              <p className="mt-5 max-w-xs text-sm leading-6 text-secondary/78 transition duration-500 group-hover:text-secondary/90">
                National fibre backbone reaching every region - engineered for sub-millisecond intra-Ghana latency.
              </p>
            </div>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <RevealItem>
            <div className="group flex min-h-[205px] flex-col justify-center rounded-[24px] bg-secondary p-7 text-white transition duration-500 hover:-translate-y-2 hover:bg-[hsl(206_70%_50%)] hover:shadow-[0_28px_80px_hsl(206_70%_28%_/_0.22)] lg:p-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/55 transition duration-500 group-hover:text-primary">Backbone capacity</p>
              <h3 className="mt-5 font-display text-[clamp(2.65rem,4vw,3.55rem)] font-semibold leading-none tracking-[-0.04em]">
                <AnimatedCounter to={100} duration={3.2} suffix=" Gbps Backbone" />
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/68 transition duration-500 group-hover:text-white/82">
                High-capacity national backbone engineered for resilient, low-latency connectivity.
              </p>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="group flex min-h-[205px] flex-col justify-center rounded-[24px] bg-secondary p-7 text-white transition duration-500 hover:-translate-y-2 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_28px_80px_hsl(95_82%_35%_/_0.22)] lg:p-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/55 transition duration-500 group-hover:text-primary-foreground/70">Data centres</p>
              <h3 className="mt-5 font-display text-[clamp(2.65rem,4vw,3.55rem)] font-semibold leading-none tracking-[-0.04em]">
                2 Data Centres
              </h3>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/68 transition duration-500 group-hover:text-primary-foreground/75">
                Tier III (Accra) Tier II and (Kumasi) - Ghana's Indigenous Colocation Facility.
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

function ServicesThree() {
  const services = [
    { title: "Connectivity", desc: "Metro fibre and dedicated internet backed by a 100 Gbps backbone", img: serviceConnectivityHome, href: "/connectivity", icon: Network },
    { title: "Data Centres", desc: "Carrier-neutral colocation and local hosting designed for uptime, security and control.", img: serviceDataCenterCustom, href: "/data-centres", icon: Server },
    { title: "Cloud", desc: "Sovereign cloud, managed storage and backup services delivered from local infrastructure.", img: serviceCloudCustom, href: "/cloud-services", icon: Cloud },
    { title: "Cybersecurity", desc: "Threat monitoring, network protection and response support for critical enterprise systems.", img: serviceCyberCustom, href: "/cybersecurity", icon: Shield },
  ];

  return (
    <section className="bg-slate-100 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="muted" className="justify-center">Solutions</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.2vw,3.25rem)] font-medium leading-[1.08] text-foreground">
            Robust infrastructure delivered through one operating window. 
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <RevealItem key={service.title}>
              <Link to={service.href} className="group relative block min-h-[500px] overflow-hidden rounded-[24px] bg-secondary text-white transition-transform duration-500 hover:-translate-y-1">
                <img src={service.img} alt={service.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(220_50%_8%_/_0.32)_0%,hsl(220_50%_8%_/_0.24)_38%,hsl(220_50%_8%_/_0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-secondary via-secondary/82 to-transparent" />
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <service.icon className="h-5 w-5" />
                </div>
                <div className="absolute right-5 top-5 font-mono text-xs text-white/80">0{index + 1}</div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl font-medium text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/76">{service.desc}</p>
                  <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-white">
                    Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function ExpertiseGrid() {
  const features = [
    { icon: BarChart3, title: "Single window interface", desc: "One provider, one contract and one operational path for critical infrastructure.", image: featureSingleWindow },
    { icon: FileText, title: "Reliability and security", desc: "Redundant network design, secure hosting and support for always-on operations.", image: featureReliabilitySecurity },
    { icon: Smartphone, title: "National network reach", desc: "Owned fibre, PoPs and data centre capacity extending service coverage across Ghana.", image: featureNationalReach },
    { icon: ShieldCheck, title: "Enterprise-grade support", desc: "Strict SLAs, 24/7 monitoring and account ownership for high-stakes environments.", image: featureEnterpriseSupport },
  ];
  const [activeFeatureImage, setActiveFeatureImage] = useState(whyDefault);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="muted" className="justify-center">Why Smart Infraco</Eyebrow>
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.35rem)] font-medium leading-[1.08] text-foreground">
            Strength, resource, capacity - the partner of choice for Enterprises in Ghana.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
            One trusted infrastructure partner - built for reliability, scale and enterprise performance across the nation.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[310px]">
          <RevealItem className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.28, ease }}
              onMouseEnter={() => setActiveFeatureImage(features[0].image)}
              onFocus={() => setActiveFeatureImage(features[0].image)}
              onMouseLeave={() => setActiveFeatureImage(whyDefault)}
              tabIndex={0}
              className="group relative flex h-full min-h-[310px] overflow-hidden rounded-[24px] bg-[hsl(206_70%_50%)] p-8 text-white shadow-card transition-colors duration-300 hover:bg-primary"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-white/30" />
              <div className="flex h-full flex-col justify-between">
                <h3 className="font-display text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-primary-foreground">
                  {features[0].title}
                </h3>
                <p className="mt-10 text-base leading-7 text-white/84 transition-colors duration-300 group-hover:text-primary-foreground/80">
                  {features[0].desc}
                </p>
              </div>
            </motion.div>
          </RevealItem>

          <RevealItem className="md:row-span-2 lg:col-span-2 lg:row-span-2">
            <motion.div
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.28, ease }}
              className="relative h-full min-h-[644px] overflow-hidden rounded-[24px] bg-slate-100 shadow-card"
            >
              <motion.img
                key={activeFeatureImage}
                src={activeFeatureImage}
                alt="Smart Infraco service specialist"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease }}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/70 to-transparent" />
            </motion.div>
          </RevealItem>

          <RevealItem className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.28, ease }}
              onMouseEnter={() => setActiveFeatureImage(features[2].image)}
              onFocus={() => setActiveFeatureImage(features[2].image)}
              onMouseLeave={() => setActiveFeatureImage(whyDefault)}
              tabIndex={0}
              className="group relative flex h-full min-h-[310px] overflow-hidden rounded-[24px] bg-[hsl(206_70%_50%)] p-8 text-white shadow-card transition-colors duration-300 hover:bg-primary"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-white/30" />
              <div className="flex h-full flex-col justify-between">
                <h3 className="font-display text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-primary-foreground">
                  {features[2].title}
                </h3>
                <p className="mt-10 text-base leading-7 text-white/84 transition-colors duration-300 group-hover:text-primary-foreground/80">
                  {features[2].desc}
                </p>
              </div>
            </motion.div>
          </RevealItem>

          <RevealItem className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.28, ease }}
              onMouseEnter={() => setActiveFeatureImage(features[1].image)}
              onFocus={() => setActiveFeatureImage(features[1].image)}
              onMouseLeave={() => setActiveFeatureImage(whyDefault)}
              tabIndex={0}
              className="group relative flex h-full min-h-[310px] overflow-hidden rounded-[24px] bg-[hsl(206_70%_50%)] p-8 text-white shadow-card transition-colors duration-300 hover:bg-primary"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-white/30" />
              <div className="flex h-full flex-col justify-between">
                <h3 className="font-display text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-primary-foreground">
                  {features[1].title}
                </h3>
                <p className="mt-10 text-base leading-7 text-white/84 transition-colors duration-300 group-hover:text-primary-foreground/80">
                  {features[1].desc}
                </p>
              </div>
            </motion.div>
          </RevealItem>

          <RevealItem className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.28, ease }}
              onMouseEnter={() => setActiveFeatureImage(features[3].image)}
              onFocus={() => setActiveFeatureImage(features[3].image)}
              onMouseLeave={() => setActiveFeatureImage(whyDefault)}
              tabIndex={0}
              className="group relative flex h-full min-h-[310px] overflow-hidden rounded-[24px] bg-[hsl(206_70%_50%)] p-8 text-white shadow-card transition-colors duration-300 hover:bg-primary"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-white/30" />
              <div className="flex h-full flex-col justify-between">
                <h3 className="font-display text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-primary-foreground">
                  {features[3].title}
                </h3>
                <p className="mt-10 text-base leading-7 text-white/84 transition-colors duration-300 group-hover:text-primary-foreground/80">
                  {features[3].desc}
                </p>
              </div>
            </motion.div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

function MobileAppSection() {
  const appBenefits = ["View and manage subscriptions", "Send service enquiries", "Stay updated on your account"];

  return (
    <section className="relative overflow-hidden bg-secondary py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_78%,hsl(206_70%_50%_/_0.42),transparent_34%),radial-gradient(circle_at_86%_20%,hsl(95_82%_55%_/_0.2),transparent_27%)]" />
      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <Reveal className="order-2 max-w-xl lg:order-1">
          <Eyebrow tone="accent">MYSMARTINFRACO APP</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.35rem,4.8vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.035em] text-white">
            Your services,<br />
            <span className="text-primary">in your pocket.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/72 lg:text-lg lg:leading-8">
            Access your Smart Infraco services anytime, anywhere, and manage your account with ease.
          </p>

          <ul className="mt-8 space-y-3">
            {appBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-sm text-white/86">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.mysmartinfraco&hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Download MySmartInfraco from Google Play"
              className="block w-[190px] transition duration-300 hover:-translate-y-1 hover:brightness-110 sm:w-[220px]"
            >
              <img src={googlePlayBadge} alt="Get it on Google Play" className="h-auto w-full" />
            </a>
            <a
              href="https://apps.apple.com/gh/app/mysmartinfraco/id6747730615?platform=iphone"
              target="_blank"
              rel="noreferrer"
              aria-label="Download MySmartInfraco from the App Store"
              className="block w-[190px] transition duration-300 hover:-translate-y-1 hover:brightness-110 sm:w-[220px]"
            >
              <img src={appStoreBadge} alt="Available on the App Store" className="h-auto w-full" />
            </a>
          </div>
        </Reveal>

        <Reveal className="order-1 flex min-h-[440px] items-center justify-center sm:min-h-[520px] lg:order-2 lg:min-h-[590px]">
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [-1.5, 1, -1.5] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            className="relative h-[410px] w-[310px] sm:h-[500px] sm:w-[380px] lg:h-[585px] lg:w-[445px]"
          >
            <div className="absolute inset-[11%_3%_5%_7%] bg-primary/24 blur-3xl" />
            <img
              src={appMockup}
              alt="MySmartInfraco mobile app showing account and network information"
              className="relative h-full w-full object-contain mix-blend-multiply drop-shadow-[0_34px_34px_rgba(0,0,0,0.45)]"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function IndustriesWeServe() {
  const industries = [
    { name: "Government", icon: Landmark, blurb: "Keep citizen-facing systems available and responsive, even at national scale." },
    { name: "Telecoms & ISPs", icon: Wifi, blurb: "Expand capacity and reach new customers through dependable national interconnection.", highlighted: true },
    { name: "Financial Services", icon: Building2, blurb: "Protect transaction continuity and customer confidence during peak demand." },
    { name: "Energy & Utilities", icon: Zap, blurb: "Maintain operational visibility and control across distributed critical assets." },
    { name: "Enterprise", icon: Server, blurb: "Give teams a dependable digital foundation for growth and uninterrupted operations." },
    { name: "Education & Health", icon: Globe, blurb: "Keep learning, care and essential records available when they matter most." },
  ];

  return (
    <section className="relative overflow-hidden py-24 text-white lg:py-32">
      <img
        src={industriesBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(206_70%_31%_/_0.92),hsl(206_70%_50%_/_0.78))]" />
      <div className="absolute inset-0 bg-secondary/35" />

      <div className="container-wide relative">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="accent">Industries we serve</Eyebrow>
          <h2 className="mt-6 font-display text-display-xl font-medium text-white">
            Critical sectors need infrastructure that stays accountable under pressure.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Continuity", "Scale", "Support"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 border border-white/24 bg-white/12 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white backdrop-blur-md"
              >
                <Check className="h-4 w-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>

      </div>

      <Reveal className="relative mt-16 w-full overflow-hidden">
        <div className="sm:hidden">
          <div
            aria-label="Industries we serve carousel"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-5 px-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {industries.map((industry, index) => (
              <article
                key={industry.name}
                className="flex min-h-[260px] w-[calc(100vw-2.5rem)] shrink-0 snap-center snap-always flex-col bg-primary/95 p-7 text-primary-foreground shadow-2xl shadow-secondary/20 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-6">
                  <industry.icon className="h-6 w-6" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/55">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-medium leading-tight">{industry.name}</h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/75">{industry.blurb}</p>
              </article>
            ))}
          </div>
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Swipe to explore</p>
        </div>

        <div className="hidden overflow-hidden sm:block">
          <div className="flex w-max animate-industries-scroll gap-5 hover:[animation-play-state:paused]">
            {[...industries, ...industries].map((industry, index) => (
              <article
                key={`${industry.name}-${index}`}
                aria-hidden={index >= industries.length}
                className="flex min-h-[260px] w-[290px] shrink-0 flex-col bg-primary/95 p-7 text-primary-foreground shadow-2xl shadow-secondary/20 backdrop-blur-sm sm:w-[340px] lg:min-h-[280px] lg:w-[390px]"
                >
                  <industry.icon className="h-6 w-6" />
                  <h3 className="mt-8 font-display text-2xl font-medium leading-tight">{industry.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-primary-foreground/75">{industry.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { 
      name: "Public Sector Client", 
      role: "Director of IT", 
      quote: "Smart Infraco gave us a clearer path to <strong>resilient, local infrastructure</strong> and <strong>dependable support</strong> that transformed our operations." 
    },
    { 
      name: "Financial Services Client", 
      role: "Head of Technology", 
      quote: "Their network and data centre services <strong>improved uptime planning</strong> across our critical operations and gave us <strong>confidence in our infrastructure</strong>." 
    },
    { 
      name: "Telecom Partner", 
      role: "Chief Technology Officer", 
      quote: "The single-window model <strong>reduced operational complexity</strong> while giving us <strong>national reach</strong> and <strong>reliable connectivity</strong>." 
    },
    { 
      name: "Enterprise Client", 
      role: "Operations Lead", 
      quote: "We needed <strong>accountability, security and scale</strong>. Smart Infraco delivered all three with <strong>consistent, enterprise-grade support</strong>." 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % quotes.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [quotes.length]);

  const activeQuote = quotes[activeIndex];

  return (
    <section className="relative overflow-hidden bg-secondary py-24 border-t border-b border-white/5 lg:py-32">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(95_82%_55%_/_0.03),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,hsl(206_70%_50%_/_0.02),transparent_60%)] pointer-events-none" />

      <div className="container-wide relative z-10 px-5 sm:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-5xl">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.2rem)] leading-[1.1] tracking-tight text-center">
              <span className="font-light text-white">Customer </span>
              <span className="font-medium text-primary">Experience</span>
            </h2>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-8 lg:gap-16">
              {/* Left Quote */}
              <div className="hidden md:block shrink-0">
                <svg
                  className="h-[120px] w-[90px] lg:h-[200px] lg:w-[150px]"
                  viewBox="0 0 210 280"
                  fill="url(#quote-grad-left)"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="quote-grad-left" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path d="M0 172c0-60 42-116 96-140l12 28c-40 22-64 58-68 96h52v124H0V172zm114 0c0-60 42-116 96-140l12 28c-40 22-64 58-68 96h52v124H114V172z" />
                </svg>
              </div>

              {/* Center Content */}
              <div className="min-h-[220px] sm:min-h-[180px] flex flex-col justify-center text-center px-4">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease }}
                  className="flex flex-col items-center"
                >
                  {/* Small Quote Icon for Mobile Only */}
                  <div className="md:hidden mb-6 text-primary/80">
                    <svg
                      className="h-10 w-10"
                      viewBox="0 0 210 280"
                      fill="hsl(var(--primary))"
                      aria-hidden="true"
                    >
                      <path d="M0 172c0-60 42-116 96-140l12 28c-40 22-64 58-68 96h52v124H0V172zm114 0c0-60 42-116 96-140l12 28c-40 22-64 58-68 96h52v124H114V172z" />
                    </svg>
                  </div>

                  <p 
                    className="text-lg leading-relaxed text-white/70 sm:text-xl md:text-2xl font-light [&>strong]:text-white [&>strong]:font-semibold"
                    dangerouslySetInnerHTML={{ __html: activeQuote.quote }}
                  />
                  <p className="mt-8 text-base font-semibold text-primary tracking-wide">
                    {activeQuote.name}
                  </p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                    {activeQuote.role}
                  </p>
                </motion.div>
              </div>

              {/* Right Quote */}
              <div className="hidden md:block shrink-0">
                <svg
                  className="h-[120px] w-[90px] lg:h-[200px] lg:w-[150px]"
                  viewBox="0 0 210 280"
                  fill="url(#quote-grad-right)"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="quote-grad-right" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path d="M210 108c0 60-42 116-96 140l-12-28c40-22 64-58 68-96H118V0h92v108zm-114 0c0 60-42 116-96 140L-12 220c40-22 64-58 68-96H4V0h92v108z" />
                </svg>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-2.5">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-1.5 transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BlogStrip() {
  const posts = [
    { 
      title: "Turning infrastructure into strategy", 
      category: "Managed Services, Strategy",
      img: svcManaged,
      date: { month: "Jun", day: "10", year: "2026" }
    },
    { 
      title: "5 ways fibre improves business continuity", 
      category: "Connectivity, Fibre",
      img: svcCloud,
      date: { month: "Jun", day: "08", year: "2026" }
    },
    { 
      title: "Cloud and data centres: finding the right balance", 
      category: "Cloud, Colo",
      img: svcStorage,
      date: { month: "May", day: "28", year: "2026" }
    },
    {
      title: "Building stronger defences with managed security",
      category: "Cybersecurity, SOC",
      img: serviceCyberCustom,
      date: { month: "May", day: "21", year: "2026" }
    },
    {
      title: "What resilient data centre operations require",
      category: "Data Centres, Operations",
      img: serviceDataCenterCustom,
      date: { month: "May", day: "16", year: "2026" }
    },
  ];

  return (
    <section className="bg-slate-100 py-24 lg:py-32">
      <div className="container-wide">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow tone="muted">Insights</Eyebrow>
            <h2 className="mt-6 font-display text-display-lg font-medium text-foreground">Insights for smarter digital infrastructure.</h2>
          </div>
          <Link to="/articles" className="inline-flex h-12 items-center gap-2 rounded-full bg-secondary py-2 pl-6 pr-3 font-mono text-xs uppercase tracking-[0.16em] text-secondary-foreground">
            View all
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </Reveal>

        <RevealGroup className="relative left-1/2 flex w-screen -translate-x-1/2 gap-6 overflow-x-auto px-6 pb-4 xl:justify-center xl:overflow-visible">
          {posts.map((post) => (
            <RevealItem key={post.title} className="flex w-[350px] shrink-0 lg:w-[360px]">
              <Link 
                to="/articles" 
                className="group flex flex-col w-full bg-white rounded-[24px] overflow-hidden border border-slate-200/40 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative aspect-[4/2.6] w-full overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Floating Date Badge */}
                  <div className="absolute right-5 top-5 z-10 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold leading-none">{post.date.month}</span>
                    <span className="mt-1 font-display text-base font-bold text-secondary leading-none">{post.date.day}</span>
                    <span className="mt-0.5 font-mono text-[7px] text-slate-400/80 leading-none">{post.date.year}</span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-7 lg:p-8">
                  {/* Category */}
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3.5">
                    {post.category}
                  </span>
                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold leading-snug text-secondary tracking-tight mb-7 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  {/* Button */}
                  <div className="mt-auto">
                    <span className="inline-flex h-9 items-center justify-center rounded-full border border-slate-200 px-5 font-mono text-[10px] uppercase tracking-wider text-slate-600 transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <CustomerLogoStrip />
      <AboutBento />
      <ServicesThree />
      <ExpertiseGrid />
      <MobileAppSection />
      <IndustriesWeServe />
      <Testimonials />
      <BlogStrip />
    </Layout>
  );
}






