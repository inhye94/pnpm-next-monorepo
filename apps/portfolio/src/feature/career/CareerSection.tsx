import Section from "@/components/layout/Section";
import { careers } from "@workspace/utils/datas";
import CareerCard from "./components/CareerCard";

export default async function CareerSection() {
  // const careers = await getCareers();

  return (
    <Section title="Career" id="career">
      {careers?.map((career) => <CareerCard key={career.id} career={career} />)}
    </Section>
  );
}
