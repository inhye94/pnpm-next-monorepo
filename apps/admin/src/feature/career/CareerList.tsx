import { ICareerItem } from "@workspace/utils/types";

export default function CareerList({ careers }: { careers: ICareerItem[] }) {
  return (
    <div>
      {careers.map((career) => (
        <article key={career.id} className="grid grid-cols-1 md:grid-cols-3">
          <header>
            <h4 className="text-heading-5 text-neutral-10 mb-8">
              {career.corp}
            </h4>
            <p className="text-12 text-neutral-70">{career.period}</p>
          </header>

          <dl className="text-neutral-10 text-14 col-span-2">
            <dt className="text-16 mb-12 font-semibold">{career.summary}</dt>
            {career.roles.map((role) => (
              <dd key={role.id}>- {role.content}</dd>
            ))}
          </dl>
        </article>
      ))}
    </div>
  );
}
