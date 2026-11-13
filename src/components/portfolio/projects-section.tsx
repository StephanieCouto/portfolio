"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { Project } from "./types";
import { SectionReveal } from "./section-reveal";

type ProjectsSectionProps = {
  items: Project[];
};

function ProjectVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="h-48 w-full object-cover"
      />
      <button
        type="button"
        onClick={() => {
          const video = videoRef.current;
          if (!video) return;

          if (isPlaying) {
            video.pause();
          } else {
            void video.play().catch((error: unknown) => {
              console.error("Não foi possível reproduzir o vídeo do projeto.", error);
            });
          }
        }}
        aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
        className="absolute inset-0  flex items-center justify-center"
      >
        <span className="text-[2.6rem] p-4 text-black">
          {isPlaying ? "" : "▶"}
        </span>
      </button>
    </div>
  );
}

export function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <SectionReveal>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-accent text-xs uppercase tracking-[0.26em]">Projetos</p>
          <h2 className="display-font mt-3 text-3xl font-bold sm:text-4xl">
            Trabalhos em Destaque
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.22 }}
            className="panel neon-hover overflow-hidden rounded-2xl"
          >
            {project.media.match(/\.(mp4|webm|ogg)$/i) ? (
              <ProjectVideo src={project.media} />
            ) : (
              <img
                src={project.media}
                alt={project.title}
                className="h-48 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            )}
            <div className="p-5">
              <h3 className="display-font text-xl font-semibold">{project.title}</h3>
              <span className="mt-3 inline-block rounded-full border border-[#3b82f6]/70 bg-[#3b82f6]/15 px-3 py-1 text-xs font-semibold tracking-wide">
                {project.stack}
              </span>
              <p className="text-muted mt-3 text-sm leading-6">{project.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  );
}
