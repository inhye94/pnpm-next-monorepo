import { queryOptions } from "@tanstack/react-query";
import { getSkills, getStacks } from "@workspace/utils/apis";

export const portfolioQueries = {
  all: () => ["portfolio"] as const,
  skillKey: () => [...portfolioQueries.all(), "skill"] as const,
  stackKey: () => [...portfolioQueries.all(), "stack"] as const,
  skill: () =>
    queryOptions({
      queryKey: [...portfolioQueries.skillKey()],
      queryFn: async () => getSkills(),
    }),
  stack: () =>
    queryOptions({
      queryKey: [...portfolioQueries.stackKey()],
      queryFn: async () => getStacks(),
    }),
  career: () => [...portfolioQueries.all(), "career"],
  project: () => [...portfolioQueries.all(), "project"],
};
