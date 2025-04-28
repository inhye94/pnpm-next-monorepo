import { useQuery } from "@tanstack/react-query";
import Article from "../components/Article";
import Loading from "../components/Loading";
import { portfolioQueries } from "../entity/portfolioQueries";
import CareerForm from "../feature/career/CareerForm";

export default function CareerEditPage() {
  const { data: careers, isLoading } = useQuery(portfolioQueries.career());
  return (
    <Article title="career Edit" goBackButton form>
      {isLoading && <Loading />}
      {careers && <CareerForm careers={careers} />}
    </Article>
  );
}
