import { IconButton, Modal } from "@workspace/design-system/components";
import { IProjectItem } from "./project";
import ProjectLinkList from "./ProjectLinkList";

/**
 * ProjectModal 컴포넌트
 *
 * 특징:
 * 1. CCP 패턴의 Modal 컴포넌트를 조합하여, project 상세 내용을 출력하는 모달 구현
 * 2. 키보드 조작 가능 (tab, 방향키, esc 키 등등)
 * 3. 
 *
 * @param {React.ReactNode} trigger modal trigger가 될 요소
 * @param {string} title project modal 제목
 * @param {React.ComponentProps} links project 데이터의 links 데이터
 * @param {React.ReactNode} children project 모달 내부에서 보여줄 content
 * @example
<ProjectModal
  title={project.title}
  links={project.links}
  trigger={<ProjectCard project={project} className="h-full" />}
>
  <ProjectDetail key={project.id} project={project} />
</ProjectModal>
 */

// type
interface IProjectModalProps {
  trigger: React.ReactNode;
  title: string;
  links: IProjectItem["links"];
  children: React.ReactNode;
}

// component
export default function ProjectModal({
  trigger,
  title,
  links,
  children,
}: IProjectModalProps) {
  return (
    <Modal.Root>
      <Modal.Trigger className="rounded-base w-full text-left transition hover:-translate-y-10 hover:border-solid hover:shadow-2xl focus:-translate-y-10 focus:border-solid focus:shadow-2xl">
        {trigger}
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay>
          <Modal.Content className="relative">
            <header className="md:rounded-t-modal border-border sticky top-0 left-0 z-10 border-b-1 bg-white">
              <div className="flex min-h-48 items-center justify-between px-16 lg:h-54">
                <Modal.Title className="text-14 text-neutral-20 font-semibold whitespace-nowrap">
                  {title}
                </Modal.Title>

                <Modal.Close className="relative -right-8" asChild>
                  <IconButton
                    className="text-30"
                    icon="close"
                    label="닫기"
                    variant="ghost"
                  />
                </Modal.Close>
              </div>

              <ProjectLinkList
                className="border-border sticky top-48 right-0 border-t-1 bg-white p-8 lg:absolute lg:top-0 lg:-right-10 lg:translate-x-full lg:border-none lg:bg-transparent"
                links={links}
              />
            </header>

            <div className="p-16 lg:p-32">{children}</div>
          </Modal.Content>
        </Modal.Overlay>
      </Modal.Portal>
    </Modal.Root>
  );
}
