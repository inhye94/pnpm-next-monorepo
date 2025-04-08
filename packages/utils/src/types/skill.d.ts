import { iconMap } from "../shared/iconMap";

export interface IStackType {
  id: string;
  content: string;
  icon?: keyof typeof iconMap;
}

export interface ISkillType {
  id: string;
  title: string;
  content: string;
  experience: IStackType[];
}
