"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex flex-col gap-4", alignClass, className)}
    >
      {badge && (
        <span className={cn(
          "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase w-fit",
          light
            ? "bg-white/10 text-gold border border-gold/30"
            : "bg-gold/10 text-gold border border-gold/20"
        )}>
          {badge}
        </span>
      )}

      <h2 className={cn(
        "font-display font-bold leading-tight",
        "text-3xl sm:text-4xl lg:text-5xl",
        light ? "text-white" : "text-navy"
      )}>
        {title}{" "}
        {titleHighlight && (
          <span className="text-gradient-gold">{titleHighlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className={cn(
          "max-w-2xl text-base sm:text-lg leading-relaxed",
          align === "center" && "mx-auto",
          light ? "text-white/70" : "text-navy-muted"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
