import { SectionReveal } from "./section-reveal";

export function AboutSection() {
  return (
    <SectionReveal className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
      <div>
        <p className="text-accent text-xs uppercase tracking-[0.26em]">Sobre Mim</p>
        <h2 className="display-font mt-4 text-3xl font-bold sm:text-4xl">
          Interfaces bem construídas, com foco em experiência real do usuário.
        </h2>
      </div>
      <p className="text-muted text-base leading-8">
        Tenho experiência prática com suporte técnico e desenvolvimento web, o que me permite enxergar além do código e entender de fato o comportamento do usuário.
      </p>
    </SectionReveal>
  );
}
