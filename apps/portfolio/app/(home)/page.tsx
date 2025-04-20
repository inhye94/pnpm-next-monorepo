import AboutSection from "@/feature/about/AboutSection";
import CareerSection from "@/feature/career/CareerSection";
import LinkSection from "@/feature/link/LinkSection";
import ProjectSection from "@/feature/project/ProjectSection";
import SkillSection from "@/feature/skill/SkillSection";

export default function Home() {
  return (
    <>
      <AboutSection />
      <ProjectSection />
      <CareerSection />
      <LinkSection />
      <SkillSection />
    </>
  );
}
