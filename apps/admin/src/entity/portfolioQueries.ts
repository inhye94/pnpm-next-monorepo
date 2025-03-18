import { queryOptions } from "@tanstack/react-query";
import { getSkills, getStacks } from "@workspace/utils/apis";

export const portfolioQueries = {
  all: () => ["portfolio"] as const,
  skill: () =>
    queryOptions({
      queryKey: [...portfolioQueries.all(), "skill"] as const,
      queryFn: async () => getSkills(),
    }),
  stack: () =>
    queryOptions({
      queryKey: [...portfolioQueries.all(), "stack"] as const,
      queryFn: async () => getStacks(),
    }),
  career: () => [...portfolioQueries.all(), "career"] as const,
  project: () => [...portfolioQueries.all(), "project"] as const,
};
