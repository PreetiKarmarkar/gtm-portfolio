"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  /** Starting offsets; defaults to a 30px rise. */
  x?: number;
  y?: number;
};

/** Fades/slides its children into place once, the first time they scroll into view. */
export default function Reveal({
  children,
  className,
  style,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
