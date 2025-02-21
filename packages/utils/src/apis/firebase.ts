import { getData } from "../firebase/client";
import type {
  ICareerItem,
  IProjectItem,
  ISkillType,
  IStackType,
} from "../types";

/**
 * 데이터 호출 API
 */

// 대표 스킬 목록
export const getSkills = async (): Promise<ISkillType[]> => getData("skills");

// 기술 스택 목록
export const getStacks = async (): Promise<IStackType[]> => getData("stacks");

// 프로젝트 목록
export const getProjects = async (): Promise<IProjectItem[]> =>
  getData("projects");

// 경력 목록
export const getCareers = async (): Promise<ICareerItem[]> =>
  getData("careers");
