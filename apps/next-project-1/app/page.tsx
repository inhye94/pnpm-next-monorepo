"use client";

import Button from "components/Button";
import Input from "components/Input";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>Project 1</main>
      <Button>하이하이</Button>
      <Input value="입력해주세요" onInput={() => console.log(123)} />
      <p>잘 되네용</p>
    </div>
  );
}