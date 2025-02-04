// 🔥 skills > content + experience 모두 넣어보고, 가독성이 나쁘면 내용 정리하기

import Section from "@/components/layout/Section";
import { skills } from "@/data/mockSkill";
import { stacks } from "@/data/mockStack";
import { BaseBadge } from "@workspace/design-system/components";
import SkillCard from "./SkillCard";

export default async function SkillSection() {
  // const skills = await getSkills();
  // const stacks = await getStacks();

  return (
    <Section title="Skill" id="skill" className="bg-background-gray">
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
