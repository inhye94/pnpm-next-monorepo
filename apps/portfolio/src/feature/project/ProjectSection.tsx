import Section from "@/components/layout/Section";
import { projects } from "@workspace/utils/datas";
import ProjectCard from "./components/ProjectCard";
import ProjectDetail from "./components/ProjectDetail";
import ProjectModal from "./components/ProjectModal";

export default async function ProjectSection() {
  // const projects = await getProjects();

  return (
    <Section title="Project" id="project">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
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
