"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./section-reveal";

export function ContactSection() {
  return (
    <SectionReveal
      id="contato"
      className="panel rounded-3xl border border-white/10 px-6 py-12 sm:px-10"
    >
      <p className="text-xs uppercase tracking-[0.26em] text-[#00D4FF]">Contato</p>
      <h2 className="display-font mt-4 text-3xl font-bold sm:text-5xl">
        Vamos construir algo incrível.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-[#a1a1aa]">
        Me conta sua ideia ou necessidade. Posso te ajudar a transformar isso em uma interface clara, funcional e bem construída.
      </p>
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.22 }}
        href="https://wa.me/554899600"
        target="_blank"
        rel="noopener noreferrer"
        className="neon-hover mt-8 inline-flex rounded-full border border-[#00D4FF]/60 bg-[#00D4FF]/12 px-7 py-3 text-sm font-semibold"
      >
        Entrar em Contato
      </motion.a>
    </SectionReveal>
  );
}
