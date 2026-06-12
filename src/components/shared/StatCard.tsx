import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  index?: number;
}

export default function StatCard({ value, label, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="rounded-[24px] bg-primary p-6 text-primary-foreground"
    >
      <div className="font-display text-5xl font-medium tabular-nums">{value}</div>
      <div className="mt-8 font-mono text-xs uppercase tracking-[0.18em] opacity-70">{label}</div>
    </motion.div>
  );
}