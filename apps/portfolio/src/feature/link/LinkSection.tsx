import Section from "@/components/layout/Section";
import { Icon } from "@workspace/design-system/components";
import LinkCard from "./components/LinkCard";

export interface ILinkItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  url: string;
  points: {
    id: string;
    color: "error" | "primary" | "warning" | "success";
    title: string;
  }[];
}

const links: ILinkItem[] = [
  {
    id: "link-1",
    title: "깃허브",
    url: "https://github.com/inhye94",
    icon: <Icon name="github" />,
    points: [
      {
        id: "link-1-point-1",
        title: "포트폴리오에 구현된 코드가 있어요",
        color: "error",
      },
      {
        id: "link-1-point-2",
        title: "꾸준한 커밋 덕분에 잔디가 푸릇푸릇해요",
        color: "primary",
      },
      {
        id: "link-1-point-3",
        title: "올빼미 개발자예요",
        color: "warning",
      },
    ],
  },
  {
    id: "link-2",
    title: "블로그",
    icon: <Icon name="velog" />,
    url: "https://velog.io/@inhye94/posts",
    points: [
      {
        id: "link-2-point-1",
        title: "고민의 흔적이 보여요",
        color: "error",
      },
      {
        id: "link-2-point-2",
        title: "관심사를 확인할 수 있어요",
        color: "primary",
      },
      {
        id: "link-2-point-3",
        title: "알게된 사실을 공유해요",
        color: "warning",
      },
    ],
  },
];

export default function LinkSection() {
  return (
    <Section title="Link" id="link" className="bg-background-dark text-white">
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
        {links?.map((link) => <LinkCard key={link.id} link={link} />)}
      </div>
    </Section>
  );
}
