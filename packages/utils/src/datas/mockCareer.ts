import type { ICareerItem } from "@workspace/utils/types";

export const careers: ICareerItem[] = [
  {
    id: "career-id-1",
    corp: "(주)디노마드",
    summary: "PHP 기반의 이벤트형 플랫폼과 백오피스 개발",
    period: "2022.05 ~ 2023.11 (1년 7개월)",
    roles: [
      {
        id: "role-1",
        content:
          "이벤트형 플랫폼에 RESTful API 연동하여 사용자 상호작용 중심의 UI 설계 및 구현",
      },
      {
        id: "role-2",
        content: "백오피스의 초기 기획 단계부터 론칭까지 전 과정 참여",
      },
      {
        id: "role-3",
        content: "회사 홈페이지 리뉴얼로 레거시 코드 제거",
      },
      {
        id: "role-4",
        content:
          "프론트엔드 업무 프로세스 개선하여 스프린트 완료율 50% > 80%로 증가",
      },
      {
        id: "role-5",
        content:
          "협업 요청에 필요한 매뉴얼 작성하여 크로스 팀 협업 프로세스 생성",
      },
      {
        id: "role-6",
        content: "프론트엔드 파트 리드",
      },
    ],
  },
];
