import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/SmartInfracoGh",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCy-x1yXf_GdiWoo7tqRJHyw",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/smartinfracogh/",
    path: "M12 0C8.74 0 8.333.014 7.053.072 5.775.13 4.902.333 4.139.63c-.789.307-1.459.717-2.126 1.384C1.347 2.68.935 3.351.63 4.14c-.297.763-.5 1.636-.558 2.914C.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.058 1.278.261 2.151.558 2.914.307.789.717 1.459 1.384 2.126.666.666 1.337 1.078 2.126 1.383.763.297 1.636.5 2.914.558C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.151-.261 2.914-.558.789-.307 1.459-.717 2.126-1.384.666-.666 1.078-1.337 1.383-2.126.297-.763.5-1.636.558-2.914C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.058-1.278-.261-2.151-.558-2.914-.307-.789-.717-1.459-1.384-2.126C21.32 1.347 20.649.935 19.86.63c-.763-.297-1.636-.5-2.914-.558C15.667.014 15.26 0 12 0Zm0 2.162c3.205 0 3.585.012 4.849.07 1.168.053 1.802.248 2.224.412.56.217.96.477 1.379.896.419.419.679.819.896 1.379.164.422.359 1.056.412 2.224.058 1.264.07 1.644.07 4.849s-.012 3.585-.07 4.849c-.053 1.168-.248 1.802-.412 2.224a3.673 3.673 0 0 1-.896 1.379 3.673 3.673 0 0 1-1.379.896c-.422.164-1.056.359-2.224.412-1.264.058-1.644.07-4.849.07s-3.585-.012-4.849-.07c-1.168-.053-1.802-.248-2.224-.412a3.674 3.674 0 0 1-1.379-.896 3.673 3.673 0 0 1-.896-1.379c-.164-.422-.359-1.056-.412-2.224-.058-1.264-.07-1.644-.07-4.849s.012-3.585.07-4.849c.053-1.168.248-1.802.412-2.224.217-.56.477-.96.896-1.379a3.673 3.673 0 0 1 1.379-.896c.422-.164 1.056-.359 2.224-.412 1.264-.058 1.644-.07 4.849-.07ZM12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 0 0 12 5.838ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.846-10.405a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/smartinfracogh/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/smartinfracogh/",
    path: "M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.67 4.533-4.67 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.063 24 12.073Z",
  },
];

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Connectivity", href: "/connectivity" },
      { label: "Data Centres", href: "/data-centres" },
      { label: "Cloud Services", href: "/cloud-services" },
      { label: "Cybersecurity", href: "/cybersecurity" },
      { label: "Software Development", href: "/software-development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Media",
    links: [
      { label: "Articles", href: "/articles" },
      { label: "Videos", href: "/videos" },
      { label: "Pictures", href: "/pictures" },
      { label: "News", href: "/news" },
      { label: "Events & CSR", href: "/events" },
      { label: "Webinars", href: "/webinars" },
      { label: "Awards & Recognition", href: "/awards" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-white">
      <div className="bg-secondary">
        <div className="mx-auto flex min-h-[620px] w-full max-w-[1420px] flex-col px-5 py-16 sm:px-8 lg:px-10 lg:pb-9 lg:pt-22">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.72fr_0.72fr_0.95fr_1.3fr] lg:gap-10 xl:gap-14">
            <div className="pt-2">
              <Link to="/" aria-label="Smart Infraco home" className="inline-flex">
                <img src={footerLogo} alt="Smart Infraco" className="h-[64px] w-[230px] object-cover object-left" />
              </Link>
              <p className="mt-16 max-w-[330px] text-base font-medium leading-8 text-white/82">
                Open neutral-access digital infrastructure for resilient connectivity, hosting and cloud services across Ghana.
              </p>
              <div className="mt-8 flex flex-wrap gap-3" aria-label="Smart Infraco social media">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Follow Smart Infraco on ${social.label}`}
                    title={social.label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/28 text-white/68 transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/72">{column.title}</h4>
                <ul className="mt-7 space-y-5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="group inline-flex items-center gap-2 text-base font-medium text-white/62 transition-colors hover:text-primary"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 translate-y-px opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/72">Contact</h4>
              <div className="mt-7 space-y-5">
                <a href="mailto:info@smartinfraco.com" className="group flex items-center gap-4 text-base font-medium text-white/82 transition-colors hover:text-primary">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  info@smartinfraco.com
                </a>
                <a href="tel:+233302771425" className="group flex items-center gap-4 text-base font-medium text-white/82 transition-colors hover:text-primary">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  030 277 1425
                </a>
                <Link to="/contact" className="group flex items-center gap-4 text-base font-medium text-white/82 transition-colors hover:text-primary">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  Eliakim Building, Peter Ala Adjetey Ave, North Labone, Accra
                </Link>
              </div>

              <div className="mt-8 border border-white/36 bg-transparent p-2">
                <div className="flex items-center gap-3">
                  <Mail className="ml-3 h-4 w-4 shrink-0 text-white/72" />
                  <input
                    aria-label="Email address"
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 bg-transparent py-3 text-base text-white outline-none placeholder:text-white/48"
                  />
                  <Link
                    to="/contact"
                    aria-label="Submit email"
                    className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-primary-foreground transition duration-300 hover:bg-white hover:text-secondary"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-5 border-t border-white/36 pt-6 text-xs text-white/42 md:flex-row md:items-center md:justify-between">
            <p>Copyright {new Date().getFullYear()} Smart Infraco. All rights reserved.</p>
            <div className="flex flex-wrap gap-7">
              <span>Privacy Policy</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
