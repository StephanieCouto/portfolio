import type { Project, Skill } from "./types";

export const skills: Skill[] = [
  {
    title: "Desenvolvimento Front-End",
    description:
      "Construção de interfaces utilizando Next.js, com foco em usabilidade, clareza e boa experiência para o usuário.",
  },
  {
    title: "Resolução de Problemas",
    description:
      "Atuação direta na identificação e correção de bugs, com olhar analítico e foco em impacto real no usuário.",
  },
  {
    title: "Experiência do Usuário (UX)",
    description:
      "Background em suporte técnico que contribui para decisões mais alinhadas com o comportamento e as necessidades dos usuários.",
  },
  
];

export const projects: Project[] = [
  {
    title: "Momback Doces",
    stack: "Next.js • TypeScript • Tailwind",
    media: "/movies/mombackdocesmovies.mp4",
  },
  {
    title: "Story Stash",
    stack: "Next.js • MongoDB • AWS",
    media: "/movies/storystash.mp4",
  },
  {
    title: "Sete Elétrica",
    stack: "Next.js • Static Forms • Tailwind",
    media: "/movies/seteeletrica.mp4",
  },
  {
    title: "Divórcio Digital",
    stack: "Next.js • Tailwind",
    media: "/movies/dedireito.mp4",
  },
  {
    title: "Chatbot para WhatsApp (Back-End)",
    stack: "Node.js",
    media: "/chatbot.jpg",
  },
  {
    title: "Alerta de WhatsApp (Back-End)",
    stack: "Node.js • Axios • Node-cron",
    media: "/automacao.jpg",
  },
  {
    title: "Alerta por Webhook (Back-End)",
    stack: "Node.js • Express.js • Ngrok",
    media: "/webhooks.jpg",
  },
];

