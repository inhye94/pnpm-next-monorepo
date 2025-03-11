import DetailSection from "@/components/DetailSection";
import {
  skills as mockSkills,
  stacks as mockStacks,
} from "@workspace/utils/datas";
import SkillEdit from "./SkillEdit";
import StackEdit from "./StackEdit";

export default async function SkillEditPage() {
  // const stacks = await getStacks();
  // const skills = await getSkills();

  return (
    <DetailSection title="Stacks And Skills (Edit)" subject="skill">
      <form className="flex flex-col gap-36 md:gap-64">
        <StackEdit stacks={mockStacks} />
        <SkillEdit skills={mockSkills} />
      </form>
    </DetailSection>
  );
}
