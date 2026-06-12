import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

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
        <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-12 border-b border-white/12 py-12 lg:grid-cols-[1.1fr_1fr_1fr_1.05fr]">
            <div>
              <Link to="/" aria-label="Smart Infraco home" className="inline-flex">
                <img src={logo} alt="Smart Infraco" className="h-80 w-auto brightness-0 invert" />
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/64">
                Open neutral-access digital infrastructure for resilient connectivity, hosting and cloud services across Ghana.
              </p>
            </div>

            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/42">{column.title}</h4>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-primary"
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
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/42">Contact</h4>
              <div className="mt-5 space-y-4">
                <a href="mailto:info@smartinfraco.com" className="group flex items-center gap-3 text-sm text-white/72 transition-colors hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" />
                  info@smartinfraco.com
                </a>
                <a href="tel:+233302771425" className="group flex items-center gap-3 text-sm text-white/72 transition-colors hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  030 277 1425
                </a>
                <Link to="/contact" className="group flex items-center gap-3 text-sm text-white/72 transition-colors hover:text-primary">
                  <MapPin className="h-4 w-4 text-primary" />
                  HR9F+XM6, 2nd Soula Street, Accra
                </Link>
              </div>

              <div className="mt-8 border border-white/14 bg-white/8 p-2">
                <div className="flex items-center gap-3">
                  <Mail className="ml-3 h-4 w-4 shrink-0 text-white/42" />
                  <input
                    aria-label="Email address"
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/38"
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

          <div className="flex flex-col gap-5 pt-6 text-[11px] text-white/45 md:flex-row md:items-center md:justify-between">
            <p>Copyright {new Date().getFullYear()} Smart Infraco. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
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
