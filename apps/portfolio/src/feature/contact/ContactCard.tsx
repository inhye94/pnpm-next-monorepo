import { BaseBadge } from "@workspace/design-system/components";
import classNames from "classnames";
import type { IContactItem } from "./ContactSection";

// type
interface IContactCardProps {
  contact: IContactItem;
}

// style
const CARD_HOVER_STYLE =
  "transition-transform group-hover:-translate-y-full duration-350";

// component
export default function ContactCard({ contact }: IContactCardProps) {
  return (
    <article className="group rounded-base relative h-160 w-280 overflow-hidden bg-white *:flex *:h-full *:w-full *:shrink-0 *:flex-wrap *:items-center *:justify-center *:gap-4">
      <h4
        className={classNames(
          "text-heading-4 text-neutral-10",
          CARD_HOVER_STYLE,
        )}
      >
        {contact.icon}
        {contact.title}
      </h4>

      <ol className={classNames("flex-col", CARD_HOVER_STYLE)}>
        {contact.points?.map((point) => (
          <li key={point.id}>
            <BaseBadge size="md" variant="soft" color={point.color}>
              {point.title}
            </BaseBadge>
          </li>
        ))}
      </ol>

      <a
        className="absolute top-0 left-0 h-full w-full"
        href={contact.url}
        target="_blank"
        aria-label={`${contact.title} 링크로 이동`}
      ></a>
    </article>
  );
}
