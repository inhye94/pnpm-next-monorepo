interface ICareerItem {
  id: string;
  corp: string;
  summary: string;
  roles: string[];
}

export const careers: ICareerItem[] = [
  {
    id: "career-id-1",
    corp: "회사명",
    summary: "서비스 요약",
    roles: ["역할1", "역할2", "역할3"],
  },
];

/**
 * <카드>
 * 회사명
 * 개요
 * 기여 및 역할
 */

const Career = () => {
  return (
    <section>
      <h2>커리어</h2>
    </section>
  );
};

export default Career;
