import Section from "@/components/layout/Section";
import { BaseBadge, Icon } from "@workspace/design-system/components";
import { skills, stacks } from "@workspace/utils/datas";
import SkillCard from "./SkillCard";

export default async function SkillSection() {
  // const skills = await getSkills();
  // const stacks = await getStacks();

  return (
    <Section title="Skill" id="skill" className="bg-background-gray">
      <div className="mb-24 flex flex-wrap gap-4">
        {stacks?.map((stack) => (
          <BaseBadge key={stack.id} color="light" shape="pill" size="lg">
            {stack.icon && <Icon name={stack.icon} />} {stack.content}
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
