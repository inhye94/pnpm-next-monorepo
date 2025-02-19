import { BaseBadge, Markdown } from "@workspace/design-system/components";
import Image from "next/image";
import { IProjectItem } from "../project";
import DetailArticle from "./DetailArticle";
import DetailSection from "./DetailSection";

/**
 * ProjectDetail 컴포넌트
 *
 * @param {object} project project 상세 정보
 */

// type
interface IProjectDetailProps {
  project: IProjectItem;
}

// component
export default function ProjectDetail({ project }: IProjectDetailProps) {
  return (
    <section>
      <header className="flex flex-col-reverse gap-24 lg:gap-48">
        <div>
          <h3 className="text-heading-4 lg:text-heading-3 text-neutral-10 mb-8">
            {project.title}
          </h3>

          <p className="text-body-sm text-14 text-neutral-40 mb-32 flex items-center *:not-first:before:mx-4 *:not-first:before:content-['·']">
            <span>{project.team}</span>
            <span>{project.period}</span>
          </p>

          <div className="flex flex-wrap gap-8">
            {project.stacks.map((stack) => (
              <BaseBadge
                key={stack.id}
                variant="soft"
                color="light"
                shape="pill"
                size="lg"
              >
                {stack.title}
              </BaseBadge>
            ))}
          </div>
        </div>

        <div className="rounded-16 border-neutral-90 relative mx-auto aspect-square w-full overflow-hidden border md:aspect-21/9">
          <Image
            src={project.thumbnailUrl}
            alt={`${project.title} 프로젝트의 썸네일`}
            // className="h-full w-full object-cover"
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </header>

      <hr className="border-border my-24 block h-1 border border-t-0 lg:my-40" />

      <div className="flex flex-col gap-24 lg:gap-48">
        <DetailSection title="🚀 작업 내역">
          <Markdown>
            {project.highlights
              ?.map((highlight) => `- ${highlight.content}\n`)
              .join("")}
          </Markdown>
        </DetailSection>

        <DetailSection title="🤔 트러블 슈팅">
          {project.troubleShooting?.map((trouble) => (
            <DetailArticle key={trouble.id} title={trouble.title}>
              <Markdown>
                {trouble.contents?.map((content) => `- ${content}\n`).join("")}
              </Markdown>
            </DetailArticle>
          ))}
        </DetailSection>

        <DetailSection title="💫 배운 점">
          {project.learnings?.map((learning) => (
            <DetailArticle key={learning.id} title={learning.title}>
              <Markdown>
                {learning.contents?.map((content) => `${content}  `).join("")}
              </Markdown>
            </DetailArticle>
          ))}
        </DetailSection>
      </div>
    </section>
  );
}
