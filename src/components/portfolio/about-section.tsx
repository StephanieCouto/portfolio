import Image from "next/image";
import { SectionReveal } from "./section-reveal";

export function AboutSection() {
  return (

    <SectionReveal className= "text-accent mb-4 text-xs tracking-[0.26em] items-center gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2.15fr)] lg:gap-8">
      <p className="text-accent text-xs uppercase tracking-[0.26em]">Sobre Mim</p>
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2.15fr)] lg:gap-12"> 
      <div className="panel relative mx-auto aspect-square w-[50%] max-w-sm overflow-hidden rounded-full">
        <Image
          src="/2.png"
          alt="Stephanie sorrindo"
          fill
          sizes="(max-width: 768px) 100vw, 36vw"
          className="object-cover"
        />
      </div>
      <div>
        <p className="display-font mt-5 text-xl font-semibold">Oi, eu sou a Stephanie.</p>
        <div className="text-muted mt-4 space-y-4 text-base leading-8 tracking-normal sm:text-lg">
          <p>
            Sempre fui curiosa. Gosto de entender como as coisas funcionam, investigar o que não está dando certo e pensar em maneiras diferentes de resolver um problema. Foi isso que me aproximou da tecnologia.
          </p>
          <p>
            No desenvolvimento, encontrei um espaço onde posso juntar lógica, criatividade e experimentação para transformar ideias em algo concreto.
          </p>
          <p>
            Hoje, meu foco é o Front-end, onde posso trabalhar tanto na construção das interfaces quanto na experiência de quem vai utilizá-las. Para mim, programar não é só fazer algo funcionar, mas entender o problema e encontrar uma solução que faça sentido.
          </p>
        </div>
      </div>
      </div>
    </SectionReveal>
  );
}
