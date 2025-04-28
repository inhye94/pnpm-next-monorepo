import { useQuery } from "@tanstack/react-query";
import { BaseButton } from "@workspace/design-system/components";
import { useNavigate } from "react-router";
import Article from "../components/Article";
import Empty from "../components/Empty";
import Loading from "../components/Loading";
import { portfolioQueries } from "../entity/portfolioQueries";
import CareerList from "../feature/career/CareerList";

export default function CareerPage() {
  const { data: careers, isLoading } = useQuery(portfolioQueries.career());
  const navigate = useNavigate();

  return (
    <Article title="career">
      {isLoading && <Loading />}
      {careers && careers.length === 0 && <Empty />}
      {careers && careers.length > 0 && <CareerList careers={careers} />}
      {careers && (
        <div className="mt-12">
          <BaseButton onClick={() => navigate("/career/edit")}>
            {careers.length > 0 ? "수정하기" : "등록하기"}
          </BaseButton>
        </div>
      )}
    </Article>
  );
}
