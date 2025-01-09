import AboutMe from "@/components/AboutMe";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Finish from "@/components/Finish";
import Gnb from "@/components/Gnb";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Gnb />

      <main>
        <aside>이메일 클립복사, 피드백 주기, 맨 위로 이동</aside>

        <Navbar />

        <AboutMe />
        <Skills />
        <Contact />
        <Project />
        <Career />
      </main>

      <Finish />
    </>
  );
}
