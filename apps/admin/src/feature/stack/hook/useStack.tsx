import { capitalizeFirstLetter } from "@workspace/utils/shared";
import { IStackType } from "@workspace/utils/types";
import { useCallback, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useStack(stacks: IStackType[]) {
  const [stackDatas, setStackDatas] = useState<IStackType[]>(stacks);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const removeStackItem = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const { id } = e.currentTarget;
      setStackDatas((prev) => prev.filter((item) => item.id !== id));
    },
    [],
  );

  const addStackItem = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const content = capitalizeFirstLetter(inputRef.current?.value ?? "");

    setStackDatas((prev) => prev.concat({ id: uuidv4(), content }));

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, []);

  return {
    stackDatas,
    inputRef,
    removeStackItem,
    addStackItem,
  };
}
