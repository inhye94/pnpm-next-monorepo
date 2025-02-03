import { IProjectItem } from "@/feature/project/project";

export const projects: IProjectItem[] = [
  {
    id: "project-id-1",
    title: "Design-system (MONO-REPO)",
    period: "2024.12.23 ~ 진행중",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://private-user-images.githubusercontent.com/69448900/403294030-ed129376-c615-4d1c-a5fe-38c44cb72003.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1ODU3NDksIm5iZiI6MTczODU4NTQ0OSwicGF0aCI6Ii82OTQ0ODkwMC80MDMyOTQwMzAtZWQxMjkzNzYtYzYxNS00ZDFjLWE1ZmUtMzhjNDRjYjcyMDAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjAzVDEyMjQwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhMTg1YWU3NWU5Yzc4OGEzOGE0MzMyMTMwODk2M2VkNTY5M2ZlMDgwNTY4Njc3MTIyZTIxMTM3ZTgxNTYyMDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.v6ovnRWnaJhXmQwZaGS2hyzSpq8J47oGGY25_jd8YwE",
    stacks: [
      { id: "stack-1", title: "Vite" },
      { id: "stack-2", title: "React" },
      { id: "stack-3", title: "TypeScript" },
      { id: "stack-4", title: "TailwindCSS" },
      { id: "stack-5", title: "Storybook" },
      { id: "stack-6", title: "PNPM" },
    ],
    highlights: [
      { id: "highlight-1", content: "모노레포 기반 커스텀 패키지" },
      {
        id: "highlight-3",
        content: "Atomic UI 관리에서의 불편함을 해소하고자 개발",
      },
      { id: "highlight-2", content: "Storybook을 활용해 UI 테스트 및 문서화" },
      {
        id: "highlight-4",
        content:
          "스타일링 방식을 SCSS에서 TailwindCSS로 전환하여 빌드 속도를 개선",
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "무슨무슨 주제",
        contents: ["어떤어떤 방법", "다른 방법2", "다른 방법3"],
      },
      {
        id: "trouble-2",
        title: "무슨무슨 주제",
        contents: ["어떤어떤 방법", "다른 방법2", "다른 방법3"],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "주제",
        contents: [
          "**Figma Dev 모드**를 사용하여 **color token**과 text token 등을 손쉽게 추출할 수 있었습니다. TailwindCSS Config 파일과 함께 사용해, 디자인 가이드 구현 시간을 3일에서 2시간으로 대폭 단축할 수 있었습니다. 기존에 SCSS로 작업할 때는 색상 토큰 추출 및 테마 구현에 많은 시간이 소요되었지만, Figma와 TailwindCSS의 강력한 연동 덕분에 효율적으로 작업할 수 있었습니다.",
          "이 경험을 통해, 세부 작업은 AI와 도구를 적극 활용함으로써 더 재미있고 창의적인 작업(예: 컴포넌트 구현)에 시간을 할애할 수 있다는 점을 깨달았습니다. 앞으로는 AI와 자동화 도구를 활용해 반복 작업을 최소화하고, 창의적이고 전략적인 작업에 집중할 계획입니다.",
        ],
      },
      {
        id: "learning-2",
        title: "주제",
        contents: [
          "Figma Dev 모드를 사용하여 color token과 text token 등을 손쉽게 추출할 수 있었습니다. TailwindCSS Config 파일과 함께 사용해, 디자인 가이드 구현 시간을 3일에서 2시간으로 대폭 단축할 수 있었습니다. 기존에 SCSS로 작업할 때는 색상 토큰 추출 및 테마 구현에 많은 시간이 소요되었지만, Figma와 TailwindCSS의 강력한 연동 덕분에 효율적으로 작업할 수 있었습니다.",
          "이 경험을 통해, 세부 작업은 AI와 도구를 적극 활용함으로써 더 재미있고 창의적인 작업(예: 컴포넌트 구현)에 시간을 할애할 수 있다는 점을 깨달았습니다. 앞으로는 AI와 자동화 도구를 활용해 반복 작업을 최소화하고, 창의적이고 전략적인 작업에 집중할 계획입니다.",
        ],
      },
    ],
    links: {
      blog: [
        {
          id: "blog-link-1",
          title:
            "모노레포 PNPM으로 구성하기 (Feat. NextJS, Vite, React, TypeScript)",
          content:
            "https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-Feat.-NextJS-Vite-React-TypeScript",
        },
        {
          id: "blog-link-2",
          title: "모노레포 PNPM으로 구성하기 - TailwindCSS",
          content:
            "https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-TailwindCSS",
        },
        {
          id: "blog-link-3",
          title: "모노레포 PNPM으로 구성하기 - TypeScript",
          content:
            "https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-TypeScript",
        },
      ],
      github:
        "https://github.com/inhye94/pnpm-next-monorepo/tree/main/packages/design-system",
      deploy:
        "https://67875cd86620d78844d43146-dzvstjnmho.chromatic.com/?path=/docs/components-textfield--docs",
    },
  },
  {
    id: "project-id-2",
    title: "원티드 사전 과제 To Do Lisg",
    period: "2024.11.14 ~ 2024.12.21",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://private-user-images.githubusercontent.com/69448900/403294030-ed129376-c615-4d1c-a5fe-38c44cb72003.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1ODU3NDksIm5iZiI6MTczODU4NTQ0OSwicGF0aCI6Ii82OTQ0ODkwMC80MDMyOTQwMzAtZWQxMjkzNzYtYzYxNS00ZDFjLWE1ZmUtMzhjNDRjYjcyMDAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjAzVDEyMjQwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhMTg1YWU3NWU5Yzc4OGEzOGE0MzMyMTMwODk2M2VkNTY5M2ZlMDgwNTY4Njc3MTIyZTIxMTM3ZTgxNTYyMDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.v6ovnRWnaJhXmQwZaGS2hyzSpq8J47oGGY25_jd8YwE",
    stacks: [
      { id: "stack-1", title: "Vite" },
      { id: "stack-2", title: "React" },
      { id: "stack-3", title: "TypeScript" },
      { id: "stack-4", title: "TailwindCSS" },
      { id: "stack-5", title: "Storybook" },
      { id: "stack-6", title: "PNPM" },
    ],
    highlights: [
      { id: "highlight-1", content: "모노레포 기반 커스텀 패키지" },
      {
        id: "highlight-3",
        content:
          "Atomic UI를 패키지로 공유하여, 작업자마다 달랐던 UI 구현방식을 하나로 통합하고 스타일 일관성을 확보",
      },
      { id: "highlight-2", content: "Storybook을 활용해 UI 테스트 및 문서화" },
      {
        id: "highlight-4",
        content:
          "스타일링 방식을 SCSS에서 TailwindCSS로 전환하여 빌드 속도를 개선",
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "무슨무슨 주제",
        contents: ["어떤어떤 방법", "다른 방법2", "다른 방법3"],
      },
      {
        id: "trouble-2",
        title: "무슨무슨 주제",
        contents: ["어떤어떤 방법", "다른 방법2", "다른 방법3"],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "주제",
        contents: ["배운점1", "배운점2", "배운점3"],
      },
      {
        id: "learning-2",
        title: "주제",
        contents: ["배운점1", "배운점2", "배운점3"],
      },
      {
        id: "learning-3",
        title: "주제",
        contents: ["배운점1", "배운점2", "배운점3"],
      },
    ],
    links: {
      blog: [
        { id: "link-blog-1", title: "블로그 주제", content: "블로그 링크" },
      ],
      github: "깃허브 링크",
      deploy: "배포 링크",
    },
  },
  {
    id: "project-id-3",
    title: "프로젝트명",
    period: "언제부터 ~ 언제까지",
    team: "개인 프로젝트 / 팀 프로젝트 (몇 명)",
    thumbnailUrl:
      "https://private-user-images.githubusercontent.com/69448900/403294030-ed129376-c615-4d1c-a5fe-38c44cb72003.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1ODU3NDksIm5iZiI6MTczODU4NTQ0OSwicGF0aCI6Ii82OTQ0ODkwMC80MDMyOTQwMzAtZWQxMjkzNzYtYzYxNS00ZDFjLWE1ZmUtMzhjNDRjYjcyMDAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjAzVDEyMjQwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhMTg1YWU3NWU5Yzc4OGEzOGE0MzMyMTMwODk2M2VkNTY5M2ZlMDgwNTY4Njc3MTIyZTIxMTM3ZTgxNTYyMDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.v6ovnRWnaJhXmQwZaGS2hyzSpq8J47oGGY25_jd8YwE",
    stacks: [
      { id: "stack-1", title: "Vite" },
      { id: "stack-2", title: "React" },
      { id: "stack-3", title: "TypeScript" },
      { id: "stack-4", title: "TailwindCSS" },
      { id: "stack-5", title: "Storybook" },
      { id: "stack-6", title: "PNPM" },
    ],
    highlights: [
      { id: "highlight-1", content: "모노레포 기반 커스텀 패키지" },
      {
        id: "highlight-3",
        content:
          "Atomic UI를 패키지로 공유하여, 작업자마다 달랐던 UI 구현방식을 하나로 통합하고 스타일 일관성을 확보",
      },
      { id: "highlight-2", content: "Storybook을 활용해 UI 테스트 및 문서화" },
      {
        id: "highlight-4",
        content:
          "스타일링 방식을 SCSS에서 TailwindCSS로 전환하여 빌드 속도를 개선",
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "무슨무슨 주제",
        contents: ["어떤어떤 방법", "다른 방법2", "다른 방법3"],
      },
      {
        id: "trouble-2",
        title: "무슨무슨 주제",
        contents: ["어떤어떤 방법", "다른 방법2", "다른 방법3"],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "주제",
        contents: ["배운점1", "배운점2", "배운점3"],
      },
      {
        id: "learning-2",
        title: "주제",
        contents: ["배운점1", "배운점2", "배운점3"],
      },
      {
        id: "learning-3",
        title: "주제",
        contents: ["배운점1", "배운점2", "배운점3"],
      },
    ],
    links: {
      blog: [
        { id: "link-blog-1", title: "블로그 주제", content: "블로그 링크" },
      ],
      github: "깃허브 링크",
      deploy: "배포 링크",
    },
  },
];
