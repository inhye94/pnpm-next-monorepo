interface IDetailImages {
  id: string;
  url: string;
  title: string;
  content?: string[];
}

interface IContents {
  title: string;
  contents: string[];
}

interface ITroubleShooting {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
}

interface ILink {
  title: string;
  link: string;
}

interface IProjectItem {
  id: string;
  title: string;
  summary: string;
  period: string;
  team: string;
  thumbnailUrl: string;
  screens: IDetailImages[];
  stacks: string[];
  background: string;
  highlights: string[];
  feature?: string[];
  troubleShooting: ITroubleShooting[];
  learnings: IContents[];
  links: {
    blog?: ILink[];
    github: string;
    deploy?: string;
  };
  setup: string;
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

export const projects: IProjectItem[] = [
  {
    id: "project-id-1",
    title: "프로젝트명",
    summary: "프로잭트 개요",
    period: "언제부터 ~ 언제까지",
    team: "개인 프로젝트 / 팀 프로젝트 (몇 명)",
    thumbnailUrl: "이미지 주소",
    screens: [
      {
        id: "screen-id-1",
        url: "이미지 주소",
        title: "페이지명",
        content: ["기능1", "기능2", "기능3"],
      },
    ],
    stacks: ["스택1", "스택2", "스택3"],
    background: "개발 배경을 이러쿵 저러쿵",
    highlights: ["작업1", "작업2", "작업3"],
    feature: ["기능1", "기능2", "기능3"],
    troubleShooting: [
      { title: "주제", problem: "문제점", solution: "해결법", outcome: "성과" },
    ],
    learnings: [{ title: "주제", contents: ["배운점1", "배운점2", "배운점3"] }],
    links: {
      blog: [{ title: "블로그 주제", link: "블로그 링크" }],
      github: "깃허브 링크",
      deploy: "배포 링크",
    },
    setup: "셋업 방법",
  },
];

const Project = () => {
  return (
    <section>
      <h2>프로젝트</h2>
    </section>
  );
};

export default Project;
