# Design System

![design-system](https://github.com/user-attachments/assets/1bc245a9-ec5b-4db9-8739-5efc976f1b21)

**모노 레포의 디자인 시스템**

- 작업기간: 2024.12.23 ~ 진행중
- stack: Vite, React, TypeScript, TailwindCSS, Storybook, PNPM
- 깃허브: https://github.com/inhye94/pnpm-next-monorepo/tree/main/packages/design-system
- Storybook 배포링크: https://67875cd86620d78844d43146-drfgvuzaig.chromatic.com/?path=/docs/components-button--docs

## 개발 배경

실무에서 Vanilla JS로 작업하며, 개발자마다 Atomic UI를 각기 다른 방식으로 구현해 **유지보수의 어려움**을 경험했습니다. 동일한 디자인 가이드가 여러 프로젝트에 적용되었으나, 디자인 변경 시 **모든 프로젝트를 일일이 수정**해야 하는 비효율성이 발생했습니다.
이를 해결하고자, 모노레포를 활용해 **디자인 시스템을 패키지화**하여 공유했습니다.

복잡했던 SCSS 기반 스타일링을 TailwindCSS로 전환해 **개발 생산성 및 협업 효율성**을 높이고, Config 파일 공유로 **일관된 스타일 관리**를 실현하고자 했습니다.

## 작업 사항

- **모노레포 기반 커스텀 패키지**로 디자인 시스템 구축
- **Storybook**을 활용해 UI 테스트 및 Atomic UI와 디자인 가이드 구현
- 프로젝트 간 **UI 일관성을 확보**하고, 디자인 변경에 따른 **수정 시간**을 크게 단축
- TailwindCSS Config 파일로 색상, 간격 등을 표준화하여 스타일링 속도와 가독성을 개선

## 관련 링크

- [모노레포 PNPM으로 구성하기 (Feat. NextJS, Vite, React, TypeScript)](https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-Feat.-NextJS-Vite-React-TypeScript)
- [모노레포 PNPM으로 구성하기 - TailwindCSS](https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-TailwindCSS)
- [모노레포 PNPM으로 구성하기 - TypeScript](https://velog.io/@inhye94/%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-PNPM%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-TypeScript)

## 작업 화면

프로젝트의 규모에 맞춰 UI 종류는 더욱 다양해질 예정입니다.

| Badge                                                                                     |
| ----------------------------------------------------------------------------------------- |
| ![badge](https://github.com/user-attachments/assets/ed129376-c615-4d1c-a5fe-38c44cb72003) |
| - 태그형 데이터를 표현하는 UI                                                             |

| Button                                                                                     |
| ------------------------------------------------------------------------------------------ |
| ![button](https://github.com/user-attachments/assets/31704a10-a869-4db4-b62e-8611f30dcb0e) |
| - 사용자와 클릭으로 상호작용하는 UI                                                        |

| Checkbox Group & Radio Group                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![checkbox group](https://github.com/user-attachments/assets/f4c4cf3a-5cb3-4611-bce1-cce1618ee224)![radio group](https://github.com/user-attachments/assets/26750d17-dcda-413e-8ddb-b8a8f9b18870) |
| - 여러 개의 선택지를 사용자에게 제공하고, 중복 또는 하나의 값을 받는 UI                                                                                                                           |

| Input & Text Feild                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![input](https://github.com/user-attachments/assets/24d232af-b6f3-4429-9f3e-2512f6867794)![textfield](https://github.com/user-attachments/assets/8d0d598e-ccba-4237-b488-71bb80e2a6af) |
| - 사용자가 입력한 값을 받는 UI                                                                                                                                                         |

## 배운 점

Figma Dev 모드를 사용하여 color token과 text token을 손쉽게 추출할 수 있었습니다. TailwindCSS Config 파일과 함께 사용해, 디자인 가이드 구현 시간을 3일에서 2시간으로 대폭 단축할 수 있었습니다. 기존에 SCSS로 작업할 때는 색상 토큰 추출 및 테마 구현에 많은 시간이 소요되었지만, Figma와 TailwindCSS의 강력한 연동 덕분에 효율적으로 작업할 수 있었습니다.

이 경험을 통해, 세부 작업은 **AI와 도구를 적극 활용**함으로써 더 재미있고 창의적인 작업(예: 컴포넌트 구현)에 시간을 할애할 수 있다는 점을 깨달았습니다.
앞으로는 AI와 자동화 도구를 활용해 **반복 작업을 최소화**하고, 창의적이고 전략적인 작업에 집중할 계획입니다.

## 실행 방법

```bash
# Design System 패키지 디렉토리에서 패키지 설치
pnpm install

# 루트 디렉토리에서 프론트엔드 Server 시작
pnpm design-system dev

# 루트 디렉토리에서 워크스페이스 패키지로 추가
pnpm [프로젝트명] add @workspace/design-system --workspace
```
