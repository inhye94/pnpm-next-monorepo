import type { Meta, StoryObj } from "@storybook/react";
import { iconMap } from "@workspace/utils/shared";
import Icon from ".";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  // NOTE: 컴포넌트에 자동으로 생성된 Autodocs 항목
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: Object.keys(iconMap),
      description: "아이콘을 설정합니다.",
    },
    label: {
      control: { type: "text" },
      description: "아이콘의 aria-label을 설정합니다.",
    },
    className: {
      control: { type: "text" },
      description: "클래스 이름",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "checkboxFilled",
    label: "체크박스",
    className: "text-primary text-14",
  },
};

export const Variant: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-12 md:grid-cols-7">
      {Object.keys(iconMap).map((icon) => (
        <div
          className="border-border rounded-4 flex items-center gap-x-4 border p-8"
          key={icon}
        >
          <Icon name={icon} className="text-primary shrink-0 text-[20px]" />
          <span className="nowrap line-clamp-1">{icon}</span>
        </div>
      ))}
    </div>
  ),
};
