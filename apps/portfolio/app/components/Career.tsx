export interface ICareerItem {
  id: string;
  corp: string;
  summary: string;
  roles: string[];
}

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
