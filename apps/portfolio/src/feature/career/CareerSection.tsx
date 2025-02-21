import Section from "@/components/layout/Section";
import { careers } from "@/data/mockCareer";
import { getCareers } from "@workspace/utils/apis";
import CareerCard from "./components/CareerCard";

export default async function CareerSection() {
  const careersAPI = await getCareers();

  return (
    <Section title="Career" id="career">
      {JSON.stringify(careersAPI)}
      {careers?.map((career) => <CareerCard key={career.id} career={career} />)}
    </Section>
  );
}
