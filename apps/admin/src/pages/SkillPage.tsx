import { useQuery } from "@tanstack/react-query";
import Article from "../components/Article";
import Empty from "../components/Empty";
import Loading from "../components/Loading";
import { portfolioQueries } from "../entity/portfolioQueries";
import SkillList from "../feature/skill/SkillList";

export default function SkillPage() {
  const { data: skills, isLoading } = useQuery(portfolioQueries.skill());

  return (
    <Article title="Skill">
      {isLoading && <Loading />}
      {skills && skills.length === 0 && <Empty />}
      {skills && skills.length > 0 && <SkillList skills={skills} />}
    </Article>
  );
}
