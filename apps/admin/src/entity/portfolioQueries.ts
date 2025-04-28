import { queryOptions } from "@tanstack/react-query";
import { getCareers, getSkills, getStacks } from "@workspace/utils/apis";

export const portfolioQueries = {
  all: () => ["portfolio"] as const,
  skillKey: () => [...portfolioQueries.all(), "skill"] as const,
  stackKey: () => [...portfolioQueries.all(), "stack"] as const,
  careerKey: () => [...portfolioQueries.all(), "career"] as const,
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
  career: () =>
    queryOptions({
      queryKey: [...portfolioQueries.careerKey()],
      queryFn: async () => getCareers(),
    }),
  project: () => [...portfolioQueries.all(), "project"],
};
