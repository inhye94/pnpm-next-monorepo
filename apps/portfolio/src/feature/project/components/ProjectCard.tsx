import { BaseBadge } from "@workspace/design-system/components";
import classNames from "classnames";
import { IProjectItem } from "../project";

/**
 * ProjectCard 컴포넌트
 *
 * @param {string} className 외부 스타일 주입
 * @param {object} project project 상세 정보
 */

// type
interface IProjectCardProps {
  className?: string;
  project: IProjectItem;
}

// component
export default function ProjectCard({ project, className }: IProjectCardProps) {
  return (
    <article
      className={classNames(
        "bg-background-gray rounded-base hover:bg-background-darkgray relative min-h-300 overflow-hidden p-32",
        className,
      )}
    >
      <header className="mb-16 flex flex-col-reverse">
        <h3 className="text-heading-5 text-neutral-30 mb-8 flex items-center gap-x-8">
          {project.title}
        </h3>

        <div className="mb-8 flex flex-wrap items-center gap-8">
          <BaseBadge color="light">{project.team}</BaseBadge>

          <p className="text-12 text-neutral-40">{project.period}</p>
        </div>
      </header>

      <ul className="marker:text-neutral-10 mb-8 list-disc pl-12">
        {project.highlights?.map((highlight) => (
          <li key={highlight.id}>
            <p className="text-body-xs text-neutral-10">{highlight.content}</p>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4">
        {project.stacks.map((stack) => (
          <BaseBadge key={stack.id} variant="soft" shape="pill">
            {stack.title}
          </BaseBadge>
        ))}
      </div>
    </article>
  );
}
