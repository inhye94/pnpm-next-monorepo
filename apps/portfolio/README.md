# portfolio

![portfolio](https://github.com/user-attachments/assets/27c892a2-e11c-4a36-b3b7-bd83b0e6d63b)

**NextJS 기반의 포트폴리오 페이지**

- 작업기간: 2025.01.06 ~ 진행중
- stack: NextJS, React, TypeScript, TailwindCSS, Husky, PNPM
- 깃허브: https://github.com/inhye94/pnpm-next-monorepo/tree/main/apps/portfolio
- 배포링크: https://inhye-portfolio.vercel.app/

## 개발 배경

정적인 페이지에서 벗어나 **생동감 있는 포트폴리오 페이지**를 만들어, 포트폴리오를 확인하는 모든 분들께 재미있는 경험을 제공하고 싶었습니다. 추가로, 웹 페이지를 통해 **UI/UX 구현 능력과 웹 접근성 최적화**를 보여드릴 수 있는 좋은 기회라고 생각했습니다.

모노레포로 구성하여 디자인 시스템을 이용해 신속하게 UI 구현하고자 했습니다. 더불어, 인터렉션과 애니메이션을 구현해 풍부한 사용자 경험을 제공하고, 다양한 상태 관리 방식을 보여드리고자 했습니다.

## 작업 사항

- **모노레포에 만든 디자인 시스템 적용**하여 UI 구현
- `motion` 라이브러리를 사용하여 애니메이션 구현
- `Context`를 이용한 스크롤 메뉴 구현
- 커밋 관리를 위해 `husky` 도입

## 관련 링크

- [모노레포 PNPM으로 구성하기 - husky + commitlint](https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-husky-commitlint)
- [모노레포 PNPM으로 구성하기 - 환경변수](https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98)

## 트러블 슈팅

### 커밋 관리를 위해 husky 도입

- **[문제점]** 모노레포에 프로젝트가 늘어가면서, 어느 프로젝트의 작업인지 커밋 메시지에 표기되지 않아 일일이 히스토리를 열어서 확인해야하는 불편함이 있었습니다.
- **[해결]** 변경된 커밋 컨벤션이 엄격하게 적용되도록 `husky`를 도입했습니다.
- **[성과]** 커밋 전에 컨벤션을 검사하여 일관된 커밋 메시지를 유지하고 linter를 강제 적용하여 코드 스타일을 통일할 수 있었습니다.

### 아이콘 최적화

- **[문제점]** 아이콘의 종류가 늘어남에 따라, SVG를 그대로 출력하는 Icon 컴포넌트의 구조는 확장성이 떨어졌습니다.
- **[해결]** react-icons 라이브러리의 icon을 별도의 객체에 맵핑하고 Icon 컴포넌트의 props에 객체의 key를 전달하는 구조로 변경하고, `React.lazy`로 **dynamic import**를 적용하여 사용할 때만 아이콘을 로드하도록 구현했습니다.
- **[성과1]** 동적 import로 인해 브라우저에 캐싱되어 중복 다운로드가 발생하지 않아 로드 속도가 빨라졌습니다.
- **[성과2]** 아이콘 라이브러리 변경이 쉬워졌습니다. 다른 아이콘 라이브러리로 변경하고자 한다면, 아이콘 매핑 테이블(iconMap)만 수정하면 됩니다.

## 배운 점

밥을 먹다가 우연히 상추의 프렉탈 구조를 발견하곤 프로젝트에 적용해보았습니다. 예를들어, 공용 컴포넌트는 src/components 폴더에 저장하고, 특정 기능에만 사용되는 컴포넌트는 src/feature/[기능]/components 폴더에 저장했습니다. 덕분에 컴포넌트의 성격에 따라 구분하기 수월해졌습니다. 이 경험을 통해 방법론을 무조건 따르기보다는, **프로젝트 특성에 맞는 구조 또는 예측 가능한 구조가 더 중요하다**는 깨달음을 얻었습니다.

여러 방법론을 시도하며 얻은 인사이트와 주변 사물을 관찰하며 얻은 아이디어를 적극적으로 프로젝트에 반영해보며, 수직/수평 방향으로 균형있게 확장되는 구조를 만들어 보고자 합니다.

## 실행 방법

```bash
# Install JavaScript Packages
pnpm install

# Run Frontend Server
pnpm portfolio dev
```
