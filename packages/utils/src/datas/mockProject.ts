import type { IProjectItem } from "@workspace/utils/types";

export const projects: IProjectItem[] = [
  {
    id: "project-id-1",
    title: "Portfolio (Mono-Repo)",
    period: "2025.01.06 ~ 진행중",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://res.cloudinary.com/dn9hy4vyn/image/upload/v1740752226/home_portfolio_nozs1e.png",
    stacks: [
      { id: "stack-1", title: "NextJS", content: "next" },
      { id: "stack-2", title: "React", content: "react" },
      { id: "stack-3", title: "TypeScript", content: "typescript" },
      { id: "stack-4", title: "TailwindCSS", content: "tailwindcss" },
      { id: "stack-5", title: "Husky", content: "husky" },
      { id: "stack-6", title: "PNPM", content: "pnpm" },
    ],
    description:
      "Next.js 기반으로 제작된 개인 포트폴리오 페이지입니다.\n\n**정적인 PDF가 아닌, “내가 어떤 사람인지”를 직관적으로 보여주기** 위한 목적으로 제작되었으며, motion 효과와 커스텀 폴더 구조, 커밋 관리 자동화 등 다양한 프론트엔드 실험을 적용해보았습니다.",
    highlights: [
      {
        id: "highlight-1",
        content: "motion 라이브러리로 부드러운 인터랙션 구현",
      },
      {
        id: "highlight-2",
        content: "스크롤 메뉴를 위한 custom context hook 구성",
      },
      {
        id: "highlight-3",
        content:
          "모노레포 구조에 맞춘 커밋 컨벤션 자동화 (husky + lint-staged)",
      },
      {
        id: "highlight-4",
        content: "iconMap과 React.lazy를 활용한 아이콘 최적화",
      },
    ],
    uxImprovements: [
      {
        id: "improvement-1",
        title: "카드형 UI 도입",
        contents: [
          "**[문제점]** 기존 포트폴리오는 **리스트 형태**로 구성되어, 스크롤을 내리지 않으면 사용자들이 프로젝트의 정보를 빠르게 파악하기 어려웠습니다.",
          "**[해결]** **카드형 UI**로 핵심 정보(이름, 기술 스택, 활동 시간)를 한눈에 보이게 배치했습니다.",
          "**[성과]** 사용자들이 스크롤 없이도 **정보를 빠르게 파악**할 수 있었습니다. 또한, **모바일에서 가독성이 개선**되었습니다.",
        ],
      },
      {
        id: "improvement-2",
        title: "인트로 문구 추가",
        contents: [
          "**[문제점]** 초기 포트폴리오에는 **텍스트 위주로 정리**되어 있어 내가 어떤 성향의 개발자인지가 한눈에 보이지 않았습니다.",
          "**[해결]** **인트로 문구를 상단에 배치**해서 제가 지향하는 개발자상을 짧고 명확하게 전달했습니다. 또한 motion 효과를 도입해 부드럽게 시선을 유도하도록 구성했습니다.",
          "**[성과]** 방문자는 인트로를 통해 “이 개발자는 뭘 중요하게 생각하는지”를 **5초 안에 파악**할 수 있게 되었습니다.",
        ],
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "커밋 컨벤션 문제",
        contents: [
          "**[문제점]** 모노레포의 규모가 조금씩 커짐에 따라 **커밋 내용의 일관성 유지가 어려웠습니다.**",
          "**[해결]** `husky`를 활용해 커밋 전에 **lint, 타입 검사, 커밋 메시지 체크**를 수행했습니다",
          "**[성과]** **커밋 로그의 일관성**을 유지하고, linter의 자동 적용으로 코드 스타일이 통일되었습니다.",
        ],
      },
      {
        id: "trouble-2",
        title: "아이콘 최적화",
        contents: [
          "**[문제점]** **SVG 출력 방식**은 아이콘이 늘어날수록 확장성과 유지보수가 어려워졌습니다.",
          "**[해결]** **`react-icons` 라이브러리 + `iconMap` 객체 + `React.lazy` 구조**로 개선했습니다. **dynamic import**를 적용하여 사용할 때만 아이콘을 로드하도록 구현했습니다.",
          "**[성과1]** 동적 import로 인해 브라우저에 캐싱되어 중복 다운로드를 방지하고 **로딩 속도가 개선**되었습니다.",
          "**[성과2]** 아이콘 라이브러리 변경이 쉬워졌습니다. 다른 아이콘 라이브러리로 변경하고자 한다면, 아이콘 매핑 테이블(iconMap)만 수정하면 됩니다.",
        ],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "사용자 맞춤형 UI/UX 설계",
        contents: [
          "단순히 정보를 나열하는 방식은 사용자 경험을 저해할 수 있다는 점을 직접 체감하게 되었습니다.",
          "사용자 피드백을 바탕으로 **단시간에 “내가 어떤 사람인지”를 직관적으로 이해하고 싶어한다는 니즈**를 확인했습니다. 이에 따라, **카드형 UI 도입**과 **인트로 문구의 상단 배치**를 통해 정보 전달 방식을 재구성했습니다. 이러한 시도 덕분에 **제가 지향하는 개발자상을 짧고 명확하게 전달**할 수 있었고, 실제로 서류 합격률이 2% 상승하는 성과로 이어졌습니다.",
          "이 경험을 통해 단순한 정보 제공이 아닌, **사용자가 페이지에서 얻고자 하는 바를 중심에 두고 UI/UX를 설계**해야 한다는 중요한 교훈을 얻게 되었습니다. 앞으로도 사용자 관점에서의 설계를 최우선으로 고민할 것입니다.",
        ],
      },
      // {
      //   id: "learning-2",
      //   title: "상추 프랙탈 구조에서 착안한 폴더 구조 적용 경험",
      //   contents: [
      //     "밥을 먹다가 우연히 상추의 프렉탈 구조를 발견하곤 프로젝트에 적용해보았습니다. 예를들어, 공용 컴포넌트는 `src/components` 폴더에 저장하고, 특정 기능에만 사용되는 컴포넌트는 `src/feature/[기능]/components` 폴더에 저장했습니다.",
      //     "덕분에 **기능별/공용 컴포넌트를 명확히 분리**하여 유지보수성 향상 되었습니다. 이 경험을 통해 방법론을 무조건 따르기보다는, **예측 가능한 구조가 중요하다**는 깨달음을 얻었습니다.",
      //     "주변에서 얻은 인사이트를 실험적으로 프로젝트에 적용하며, 수직/수평 방향으로 균형있게 확장되는 구조를 만들어 보고자 합니다.",
      //   ],
      // },
    ],
    links: {
      blog: [
        {
          id: "blog-link-1",
          title: "모노레포 PNPM으로 구성하기 - husky + commitlint",
          content:
            "https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-husky-commitlint",
        },
        {
          id: "blog-link-2",
          title: "모노레포 PNPM으로 구성하기 - 환경변수",
          content:
            "https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98",
        },
      ],
      github:
        "https://github.com/inhye94/pnpm-next-monorepo/tree/main/apps/portfolio",
      deploy: "https://inhye-portfolio.vercel.app/",
    },
  },
  {
    id: "project-id-2",
    title: "Design-system (Mono-Repo)",
    period: "2024.12.23 ~ 진행중",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://res.cloudinary.com/dn9hy4vyn/image/upload/v1740750645/storybook_design-system-mono_dgdxia.png",
    stacks: [
      { id: "stack-1", title: "Vite", content: "vite" },
      { id: "stack-2", title: "React", content: "react" },
      { id: "stack-3", title: "TypeScript", content: "typescript" },
      { id: "stack-4", title: "Radix UI", content: "radix" },
      { id: "stack-5", title: "TailwindCSS", content: "tailwindcss" },
      { id: "stack-6", title: "Storybook", content: "storybook" },
      { id: "stack-7", title: "PNPM", content: "pnpm" },
    ],
    description:
      "React 기반의 **디자인 시스템**을 제작하여 모노레포 구조의 다양한 프로젝트에서 **일관된 UI/UX**를 구현할 수 있도록 구성했습니다. 컴포넌트 단위의 재사용성과 TailwindCSS의 안정성을 중점적으로 고려했습니다.",
    highlights: [
      {
        id: "highlight-1",
        content: "TailwindCSS Tree-Shaking 및 상속 이슈 대응",
      },
      {
        id: "highlight-2",
        content: "Figma의 AI 기능을 활용한 디자인 가이드 자동화",
      },
      {
        id: "highlight-3",
        content: "CCP 패턴으로 구성된 Radix UI 모달 컴포넌트",
      },
    ],
    uxImprovements: [],
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
        title: "Figma AI 기능의 생산성",
        contents: [
          "운 좋게 친구의 **Figma Dev 모드**를 체험할 수 있었습니다. 덕분에 디자인 가이드에 필요한 token(color, text 등)을 몇 번의 클릭으로 손쉽게 추출할 수 있었습니다. 기존에 SCSS로 작업할 때는 색상 토큰 추출 및 테마 구현에 하루가 소요되었지만, **Figma의 강력한 AI 기능 덕분에 단순 반복 작업을 생략**할 수 있었습니다.",
          "이 경험을 통해, AI의 생산성은 개발자의 창의적이고 전략적인 작업을 도와준다는 것을 깨닫게 되었습니다. 새롭게 나오는 AI 툴에 열린 마음으로 다가가게 된 계기가 되었습니다.",
        ],
      },
      {
        id: "learning-2",
        title: "확장이 용이한 디자인 시스템 제작",
        contents: [
          "디자인 시스템은 **디자인 일관성**뿐만 아니라 **도입 및 확장 용이성**까지 고려해야 한다는 점을 깨달았습니다. 특히, Radix UI의 모달 컴포넌트를 CCP 패턴으로 구현하면서, **부모나 조상에게 구조 결정을 위임**함으로써 내부 구조의 자율성을 높이고, 재사용성을 극대화할 수 있었습니다.",
          "그리고 Context를 이용해 상태를 주입하는 방식으로 Modal과 Toast를 구현했습니다. 이로 인해 **상태 관리가 용이해졌고, 컴포넌트 간의 의존성을 줄일 수 있었습니다.**",
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
        {
          id: "blog-link-4",
          title: "모노레포 PNPM으로 구성하기 - storybook",
          content:
            "https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-storybook",
        },
      ],
      github:
        "https://github.com/inhye94/pnpm-next-monorepo/tree/main/packages/design-system",
      deploy:
        "https://67875cd86620d78844d43146-dzvstjnmho.chromatic.com/?path=/docs/components-textfield--docs",
    },
  },
  // {
  //   id: "project-id-3",
  //   title: "원티드 프리온보딩 11월 사전과제",
  //   period: "2024.11.14 ~ 2024.12.21",
  //   team: "개인 프로젝트",
  //   thumbnailUrl:
  //     "https://res.cloudinary.com/dn9hy4vyn/image/upload/v1740751251/detail_preonboarding-todos_iv3sr1.png",
  //   stacks: [
  //     { id: "stack-1", title: "Vite" },
  //     { id: "stack-2", title: "React" },
  //     { id: "stack-3", title: "TypeScript" },
  //     { id: "stack-4", title: "Zustand" },
  //     { id: "stack-5", title: "Tanstack Query" },
  //     { id: "stack-6", title: "Emotion" },
  //     { id: "stack-7", title: "PNPM" },
  //   ],
  //   description: "",
  //   highlights: [
  //     { id: "highlight-1", content: "React 기반의 To do list 페이지" },
  //     {
  //       id: "highlight-3",
  //       content: "기존의 방식에서 벗어나 새로운 방식을 시도하기 위해 제작",
  //     },
  //     {
  //       id: "highlight-2",
  //       content:
  //         "redirect를 페이지 진입하기 전에 처리하기위해 React-router의 loader 패턴을 도입",
  //     },
  //     {
  //       id: "highlight-4",
  //       content:
  //         "백엔드와 프론트엔드 코드를 하나의 레포에서 관리하기 위해 모노레포 도입",
  //     },
  //     {
  //       id: "highlight-5",
  //       content:
  //         "모노레포 Workspace의 TS 버전 에러와 dependencies의 버전 충돌로 인해 패키지 매니저 변경 (Yarn berry > PNPM)",
  //     },
  //   ],
  //   uxImprovements: [],
  //   troubleShooting: [
  //     {
  //       id: "trouble-1",
  //       title: "react-router loader와 tanstackQuery 캐싱",
  //       contents: [
  //         "**[문제점]** `react-router`의 `loader`를 활용해 데이터를 패칭할 수 있다는 점을 알게 되었지만, **TS 파일에서 구현된 `loader` 내부에서는 `useQueryClient` 훅을 사용할 수 없는 문제**가 발생했습니다.",
  //         "**[해결]** `loader`의 매개변수에 **`queryClient`를 주입하는 방식**으로 문제를 해결하여 데이터 캐싱을 효과적으로 활용할 수 있도록 개선했습니다.",
  //         "**[성과]** 데이터 패칭 및 캐싱 최적화를 통해 **애플리케이션의 성능을 개선**했으며, 파일 단위로 로직을 분리함으로써 유지보수성을 크게 향상시킬 수 있었습니다. 이를 통해 **다양한 최적화 방식과 아키텍처 설계의 중요성을 체감**하는 계기가 되었습니다.",
  //       ],
  //     },
  //     {
  //       id: "trouble-2",
  //       title: "Emotion 스타일링과 타입 일관성 유지",
  //       contents: [
  //         "**[문제점]** `emotion`을 사용하면서 **스타일 관련 props 값의 일관성을 유지하는 것이 어려웠고**, 타입을 수동으로 관리해야 하는 불편함이 있었습니다.",
  //         "**[해결]** 스타일 객체를 생성하고, `keyof`와 `typeof`를 활용하여 **타입이 자동으로 갱신**되도록 구현했습니다. 이를 통해 컴포넌트의 props를 보다 효율적으로 관리할 수 있도록 개선했습니다.",
  //         "**[성과]** 코드의 안정성과 일관성을 높였으며, 타입이 자동으로 갱신됨에 따라 **스타일 관리의 효율성도 크게 향상**되었습니다.",
  //       ],
  //     },
  //     {
  //       id: "trouble-3",
  //       title: "모노레포 환경에서 Ghost Dependency 문제",
  //       contents: [
  //         "**[문제점]** 모노레포를 `Yarn Berry`로 구현하는 과정에서 **workspace 내 TypeScript 버전 충돌 및 패키지 의존성 관리 문제가 발생**했습니다. 이는 **Yarn Berry의 호이스팅 방식으로 인해 `Ghost Dependency`가 생성된 것이 원인**이었습니다.",
  //         "**[해결]** 패키지 매니저를 **`pnpm`으로 변경하여 의존성 문제를 해결**하고, workspace의 패키지들이 일관된 환경에서 동작하도록 설정했습니다.",
  //         "**[성과]** **의존성 관리가 한층 안정적**으로 이루어졌으며, 모노레포 환경에서의 개발 생산성을 크게 향상시킬 수 있었습니다. 이를 통해 패키지 매니저별 의존성 처리 방식의 차이를 이해하고, 적절한 도구 선택이 중요하다는 점을 실감할 수 있었습니다.",
  //       ],
  //     },
  //   ],
  //   learnings: [
  //     {
  //       id: "learning-1",
  //       title: "편안함을 넘어 새로운 패턴으로: CCP, FSD, 그리고 구조적 설계",
  //       contents: [
  //         "기존에는 주로 UI 라이브러리를 활용해 toast와 모달을 구현했지만, 직접 구현하면서 간단한 **state 주입에는 context가 적합하다**는 점을 깨달았습니다. 특히 Radix UI의 Dialog 구현 코드를 분석하며 **CCP 패턴**을 발견하고, 이를 활용해 직접 모달을 구현하며 컴포넌트의 **부모나 조상에게 구조 결정을 위임**함으로써 내부 구조의 자율성을 높이고, 재사용성을 극대화할 수 있음을 알게 되었습니다. 또한, props를 기반으로 return 컴포넌트를 결정할 때 발생하던 중복 코드를 CCP 패턴으로 효과적으로 줄일 수 있었습니다.",
  //         "개발을 처음 시작했을 때 만들었던 프로젝트는 간단한 todos 앱이었습니다. 그때 늦은 밤까지 눈을 반짝이며 코드를 짜던 설렘을 다시금 느낄 수 있는 경험이었습니다. 새로운 시도(emotion, 모노레포, loader, vite, CCP 패턴, FSD 디렉토리 구조 등)를 하면서, 익숙하고 편안한 방식에 안주하지 않고 꾸준히 새로운 개념을 접하고 적용하는 것이 얼마나 중요한지 다시 한 번 깨달았습니다.",
  //       ],
  //     },
  //   ],
  //   links: {
  //     github: "https://github.com/inhye94/react-todos-monorepo",
  //   },
  // },
  {
    id: "project-id-4",
    title: "시각 콘텐츠 검색 페이지",
    period: "2024.10.01 ~ 2024.10.11",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://res.cloudinary.com/dn9hy4vyn/image/upload/v1740750987/home_ott-search_maqwhs.png",
    stacks: [
      { id: "stack-1", title: "NextJS", content: "next" },
      { id: "stack-2", title: "React", content: "react" },
      { id: "stack-3", title: "TypeScript", content: "typescript" },
      { id: "stack-4", title: "Lighthouse", content: "lighthouse" },
      { id: "stack-5", title: "Tanstack Query", content: "tanstack" },
      { id: "stack-6", title: "Module CSS", content: "css" },
      { id: "stack-7", title: "Yarn berry", content: "yarn" },
    ],
    description:
      "Next.js 기반으로 제작한 콘텐츠 검색 웹 애플리케이션입니다. \n\n시각 콘텐츠를 손쉽게 찾고, 어떤 OTT에서 볼 수 있는지 한눈에 확인하기 위한 목적으로 제작했습니다. \n\n검색 최적화, API 효율화, 성능 개선에 중점을 두고 제작했습니다.",
    highlights: [
      { id: "highlight-1", content: "실시간 검색 기능 구현 (debounce 적용)" },
      {
        id: "highlight-2",
        content: "Lighthouse 기반 성능 점검",
      },
    ],
    uxImprovements: [
      {
        id: "improvement-1",
        title: "검색 중심 인터페이스로 구조 개편",
        contents: [
          "**[문제점]** OTT 검색은 사용자 입장에서 “내가 원하는 콘텐츠가 어디 있는지”를 빠르게 알고 싶어서 들어오는 서비스인데, **초기 화면**에서는 너무 많은 리스트와 검색 UI가 한 번에 보이며 **혼란스러웠습니다.**",
          "**[해결]** **검색 중심 인터페이스로 구조를 개편**했습니다. 검색어 입력 → 실시간 결과 확인 → 상세 페이지까지 자연스러운 흐름으로 **UX를 단순화**했고, 검색 결과가 없을 경우에도 부드러운 fallback 메시지를 제공해 이탈을 줄였습니다.",
          "**[성과]** “검색”이라는 핵심 기능에 집중하게 되어, 사용자는 최소 클릭으로 콘텐츠 위치를 파악할 수 있게 되었고, **처음 써본 사람도 바로 쓸 수 있는 검색 경험**을 만들 수 있었습니다.",
        ],
      },
      {
        id: "improvement-2",
        title: "Lighthouse 성능 점검",
        contents: [
          "**[문제점]** “**페이지가 덜컹거린다**”는 피드백을 받았습니다.",
          "**[해결]** 페이지 렌더 최적화를 위해 **성능 분석 도구(Lighthouse)를 도입**하고 컴포넌트에 기본 크기를 설정했습니다.",
          "**[성과]** Lighthouse 100점을 달성했으며, **사용자 피드백을 적극 반영**하여 UI/UX를 개선하는 경험을 통해 **사용자 중심의 개발**이 얼마나 중요한지 깨달았습니다.",
        ],
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "검색 최적화",
        contents: [
          "**[문제점]** 검색 기능 최적화에서 `debounce`를 적용했음에도 불구하고 입력마다 **API가 중복 호출**되는 문제가 발생했습니다.",
          "**[해결]** **`useCallback`으로 `debounce` 함수 참조를 고정**시켜,리렌더링에도 동일 함수가 재사용되도록 구조 변경",
          "**[성과]** 중복 호출 제거로 **API 호출 비용 절감**했고, 입력 반응성이 향상되었습니다.",
        ],
      },
    ],
    learnings: [
      {
        id: "learning-1",
        title: "UX 개선의 중요성",
        contents: [
          "사용자가 페이지 내에서 **검색 인터페이스를 쉽게 찾지 못하는 문제**가 발생했고, 이는 사용자 경험 측면에서 제게 큰 충격을 주었습니다.",
          "문제를 해결하기 위해 클릭 수를 최소화하는 UI 구조를 고민했고, 사용자가 한눈에 서비스 이용 방법을 파악할 수 있도록 직관적인 인터페이스를 설계하는 데 집중했습니다. 그 결과, 빠르고 간편하게 검색할 수 있는 사용자 경험을 제공할 수 있었습니다.",
          "이 경험은 단순한 기능 구현을 넘어, **사용자가 페이지를 통해 어떤 경험을 하게 되는지**를 끊임없이 고민해야 한다는 점을 다시 한 번 깨닫는 계기가 되었습니다. 앞으로도 사용자 중심의 설계를 최우선으로 고려할 것입니다.",
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
      "https://res.cloudinary.com/dn9hy4vyn/image/upload/v1740751420/storybook_poly_design-system_tspvth.png",
    stacks: [
      { id: "stack-1", title: "React", content: "react" },
      { id: "stack-3", title: "TypeScript", content: "typescript" },
      { id: "stack-4", title: "SCSS", content: "scss" },
      { id: "stack-5", title: "Storybook", content: "storybook" },
      { id: "stack-6", title: "Radix Primitive UI", content: "radix" },
      { id: "stack-7", title: "Yarn berry", content: "yarn" },
    ],
    description:
      "실무에서 겪은 Atomic UI의 유지보수 문제를 개선하기 위해 React 기반의 디자인 시스템을 구축했습니다.\n\nRadix UI와 SCSS를 기반으로 **웹 접근성과 스타일 커스터마이징**의 유연성을 확보했으며, Storybook을 통해 **테스트 환경과 문서화 환경을 통합**하여 생산성을 높였습니다.",
    highlights: [
      {
        id: "highlight-1",
        content: "Headless 컴포넌트 라이브러리(Radix Primitive) 기반 UI 설계",
      },
      {
        id: "highlight-2",
        content: "웹 접근성과 스타일 재정의 기능 중심 설계",
      },
      {
        id: "highlight-3",
        content: "SCSS 내 동적 색상 처리 로직 구현",
      },
      {
        id: "highlight-4",
        content: "Storybook 기반 테스트/문서화 통합",
      },
    ],
    uxImprovements: [],
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
          "혼자 작업을 진행하다 보니 **시간과 체력의 한계**를 느꼈습니다. 이는 ‘모든 것을 직접 구현해야 한다’는 내 개발 성향에서 비롯되었다고 생각합니다.",
          "이를 극복하기 위해 **라이브러리 활용도를 높이되, 지나친 의존은 피하고자** 노력했습니다. 특히, 라이브러리를 도입할 때는 유지보수가 활발하게 이루어지고 있는지, 프로젝트에 적합한지를 신중히 검토하는 과정을 거쳤습니다. 이를 통해 실무에서 선배 개발자들이 라이브러리 선택에 신중했던 이유를 깊이 이해할 수 있었습니다.",
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
  // {
  //   id: "project-id-6",
  //   title: "Chat App과 Cyber AirConditioner",
  //   period: "2024.07.10 ~ 2024.7.30",
  //   team: "개인 프로젝트",
  //   thumbnailUrl:
  //     "https://res.cloudinary.com/dn9hy4vyn/image/upload/v1740751985/chat_chat-app_yza5l6.png",
  //   stacks: [
  //     { id: "stack-1", title: "React", content: "react" },
  //     { id: "stack-2", title: "Node.js", content: "node" },
  //     { id: "stack-3", title: "JavaScript", content: "javascript" },
  //     { id: "stack-4", title: "Express", content: "express" },
  //     { id: "stack-5", title: "socket.io", content: "socket" },
  //     { id: "stack-6", title: "Yarn", content: "yarn" },
  //   ],
  //   description:
  //     "실무에서 Socket.io 기반의 실시간 알림 기능을 도입하지 못했던 아쉬움을 바탕으로, React + Socket.io 환경에서 **실시간 상호작용이 가능한 채팅 애플리케이션**을 제작했습니다.\n\n초기부터 서버와 클라이언트를 분리하여 구조화했으며, 실시간 UX를 고려해 다양한 사용자 접근 방식에 대응할 수 있도록 라우팅 설정과 배포 전략을 개선했습니다.",
  //   highlights: [
  //     {
  //       id: "highlight-1",
  //       content: "Socket.io 기반의 실시간 채팅 인터페이스 구현",
  //     },
  //     {
  //       id: "highlight-2",
  //       content: "Nodemon과 concurrently를 활용한 개발 효율성 확보",
  //     },
  //     {
  //       id: "highlight-3",
  //       content: "Fly.io & Netlify를 활용한 서버-클라이언트 분리 배포",
  //     },
  //   ],
  //   uxImprovements: [],
  //   troubleShooting: [
  //     {
  //       id: "trouble-1",
  //       title: "서버와 클라이언트 동시 배포 문제 해결 및 배포 전략 변경",
  //       contents: [
  //         "**[문제점]** `concurrently`를 사용해 서버와 클라이언트를 하나로 묶어 배포하려 했으나, 빌드 과정에서 오류가 발생했습니다.",
  //         "**[해결]** 서버와 클라이언트를 함께 배포할 수 없다는 점을 확인한 후, 서버는 **fly.io**, 클라이언트는 **Netlify**에 각각 배포하여 문제를 해결했습니다.",
  //         "**[성과]** 배포 환경을 분리함으로써 안정적인 서비스 운영이 가능해졌으며, 각각의 플랫폼에서 최적화된 배포를 수행할 수 있게 되었습니다.",
  //       ],
  //     },
  //     {
  //       id: "trouble-2",
  //       title: "서버 배포 후 502 오류 해결 및 설정 최적화",
  //       contents: [
  //         "**[문제점]** 서버 배포에 성공했으나, 502 에러가 발생했습니다.",
  //         "**[해결]** 서버 과부하나 네트워크 문제가 아님을 확인한 후, 서버 설정에서 서로 다른 포트 값이 지정되어 있음을 발견했습니다. 이를 동일한 값으로 수정하여 문제를 해결했습니다.",
  //         "**[성과]** 배포 서비스에서 사용량을 분석하며 네트워크 및 과부하 문제가 아님을 확인하는 과정에서 **실시간 모니터링의 중요성**을 배우는 계기가 되었습니다",
  //       ],
  //     },
  //     {
  //       id: "trouble-3",
  //       title: "배포 후 새로고침 오류 해결을 위한 라우팅 설정 개선",
  //       contents: [
  //         "**[문제점]** 배포 후 새로고침하거나 링크로 직접 접근하면 오류가 발생했습니다.",
  //         "**[해결]** Client-side routing을 지원하기 위해 **public 폴더**에 `_redirects` 설정을 추가하여 경로 문제를 해결했습니다.",
  //         "**[성과]** 새로고침 및 직접 접근 시에도 정상적으로 페이지가 로드되며, 원활한 사용자 경험을 제공할 수 있게 되었습니다. 또한, **사용자가 되어 다양한 접근 방식을 직접 시도하며 테스트한 경험을 통해, 예상치 못한 오류를 미리 발견하고 대응할 수 있는 능력을 기를 수 있었습니다.**",
  //       ],
  //     },
  //   ],
  //   learnings: [
  //     {
  //       id: "learning-1",
  //       title: "실무에서의 실패 경험을 극복한 프로젝트",
  //       contents: [
  //         "서버 작업은 처음이었고 우여곡절이 많았습니다. 환경 설정부터 배포까지 모든 과정에 에러가 발행했기 때문이니다. 중간에 포기하고 싶은 마음도 들었지만 그럼에도 불구하고 프로젝트를 끝까지 마무리한 이유는, 실무에서의 실패경험 때문이었습니다. 실무 개발 환경에서 Socket.io의 차선책으로 설정 시간이 지나면 알림 API를 호출하는 방식으로 구현했지만 실시간 상호작용을 구현하지 못한 것에 대해 큰 아쉬움이 남았기 때문입니다.",
  //         "이대로 포기하면 실패한 경험이 쌓이지만 성공할 때까지 도전하면 실패는 과정이 될 뿐입니다. 실무에서의 실패는 이 프로젝트를 제작함으로써 성공으로 나아가는 경험이 되었습니다. 당장 눈 앞의 결과에 좌절하지 않는 태도를 기를 수 있었습니다.",
  //       ],
  //     },
  //   ],
  //   links: {
  //     github: "https://github.com/inhye94/socket-chat-app-client",
  //     deploy: "https://socket-chat-app-client.vercel.app/",
  //   },
  // },
  {
    id: "project-id-7",
    title: "쇼핑몰 페이지",
    period: "2024.01.08 ~ 2024.7.25",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://res.cloudinary.com/dn9hy4vyn/image/upload/v1740750255/home_suer-super-glue_tmjhxx.png",
    stacks: [
      { id: "stack-1", title: "React", content: "react" },
      { id: "stack-2", title: "TypeScript", content: "typescript" },
      { id: "stack-3", title: "Tanstack-query", content: "tanstack" },
      { id: "stack-4", title: "SCSS", content: "scss" },
      { id: "stack-5", title: "Firebase", content: "firebase" },
      { id: "stack-6", title: "Cloudinary", content: "cloudinary" },
      { id: "stack-7", title: "Yarn", content: "yarn" },
    ],
    description:
      "React의 핵심 개념을 익히고, 전자상거래 UI의 사용자 인터랙션 흐름을 직관적으로 구현해보기 위한 목적으로 제작한 쇼핑몰 프로젝트입니다.\n\n**TypeScript 마이그레이션** 과정에서 컴포넌트 단위로 점진적으로 적용하는 전략을 통해 안정적인 코드 전환을 경험했습니다.",
    highlights: [
      { id: "highlight-1", content: "다중 파일 유효성 검사 구현" },
      {
        id: "highlight-2",
        content: "Firebase & Cloudinary를 활용한 실데이터 환경 구성",
      },
      {
        id: "highlight-3",
        content: "타입 안정성을 위한 Typescript 마이그레이션",
      },
    ],
    uxImprovements: [
      {
        id: "improvement-1",
        title: "다중 파일 업로드 유효성 검사 구현",
        contents: [
          "**[문제점]** 파일 업로드, 특히 **다중 파일 유효성 검사**와 같은 고급 기능은 대부분의 라이브러리에서 지원되지 않았습니다.",
          "**[해결]** `useState + DataTransfer`를 조합하여 업로드 용량과 개수 제한 로직을 구현했습니다.",
          "**[성과]** 파일 업로드에서의 UX를 **사전에 검증하고 예외를 차단**함으로써, 사용자 입장에서 혼란을 줄이고 신뢰도 높은 서비스를 제공할 수 있었습니다.",
        ],
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
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
        title: "없으면 내가 만든다",
        contents: [
          "개발자는 **사용자가 예상하지 못한 행동을 미리 방지하고, 불편함 없이 서비스를 이용할 수 있도록 설계하는 사람**이라는 걸 다시금 깨달았습니다.",
          "특히 다중 파일 업로드 유효성 검사를 직접 구현하면서, **'없으면 내가 만든다'는 태도**가 사용자 경험을 지키는 데 얼마나 중요한지 실감했습니다.",
        ],
      },
    ],
    links: {
      blog: [
        {
          id: "blog-link-1",
          title: "TailwindCSS에서 SCSS Module로 변경",
          content:
            "https://velog.io/@inhye94/TailwindCSS%EC%97%90%EC%84%9C-SCSS-module%EB%A1%9C-%EB%B3%80%EA%B2%BD",
        },
      ],
      github: "https://github.com/inhye94/super-super-glue",
      deploy: "https://super-super-glue.netlify.app/",
    },
  },
  {
    id: "project-id-8",
    title: "Youtube 클론 페이지",
    period: "2023.12.26 ~ 2024.01.09",
    team: "개인 프로젝트",
    thumbnailUrl:
      "https://res.cloudinary.com/dn9hy4vyn/image/upload/v1740750509/search_duetube_pikmt7.png",
    stacks: [
      { id: "stack-1", title: "React", content: "react" },
      { id: "stack-2", title: "Tanstack-query", content: "tanstack" },
      { id: "stack-3", title: "TailwindCSS", content: "tailwindcss" },
      { id: "stack-4", title: "Yarn", content: "yarn" },
    ],
    description:
      "YouTube UI/UX를 모방한 클론 프로젝트로, 실무에서 부족하다고 느꼈던 **데이터 전처리 구조와 상태 관리 로직을 개선**하기 위해 기획했습니다.\n\nReact Query를 중심으로 데이터 Fetching의 안정성과 성능을 확보했습니다. 특히 반복되는 API 요청, 페이지 상태 초기화 등의 실무적 이슈들을 해결하며 React 애플리케이션 아키텍처에 대한 이해도를 높일 수 있었습니다.",
    highlights: [
      {
        id: "highlight-1",
        content: "LocalStorage를 활용한 다크모드 상태 저장",
      },
      {
        id: "highlight-2",
        content: "React Query를 사용하여 데이터 Fetching 안정성 및 가독성 향상",
      },
    ],
    uxImprovements: [
      {
        id: "improvement-1",
        title: "다크모드 상태 저장",
        contents: [
          "**[문제점]** `Context`를 활용해 다크모드를 구현했으나, 페이지를 새로고침하거나 재진입할 때마다 상태가 초기화되는 문제가 발생했습니다.",
          "**[해결]** 서버를 활용한 상태 저장도 고려했지만, **간단한 UI 설정 값**을 위해 네트워크 통신까지 사용할 필요는 없다고 판단했습니다. 대신, **localStorage를 활용하여 다크모드 상태를 저장**하고, 페이지 로드 시 저장된 값을 불러오도록 구현했습니다.",
          "**[성과]** 사용자는 반복 설정 없이 일관된 인터페이스를 경험할 수 있게 되었습니다.",
        ],
      },
    ],
    troubleShooting: [
      {
        id: "trouble-1",
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
        title: "실무 회고를 담은 성장의 기록",
        contents: [
          "이번 프로젝트는 React에서의 **데이터 흐름**, **상태 저장 전략**, **라이브러리 도입의 타이밍** 등을 실제로 적용해 보며 실무에 더 가까운 코드 구조와 UX를 구현할 수 있었던 성장의 계기였습니다.",
          "특히, 실무에서 fetch 사용 시 발생했던 null 체크 및 loading 처리가 반복되며 가독성이 떨어졌던 문제를 반성하고, Tanstack Query를 프로젝트에 적용하여 **로딩, 에러, 캐싱 등 상태 처리를 자동화**하면서 코드의 가독성과 UX 안정성 확보할 수 있었습니다.",
        ],
      },
    ],
    links: {
      github: "https://github.com/inhye94/duetube",
      deploy: "https://duetube.netlify.app/",
    },
  },
];
