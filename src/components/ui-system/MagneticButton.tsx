import { ReactNode, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "accent" | "dark";
  className?: string;
  children: ReactNode;
  icon?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function MagneticButton({
  to,
  href,
  onClick,
  variant = "primary",
  className,
  children,
  icon = true,
  type = "button",
  disabled,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  // Aeline-style pill: text on left, dark circular icon-bubble on right
  const isPrimary = variant === "primary" || variant === "accent";
  const isDark = variant === "dark";
  const isGhost = variant === "ghost";

  const surface = isPrimary
    ? "bg-primary text-primary-foreground hover:brightness-105"
    : isDark
    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
    : "bg-white/15 text-white border border-white/30 backdrop-blur-md hover:bg-white/25";

  const bubble = isPrimary
    ? "bg-secondary text-secondary-foreground"
    : isDark
    ? "bg-primary text-primary-foreground"
    : "bg-white text-secondary";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn(
        "group inline-flex min-h-12 items-center gap-3 pl-7 pr-2 py-2 font-mono text-sm font-medium tracking-tight transition-all rounded-full select-none cursor-pointer disabled:opacity-50",
        !icon && "pr-7",
        surface,
        className
      )}
    >
      <span className="uppercase tracking-[0.08em]">{children}</span>
      {icon && (
        <span className={cn("flex items-center justify-center w-9 h-9 rounded-full transition-transform duration-500 ease-out group-hover:rotate-45", bubble)}>
          <ArrowUpRight className="w-4 h-4" />
        </span>
      )}
    </motion.div>
  );

  if (to) return <Link to={to}>{inner}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="contents">
      {inner}
    </button>
  );
}
