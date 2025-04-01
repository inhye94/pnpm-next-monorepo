import { useMutation } from "@tanstack/react-query";
import { BaseButton, BaseInput } from "@workspace/design-system/components";
import { useToastContext } from "@workspace/design-system/providers";
import { updateStacks } from "@workspace/utils/apis";
import { IStackType } from "@workspace/utils/types";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { portfolioQueries } from "../../entity/portfolioQueries";
import { queryClient } from "../../providers/QueryProvider";
import useStack from "./hook/useStack";
import StackTag from "./StackTag";

export default function StackForm({ stacks }: { stacks: IStackType[] }) {
  const navigate = useNavigate();
  const { showToast } = useToastContext();
  const { stackDatas, inputRef, removeStackItem, addStackItem } =
    useStack(stacks);

  const { mutate } = useMutation({
    mutationFn: () => updateStacks(stackDatas),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...portfolioQueries.stackKey()],
      });

      showToast("수정이 완료되었습니다.", "info");
      navigate("/stack");
    },
  });

  const submitStackForm = useCallback(() => {
    if (confirm("수정하시겠습니까?")) {
      mutate();
    }
  }, []);

  return (
    <div className="flex flex-col gap-32">
      <form onSubmit={addStackItem}>
        <BaseInput ref={inputRef} placeholder="스택을 입력해주세요." />
      </form>

      <ul className="bg-background-gray rounded-8 flex flex-wrap gap-12 px-12 py-24">
        {stackDatas.map((stack) => (
          <li key={stack.id}>
            <StackTag stack={stack} onRemove={removeStackItem} />
          </li>
        ))}
      </ul>

      <BaseButton type="button" onClick={submitStackForm}>
        저장하기
      </BaseButton>
    </div>
  );
}
