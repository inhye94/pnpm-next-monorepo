import { iconMap } from "../shared";

interface BasicType {
  id: string;
  title: string;
  content: string;
}

type OnlyContentType = Pick<BasicType, "id" | "content">;

interface StackType extends Omit<BasicType, "content"> {
  content: keyof typeof iconMap;
}

interface TitleAndMultipleContentsType extends Omit<BasicType, "content"> {
  contents?: string[];
}

export interface IProjectItem {
  id: string;
  title: string;
  period: string;
  team: string;
  thumbnailUrl: string;
  stacks: StackType[];
  description: string;
  highlights: OnlyContentType[];
  uxImprovements: TitleAndMultipleContentsType[];
  troubleShooting?: TitleAndMultipleContentsType[];
  learnings: TitleAndMultipleContentsType[];
  links: {
    blog?: BasicType[];
    github: string;
    deploy?: string;
  };
}
