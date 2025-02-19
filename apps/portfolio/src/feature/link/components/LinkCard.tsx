import { BaseBadge } from "@workspace/design-system/components";
import classNames from "classnames";
import type { ILinkItem } from "../LinkSection";

// type
interface ILinkCardProps {
  link: ILinkItem;
}

// style
const CARD_HOVER_STYLE =
  "transition-transform group-hover:-translate-y-full duration-350";

// component
export default function LinkCard({ link }: ILinkCardProps) {
  return (
    <article className="group rounded-base relative h-160 w-280 overflow-hidden bg-white *:flex *:h-full *:w-full *:shrink-0 *:flex-wrap *:items-center *:justify-center *:gap-4">
      <h4
        className={classNames(
          "text-heading-4 text-neutral-10",
          CARD_HOVER_STYLE,
        )}
      >
        {link.icon}
        {link.title}
      </h4>

      <ol className={classNames("flex-col", CARD_HOVER_STYLE)}>
        {link.points?.map((point) => (
          <li key={point.id}>
            <BaseBadge size="md" variant="soft" color={point.color}>
              {point.title}
            </BaseBadge>
          </li>
        ))}
      </ol>

      <a
        className="absolute top-0 left-0 h-full w-full"
        href={link.url}
        target="_blank"
        aria-label={`${link.title} 링크로 이동`}
      ></a>
    </article>
  );
}
