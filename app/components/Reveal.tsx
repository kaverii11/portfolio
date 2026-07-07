"use client";

import { motion } from "framer-motion";

type Direction = "left" | "right" | "up" | "scale";

const variants = {
  left: {
    hidden: { opacity: 0, x: -120, rotate: -1.5 },
    visible: { opacity: 1, x: 0, rotate: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 120, rotate: 1.5 },
    visible: { opacity: 1, x: 0, rotate: 0 },
  },
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.86 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function Reveal({
  children,
  direction = "up",
  className,
}: {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants[direction]}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
