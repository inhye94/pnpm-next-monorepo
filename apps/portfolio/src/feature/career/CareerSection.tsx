import { getCareers } from "./api/career";

/**
 * <카드>
 * 회사명
 * 개요
 * 기여 및 역할
 */

export default async function CareerSection() {
  const careers = await getCareers();

  return (
    <section>
      <h2>커리어</h2>
      {JSON.stringify(careers)}
    </section>
  );
}
