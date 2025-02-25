import type { IProjectItem } from "@workspace/utils/types";

export const projects: IProjectItem[] = [
  {
    id: "project-id-1",
    title: "Portfolio (MONO-REPO)",
    period: "2025.01.06 ~ 진행중",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://private-user-images.githubusercontent.com/69448900/403294030-ed129376-c615-4d1c-a5fe-38c44cb72003.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1ODU3NDksIm5iZiI6MTczODU4NTQ0OSwicGF0aCI6Ii82OTQ0ODkwMC80MDMyOTQwMzAtZWQxMjkzNzYtYzYxNS00ZDFjLWE1ZmUtMzhjNDRjYjcyMDAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjAzVDEyMjQwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhMTg1YWU3NWU5Yzc4OGEzOGE0MzMyMTMwODk2M2VkNTY5M2ZlMDgwNTY4Njc3MTIyZTIxMTM3ZTgxNTYyMDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.v6ovnRWnaJhXmQwZaGS2hyzSpq8J47oGGY25_jd8YwE",
    stacks: [
      { id: "stack-1", title: "NextJS" },
      { id: "stack-2", title: "React" },
      { id: "stack-3", title: "TypeScript" },
      { id: "stack-4", title: "TailwindCSS" },
      { id: "stack-5", title: "Husky" },
      { id: "stack-6", title: "PNPM" },
    ],
    highlights: [
      {
        id: "highlight-0",
        content: "NextJS 기반의 포트폴리오 페이지",
      },
      {
        id: "highlight-1",
        content: "정적인 PDF에서 벗어나 생동감있는 UI/UX를 표현하기 위해 제작",
      },
      {
        id: "highlight-2",
        content: "motion 라이브러리를 사용하여 애니메이션 구현",
      },
      {
        id: "highlight-3",
        content: "Context를 이용한 스크롤 메뉴 구현",
      },
      {
        id: "highlight-4",
        content: "커밋 관리를 위해 husky 도입",
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "커밋 관리를 위해 husky 도입",
        contents: [
          "**[문제점]** 모노레포에 프로젝트가 늘어가면서, 어느 프로젝트의 작업인지 커밋 메시지에 표기되지 않아 일일이 히스토리를 열어서 확인해야하는 불편함이 있었습니다.",
          "**[해결]** 변경된 커밋 컨벤션이 엄격하게 적용되도록 `husky`를 도입했습니다.",
          "**[성과]** 커밋 전에 컨벤션을 검사하여 일관된 커밋 메시지를 유지하고 linter를 강제 적용하여 코드 스타일을 통일할 수 있었습니다.",
        ],
      },
      {
        id: "trouble-2",
        title: "아이콘 최적화",
        contents: [
          "**[문제점]** 아이콘의 종류가 늘어남에 따라, SVG를 그대로 출력하는 Icon 컴포넌트의 구조는 확장성이 떨어졌습니다.",
          "**[해결]** react-icons 라이브러리의 icon을 별도의 객체에 맵핑하고 Icon 컴포넌트의 props에 객체의 key를 전달하는 구조로 변경하고, `React.lazy`로 **dynamic import**를 적용하여 사용할 때만 아이콘을 로드하도록 구현했습니다.",
          "**[성과1]** 동적 import로 인해 브라우저에 캐싱되어 중복 다운로드가 발생하지 않아 로드 속도가 빨라졌습니다.",
          "**[성과2]** 아이콘 라이브러리 변경이 쉬워졌습니다. 다른 아이콘 라이브러리로 변경하고자 한다면, 아이콘 매핑 테이블(iconMap)만 수정하면 됩니다.",
        ],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "상추에서 배운 프로젝트 구조 설계",
        contents: [
          "밥을 먹다가 우연히 상추의 프렉탈 구조를 발견하곤 프로젝트에 적용해보았습니다. 예를들어, 공용 컴포넌트는 src/components 폴더에 저장하고, 특정 기능에만 사용되는 컴포넌트는 src/feature/[기능]/components 폴더에 저장했습니다. 덕분에 컴포넌트의 성격에 따라 구분하기 수월해졌습니다. 이 경험을 통해 방법론을 무조건 따르기보다는, **프로젝트 특성에 맞는 구조 또는 예측 가능한 구조가 더 중요하다**는 깨달음을 얻었습니다.",
          "여러 방법론을 시도하며 얻은 인사이트와 주변 사물을 관찰하며 얻은 아이디어를 적극적으로 프로젝트에 반영해보며, 수직/수평 방향으로 균형있게 확장되는 구조를 만들어 보고자 합니다.",
        ],
      },
    ],
    links: {
      blog: [
        {
          id: "blog-link-1",
          title: "모노레포 PNPM으로 구성하기 - husky + commitlint",
          content:
            "https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-husky-commitlint",
        },
      ],
      github:
        "https://github.com/inhye94/pnpm-next-monorepo/tree/main/apps/portfolio",
      deploy:
        "https://67875cd86620d78844d43146-dzvstjnmho.chromatic.com/?path=/docs/components-textfield--docs",
    },
  },
  {
    id: "project-id-2",
    title: "Design-system (MONO-REPO)",
    period: "2024.12.23 ~ 진행중",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://private-user-images.githubusercontent.com/69448900/403294030-ed129376-c615-4d1c-a5fe-38c44cb72003.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1ODU3NDksIm5iZiI6MTczODU4NTQ0OSwicGF0aCI6Ii82OTQ0ODkwMC80MDMyOTQwMzAtZWQxMjkzNzYtYzYxNS00ZDFjLWE1ZmUtMzhjNDRjYjcyMDAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjAzVDEyMjQwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhMTg1YWU3NWU5Yzc4OGEzOGE0MzMyMTMwODk2M2VkNTY5M2ZlMDgwNTY4Njc3MTIyZTIxMTM3ZTgxNTYyMDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.v6ovnRWnaJhXmQwZaGS2hyzSpq8J47oGGY25_jd8YwE",
    stacks: [
      { id: "stack-1", title: "Vite" },
      { id: "stack-2", title: "React" },
      { id: "stack-3", title: "TypeScript" },
      { id: "stack-4", title: "Radix UI" },
      { id: "stack-5", title: "TailwindCSS" },
      { id: "stack-6", title: "Storybook" },
      { id: "stack-7", title: "PNPM" },
    ],
    highlights: [
      {
        id: "highlight-0",
        content: "React 기반의 디자인 시스템",
      },
      {
        id: "highlight-1",
        content: "모노레포의 일관된 UI/UX 구현을 위해 제작",
      },
      {
        id: "highlight-2",
        content: "TailwindCSS의 Tree-Shaking 에러 대응",
      },
      {
        id: "highlight-3",
        content: "단순한 전역 상태를 가진 UI(toast, modal 등)는 Context로 구현",
      },
      {
        id: "highlight-4",
        content: "CCP 패턴처럼 특이사항이 있는 경우, 자세한 주석 추가",
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "TailwindCSS의 Tree-Shaking 에러 대응",
        contents: [
          "**[문제점]** 디자인 시스템에서 제공하는 모달의 스타일이 **사용자 프로젝트에서 정상적으로 적용되지 않는 문제**가 발생했습니다.",
          "**[해결]** 이는 **초기 렌더링되지 않는 컴포넌트의 스타일이 Tree-Shaking으로 제거되면서 발생한 문제**였습니다. 이를 해결하기 위해, TailwindCSS의 `@layer components`를 적용하여 스타일이 유지되도록 설정했습니다.",
          "**[성과]** 이 방식으로 **`React.Portal`을 사용하는 컴포넌트에서도 동일한 스타일 손실 문제를 예방**할 수 있었으며, 디자인 시스템의 일관성을 유지하는 데 기여할 수 있었습니다.",
        ],
      },
      {
        id: "trouble-2",
        title: "TailwindCSS의 상속 에러",
        contents: [
          "**[문제점]** 사용자 프로젝트에서 컴포넌트는 정상적으로 호출되지만, **스타일이 적용되지 않는 문제**가 발생했습니다.",
          "**[해결]** **디자인 시스템과 메인 프로젝트의 빌드 컨텍스트가 분리되어 발생한 문제**였습니다. 이를 해결하기 위해, 사용자 프로젝트의 `tailwind.config.js` 파일에서 디자인 시스템 모듈을 포함하도록 설정했습니다. 이를 통해, 디자인 시스템의 컴포넌트를 사용하는 프로젝트가 해당 모듈 내부의 템플릿을 `content` 설정에서 스캔하도록 보장했습니다.",
          "**[성과]** 빌드 컨텍스트 문제를 해결하여, 다른 프로젝트에서도 동일한 방식으로 적용할 수 있도록 가이드할 수 있었습니다.",
        ],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "Figma Dev 모드의 생산성",
        contents: [
          "운 좋게 친구의 **Figma Dev 모드**를 체험할 수 있었습니다. 덕분에 디자인 가이드에 필요한 token(color, text 등)을 몇 번의 클릭으로 손쉽게 추출할 수 있었습니다. 기존에 SCSS로 작업할 때는 색상 토큰 추출 및 테마 구현에 하루가 소요되었지만, **Figma의 강력한 AI 기능 덕분에 단순 반복 작업을 건너뛸 수 있었습니다.**",
          "이 경험을 통해, AI의 생산성은 개발자의 창의적이고 전략적인 작업을 도와준다는 것을 깨닫게 되었습니다. 새롭게 나오는 AI 툴에 열린 마음으로 다가가게 된 계기가 되었습니다.",
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
    id: "project-id-3",
    title: "원티드 프리온보딩 11월 사전과제",
    period: "2024.11.14 ~ 2024.12.21",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://private-user-images.githubusercontent.com/69448900/403294030-ed129376-c615-4d1c-a5fe-38c44cb72003.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1ODU3NDksIm5iZiI6MTczODU4NTQ0OSwicGF0aCI6Ii82OTQ0ODkwMC80MDMyOTQwMzAtZWQxMjkzNzYtYzYxNS00ZDFjLWE1ZmUtMzhjNDRjYjcyMDAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjAzVDEyMjQwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhMTg1YWU3NWU5Yzc4OGEzOGE0MzMyMTMwODk2M2VkNTY5M2ZlMDgwNTY4Njc3MTIyZTIxMTM3ZTgxNTYyMDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.v6ovnRWnaJhXmQwZaGS2hyzSpq8J47oGGY25_jd8YwE",
    stacks: [
      { id: "stack-1", title: "Vite" },
      { id: "stack-2", title: "React" },
      { id: "stack-3", title: "TypeScript" },
      { id: "stack-4", title: "Zustand" },
      { id: "stack-5", title: "Tanstack Query" },
      { id: "stack-6", title: "Emotion" },
      { id: "stack-7", title: "PNPM" },
    ],
    highlights: [
      { id: "highlight-1", content: "React 기반의 To do list 페이지" },
      {
        id: "highlight-3",
        content: "기존의 방식에서 벗어나 새로운 방식을 시도하기 위해 제작",
      },
      {
        id: "highlight-2",
        content:
          "redirect를 페이지 진입하기 전에 처리하기위해 React-router의 loader 패턴을 도입",
      },
      {
        id: "highlight-4",
        content:
          "백엔드와 프론트엔드 코드를 하나의 레포에서 관리하기 위해 모노레포 도입",
      },
      {
        id: "highlight-5",
        content:
          "모노레포 Workspace의 TS 버전 에러와 dependencies의 버전 충돌로 인해 패키지 매니저 변경 (Yarn berry > PNPM)",
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "react-router loader와 tanstackQuery 캐싱",
        contents: [
          "**[문제점]** `react-router`의 `loader`를 활용해 데이터를 패칭할 수 있다는 점을 알게 되었지만, **TS 파일에서 구현된 `loader` 내부에서는 `useQueryClient` 훅을 사용할 수 없는 문제**가 발생했습니다.",
          "**[해결]** `loader`의 매개변수에 **`queryClient`를 주입하는 방식**으로 문제를 해결하여 데이터 캐싱을 효과적으로 활용할 수 있도록 개선했습니다.",
          "**[성과]** 데이터 패칭 및 캐싱 최적화를 통해 **애플리케이션의 성능을 개선**했으며, 파일 단위로 로직을 분리함으로써 유지보수성을 크게 향상시킬 수 있었습니다. 이를 통해 **다양한 최적화 방식과 아키텍처 설계의 중요성을 체감**하는 계기가 되었습니다.",
        ],
      },
      {
        id: "trouble-2",
        title: "Emotion 스타일링과 타입 일관성 유지",
        contents: [
          "**[문제점]** `emotion`을 사용하면서 **스타일 관련 props 값의 일관성을 유지하는 것이 어려웠고**, 타입을 수동으로 관리해야 하는 불편함이 있었습니다.",
          "**[해결]** 스타일 객체를 생성하고, `keyof`와 `typeof`를 활용하여 **타입이 자동으로 갱신**되도록 구현했습니다. 이를 통해 컴포넌트의 props를 보다 효율적으로 관리할 수 있도록 개선했습니다.",
          "**[성과]** 코드의 안정성과 일관성을 높였으며, 타입이 자동으로 갱신됨에 따라 **스타일 관리의 효율성도 크게 향상**되었습니다.",
        ],
      },
      {
        id: "trouble-3",
        title: "모노레포 환경에서 Ghost Dependency 문제",
        contents: [
          "**[문제점]** 모노레포를 `Yarn Berry`로 구현하는 과정에서 **workspace 내 TypeScript 버전 충돌 및 패키지 의존성 관리 문제가 발생**했습니다. 이는 **Yarn Berry의 호이스팅 방식으로 인해 `Ghost Dependency`가 생성된 것이 원인**이었습니다.",
          "**[해결]** 패키지 매니저를 **`pnpm`으로 변경하여 의존성 문제를 해결**하고, workspace의 패키지들이 일관된 환경에서 동작하도록 설정했습니다.",
          "**[성과]** **의존성 관리가 한층 안정적**으로 이루어졌으며, 모노레포 환경에서의 개발 생산성을 크게 향상시킬 수 있었습니다. 이를 통해 패키지 매니저별 의존성 처리 방식의 차이를 이해하고, 적절한 도구 선택이 중요하다는 점을 실감할 수 있었습니다.",
        ],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "편안함을 넘어 새로운 패턴으로: CCP, FSD, 그리고 구조적 설계",
        contents: [
          "기존에는 주로 UI 라이브러리를 활용해 toast와 모달을 구현했지만, 직접 구현하면서 간단한 **state 주입에는 context가 적합하다**는 점을 깨달았습니다. 특히 Radix UI의 Dialog 구현 코드를 분석하며 **CCP 패턴**을 발견하고, 이를 활용해 직접 모달을 구현하며 컴포넌트의 **부모나 조상에게 구조 결정을 위임**함으로써 내부 구조의 자율성을 높이고, 재사용성을 극대화할 수 있음을 알게 되었습니다. 또한, props를 기반으로 return 컴포넌트를 결정할 때 발생하던 중복 코드를 CCP 패턴으로 효과적으로 줄일 수 있었습니다.",
          "개발을 처음 시작했을 때 만들었던 프로젝트는 간단한 todos 앱이었습니다. 그때 늦은 밤까지 눈을 반짝이며 코드를 짜던 설렘을 다시금 느낄 수 있는 경험이었습니다. 새로운 시도(emotion, 모노레포, loader, vite, CCP 패턴, FSD 디렉토리 구조 등)를 하면서, 익숙하고 편안한 방식에 안주하지 않고 꾸준히 새로운 개념을 접하고 적용하는 것이 얼마나 중요한지 다시 한 번 깨달았습니다.",
        ],
      },
    ],
    links: {
      github: "https://github.com/inhye94/react-todos-monorepo",
    },
  },
  {
    id: "project-id-4",
    title: "OTT Search",
    period: "2024.10.01 ~ 2024.10.11",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://private-user-images.githubusercontent.com/69448900/403294030-ed129376-c615-4d1c-a5fe-38c44cb72003.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1ODU3NDksIm5iZiI6MTczODU4NTQ0OSwicGF0aCI6Ii82OTQ0ODkwMC80MDMyOTQwMzAtZWQxMjkzNzYtYzYxNS00ZDFjLWE1ZmUtMzhjNDRjYjcyMDAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjAzVDEyMjQwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhMTg1YWU3NWU5Yzc4OGEzOGE0MzMyMTMwODk2M2VkNTY5M2ZlMDgwNTY4Njc3MTIyZTIxMTM3ZTgxNTYyMDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.v6ovnRWnaJhXmQwZaGS2hyzSpq8J47oGGY25_jd8YwE",
    stacks: [
      { id: "stack-1", title: "NextJS" },
      { id: "stack-3", title: "TypeScript" },
      { id: "stack-4", title: "Lighthouse" },
      { id: "stack-5", title: "Tanstack Query" },
      { id: "stack-6", title: "Module CSS" },
      { id: "stack-7", title: "Yarn berry" },
    ],
    highlights: [
      { id: "highlight-1", content: "NextJS 기반의 콘텐츠 검색 페이지" },
      {
        id: "highlight-2",
        content:
          "한 플랫폼에서 모든 시청 콘텐츠의 Provider를 확인하고 싶어서 제작",
      },
      {
        id: "highlight-3",
        content:
          "'페이지가 덜컹거려요'라는 피드백을 받고, lighthouse 도입해서 성능 문제를 측정",
      },
      {
        id: "highlight-4",
        content:
          "실시간 검색 기능에서 Input의 Change Handler의 호출 최적화를 위해 debounce 적용하여 이벤트 그룹화",
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "검색 최적화",
        contents: [
          "**[문제점]** **검색 기능 최적화** 과정에서 `debounce`를 적용해 이벤트 호출 빈도를 줄이고자 했지만, 컴포넌트가 리렌더링될 때마다 새로운 `debounce` 함수가 생성되어, 기존 **`debounce` 함수와 병렬로 실행**되는 문제를 겪었습니다. (입력창에 “abc”를 입력했을 때 “a”, “ab”, “abc”에 대해 각각 API 호출이 발생)",
          "**[해결]** **함수의 참조를 고정하기 위해 `useCallback`을 활용**했습니다. 그 결과, 함수가 리렌더링 시에도 동일한 참조를 유지하여 debounce된 API 호출이 실행되었습니다.",
          "**[성과]** API 호출 횟수를 줄여 **네트워크 비용을 절감**, `useCallback`과 `debounce`의 조합을 통해 **상태 의존적 함수를 효율적으로 관리하는 방법을 학습**했습니다.",
        ],
      },
      {
        id: "trouble-2",
        title: "Props로 전달하는 데이터 타입 안정성 개선",
        contents: [
          "**[문제점]** 재사용 가능한 컴포넌트에 **API Response 데이터를 Props로 전달**할 때, **API 응답 데이터의 구조가 달라서** 데이터 구조를 일일이 검사하거나 변환해야 했기 때문에 컴포넌트 재사용성과 유지보수성이 저하되는 문제를 겪었습니다.",
          "**[해결]** **제네릭(Generic) 타입**과 `extends`를 활용해 Props에 전달되는 데이터 타입을 동적으로 정의해 타입스크립트의 `조건부 타입`을 활용해 데이터 구조가 달라질 때도 컴파일 단계에서 타입 안정성을 보장하도록 구현했습니다.",
          "**[성과]** 컴파일 단계에서 잘못된 데이터 구조를 감지해 `타입 안정성을 확보`하고, 제네릭 타입을 통해 다양한 데이터 구조를 사용하는 **컴포넌트를 반복적으로 재활용**이 가능합니다.",
        ],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "Next.js에서 배운 직관적인 라우팅과 개발 효율성",
        contents: [
          "Next.js를 처음 사용하면서 파일 시스템 기반의 App Routing이 제공하는 간결함과 편리함을 경험할 수 있었습니다. 별도의 router 설정 없이 동작하고, URL params를 util 함수나 hook 없이 바로 활용할 수 있다는 점은 개발 효율성을 크게 높여주었습니다. 이를 통해 Next.js의 생산성 향상에 큰 매력을 느꼈습니다.",
        ],
      },
    ],
    links: {
      github: "https://github.com/DuetoPark/ott-search",
      deploy: "https://ott-search.vercel.app/",
    },
  },
  {
    id: "project-id-5",
    title: "Design system (Poly-Repo)",
    period: "2024.08.15 ~ 2024.09.13",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://private-user-images.githubusercontent.com/69448900/403294030-ed129376-c615-4d1c-a5fe-38c44cb72003.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1ODU3NDksIm5iZiI6MTczODU4NTQ0OSwicGF0aCI6Ii82OTQ0ODkwMC80MDMyOTQwMzAtZWQxMjkzNzYtYzYxNS00ZDFjLWE1ZmUtMzhjNDRjYjcyMDAzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjAzVDEyMjQwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhMTg1YWU3NWU5Yzc4OGEzOGE0MzMyMTMwODk2M2VkNTY5M2ZlMDgwNTY4Njc3MTIyZTIxMTM3ZTgxNTYyMDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.v6ovnRWnaJhXmQwZaGS2hyzSpq8J47oGGY25_jd8YwE",
    stacks: [
      { id: "stack-1", title: "React" },
      { id: "stack-3", title: "TypeScript" },
      { id: "stack-4", title: "SCSS" },
      { id: "stack-5", title: "Storybook" },
      { id: "stack-6", title: "Radix Primitive UI" },
      { id: "stack-7", title: "Yarn berry" },
    ],
    highlights: [
      { id: "highlight-1", content: "React 기반의 디자인 시스템" },
      {
        id: "highlight-2",
        content: "실무에서 부족했던 Atomic UI의 유지보수를 개선하기 위해 제작",
      },
      {
        id: "highlight-3",
        content: "Headless 라이브러리를 사용하여 웹 접근성 개선",
      },
      {
        id: "highlight-4",
        content:
          "번들크기와 스타일 커스텀 여부를 비교하여 Radix Primitive UI를 사용",
      },
      {
        id: "highlight-5",
        content: "문서화와 UI 테스트의 불편함을 개선하고자 Storybook 사용",
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "색상변수 다크/라이트 모드 구현",
        contents: [
          "**[문제점]** SCSS 컴파일러가 `$static-white: var(--static-white);`를 평가하지 못하는 에러를 겪었습니다. **SCSS 컴파일러는 CSS 변수를 동적으로 평가할 수 없어서**, 정적 색상값으로 치환되지 않았습니다. 이에 따라, 색상 관련 SCSS 로직을 활용할 수 없었고, **모듈화된 테마 관리**가 어려웠습니다.",
          "**[해결]** rgba() 값을 반환하는 **SCSS 헬퍼 함수**를 작성했습니다. 함수 내부에서 기본 색상값을 SCSS 변수로 처리하고, 동적인 투명도를 조합하도록 설정했습니다.",
          "**[성과]** 색상 값을 SCSS 로직 내에서 안전하게 활용 가능합니다. SCSS 변수의 VS Code 자동완성 기능을 통해 **휴먼 에러를 방지**하고, **작업 속도**를 높임. **코드 재사용성과 일관성**이 향상되었습니다.",
        ],
      },
      {
        id: "trouble-2",
        title: "UI 테스트",
        contents: [
          "**[문제점]** 기존 UI 테스트는 별도의 **테스트 페이지**를 만들어 각 컴포넌트를 테스트 케이스별로 나열하여 검증했습니다. 하지만 이 방식은 테스트 페이지를 **개발할 때마다 새롭게 코드 작업이 필요**해 개발 시간이 증가했고, UI 변경 사항에 따라 **문서화(노션 등) 작업을 수동**으로 진행해 공수가 이중으로 들었습니다.",
          "**[해결]** **Storybook을 도입**하여 **컴포넌트 UI 테스트 환경을 자동화**하고 **문서화를 통합**했습니다. 각 컴포넌트를 독립적으로 렌더링하여 테스트 가능한 환경을 구축하고 Docs 탭을 활용해 자동으로 문서화가 이루어지도록 설정했습니다.",
          "**[성과]** UI 테스트 및 문서화 공수를 약 **50% 이상 절감**, 문서화 자동화로 **테스트 페이지 관리 필요성을 제거**했습니다.",
        ],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "모든 걸 직접 만들 필요는 없다: 실용적인 개발 태도 배우기",
        contents: [
          "개발 환경의 일관성과 효율성을 높이려면, 단순한 코드 재사용을 넘어 체계적인 디자인 시스템 구축이 필수적임을 깨달았습니다. 기존에는 Props를 미리 정의한 후 구현하는 방식을 따랐지만, UI를 구축하면서 필요한 Props를 점진적으로 정의하는 방식으로 전환했습니다. 이를 통해 UI 설계와 구현 과정에서 **확장성을 제한하지 않는 유연한 접근 방식**을 익힐 수 있었습니다.",
          "하지만 혼자 작업을 진행하다 보니 **시간과 체력의 한계**를 느끼게 되었고, 이는 ‘모든 것을 직접 구현해야 한다’는 내 개발 성향에서 비롯되었다고 생각했습니다. 이를 극복하기 위해 **라이브러리 활용도를 높이되, 지나친 의존은 피하고자** 노력했습니다. 특히, 라이브러리를 도입할 때는 유지보수가 활발하게 이루어지고 있는지, 프로젝트에 적합한지를 신중히 검토하는 과정을 거쳤습니다. 이를 통해 실무에서 선배 개발자들이 라이브러리 선택에 신중했던 이유를 깊이 이해할 수 있었습니다.",
        ],
      },
      {
        id: "learning-2",
        title: "",
        contents: [
          "또한, Atomic UI를 구축하면서 재사용성을 높이기 위한 **이벤트 주입**, 데이터 타입 안정화를 위한 **조건부 타입**, UI 테스트를 위한 **Storybook 활용** 등의 실무적인 기술을 경험할 수 있었습니다. 이 프로젝트는 단순한 UI 구현을 넘어, 유지보수성과 안정성을 고려한 **개발 환경 개선의 중요성**을 직접 체감할 수 있었던 의미 있는 경험이었습니다.",
        ],
      },
    ],
    links: {
      blog: [
        {
          id: "blog-link-1",
          title: "원티드 디자인 가이드 레퍼런스",
          content:
            "https://www.figma.com/design/Jz7iNlO1TT6WZlwIXTZixr/Wanted-Design-Library-(Community)?node-id=1173-12995&t=IxwhaPXh8Q5QJeYn-0",
        },
      ],
      github: "https://github.com/inhye94/react-design-system.git",
      deploy:
        "https://672b99b618065f759d3ae16e-lyfkzljnvx.chromatic.com/?path=/docs/atoms-avatar--docs",
    },
  },
  {
    id: "project-id-6",
    title: "Chat App과 Cyber AirConditioner",
    period: "2024.07.10 ~ 2024.7.30",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://github.com/user-attachments/assets/1e29d2a7-953f-4b17-86ab-61d067f73297",
    stacks: [
      { id: "stack-1", title: "React" },
      { id: "stack-2", title: "Node.js" },
      { id: "stack-3", title: "JavaScript" },
      { id: "stack-4", title: "Express" },
      { id: "stack-5", title: "socket.io" },
      { id: "stack-6", title: "Yarn" },
    ],
    highlights: [
      { id: "highlight-1", content: "React와 Socket.io를 이용한 채팅 페이지" },
      {
        id: "highlight-2",
        content:
          "실무에서 실시간 알림에 Socket.io를 사용하지 못했던 것이 아쉬워서 제작",
      },
      {
        id: "highlight-3",
        content:
          "Socket.io 사용하여 다른 유저와 실시간으로 상호작용 가능한 UI 구현",
      },
      {
        id: "highlight-4",
        content:
          "node.js 소스 코드에 발생한 변경을 감지하고, 자동으로 서버 재시작 하기위해 Nodemon 사용",
      },
      {
        id: "highlight-5",
        content:
          "Concurrently 방식으로 백엔드/프론트엔드 코드를 동시에 실행하여 작업 효율성 개선",
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "서버와 클라이언트 동시 배포 문제 해결 및 배포 전략 변경",
        contents: [
          "**[문제점]** `concurrently`를 사용해 서버와 클라이언트를 하나로 묶어 배포하려 했으나, 빌드 과정에서 오류가 발생했습니다.",
          "**[해결]** 서버와 클라이언트를 함께 배포할 수 없다는 점을 확인한 후, 서버는 **fly.io**, 클라이언트는 **Netlify**에 각각 배포하여 문제를 해결했습니다.",
          "**[성과]** 배포 환경을 분리함으로써 안정적인 서비스 운영이 가능해졌으며, 각각의 플랫폼에서 최적화된 배포를 수행할 수 있게 되었습니다.",
        ],
      },
      {
        id: "trouble-2",
        title: "서버 배포 후 502 오류 해결 및 설정 최적화",
        contents: [
          "**[문제점]** 서버 배포에 성공했으나, 502 에러가 발생했습니다.",
          "**[해결]** 서버 과부하나 네트워크 문제가 아님을 확인한 후, 서버 설정에서 서로 다른 포트 값이 지정되어 있음을 발견했습니다. 이를 동일한 값으로 수정하여 문제를 해결했습니다.",
          "**[성과]** 배포 서비스에서 사용량을 분석하며 네트워크 및 과부하 문제가 아님을 확인하는 과정에서 **실시간 모니터링의 중요성**을 배우는 계기가 되었습니다",
        ],
      },
      {
        id: "trouble-3",
        title: "배포 후 새로고침 오류 해결을 위한 라우팅 설정 개선",
        contents: [
          "**[문제점]** 배포 후 새로고침하거나 링크로 직접 접근하면 오류가 발생했습니다.",
          "**[해결]** Client-side routing을 지원하기 위해 **public 폴더**에 `_redirects` 설정을 추가하여 경로 문제를 해결했습니다.",
          "**[성과]** 새로고침 및 직접 접근 시에도 정상적으로 페이지가 로드되며, 원활한 사용자 경험을 제공할 수 있게 되었습니다. 또한, **사용자가 되어 다양한 접근 방식을 직접 시도하며 테스트한 경험을 통해, 예상치 못한 오류를 미리 발견하고 대응할 수 있는 능력을 기를 수 있었습니다.**",
        ],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "",
        contents: [
          "서버 작업은 처음이었고 우여곡절이 많았습니다. 환경 설정부터 배포까지 모든 과정에 에러가 발행했기 때문이니다. 중간에 포기하고 싶은 마음도 들었지만 그럼에도 불구하고 프로젝트를 끝까지 마무리한 이유는, 실무에서의 실패경험 때문이었습니다. 실무 개발 환경에서 Socket.io의 차선책으로 설정 시간이 지나면 알림 API를 호출하는 방식으로 구현했지만 실시간 상호작용을 구현하지 못한 것에 대해 큰 아쉬움이 남았기 때문입니다.",
          "이대로 포기하면 실패한 경험이 쌓이지만 성공할 때까지 도전하면 실패는 과정이 될 뿐입니다. 실무에서의 실패는 이 프로젝트를 제작함으로써 성공으로 나아가는 경험이 되었습니다. 당장 눈 앞의 결과에 좌절하지 않는 태도를 기를 수 있었습니다.",
        ],
      },
    ],
    links: {
      github: "https://github.com/inhye94/socket-chat-app-client",
      deploy: "",
    },
  },
  {
    id: "project-id-7",
    title: "Super Super Glue",
    period: "2024.01.08 ~ 2024.7.25",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://github.com/user-attachments/assets/1e29d2a7-953f-4b17-86ab-61d067f73297",
    stacks: [
      { id: "stack-1", title: "React" },
      { id: "stack-2", title: "TypeScript" },
      { id: "stack-3", title: "React-query" },
      { id: "stack-4", title: "SCSS" },
      { id: "stack-5", title: "Firebase" },
      { id: "stack-6", title: "Cloudinary" },
      { id: "stack-7", title: "Yarn" },
    ],
    highlights: [
      { id: "highlight-1", content: "React 기반의 쇼핑몰 페이지" },
      {
        id: "highlight-2",
        content: "React의 컨셉을 이해하기위해 제작",
      },
      {
        id: "highlight-3",
        content:
          "데이터 유지를 위해 msw로 구현된 코드를 Firebase와 Cloudinary로 변경",
      },
      {
        id: "highlight-4",
        content: "코드 안정성을 위해 TypeScript를 도입",
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "다중 파일 업로드 유효성 검사 구현",
        contents: [
          "**[문제점]** `react-hook-form`에서 **다중 파일의 유효성 검사 기능이 기본적으로 제공되지 않는 문제**가 있었습니다.",
          "**[해결]** `useState`와 `DataTransfer`를 활용하여 **파일의 용량과 개수를 검증하는 기능을 직접 구현**했습니다.",
          "**[성과]** **필요한 기능이 라이브러리에 없다고 포기하는 것이 아니라, 직접 구현함으로써 사용자 경험을 향상**시킬 수 있었습니다. 이를 통해 사용자의 편의성을 고려한 기능을 스스로 만들어가는 과정에서 큰 성취감을 느낄 수 있었습니다.",
        ],
      },
      {
        id: "trouble-2",
        title: "Typescript 적용",
        contents: [
          "**[문제점]** `TypeScript` 마이그레이션을 진행할 때, **page 단위부터 적용하는 방식**을 선택했지만, 예상보다 많은 **산발적인 에러가 발생**하며 대응하는 데 시간이 많이 소요되었습니다.",
          "**[해결]** 에러 범위를 효과적으로 좁히기 위해 **가장 작은 단위인 component부터 순차적으로 TypeScript를 적용**하는 방식으로 변경했습니다. 이를 통해, 각 단계에서 발생하는 문제를 신속하게 발견하고 해결할 수 있었습니다.",
          "**[성과]** `TypeScript`를 적용하면서 **코드의 안정성**을 높일 수 있었을 뿐만 아니라, 에러 발생 시 빠르게 대응하는 능력도 향상되었습니다. 또한, **적절한 마이그레이션 순서**가 중요하다는 점을 실감하며, 점진적인 적용 방식의 효과를 직접 경험할 수 있었습니다.",
        ],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "백엔드 개발자와의 협업 경험",
        contents: [
          "`MSW`로 구현된 코드를 `Firebase`와 `Cloudinary`로 변경하면서, 실무에서 백엔드 개발자님과 협업했던 과정이 떠올랐습니다. 특히, **이미지 파일 등록 API를 구현하며 디렉토리 구조를 함께 설계했던 경험**이 이번 프로젝트에서 큰 도움이 되었습니다.",
          "이 경험을 통해, **실무에서 백엔드 개발자와 적극적으로 소통**하며 API 설계와 데이터 구조를 함께 고민하는 것이 얼마나 중요한지 다시 한번 깨닫게 되었습니다. 또한, **서로의 역할을 존중하며 협업하는 과정 자체가 즐겁고 의미 있는 경험**이라는 것을 배울 수 있었습니다.",
        ],
      },
      {
        id: "learning-2",
        title: "Git flow 전략의 중요성",
        contents: [
          "실무에서처럼 프로젝트에 Git flow 전략을 도입했습니다. 이를 통해 **버전 관리의 중요성**을 깨달을 수 있었으며, **코드의 안정성을 높이고 협업을 위한 환경을 구축**할 수 있었습니다. 덕분에 커밋 메시지를 통해 **코드 변경 이유와 내용을 명확히 전달**할 수 있었습니다.",
          "대신, 프로젝트의 규모가 작다보니 **Git flow 전략을 적용하는 데에 시간이 많이 소요**되었습니다. 이를 통해 **프로젝트 규모에 따라 적절한 Git flow 전략을 선택**해야 한다는 점을 배울 수 있었습니다.",
        ],
      },
    ],
    links: {
      github: "https://github.com/inhye94/super-super-glue",
      deploy: "",
    },
  },
  {
    id: "project-id-8",
    title: "Duetube",
    period: "2023.12.26 ~ 2024.1.09",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://github.com/user-attachments/assets/1e29d2a7-953f-4b17-86ab-61d067f73297",
    stacks: [
      { id: "stack-1", title: "React" },
      { id: "stack-2", title: "React-query" },
      { id: "stack-3", title: "TailwindCSS" },
      { id: "stack-4", title: "Yarn" },
    ],
    highlights: [
      { id: "highlight-1", content: "React 기반의 Youtube 클론 페이지" },
      {
        id: "highlight-2",
        content: "실무에서 부족했던 데이터 전처리 코드를 개선하기위해 제작",
      },
      {
        id: "highlight-3",
        content:
          "데이터 Fetching 매커니즘을 React-query로 대체하여 코드 안정성 개선",
      },
      {
        id: "highlight-4",
        content: "TailwindCSS를 사용해서 일관된 UI/UX 구현",
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "다크모드 상태 저장",
        contents: [
          "**[문제점]** `Context`를 활용해 다크모드를 구현했으나, 페이지를 새로고침하거나 재진입할 때마다 상태가 초기화되는 문제가 발생했습니다.",
          "**[해결]** 서버를 활용한 상태 저장도 고려했지만, **간단한 UI 설정 값**을 위해 네트워크 통신까지 사용할 필요는 없다고 판단했습니다. 대신, **localStorage를 활용하여 다크모드 상태를 저장**하고, 페이지 로드 시 저장된 값을 불러오도록 구현했습니다.",
          "**[성과]** **페이지 새로고침과 관계없이 다크모드 상태를 유지**할 수 있어 사용자 경험이 향상되었습니다. 이를 통해 **상태 관리를 다양한 방식으로 구현**할 수 있다는 점을 인지할 수 있었습니다.",
        ],
      },
      {
        id: "trouble-2",
        title: "데이터 Fetching 최적화",
        contents: [
          "**[문제점]** 동일한 검색어가 입력될 때마다 **불필요한 API 호출**이 발생하여 성능 저하와 네트워크 비용 증가 문제가 있었습니다.",
          "**[해결]** `useState`와 `useRef`의 차이를 인지하고, useRef를 활용해 **이전 검색어를 저장**한 뒤 현재 검색어와 비교하여 동일한 경우에는 API 호출을 방지하도록 구현했습니다.",
          "**[성과]** 동일한 검색어에 대한 불필요한 API 호출을 줄여 네트워크 비용을 절감할 수 있었습니다.",
        ],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "",
        contents: [
          "실무에서 `fetch` 사용 시 `null` 체크와 `loading` 처리를 위한 코드가 많아지면서 가독성이 떨어지는 문제가 있었습니다. 또한, 모듈의 `import/export` 개념을 제대로 숙지하지 못해 불필요한 중복 코드가 많았습니다.",
          "이러한 부족함을 인정하고 개선하기 위해 `then` 체이닝을 활용하여 데이터 Fetching을 구현해 보았고, 이를 계기로 **React Query를 사용하면 코드의 가독성과 안정성을 더욱 높일 수 있다는 것을 깨달았습니다.** React Query를 도입하면서 **데이터 Fetching 로직을 분리**하여 코드의 가독성을 개선할 수 있었으며, **Fetching 로직을 중앙화**함으로써 코드의 안정성도 높일 수 있었습니다.",
        ],
      },
    ],
    links: {
      github: "https://github.com/inhye94/socket-chat-app-client",
      deploy: "",
    },
  },
];
