import { BaseBadge } from "@workspace/design-system/components";
import { IStackType } from "@workspace/utils/types";

export default function StackList({ stacks }: { stacks: IStackType[] }) {
  return (
    <ul className="flex flex-wrap gap-8">
      {stacks?.map((stack) => (
        <li key={stack.id}>
          <BaseBadge shape="pill" size="md" color="light">
            {stack.content}
          </BaseBadge>
        </li>
      ))}
    </ul>
  );
}
