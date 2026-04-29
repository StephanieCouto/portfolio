import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { CursorGlow } from "@/components/portfolio/cursor-glow";
import { projects, skills } from "@/components/portfolio/data";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { StarFieldCanvas } from "@/components/portfolio/starfield-canvas";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";

export default function Home() {
  return (
    <div className="relative overflow-x-clip text-[color:var(--foreground)]">
      <CursorGlow />

      <div className="fixed right-4 top-4 z-50 sm:right-8 sm:top-6">
        <ThemeToggle />
      </div>

        <HeroSection />

        <div className="relative overflow-hidden rounded-3xl p-1">
          <StarFieldCanvas mode="subtle" className="opacity-80" />
          <div className="relative z-10 flex flex-col gap-24 px-3 py-3 sm:px-5 sm:py-5">
            <AboutSection />
            <SkillsSection items={skills} />
            <ProjectsSection items={projects} />
            <ContactSection />
          </div>
        </div>
    </div>
  );
}
