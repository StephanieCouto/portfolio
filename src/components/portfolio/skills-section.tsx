"use client";

import { motion } from "framer-motion";
import type { Skill } from "./types";
import { SectionReveal } from "./section-reveal";

type SkillsSectionProps = {
  items: Skill[];
};

export function SkillsSection({ items }: SkillsSectionProps) {
  return (
    <SectionReveal>
      <p className="mb-4 text-xs uppercase tracking-[0.26em] text-[#00D4FF]">
        Especialidades
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((skill) => (
          <motion.article
            key={skill.title}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.22 }}
            className="panel neon-hover rounded-2xl p-6"
          >
            <h3 className="display-font text-xl font-semibold">{skill.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#a1a1aa]">{skill.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  );
}
