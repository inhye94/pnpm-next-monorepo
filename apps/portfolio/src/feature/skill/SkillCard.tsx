import { Markdown } from "@workspace/design-system/components";
import type { ISkillType } from "@workspace/utils/types";

interface ISkillCardProps {
  skill: ISkillType;
}

export default function SkillCard({ skill }: ISkillCardProps) {
  return (
    <article className="rounded-16 bg-white p-16 lg:p-32">
      <h3 className="text-heading-6 lg:text-heading-5 bg-blue-60 rounded-12 mb-12 inline-block px-12 py-4 text-white capitalize">
        {skill.title}
      </h3>

      <div className="px-8">
        <div className="text-12 mb-8 text-neutral-50">
          <Markdown>{skill.content}</Markdown>
        </div>

        <ul className="list-disc pl-12">
          {skill.experience?.map((exp) => (
            <li key={exp.id}>
              <p className="text-14 text-neutral-20">{exp.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
