import { IconButton } from "@workspace/design-system/components";
import { IStackType } from "@workspace/utils/types";

interface IStackTag {
  stack: IStackType;
  onRemove: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function StackTag({ stack, onRemove }: IStackTag) {
  return (
    <div className="bg-violet-80 inline-flex h-32 items-center gap-8 rounded-full px-12">
      <strong className="text-14 text-coolNeutral-10 font-semibold">
        {stack.content}
      </strong>
      <IconButton
        icon="close"
        label="삭제"
        variant="ghost"
        className="-mr-4 h-24 w-24"
        id={stack.id}
        value={stack.content}
        onClick={onRemove}
      />
    </div>
  );
}
