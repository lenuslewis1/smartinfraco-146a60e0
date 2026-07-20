import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import logo from "@/assets/navbar-logo-transparent.png";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const solutions = [
  { label: "Connectivity",       href: "/connectivity",  desc: "National Fibre, Metro, DIA, MPLS" },
  { label: "Data Centres",       href: "/data-centres",  desc: "Tier III Accra · Tier II Kumasi" },
  { label: "Cloud & Managed",    href: "/cloud-services",desc: "Hybrid Cloud, VPS, BaaS, STaaS" },
  { label: "Cybersecurity",      href: "/cybersecurity", desc: "SOC, threat detection, network security" },
];

const media = [
  { label: "News",     href: "/news",     desc: "Latest updates and press releases" },
  { label: "Articles", href: "/articles", desc: "Insights and thought leadership" },
  { label: "Videos",   href: "/videos",   desc: "Presentations and showcases" },
  { label: "Pictures", href: "/pictures", desc: "Activities and event gallery" },
  { label: "Events & CSR", href: "/events", desc: "Events and community impact" },
  { label: "Webinars", href: "/webinars", desc: "Expert conversations and briefings" },
  { label: "Awards & Recognition", href: "/awards", desc: "Milestones and industry recognition" },
];

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Solutions",  href: "#", children: solutions },
  { label: "Media",      href: "#", children: media },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setMegaOpen(null); }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;
  const isGroupActive = (children: typeof solutions) =>
    children.some((s) => location.pathname === s.href);

  return (
    <nav
      className={cn(
        "absolute top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 [transition-timing-function:var(--ease-out-expo)]",
        "overflow-visible rounded-full text-secondary backdrop-blur-2xl backdrop-saturate-200",
        "border border-white/55 shadow-[0_18px_70px_hsl(206_70%_12%_/_0.20),inset_0_1px_0_hsl(0_0%_100%_/_0.85),inset_0_-1px_0_hsl(206_70%_20%_/_0.10)]",
        "before:pointer-events-none before:absolute before:inset-px before:rounded-full before:bg-[linear-gradient(135deg,hsl(0_0%_100%_/_0.72)_0%,hsl(0_0%_100%_/_0.18)_34%,hsl(202_90%_80%_/_0.18)_56%,hsl(0_0%_100%_/_0.46)_100%)]",
        "after:pointer-events-none after:absolute after:left-8 after:right-8 after:top-2 after:h-1/2 after:rounded-full after:bg-[linear-gradient(180deg,hsl(0_0%_100%_/_0.62),transparent)] after:blur-sm",
        scrolled
          ? "bg-white/28"
          : "bg-white/18 supports-[backdrop-filter]:bg-white/14"
      )}
      style={{ width: "min(90vw, 1610px)" }}
    >
      {/* scroll progress hairline */}
      <motion.div
        className="absolute left-4 right-4 bottom-0 h-px origin-left bg-primary/70 rounded-full"
        style={{ scaleX: progress }}
      />

      <div className="relative flex items-center justify-between h-20 px-5 lg:px-8">
        {/* Logo lockup */}
        <Link to="/" className="flex items-center group" aria-label="Smart Infraco home">
          <img src={logo} alt="Smart Infraco" className="h-14 w-44 object-cover object-left lg:h-16 lg:w-52" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative z-10"
                onMouseEnter={() => setMegaOpen(link.label)}
                onMouseLeave={() => setMegaOpen(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-1 py-2 text-sm font-bold uppercase tracking-[0.2em] transition-colors rounded-full",
                    isGroupActive(link.children) ? "text-secondary" : "text-secondary/72 hover:text-secondary"
                  )}
                >
                  {link.label}
                  <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                </button>
                <AnimatePresence>
                  {megaOpen === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 z-50 mt-3 w-[420px] bg-white rounded-3xl shadow-elevated border border-border p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={cn(
                            "group flex items-start justify-between gap-4 px-4 py-3 rounded-2xl transition-colors",
                            isActive(child.href) ? "bg-primary/15 text-foreground" : "hover:bg-muted"
                          )}
                        >
                          <div>
                            <div className="text-sm font-semibold text-foreground">{child.label}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{child.desc}</div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "px-1 py-2 text-sm font-bold uppercase tracking-[0.2em] transition-colors rounded-full",
                  isActive(link.href) ? "text-secondary" : "text-secondary/72 hover:text-secondary"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-primary py-2 pl-7 pr-2 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground transition-all hover:brightness-105"
          >
            Get in Touch
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn("lg:hidden p-2", "text-secondary")}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white rounded-3xl mt-2 mx-2 border border-border"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link.children ? (
                    <div className="space-y-1 py-1">
                      <div className="px-1 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-[0.22em]">
                        {link.label}
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-1 py-2 text-base text-foreground/90 hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-1 py-2.5 text-base font-medium",
                        isActive(link.href) ? "text-primary-foreground bg-primary rounded-full px-4" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mx-1 mt-4 text-center px-5 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-full"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}



