import { useQuery } from "@tanstack/react-query";
import Article from "../../components/Article";
import Empty from "../../components/Empty";
import Loading from "../../components/Loading";
import { portfolioQueries } from "../../entity/portfolioQueries";
import StackList from "./StackList";

export default function StackPage() {
  const { data: stacks, isLoading } = useQuery(portfolioQueries.stack());

  return (
    <Article title="Stack">
      {isLoading && <Loading />}
      {stacks && stacks.length === 0 && <Empty />}
      {stacks && stacks.length > 0 && <StackList stacks={stacks} />}
    </Article>
  );
}
