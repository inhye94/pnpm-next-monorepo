import { useQuery } from "@tanstack/react-query";
import Article from "../../components/Article";
import Loading from "../../components/Loading";
import { portfolioQueries } from "../../entity/portfolioQueries";
import StackForm from "../../feature/stack/StackForm";

export default function StackEditPage() {
  const { data: stacks, isLoading } = useQuery(portfolioQueries.stack());

  return (
    <Article title="stack edit" goBackButton form>
      {isLoading && <Loading />}
      {stacks && <StackForm stacks={stacks} />}
    </Article>
  );
}
