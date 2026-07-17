"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none";

const variants = {
  primary:
    "bg-gold text-navy shadow-gold hover:shadow-none active:scale-95 focus-visible:ring-gold",
  secondary:
    "bg-navy text-white hover:bg-navy-light active:scale-95 focus-visible:ring-navy",
  outline:
    "border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-white active:scale-95 focus-visible:ring-navy",
  ghost:
    "bg-transparent text-navy hover:bg-navy/5 active:scale-95 focus-visible:ring-navy",
};

const sizes = {
  sm:  "px-5  py-2   text-sm  h-9",
  md:  "px-7  py-3   text-sm  h-11",
  lg:  "px-9  py-4   text-base h-14",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
