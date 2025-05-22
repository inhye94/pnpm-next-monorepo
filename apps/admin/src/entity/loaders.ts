import { QueryClient } from "@tanstack/react-query";
import { portfolioQueries } from "./portfolioQueries";

export const skillLoader = async (queryClient: QueryClient) => {
  return queryClient.ensureQueryData(portfolioQueries.skill());
};

export const stackLoader = async (queryClient: QueryClient) => {
  return queryClient.ensureQueryData(portfolioQueries.stack());
};

export const careerLoader = async (queryClient: QueryClient) => {
  return queryClient.ensureQueryData(portfolioQueries.career());
};
