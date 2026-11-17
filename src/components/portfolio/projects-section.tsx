"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import type { Project } from "./types";
import { SectionReveal } from "./section-reveal";
import { useEffect } from "react";

type ProjectsSectionProps = {
  items: Project[];
};

function ProjectDetailsDialog ({
  project,
  onClose,
} : {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
}, []);



return (
  <dialog
      ref={dialogRef}
      aria-labelledby=" project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dialogRef.current?.close();
        }
      }}
      className="display-font fixed inset-0 m-auto max-h-[90vh] w-[min(90vw,48rem)] overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-[var(--background)] p-0 text-[var(--foreground)] shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-md"
    >
      <button
      className="text-white w-[10px] h-[10px] absolute top-2 right-2 rounded-full flex items-center justify-center text-xl font-bold p-4 cursor-pointer"
        type="button"
        aria-label="Fechar detalhes do projeto"
        onClick={() => dialogRef.current?.close()}
      >
        x
      </button>

      {/\.(mp4|webm|ogg)$/i.test(project.video) ? (
  <video
    src={project.video}
    playsInline
    preload="metadata"
    autoPlay
    muted
    loop
    className="w-full object-cover"
  />
) : (
  <img
    src={project.video}
    alt={`Demonstração de ${project.title}`}
    className="w-full object-cover"
  />
)}

      <div className="p-6">
        <h2 className="text-xl font-bold py-4" id="project-dialog-title">
          {project.title}
        </h2>
        <p className="inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full border border-[#3b82f6]/70 bg-[#3b82f6]/15">
          {project.stack}
        </p>
        <p className="text-muted mt-3 text-sm leading-6 whitespace-pre-line pt-[1rem]">{project.description}</p>
      </div>
    </dialog>
  );
}



export function ProjectsSection({ items }: ProjectsSectionProps) {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
    <SectionReveal>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-accent text-xs uppercase tracking-[0.26em]">Projetos</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {items.map((project) => (
          <motion.article
            key={project.title}
            transition={{ duration: 0.22 }}
            className="panel neon-hover overflow-hidden rounded-2xl"
          >
            
              <img
                src={project.media}
                alt={project.title}
                className="h-35 w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            
            <div className="p-5">
              <h3 className="display-font text-[1rem] font-semibold">{project.title}</h3>
              <span className="inline-block py-1 text-xs font-light tracking-wide">
                {project.stack}
              </span>
              <p className="text-muted mt-3 text-sm leading-6"></p>
              <button type="button" onClick={() => setSelectedProject(project)} className="text-muted mt-3 text-[0.7rem] underline cursor-pointer">
                Ver detalhes do projeto
              </button>
            </div>
            
          </motion.article>
        ))}
      </div>
    </SectionReveal>
    {selectedProject && (
      <ProjectDetailsDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)} 
        />
      
    )}
    </>
  );
}
