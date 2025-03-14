import { BaseButton } from "@workspace/design-system/components";
import { useCallback } from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  const goHome = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <section className="flex min-h-[30vh] flex-col items-center justify-center gap-16 text-center">
      <h2 className="text-heading-3 md:text-heading-2 text-coolNeutral-10">
        Not Found 🤔
      </h2>
      <p className="text-14 text-coolNeutral-60">
        유효하지 않은 페이지입니다.
        <br />
        페이지 경로를 다시 확인해주세요.
      </p>
      <BaseButton onClick={goHome}>뒤로가기</BaseButton>
    </section>
  );
}
