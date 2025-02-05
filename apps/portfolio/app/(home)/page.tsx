import AboutSection from "@/feature/about/AboutSection";
import ContactSection from "@/feature/about/ContactSection";
import CareerSection from "@/feature/career/CareerSection";
import LinkSection from "@/feature/link/LinkSection";
import ProjectSection from "@/feature/project/ProjectSection";
import SkillSection from "@/feature/skill/SkillSection";

export default function Home() {
  return (
    <>
      <AboutSection />
      <ContactSection />
      <SkillSection />
      <LinkSection />
      <ProjectSection />
      <CareerSection />
    </>
  );
}
