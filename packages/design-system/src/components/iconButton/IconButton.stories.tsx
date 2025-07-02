import type { Meta, StoryObj } from "@storybook/react";
import { iconMap } from "@workspace/utils/shared";
import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "IconButton 컴포넌트는 Polymorphic 컴포넌트 구조를 가집니다.",
      },
    },
  },
  // NOTE: 컴포넌트에 자동으로 생성된 Autodocs 항목
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: "select" },
      options: Object.keys(iconMap),
      description: "버튼의 아이콘을 설정합니다.",
    },
    label: {
      control: { type: "text" },
      description: "버튼의 aria-label을 설정합니다.",
    },
    variant: {
      control: { type: "select" },
      options: ["outlined", "ghost"],
      description:
        '버튼의 스타일을 설정합니다. "outlined"는 기본 스타일입니다.',
    },
    float: {
      control: { type: "boolean" },
      description: 'float 효과를 설정합니다. "false"는 기본 값입니다.',
    },
    className: {
      control: { type: "text" },
      description: "클래스 이름",
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Outlined: Story = {
  args: {
    variant: "outlined",
    icon: "birth",
    label: "생일 아이콘",
  },
};
