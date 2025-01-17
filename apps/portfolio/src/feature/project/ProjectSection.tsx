import { getProjects } from "./api/project";

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

export default async function ProjectSection() {
  const projects = await getProjects();

  return (
    <section>
      <h2>프로젝트</h2>
      {JSON.stringify(projects)}
    </section>
  );
}
