# Utils

![Utils](https://github.com/user-attachments/assets/5d158547-9702-4101-9244-b78c51a08367)

**모노 레포의 디자인 시스템**

- 작업기간: 2024.12.23 ~ 진행중
- stack: Vite, TypeScript, PNPM
- 깃허브: https://github.com/inhye94/pnpm-next-monorepo/tree/main/packages/utils

## 개발 배경

이 패키지는 여러 프로젝트 간에 공통으로 사용되는 유틸리티 함수, mock 데이터, 타입 정의(Type Definition) 등을 공유하기 위해 만들어졌습니다.

중복된 코드를 줄이고, 유지보수를 용이하게 하기 위해 자주 사용하는 기능들을 하나의 패키지로 분리하였습니다. 이를 통해 프로젝트 간의 일관성을 높이고, 개발 생산성을 향상시키는 데 목적이 있습니다.

## 주의사항

- 각 폴더의 `index.ts` 파일에서 `export` 처리를 해야 외부에서 해당 모듈을 사용 가능
  - 예: utils, types, mock 등의 하위 폴더에 정의된 함수나 타입은 해당 폴더의 index.ts를 통해 export 되어야 공유 가능합니다.
  - 이를 통해 패키지를 사용하는 프로젝트에서 의도한 기능에 접근 가능

예를 들어 `src/types`에 타입이 정의되어 있다면, `src/types/index.ts`에서 아래와 같이 export :

```tsx
export * from "./career";
export * from "./polymorphic";
export * from "./project";
export * from "./skill";
```

## 실행 방법

```bash
# Utils 패키지 디렉토리에서 패키지 설치
pnpm install

# 루트 디렉토리에서 워크스페이스 패키지로 추가
pnpm [프로젝트명] add @workspace/utils --workspace
```
