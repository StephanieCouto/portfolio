"use client";

import { motion } from "framer-motion";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionReveal({
  children,
  className = "",
  id,
}: SectionRevealProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}
