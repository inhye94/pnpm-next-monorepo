import { useQuery } from "@tanstack/react-query";
import { BaseButton } from "@workspace/design-system/components";
import { useNavigate } from "react-router";
import Article from "../../components/Article";
import Empty from "../../components/Empty";
import Loading from "../../components/Loading";
import { portfolioQueries } from "../../entity/portfolioQueries";
import StackList from "../../feature/stack/StackList";

export default function StackPage() {
  const { data: stacks, isLoading } = useQuery(portfolioQueries.stack());
  const navigate = useNavigate();

  return (
    <Article title="Stack">
      {isLoading && <Loading />}
      {stacks && stacks.length === 0 && <Empty />}
      {stacks && stacks.length > 0 && <StackList stacks={stacks} />}

      {stacks && (
        <div className="mt-12">
          <BaseButton onClick={() => navigate("/stack/edit")}>
            {stacks.length > 0 ? "수정하기" : "등록하기"}
          </BaseButton>
        </div>
      )}
    </Article>
  );
}
