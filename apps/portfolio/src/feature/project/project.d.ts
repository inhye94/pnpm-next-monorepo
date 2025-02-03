interface BasicType {
  id: string;
  title: string;
  content: string;
}

type OnlyTitleType = Pick<BasicType, "id" | "title">;

type OnlyContentType = Pick<BasicType, "id" | "content">;

interface TitleAndMultipleContentsType extends Omit<BasicType, "content"> {
  contents?: string[];
}

export interface IProjectItem {
  id: string;
  title: string;
  period: string;
  team: string;
  thumbnailUrl: string;
  stacks: OnlyTitleType[];
  highlights: OnlyContentType[];
  troubleShooting?: TitleAndMultipleContentsType[];
  learnings: TitleAndMultipleContentsType[];
  links: {
    blog?: BasicType[];
    github: string;
    deploy?: string;
  };
}
