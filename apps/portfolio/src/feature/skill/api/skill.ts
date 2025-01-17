import { getData } from "@/firebase/client";
import type { ISkillType, IStackType } from "../skill";

/**
 * 대표 스킬 목록을 가져오는 API
 */
export const getSkills = async (): Promise<ISkillType[]> => getData("skills");

/**
 * 기술 스택 목록을 가져오는 API
 */
export const getStacks = async (): Promise<IStackType[]> => getData("stacks");
