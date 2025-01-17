interface IDetailImages {
  id: string;
  url: string;
  title: string;
  content?: string[];
}

interface ITroubleShooting {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
}

interface ILink {
  id: string;
  title: string;
  link: string;
}

export interface IProjectItem {
  id: string;
  title: string;
  summary: string;
  period: string;
  team: string;
  thumbnailUrl: string;
  screens: IDetailImages[];
  stacks: string[];
  background: string;
  highlights?: string[];
  feature?: string[];
  troubleShooting?: ITroubleShooting[];
  learnings: string[];
  links: {
    blog?: ILink[];
    github: string;
    deploy?: string;
  };
}

/**
 * <카드>
 * 프로젝트명
 * 요약
 * 기간(팀)
 * 썸네일
 * 스택
 * 하이라이트
 * 링크 - 깃허브, 배포
 */

/**
 * <모달>
 * 프로젝트명
 * 요약
 * 기간(팀)
 * 썸네일
 * 스택
---
 * 개발 배경
 * 작업 내역
 * 기능
 * 트러블슈팅
 * 배운점
 * 작업 화면
---
 * 링크
 */

const Project = () => {
  return (
    <section>
      <h2>프로젝트</h2>
    </section>
  );
};

export default Project;
