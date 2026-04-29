"use client";

import { motion } from "framer-motion";
import { StarFieldCanvas } from "./starfield-canvas";

export function HeroSection() {
  return (
    <section className="relative min-h-[68vh] flex items-center overflow-hidden rounded-3xl panel px-6 pb-14 pt-20 sm:px-12 sm:pt-24">
      <StarFieldCanvas mode="hero" className="opacity-95" />

      <div className="absolute inset-0 -z-10" style={{ background: "var(--hero-overlay)" }} />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="display-font text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          Stephanie
          <span className="block bg-gradient-to-r from-[#3B82F6] to-[#00D4FF] bg-clip-text text-transparent">
            Desenvolvedora Front-End.
          </span>
        </h1>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.22 }}
            href="#contato"
            className="neon-hover rounded-full border border-[#3b82f6]/70 bg-[#3b82f6]/15 px-7 py-3 text-sm font-semibold tracking-wide"
          >
            Vamos Construir Juntos
          </motion.a>

          <a
            href="https://www.linkedin.com/in/stephanie-scanholato-couto-b01332265/"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-cta neon-hover rounded-full px-5 py-3 text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/StephanieCouto"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-cta neon-hover rounded-full px-5 py-3 text-sm"
          >
            GitHub
          </a>
          <a
            href="mailto:scanholato.stephanie@gmail.com"
            className="secondary-cta neon-hover rounded-full px-5 py-3 text-sm"
          >
            E-mail
          </a>
        </div>
      </motion.div>
    </section>
  );
}
