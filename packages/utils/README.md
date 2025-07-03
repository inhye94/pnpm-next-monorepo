# Utils

![Utils](https://github.com/user-attachments/assets/5d158547-9702-4101-9244-b78c51a08367)

**모노 레포의 디자인 시스템**

- 작업기간: 2024.12.23 ~ 진행중
- stack: Vite, TypeScript, PNPM
- 깃허브: https://github.com/inhye94/pnpm-next-monorepo/tree/main/packages/utils

## 개발 배경

이 패키지는 여러 프로젝트 간에 공통으로 사용되는 유틸리티 함수, mock 데이터, 타입 정의(Type Definition) 등을 공유하기 위해 만들어졌습니다.

중복된 코드를 줄이고, 유지보수를 용이하게 하기 위해 자주 사용하는 기능들을 하나의 패키지로 분리하였습니다. 이를 통해 프로젝트 간의 일관성을 높이고, 개발 생산성을 향상시키는 데 목적이 있습니다.

## 주의 사항

- Barrel 패턴
  - 기존 디렉토리: 디렉토리 안의 `index.tsx`에 export 처리
  - 새로운 디렉토리: 디렉토리 안에 `index.tsx` 생성하여 export 처리하고 `package.json`의 `export` 항목에 path를 추가한다.
  - (Optional) 일부 디렉토리는 barrel 패턴임에도 자동 임포트가 안되곤 하는데, 그럴 때에는 수동 import 해주자. 이론적으론 해당 프로젝트 디렉토리의 root에 index.tsx를 생성 > 사용할 디렉토리를 export 처리하면 자동 임포트가 동작할 것이다. 근데 실제로는 잘 안된다(VSCode의 자동임포트를 위한 작업이라, 나는 설정 안 함). 되면 되는대로 사용하고, 안되면 수동 import 하자. 스트레스 받지 마시오.

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
