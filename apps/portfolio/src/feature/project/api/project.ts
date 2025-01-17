import { getData } from "@/firebase/client";
import type { IProjectItem } from "../project";

/**
 * 프로젝트 목록을 가져오는 API
 */
export const getProjects = async (): Promise<IProjectItem[]> =>
  getData("projects");
