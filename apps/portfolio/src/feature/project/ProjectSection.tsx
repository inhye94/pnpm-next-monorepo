"use client";

import Section from "@/components/layout/Section";
import { track } from "@vercel/analytics";
import { Stagger } from "@workspace/design-system/animations";
import { BaseButton, Icon } from "@workspace/design-system/components";
import { projects } from "@workspace/utils/datas";
import { useCallback } from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectDetail from "./components/ProjectDetail";
import ProjectModal from "./components/ProjectModal";

export default function ProjectSection() {
  // const projects = await getProjects();

  const trackUserClick = useCallback((title: string) => {
    track("Project Button", {}, { flags: { title } });
  }, []);

  return (
    <Section title="Project" id="project">
      <Stagger
        staggerTime={0.1}
        delayChildren={0.3}
        className="grid grid-cols-1 gap-12 md:grid-cols-3"
      >
        {projects?.map((project) => (
          <Stagger.Item key={project.id}>
            <ProjectCard project={project} className="h-full">
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
          </Stagger.Item>
        ))}
      </Stagger>
    </Section>
  );
}
