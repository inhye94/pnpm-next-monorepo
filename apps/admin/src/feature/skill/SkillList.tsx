import { BaseBadge, Markdown } from "@workspace/design-system/components";
import { ISkillType } from "@workspace/utils/types";

export default function SkillList({ skills }: { skills: ISkillType[] }) {
  return (
    <table className="table-auto">
      <thead>
        <tr className="text-14 bg-background-gray h-48 font-semibold capitalize">
          <th scope="col" className="min-w-64">
            No.
          </th>
          <th scope="col" className="">
            Name
          </th>
          <th scope="col">Description</th>
          <th scope="col">Experience</th>
        </tr>
      </thead>
      <tbody className="text-14">
        {skills?.map((skill, index) => (
          <tr key={skill.id} className="border-border border-b *:p-8">
            <th scope="row" className="font-normal">
              {index + 1}
            </th>
            <td className="text-center font-semibold">
              <BaseBadge size="md" shape="pill">
                {skill.title}
              </BaseBadge>
            </td>
            <td className="max-w-400">
              <Markdown>{skill.content}</Markdown>
            </td>
            <td>
              <Markdown>
                {skill.experience?.map((exp) => `- ${exp.content}\n`).join("")}
              </Markdown>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
