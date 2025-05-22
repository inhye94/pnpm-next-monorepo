import { useQuery } from "@tanstack/react-query";
import { BaseButton } from "@workspace/design-system/components";
import { useNavigate } from "react-router";
import Article from "../../components/Article";
import Empty from "../../components/Empty";
import Loading from "../../components/Loading";
import { portfolioQueries } from "../../entity/portfolioQueries";
import SkillList from "../../feature/skill/SkillList";

export default function SkillPage() {
  const { data: skills, isLoading } = useQuery(portfolioQueries.skill());
  const navigate = useNavigate();

  return (
    <Article title="Skill">
      {isLoading && <Loading />}
      {skills && skills.length === 0 && <Empty />}
      {skills && skills.length > 0 && <SkillList skills={skills} />}
      {skills && (
        <div className="mt-12">
          <BaseButton onClick={() => navigate("/skill/edit")}>
            {skills.length > 0 ? "수정하기" : "등록하기"}
          </BaseButton>
        </div>
      )}
    </Article>
  );
}
