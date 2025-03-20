import { useQuery } from "@tanstack/react-query";
import Article from "../components/Article";
import Loading from "../components/Loading";
import { portfolioQueries } from "../entity/portfolioQueries";
import SkillForm from "../feature/skill/SkillForm";

export default function SkillEditPage() {
  const { data: skills, isLoading } = useQuery(portfolioQueries.skill());
  return (
    <Article title="skill Edit" goBackButton form>
      {isLoading && <Loading />}
      {skills && <SkillForm skills={skills} />}
    </Article>
  );
}
