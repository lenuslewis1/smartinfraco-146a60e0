import { LucideIcon, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  index?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceCard({ icon: Icon, title, description, features, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay: index * 0.05 }}
      className="group h-full rounded-[24px] bg-white p-6 transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <h3 className="mt-10 font-display text-2xl font-medium leading-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
      {features && features.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-2">
          {features.map((f) => (
            <li key={f} className="rounded-full bg-slate-100 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/70">
              {f}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}