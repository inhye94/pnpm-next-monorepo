import Section from "@/components/layout/Section";
import { projects } from "@/data/mockProject";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import ProjectModal from "./ProjectModal";

/**
 * ProjectSection 컴포넌트
 *
 * 특징:
 * 1. 진행했던 프로젝트를 카드 형태로 보여주는 section
 */

export default function ProjectSection() {
  return (
    <Section title="Project" id="project">
      <div className="flex flex-col gap-12 md:grid md:grid-cols-3">
        {projects?.map((project) => (
          <ProjectModal
            key={project.id}
            title={project.title}
            links={project.links}
            trigger={<ProjectCard project={project} className="h-full" />}
          >
            <ProjectDetail project={project} />
          </ProjectModal>
        ))}
      </div>
    </Section>
  );
}
