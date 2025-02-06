import Section from "@/components/layout/Section";
import classNames from "classnames";
import Icon, {
  IIconProps,
} from "node_modules/@workspace/design-system/src/components/icon";
import { ADDRESS_EMAIL } from "./constants";

// data
interface IAboutItem {
  id: string;
  icon: IIconProps["name"];
  title: string;
  content: string;
}

const abouts: IAboutItem[] = [
  { id: "about-1", icon: "person", title: "이름", content: "박인혜" },
  { id: "about-2", icon: "birth", title: "생년월일", content: "1994.08.19" },
  { id: "about-3", icon: "phone", title: "연락처", content: "010-3043-0359" },
  {
    id: "about-4",
    icon: "email",
    title: "이메일",
    content: ADDRESS_EMAIL,
  },
  {
    id: "about-5",
    icon: "school",
    title: "학력",
    content: "안산대학교 디지털정보통신과",
  },
];

// component
export default function ContactSection() {
  return (
    <Section title="Contact" className="bg-background-gray" hideTitle>
      <dl className="flex flex-col gap-y-16 lg:flex-row lg:justify-center lg:gap-x-36">
        {abouts?.map((about) => (
          <div key={about.id} className="flex items-center gap-x-12">
            <dt className="text-16 text-neutral-20">
              <Icon name={about.icon} label={about.title} />
            </dt>
            <dd
              className={classNames(
                "text-12 lg:text-16 text-neutral-20 whitespace-nowrap transition-colors",
                about.icon === "email" && "hover:text-primary underline",
              )}
            >
              {about.icon === "email" ? (
                <a href={`mailto:${about.content}`}>{about.content}</a>
              ) : (
                about.content
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
