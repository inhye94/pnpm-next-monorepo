import AboutSection from "@/feature/about/AboutSection";
import CareerSection from "@/feature/career/CareerSection";
import ContactSection from "@/feature/contact/ContactSection";
import ProjectSection from "@/feature/project/ProjectSection";
import SkillSection from "@/feature/skill/SkillSection";

export default function Home() {
  return (
    <>
      <AboutSection />
      <hr />
      <SkillSection />
      <hr />
      <ContactSection />
      <ProjectSection />
      <CareerSection />
    </>
  );
}
