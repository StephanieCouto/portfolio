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
    title: "Site institucional - Nichoos",
    stack: "Next.js • TypeScript • React",
    description: "Site institucional voltado à apresentação da plataforma Nichoos e seus recursos. \n O desenvolvimento foi pensado de forma performática, com foco em carregamento rápido, SEO e experiência do usuário. \nO site foi construído em Next.js, priorizando boas práticas de performance e escalabilidade. Além disso, todo o site foi adaptado e otimizado para dispositivos móveis, garantindo uma experiência consistente e responsiva em mobile, tablet e desktop.",
    media: "/nichoos2.png",
    video: "/movies/nichoosfinal.mp4",
  },
  {
    title: "Alerta de WhatsApp (Back-End)",
    stack: "Node.js • Axios • Node-cron",
    description: "Script para monitoramento de status de sites, com verificações periódicas via cron. Envia alertas automáticos quando o site fica offline.",
    media: "/nichoos2.png",
    video: "/automacao3.jpg",
  },
  {
    title: "Site institucional - Momback Doces",
    stack: "Next.js • TypeScript • Tailwind • Google Analytics",
    description: "O site foi desenvolvido com Next.js e TypeScript, utilizando Tailwind CSS para estilização e padronização visual. Também foi integrado o Google Analytics para monitoramento de acessos. \n\n A construção seguiu a abordagem mobile first, priorizando a experiência em dispositivos móveis e adaptando layouts, navegação e seções para diferentes tamanhos de tela. \n\n Foram implementados direcionamentos para WhatsApp e Instagram, facilitando o contato com a empresa, além de animações sutis acionadas durante a rolagem da página. \n\n O projeto também conta com otimização de imagens com lazy loading e componentes organizados para facilitar a manutenção e futuras atualizações. \n\n O foco foi desenvolver um site responsivo, com boa performance, identidade visual consistente e navegação intuitiva.",
    media: "/momback.png",
    video: "/movies/mombackdocesfinal.mp4",
  },
  {
    title: "Site institucional - Sete Elétrica",
    stack: "Next.js • Static Forms • Tailwind",
    description: "O site possui layout responsivo, formulário integrado ao Static Forms para envio de mensagens por e-mail e direcionamentos para contato via WhatsApp e Instagram. \n\n A navegação conta com um header inteligente, que desaparece ao rolar para baixo e reaparece ao rolar para cima, utilizando requestAnimationFrame para garantir maior fluidez. Também implementei um popup de WhatsApp com abertura automática e adaptação para dispositivos móveis, além de animações sutis para tornar a experiência mais agradável. \n\n A estrutura foi organizada para facilitar a manutenção, com atenção à consistência visual, à responsividade e à performance.",
    media: "/sete7.png",
    video: "/movies/setefinal.mp4",
  },
  {
    title: "Simulador e IA para negociação",
    stack: "Google Gemini • Next.js • JavaScript • React",
    description: "Simulador simulador interativo de orçamento para CNH integrado à Katy, uma assistente virtual com IA. \n O simulador utiliza regras comerciais para calcular valores conforme a categoria, a experiência do aluno e os serviços selecionados. Essas informações são enviadas à Katy por meio de uma API, permitindo que ela compreenda o contexto da simulação, negocie condições de pagamento dentro de limites predefinidos e apresente uma proposta personalizada. \n\n A integração com a Gemini API é realizada por uma rota no Next.js, mantendo a chave de acesso protegida no servidor. O projeto também conta com gerenciamento do histórico da conversa e comunicação entre o simulador e a assistente. \n\n Ao final da negociação, a Katy coleta o nome e o telefone do interessado e envia automaticamente a proposta por e-mail à equipe, por meio da integração com o FormSubmit.",
    media: "/ind.png",
    video: "/movies/katyfinal2.mp4",
  },
  {
    title: "Biblioteca digital",
    stack: "Next.js • MongoDB • AWS",
    description: "Plataforma de leitura com página inicial interativa e animações implementadas com a biblioteca Lottie. \n\n\ O sistema conta com cadastro e login de usuários, validações de formulário e tratamento de erros, como e-mail já cadastrado ou senha inválida. Após a autenticação, o usuário tem acesso à área principal da plataforma, protegida contra acessos não autorizados. \n\n Na Home, é possível visualizar o nome do usuário, consultar os livros disponíveis e realizar o upload de novos arquivos. Para isso, integrei o MongoDB no gerenciamento dos dados e o AWS S3 no armazenamento dos livros, proporcionando uma estrutura mais organizada e escalável. \n\n\ O projeto envolveu a integração entre interface, autenticação, banco de dados e armazenamento em nuvem, além da preocupação com a experiência do usuário e a proteção das áreas restritas.",
    media: "/ind.png",
    video: "/movies/storystashfinal.mp4",
  },
  /*
  {
    title: "Chatbot para WhatsApp (Back-End)",
    stack: "Node.js",
    description: "Bot automatizado para atendimento via WhatsApp com fluxo de respostas configurável.",
    media: "/ind.png",
    video: "/chatbot1.jpg",
  },*/

  {
    title: "Alerta por Webhook (Back-End)",
    stack: "Node.js • Express.js • Ngrok",
    description: "Automação em Node.js para integrar notificações do WhatsApp a eventos recebidos por webhooks. \n\n\ O servidor, construído com Express.js, recebe requisições HTTP, processa os dados enviados pela plataforma e identifica as informações relevantes para gerar mensagens personalizadas. Com o whatsapp-web.js, essas notificações são encaminhadas automaticamente para um número específico no WhatsApp. \n\n\ Utilizei o Ngrok para expor o servidor local e permitir o recebimento dos webhooks durante o desenvolvimento, além do Body-parser para processar as requisições em JSON. \n\n\ O projeto permite automatizar o monitoramento de comentários e outras interações, reduzindo a necessidade de acompanhar manualmente a plataforma.",
    media: "/ind.png",
    video: "/webhook3.jpg",
  },
  
];

