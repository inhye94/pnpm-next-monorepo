import Article from "@/components/Article";
import DetailSection from "@/components/DetailSection";
import { BaseBadge, Markdown } from "@workspace/design-system/components";
import { skills, stacks } from "@workspace/utils/datas";

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const skills = await getSkills();
  // const stacks = await getStacks();
  const id = (await params).id;

  return (
    <DetailSection title="Skills And Stacks" subject="skill" id={id}>
      <Article title="Stacks" className="mb-24 md:mb-48">
        <ul className="flex flex-wrap gap-8">
          {stacks.map((stack) => (
            <li key={stack.id}>
              <BaseBadge shape="pill" size="md" color="light">
                {stack.content}
              </BaseBadge>
            </li>
          ))}
        </ul>
      </Article>

      <Article title="Skills">
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
            {skills.map((skill, index) => (
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
                    {skill.experience
                      ?.map((exp) => `- ${exp.content}\n`)
                      .join("")}
                  </Markdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Article>
    </DetailSection>
  );
}
