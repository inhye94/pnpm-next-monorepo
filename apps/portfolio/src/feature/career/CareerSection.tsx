import Section from "@/components/layout/Section";
import { careers } from "@/data/mockCareer";
import CareerCard from "./components/CareerCard";

export default function CareerSection() {
  // const careers = await getCareers();

  return (
    <Section title="Career" id="career">
      {careers?.map((career) => <CareerCard key={career.id} career={career} />)}
    </Section>
  );
}
