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

const officeAddress = "Peter Ala Adjetey Ave, Accra";
const googleMapsQuery = encodeURIComponent(officeAddress);
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`;
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${googleMapsQuery}&output=embed`;

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
    } catch {
      // Clipboard access can be unavailable in some embedded browsers.
    }
  };

  const contactRows = [
    { icon: Mail, label: "Email", value: "info@smartinfraco.com", href: "mailto:info@smartinfraco.com" },
    { icon: Phone, label: "Phone", value: "030 277 1425", href: "tel:+233302771425" },
    { icon: MapPin, label: "Address", value: officeAddress, href: googleMapsUrl },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Let's design what comes next."
        description="Get in touch with our team to discuss your infrastructure requirements - connectivity, data centres, cloud or cybersecurity."
        bgImage={contactHero}
      />

      <section className="relative section-padding bg-background overflow-hidden">
        <GridBackdrop variant="dots" className="opacity-40" />
        <div className="relative container-wide">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Direct lines</Eyebrow>
                <h2 className="font-display mt-5 text-display-lg text-foreground">
                  Get in touch with us.
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
                          target={row.label === "Address" ? "_blank" : undefined}
                          rel={row.label === "Address" ? "noreferrer" : undefined}
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
                      <option value="" disabled>Select a service...</option>
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
                      required
                      maxLength={2000}
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your requirements..."
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
                          Sending...
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

      <section className="relative bg-dark overflow-hidden border-t border-hairline">
        <GridBackdrop variant="lines" className="opacity-30" />
        <div className="relative container-wide py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Our location</Eyebrow>
              <h2 className="font-display mt-5 text-display-lg text-dark-foreground">
                Visit us in Labone.
              </h2>
              <p className="mt-5 text-base text-dark-foreground/70 max-w-md leading-relaxed">
                Visit Smart Infraco around Peter Ala Adjetey Avenue in Accra, or open the route directly in Google Maps.
              </p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 border border-white/18 px-5 py-3 text-sm font-medium text-dark-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden border border-white/12 bg-white shadow-elevated">
                <iframe
                  title="Smart Infraco location on Google Maps"
                  src={googleMapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
