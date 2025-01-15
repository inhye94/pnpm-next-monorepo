export interface StackType {
  id: string;
  content: string;
}

const stacks: StackType[] = [
  { id: "stack-react", content: "React" },
  { id: "stack-next", content: "NextJS" },
  { id: "stack-ts", content: "TypeScript" },
  { id: "stack-js", content: "JavaScript" },
  { id: "stack-storybook", content: "Storybook" },
  { id: "stack-tw", content: "TailwindCSS" },
  { id: "stack-scss", content: "SCSS" },
  { id: "stack-emotion", content: "Emotion" },
];

const skills = [
  {
    id: "skill-react",
    title: "react",
    content:
      "UI의 재사용성을 극대화하기 위해 컴포넌트 단위로 코드를 작성하며, Custom Hook을 활용해 공용 로직을 캡슐화합니다. 또한, Zustand와 Redux 같은 전역 상태 관리 라이브러리를 사용해 복잡한 상태를 효율적으로 관리하며, SPA 개발에 능숙합니다.",
    experience: [
      {
        id: "exp-react-1",
        content: "pnpm을 이용해 모노레포를 구현, 빌드 및 배포 경험이 있습니다.",
      },
      {
        id: "exp-react-2",
        content:
          "Zustand를 이용해 전역 상태를 최적화하고, Context를 주입한 Toast를 제작하는 등 상태관리 경험이 있습니다.",
      },
      {
        id: "exp-react-3",
        content:
          "Lighthouse를 이용해 페이지 성능 측정, 컴포넌트 성능 개선한 경험이 있습니다.",
      },
    ],
  },
  {
    id: "skill-js",
    title: "JavaScript",
    content:
      "구조분해할당, spread 연산자 등 ES6+ 문법에 능숙하며, 주요 내장 메서드와 모듈 시스템을 이해하고 활용합니다. Promise, async/await 등 비동기 프로그래밍의 개념과 JavaScript의 동작 원리를 깊이 이해하고 있습니다.",
    experience: [
      {
        id: "exp-js-0",
        content:
          "API를 연동해 사용자와의 상호작용이 높은 UI를 구현한 경험이 있습니다.",
      },
      {
        id: "exp-js-1",
        content: "typescript를 사용할 수 있습니다.",
      },
      {
        id: "exp-js-2",
        content: "Storybook 작성, 빌드 및 배포 경험이 있습니다.",
      },
      {
        id: "exp-js-3",
        content:
          "husky, commitlint, eslint, prettier 도입으로 코드 일관성 및 품질을 향상합니다.",
      },
    ],
  },
  {
    id: "skill-htmlcss",
    title: "HTML/CSS",
    content:
      "Semantic 태그를 활용하여 문서 구조의 명확성과 가독성을 개선하며, 웹 표준 준수를 통해 접근성과 SEO에 최적화된 마크업을 작성합니다." +
      "효율적인 선택자를 사용하며, Flexbox와 Grid, Position 속성을 활용해 복잡한 레이아웃을 손쉽게 구성할 수 있습니다. 또한, 미디어 쿼리와 CSS 변수 등을 활용하여 다양한 디바이스 환경에서도 일관된 반응형 디자인을 구현할 수 있습니다.",

    experience: [
      {
        id: "exp-htmlcss-1",
        content:
          "Radix를 사용해, 웹 접근성을 보완한 디자인 시스템을 구현한 경험이 있습니다",
      },
      {
        id: "exp-htmlcss-2",
        content: "TailwindCSS, Emotion, SCSS를 활용할 수 있습니다.",
      },
      {
        id: "exp-htmlcss-3",
        content: "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.",
      },
    ],
  },
];

// 🔥 skills > content + experience 모두 넣어보고, 가독성이 나쁘면 내용 정리하기

const Skills = () => {
  return (
    <section>
      <h2>스킬들</h2>
      글자 리스트 쫘라락 출력 대표 4개
      <ul>
        {stacks.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
      <div>
        {skills.map((skill) => (
          <article key={skill.id}>
            <h4>{skill.title}</h4>
            <p>{skill.content}</p>
            <ul>
              {skill.experience.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
