interface IDetailImages {
  id: string;
  url: string;
  title: string;
  content?: string[];
}

interface ITroubleShooting {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
}

interface ILink {
  id: string;
  title: string;
  link: string;
}

export interface IProjectItem {
  id: string;
  title: string;
  summary: string;
  period: string;
  team: string;
  thumbnailUrl: string;
  screens: IDetailImages[];
  stacks: string[];
  background: string;
  highlights?: string[];
  feature?: string[];
  troubleShooting?: ITroubleShooting[];
  learnings: string[];
  links: {
    blog?: ILink[];
    github: string;
    deploy?: string;
  };
}
