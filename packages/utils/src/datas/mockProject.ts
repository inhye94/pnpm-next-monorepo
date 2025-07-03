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
      // {
      //   id: "highlight-2",
      //   content: "스크롤 메뉴를 위한 custom context hook 구성",
      // },
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
        content: "Headless 컴포넌트 라이브러리(Radix Primitive) 기반 UI 설계",
      },
      // {
      //   id: "highlight-2",
      //   content: "웹 접근성과 스타일 재정의 기능 중심 설계",
      // },
      {
        id: "highlight-3",
        content: "Storybook 기반 테스트/문서화 통합",
      },
      // {
      //   id: "highlight-4",
      //   content: "TailwindCSS Tree-Shaking 및 상속 이슈 대응",
      // },
      // {
      //   id: "highlight-5",
      //   content: "Figma의 AI 기능을 활용한 디자인 가이드 자동화",
      // },
      {
        id: "highlight-6",
        content: "Polymorphic 컴포넌트, CCP 구조 설계로 재사용성 증가",
      },
    ],
    uxImprovements: [],
    troubleShooting: [
      {
        id: "trouble-1",
        title: "웹 접근성 개선 (Headless 컴포넌트 라이브러리)",
        contents: [
          "**[문제점]** `aria-*`, 키보드 컨트롤, 포커스 처리 등 **접근성 요소를 직접 구현하는 데 한계**가 있었고, 유지보수 또한 복잡해졌습니다.",
          "**[해결]** Radix Primitive와 같은 **Headless 컴포넌트 라이브러리**를 도입해 접근성 요구사항을 기본적으로 충족하는 구조로 전환했습니다.",
          "**[성과]** **스크린 리더 대응**이 더 수월해졌고, 코드가 간결해져 **핵심 로직에 집중**할 수 있는 환경이 마련되었습니다.",
        ],
      },
      {
        id: "trouble-2",
        title: "UI 테스트/문서화 (Storybook)",
        contents: [
          "**[문제점]** 텍스트 설명만으로는 UI가 **직관적으로 전달되지 않았고**, UI 변경 시 문서화(노션 등)를 수동으로 처리해야 해 **공수가 두 배**로 들었습니다.",
          "**[해결]** **Storybook을 도입**해 컴포넌트를 독립적으로 렌더링하고 Docs 탭으로 자동 문서화되도록 설정했습니다. UI 테스트와 문서화를 하나의 흐름으로 통합했습니다.",
          "**[성과]** **문서화 자동화**로 **공수를 약 50% 절감**했고, **비개발자도 UI 테스트가 가능한 환경**을 구축했습니다.",
        ],
      },
      {
        id: "trouble-3",
        title: "컴포넌트 재사용성 개선 (CCP, Polymorphic 구조)",
        contents: [
          "**[문제점]** 동일한 디자인이라도 사용하는 HTML 태그가 달라 **컴포넌트를 중복 작성**해야 했고, **관심사가 분산**되어 관리가 어려웠습니다.",
          "**[해결]** 관심사를 하나로 묶고 응집도를 높이기 위해 **CCP 패턴**을 적용하고, 다양한 태그에 대응하기 위해 **Polymorphic 컴포넌트 구조**로 설계했습니다.",
          "**[성과]** 컴포넌트의 **재사용성이 크게 향상**되었고, **속성 타입까지 완전하게 대응**할 수 있었습니다. 또한, **관심사를 HTML 태그로 명확히 표현**할 수 있는 구조가 되어 의도 전달력도 개선되었습니다.",
        ],
      },
      {
        id: "trouble-4",
        title: "TailwindCSS의 Tree-Shaking 에러 대응",
        contents: [
          "**[문제점]** 디자인 시스템에서 제공하는 모달의 스타일이 **사용자 프로젝트에서 정상적으로 적용되지 않는 문제**가 발생했습니다.",
          "**[해결]** 이는 **초기 렌더링되지 않는 컴포넌트의 스타일이 Tree-Shaking으로 제거되면서 발생한 문제**였습니다. 이를 해결하기 위해, TailwindCSS의 `@layer components`를 적용하여 스타일이 유지되도록 설정했습니다.",
          "**[성과]** 이 방식으로 **`React.Portal`을 사용하는 컴포넌트에서도 동일한 스타일 손실 문제를 예방**할 수 있었으며, 디자인 시스템의 일관성을 유지하는 데 기여할 수 있었습니다.",
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
        id: "learning-3",
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
  {
    id: "project-id-3",
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
    id: "project-id-4",
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
        content: "타입 안정성을 위한 Typescript 마이그레이션",
      },
      // {
      //   id: "highlight-3",
      //   content: "Firebase & Cloudinary를 활용한 실데이터 환경 구성",
      // },
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
    id: "project-id-5",
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
