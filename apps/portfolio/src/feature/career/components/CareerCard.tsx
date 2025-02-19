import { ICareerItem } from "../career";

interface ICareerCard {
  career: ICareerItem;
}

export default function CareerCard({ career }: ICareerCard) {
  return (
    <article
      key={career.id}
      className="grid grid-cols-1 gap-12 pl-24 lg:grid-cols-3"
    >
      <header>
        <h3 className="before:bg-primary text-heading-5 text-neutral-20 relative mb-8 before:absolute before:top-1/2 before:-left-4 before:block before:h-16 before:w-16 before:-translate-x-full before:-translate-y-1/2 before:rounded-full lg:shrink-0">
          {career.corp}
        </h3>
        <span className="text-12 text-neutral-70">{career.period}</span>
      </header>

      <div className="lg:col-span-2">
        <p className="text-16 text-neutral-20 mb-8 font-semibold">
          {career.summary}
        </p>

        <ul className="list-disc pl-12">
          {career.roles.map((role, i) => (
            <li key={`career-role-${i}`}>
              <p className="text-14 text-neutral-20 leading-24">{role}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
