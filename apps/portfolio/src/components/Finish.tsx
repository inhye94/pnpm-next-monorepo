import { Container } from "@workspace/design-system/components";
import Image from "next/image";

export default function Finish() {
  return (
    <footer className="bg-background-gray pt-24 pb-64 lg:py-32">
      <Container>
        <h4 className="visually-hidden">마무리 인사</h4>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-x-24">
          <div className="relative h-60 w-60 overflow-hidden rounded-full">
            <Image
              src="https://avatars.githubusercontent.com/u/69448900?v=4"
              alt="멋쟁이 개발자 박인혜"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-heading-5 text-neutral-10">
              끝까지 봐주셔서 감사합니다
            </p>

            <p className="text-neutral-50">
              Copyright 2025. Inhye. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
