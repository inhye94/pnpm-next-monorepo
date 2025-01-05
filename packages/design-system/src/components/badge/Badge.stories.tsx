import type { Meta, StoryObj } from "@storybook/react";
import type { BadgeColorType } from "./badge";
import BaseBadge from "./BaseBadge";

const ColorList: BadgeColorType[] = [
  "primary",
  "dark",
  "light",
  "error",
  "success",
  "warning",
];

const meta: Meta<typeof BaseBadge> = {
  title: "Components/Badge",
  component: BaseBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["fill", "soft"],
      description: '배지의 스타일을 설정합니다. "fill"은 기본 스타일입니다.',
    },
    color: {
      control: { type: "radio" },
      options: ColorList,
      description: '배지의 색상을 설정합니다. "primary"는 기본 색상입니다.',
    },
    shape: {
      control: { type: "radio" },
      options: ["simple", "pill"],
      description: '배지의 모양을 설정합니다. "simple"은 기본 모양입니다.',
    },
    children: {
      control: { type: "text" },
      description: "배지 내용",
    },
  },
};

export default meta;

type Story = StoryObj<typeof BaseBadge>;

export const Fill: Story = {
  args: {
    variant: "fill",
    shape: "simple",
    children: "Badge",
  },
  render: (args) => (
    <div className="flex gap-x-4">
      {ColorList.map((color) => (
        <BaseBadge key={color} {...args} color={color}>
          {color}
        </BaseBadge>
      ))}
    </div>
  ),
};

export const Soft: Story = {
  args: {
    variant: "soft",
    shape: "simple",
    children: "Badge",
  },
  render: (args) => (
    <div className="flex gap-x-4">
      {ColorList.map((color) => (
        <BaseBadge key={color} {...args} color={color}>
          {color}
        </BaseBadge>
      ))}
    </div>
  ),
};

export const Pill: Story = {
  args: {
    variant: "fill",
    shape: "pill",
    children: "Badge",
  },
  render: (args) => (
    <div className="flex gap-x-4">
      {ColorList.map((color) => (
        <BaseBadge key={color} {...args} color={color}>
          {color}
        </BaseBadge>
      ))}
    </div>
  ),
};
