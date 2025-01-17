import { getData } from "@/firebase/client";
import type { ICareerItem } from "../career";

/**
 * 커리어 목록을 가져오는 API
 */
export const getCareers = async (): Promise<ICareerItem[]> =>
  getData("careers");
