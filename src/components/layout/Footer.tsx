import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Connectivity", href: "/connectivity" },
      { label: "Data Centres", href: "/data-centres" },
      { label: "Cloud Services", href: "/cloud-services" },
      { label: "Cybersecurity", href: "/cybersecurity" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Articles", href: "/articles" },
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-white">
      <div className="bg-secondary">
        <div className="mx-auto flex min-h-[620px] w-full max-w-[1420px] flex-col px-5 py-16 sm:px-8 lg:px-10 lg:pb-9 lg:pt-22">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.95fr_0.95fr_1.25fr] lg:gap-20">
            <div className="pt-2">
              <Link to="/" aria-label="Smart Infraco home" className="inline-flex">
                <img src={footerLogo} alt="Smart Infraco" className="h-[64px] w-[230px] object-cover object-left" />
              </Link>
              <p className="mt-16 max-w-[330px] text-base font-medium leading-8 text-white/82">
                Open neutral-access digital infrastructure for resilient connectivity, hosting and cloud services across Ghana.
              </p>
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
                  HR9F+XM6, 2nd Soula Street, Accra
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
