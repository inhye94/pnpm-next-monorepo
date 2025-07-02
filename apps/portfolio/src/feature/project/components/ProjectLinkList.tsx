import { Dropdown, IconButton } from "@workspace/design-system/components";
import type { IProjectItem } from "@workspace/utils/types";
import classNames from "classnames";
import ProjectLinkItem from "./ProjectLinkItem";

/**
 * ProjectLinkList 컴포넌트
 *
 * 특징:
 * 1. 블로그 링크는 Dropdown 컴포넌트로 출력 (복수 개)
 * 2. 키보드 조작 가능 (tab, 방향키, esc 키 등등)
 * 3. radix-ui DropdownMenu 사용하여 웹 접근성 개선
 *
 * @param {React.ComponentProps} links project 상세 정보의 links
 * @param {string} className 외부 스타일 주입
 */

// type
interface IProjectLinkListProps {
  className?: string;
  links: IProjectItem["links"];
}

// component
export default function ProjectLinkList({
  links,
  className,
}: IProjectLinkListProps) {
  return (
    <nav className={classNames("flex gap-8 lg:flex-col", className)}>
      <h5 className="visually-hidden">프로젝트 링크</h5>

      {links.github && (
        <IconButton as="a" href={links.github} icon="github" label="github" />
      )}

      {links.deploy && (
        <IconButton
          as="a"
          href={links.deploy}
          icon="externalLink"
          label="deploy"
        />
      )}

      {links.blog && (
        <Dropdown trigger={<IconButton icon="velog" label="velog" />}>
          {links.blog.map((blogLink) => (
            <Dropdown.Item key={blogLink.id}>
              <ProjectLinkItem
                icon="velog"
                text={blogLink.title}
                href={blogLink.content}
              />
            </Dropdown.Item>
          ))}
        </Dropdown>
      )}
    </nav>
  );
}
