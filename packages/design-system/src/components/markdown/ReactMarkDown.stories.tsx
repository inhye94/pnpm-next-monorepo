import { Meta, StoryObj } from "@storybook/react";
import ReactMarkdown from "./ReactMarkdown";

const meta: Meta<typeof ReactMarkdown> = {
  title: "Components/ReactMarkdown",
  component: ReactMarkdown,
  parameters: {
    layout: "centered",
  },
  // NOTE: 컴포넌트에 자동으로 생성된 Autodocs 항목
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "마크다운 언어가 들어갑니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ReactMarkdown>;

export const Default: Story = {
  args: {
    children:
      "안녕하세요. 저는 **세상에서 제일 멋진 프론트엔드 개발자**에요.제가 잘 하는 건 ~~긍정으로 이겨내고 성장하기~~입니다!",
  },
};
