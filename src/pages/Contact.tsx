import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Check, Copy } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import GlassCard from "@/components/ui-system/GlassCard";
import { Reveal } from "@/components/ui-system/RevealOnScroll";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import contactHero from "@/assets/contact-header-building.jpg";

const inputClass =
  "w-full bg-transparent border-0 border-b border-hairline text-foreground text-sm py-3 placeholder:text-muted-foreground/60 focus:outline-none focus:border-secondary transition-colors";

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      toast({ title: "Message sent", description: "Our team will be in touch shortly." });
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setDone(false), 2400);
    }, 1100);
  };

  const copy = async (val: string) => {
    try {
      await navigator.clipboard.writeText(val);
      setCopied(val);
      setTimeout(() => setCopied(null), 1600);
    } catch {/* noop */}
  };

  const contactRows = [
    { icon: Mail,  label: "Email",   value: "info@smartinfraco.com",      href: "mailto:info@smartinfraco.com" },
    { icon: Phone, label: "Phone",   value: "030 277 1425",                href: "tel:+233302771425" },
    { icon: MapPin,label: "Address", value: "HR9F+XM6, 2nd Soula Street, Accra", href: undefined },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Let's design what comes next."
        description="Get in touch with our team to discuss your infrastructure requirements — connectivity, data centres, cloud or cybersecurity."
        bgImage={contactHero}
      />

      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left — editorial + contact methods */}
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Direct lines</Eyebrow>
                <h2 className="font-display mt-5 text-display-lg text-foreground">
                  Talk to a real engineer.
                </h2>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-md">
                  No bots, no queues. Reach out and a member of our network, cloud or security team will respond within one business day.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-10 space-y-1">
                  {contactRows.map((row) => {
                    const Wrapper: any = row.href ? "a" : "div";
                    return (
                      <li key={row.label}>
                        <Wrapper
                          href={row.href}
                          onClick={!row.href ? undefined : undefined}
                          className="group relative flex items-center justify-between gap-4 py-5 border-b border-hairline cursor-pointer transition-colors hover:border-secondary/40"
                        >
                          <div className="flex items-center gap-4">
                            <row.icon className="w-4 h-4 text-secondary" />
                            <div>
                              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{row.label}</div>
                              <div className="font-display text-base text-foreground mt-1">{row.value}</div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); copy(row.value); }}
                            aria-label={`Copy ${row.label}`}
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-2 -m-2 text-muted-foreground hover:text-secondary"
                          >
                            {copied === row.value ? <Check className="w-4 h-4 text-secondary" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </Wrapper>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 inline-flex items-center gap-2 px-3 py-1.5 border border-hairline">
                  <span className="pulse-dot" />
                  <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">All systems operational</span>
                </div>
              </Reveal>
            </div>

            {/* Right — glass form */}
            <Reveal delay={0.15} className="lg:col-span-7">
              <GlassCard hoverable={false} className="p-8 lg:p-12 bg-card">
                <Eyebrow tone="primary">Start a conversation</Eyebrow>
                <h3 className="font-display mt-5 text-2xl text-foreground">Send us a message</h3>

                <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-7">
                  <div className="sm:col-span-1">
                    <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">Full Name</label>
                    <input required maxLength={100} type="text" className={inputClass} placeholder="John Mensah" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">Organisation</label>
                    <input maxLength={100} type="text" className={inputClass} placeholder="Ministry of Communications" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">Email</label>
                    <input required maxLength={255} type="email" className={inputClass} placeholder="john@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">Service Interest</label>
                    <select className={inputClass} defaultValue="">
                      <option value="" disabled>Select a service…</option>
                      <option className="bg-card">Fibre Connectivity</option>
                      <option className="bg-card">Data Centre Services</option>
                      <option className="bg-card">Cloud & Managed Services</option>
                      <option className="bg-card">Dedicated Internet</option>
                      <option className="bg-card">Cybersecurity</option>
                      <option className="bg-card">Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">Message</label>
                    <textarea
                      required maxLength={2000} rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your requirements…"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <motion.button
                      type="submit"
                      disabled={loading || done}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
                    >
                      {done ? (
                        <><Check className="w-4 h-4" /> Sent</>
                      ) : loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stylized location panel */}
      <section className="relative bg-dark overflow-hidden border-t border-hairline">
        <GridBackdrop variant="lines" className="opacity-30" />
        <div className="relative container-wide py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Our location</Eyebrow>
              <h2 className="font-display mt-5 text-display-lg text-dark-foreground">
                Headquartered in Accra.
              </h2>
              <p className="mt-5 text-base text-dark-foreground/70 max-w-md leading-relaxed">
                Operations across all 10 regions — fibre, PoPs and data centres engineered for continental-scale delivery.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-7">
              <div className="relative aspect-[16/9] glass overflow-hidden">
                {/* coordinate grid */}
                <div className="absolute inset-0 grid-backdrop opacity-50" />
                {/* faint Ghana shape */}
                <svg viewBox="0 0 800 450" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
                  <path
                    d="M260,60 L420,40 L470,90 L500,160 L560,210 L620,300 L640,360 L600,410 L470,420 L380,420 L260,360 L240,260 L220,180 L240,120 Z"
                    fill="hsl(var(--primary) / 0.05)"
                    stroke="hsl(var(--primary) / 0.25)"
                    strokeWidth="1"
                  />
                  {/* Accra pin */}
                  <g>
                    <circle cx="540" cy="370" r="40" fill="hsl(var(--secondary) / 0.12)" />
                    <circle cx="540" cy="370" r="20" fill="hsl(var(--secondary) / 0.25)" />
                    <circle cx="540" cy="370" r="6"  fill="hsl(var(--secondary))" />
                  </g>
                  <text x="555" y="365" fill="hsl(var(--dark-foreground))" fontSize="13" fontFamily="'Space Grotesk', sans-serif" letterSpacing="0.08em">ACCRA · HQ</text>
                  <text x="555" y="382" fill="hsl(var(--dark-foreground) / 0.5)" fontSize="10" fontFamily="'Space Grotesk', sans-serif" letterSpacing="0.18em">5.6037° N · 0.1870° W</text>
                </svg>
                {/* corner labels */}
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">GHA · 01</div>
                <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-2"><span className="pulse-dot" /> Live</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
