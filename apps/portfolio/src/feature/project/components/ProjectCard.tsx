import { BaseBadge } from "@workspace/design-system/components";
import type { IProjectItem } from "@workspace/utils/types";
import classNames from "classnames";

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
  children?: React.ReactNode;
}

// component
export default function ProjectCard({
  project,
  className,
  children,
}: IProjectCardProps) {
  return (
    <article
      className={classNames(
        "bg-background-gray rounded-base hover:bg-background-darkgray relative flex min-h-300 flex-col gap-16 overflow-hidden p-32 transition hover:shadow-2xl",
        className,
      )}
    >
      <header className="flex flex-col-reverse">
        <h3 className="text-heading-5 text-neutral-30 mb-8 flex items-center gap-x-8">
          {project.title}
        </h3>

        <div className="mb-8 flex flex-wrap items-center gap-8">
          <BaseBadge color="light">{project.team}</BaseBadge>

          <p className="text-12 text-neutral-40">{project.period}</p>
        </div>
      </header>

      <ul className="marker:text-neutral-10 mb-auto list-disc pl-12">
        {project.highlights?.map((highlight) => (
          <li key={highlight.id}>
            <p className="text-body-xs text-neutral-10">{highlight.content}</p>
          </li>
        ))}
      </ul>

      {children}
    </article>
  );
}
