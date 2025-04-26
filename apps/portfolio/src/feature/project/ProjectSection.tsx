"use client";
import Section from "@/components/layout/Section";
import { track } from "@vercel/analytics";
import { BaseButton, Icon } from "@workspace/design-system/components";
import { projects } from "@workspace/utils/datas";
import { useCallback } from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectDetail from "./components/ProjectDetail";
import ProjectModal from "./components/ProjectModal";

export default function ProjectSection() {
  // const projects = await getProjects();

  const trackUserClick = useCallback((title: string) => {
    track(`project-button-clicked-${title}`);
  }, []);

  return (
    <Section title="Project" id="project">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} className="h-full">
            <footer className="">
              <ProjectModal
                key={project.id}
                title={project.title}
                links={project.links}
                trigger={
                  <BaseButton
                    onClick={trackUserClick.bind(null, project.title)}
                  >
                    <Icon name="document" />
                    상세보기
                  </BaseButton>
                }
              >
                <ProjectDetail project={project} />
              </ProjectModal>
            </footer>
          </ProjectCard>
        ))}
      </div>
    </Section>
  );
}
