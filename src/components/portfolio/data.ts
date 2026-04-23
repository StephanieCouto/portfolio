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
    title: "Nichoos Tecnologia",
    stack: "Next.js • TypeScript • React",
    description: "Site institucional voltado à apresentação da plataforma Nichoos e seus recursos.",
    media: "/movies/nichoossite.mp4",
  },
  {
    title: "Momback Doces",
    stack: "Next.js • TypeScript • Tailwind",
    description: "Site institucional focado em apresentação de produtos e conversão, com integração ao WhatsApp.",
    media: "/movies/mombackdocesmovies.mp4",
  },
  {
    title: "Story Stash",
    stack: "Next.js • MongoDB • AWS",
    description: "Plataforma de armazenamento e organização de histórias pessoais com autenticação e upload de mídia.",
    media: "/movies/storystash.mp4",
  },
  {
    title: "Sete Elétrica",
    stack: "Next.js • Static Forms • Tailwind",
    description: "Landing page para empresa de elétrica com formulário de orçamento e portfólio de serviços.",
    media: "/movies/seteeletrica.mp4",
  },
  {
    title: "Divórcio Digital",
    stack: "Next.js • Tailwind",
    description: "Site informativo para escritório jurídico com foco em clareza e conversão de leads (checkout externo).",
    media: "/movies/dedireito.mp4",
  },
  {
    title: "Chatbot para WhatsApp (Back-End)",
    stack: "Node.js",
    description: "Bot automatizado para atendimento via WhatsApp com fluxo de respostas configurável.",
    media: "/chatbot.jpg",
  },
  {
    title: "Alerta de WhatsApp (Back-End)",
    stack: "Node.js • Axios • Node-cron",
    description: "Script para monitoramento de status de sites, com verificações periódicas via cron. Envia alertas automáticos quando o site fica offline.",
    media: "/automacao3.jpg",
  },
  {
    title: "Alerta por Webhook (Back-End)",
    stack: "Node.js • Express.js • Ngrok",
    description: "API que recebe eventos via webhook e encaminha alertas em tempo real para o WhatsApp.",
    media: "/webhook3.jpg",
  },
  
];

