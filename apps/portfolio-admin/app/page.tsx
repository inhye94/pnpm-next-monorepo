import { BaseButton } from "@workspace/design-system/components";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <p className="text-heading-1 text-primary">
          새로운 프로젝트 만들었어용
        </p>
        <BaseButton>모에요?</BaseButton>
      </main>
    </div>
  );
}
