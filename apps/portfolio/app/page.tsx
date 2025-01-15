import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <AboutMe />
      <Skills />
      <Contact />
      <Project />
      <Career />
    </>
  );
}
