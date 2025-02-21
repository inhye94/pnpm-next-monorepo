import Section from "@/components/layout/Section";
import { stacks } from "@/data/mockStack";
import { BaseBadge } from "@workspace/design-system/components";
import { getSkills, getStacks } from "@workspace/utils/apis";
import SkillCard from "./SkillCard";

export default async function SkillSection() {
  const skills = await getSkills();
  const stacksAPI = await getStacks();

  return (
    <Section title="Skill" id="skill" className="bg-background-gray">
      {JSON.stringify(skills)}
      <hr />
      {JSON.stringify(stacksAPI)}

      <div className="mb-24 flex flex-wrap gap-4">
        {stacks?.map((stack) => (
          <BaseBadge key={stack.id} color="light" shape="pill" size="lg">
            {stack.content}
          </BaseBadge>
        ))}
      </div>

      <div className="flex flex-col gap-12">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
