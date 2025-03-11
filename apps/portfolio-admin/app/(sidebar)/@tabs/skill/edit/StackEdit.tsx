"use client";

import AddedAnimation from "@/components/AddedAnimation";
import Article from "@/components/Article";
import {
  BaseButton,
  IconButton,
  TextField,
} from "@workspace/design-system/components";
import { IStackType } from "@workspace/utils/types";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const newStackTemplate: IStackType = {
  id: "",
  content: "",
};

export default function StackEdit({ stacks }: { stacks?: IStackType[] }) {
  const [stackDatas, setStackDatas] = useState<IStackType[]>([]);

  useEffect(() => {
    setStackDatas(stacks ?? []);
  }, []);

  const addStack = useCallback(() => {
    setStackDatas((prev) => prev.concat({ ...newStackTemplate, id: uuidv4() }));
  }, []);

  const removeStack = useCallback((id: string) => {
    setStackDatas((prev) => prev.filter((stack) => stack.id !== id));
  }, []);

  const updateStack = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: string) => {
      const newState = stackDatas.map((stack) => {
        if (stack.id === id) {
          return { ...stack, content: e.target.value.trim() };
        } else {
          return stack;
        }
      });

      setStackDatas(newState);
    },
    [stackDatas],
  );

  return (
    <Article title="Stacks">
      {stackDatas.map((stack, index) => (
        <AddedAnimation key={stack.id} className="flex items-end gap-8 py-8">
          <TextField
            label={`stack-${index + 1}`}
            name="stacks[]"
            value={stack.content}
            onChange={(e) => updateStack(e, stack.id)}
            placeholder="기술명을 입력해주세요"
            error=""
            required
          />

          <IconButton
            type="button"
            label="스택 삭제"
            icon="close"
            variant="ghost"
            className="shrink-0"
            onClick={() => removeStack(stack.id)}
            disabled={index === 0}
          >
            삭제
          </IconButton>
        </AddedAnimation>
      ))}

      <div className="mt-24">
        <BaseButton type="button" size="small" onClick={addStack}>
          <i aria-hidden>+</i>스택 추가하기
        </BaseButton>
      </div>
    </Article>
  );
}
