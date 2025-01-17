export interface IStackType {
  id: string;
  content: string;
}

export interface ISkillType {
  id: string;
  title: string;
  content: string;
  experience: IStackType[];
}
