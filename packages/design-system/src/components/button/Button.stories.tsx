import type { Meta, StoryObj } from "@storybook/react";
import BaseButton from "./BaseButton";

const meta: Meta<typeof BaseButton> = {
  title: "Components/Button",
  component: BaseButton,
  parameters: {
    // NOTE: 컴포넌트 위치 설정
    layout: "centered",
    docs: {
      description: {
        component: "BaseButton 컴포넌트는 forwardRef를 사용합니다.",
      },
    },
  },
  // NOTE: 컴포넌트에 자동으로 생성된 Autodocs 항목
  tags: ["autodocs"],
  // NOTE: 컴포넌트의 props 설정
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "ghost"],
      description: '버튼의 스타일을 설정합니다. "filled"는 기본 스타일입니다.',
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "assistive",
        "success",
        "error",
        "warning",
        "info",
      ],
      description: '버튼의 색상을 설정합니다. "primary"는 기본 색상입니다.',
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: '버튼의 크기를 설정합니다. "medium"은 기본 크기입니다.',
    },
    className: {
      control: { type: "text" },
      description: "클래스 이름",
    },
    isLoading: {
      control: { type: "boolean" },
      description: "로딩 중인지 여부",
    },
    disabled: {
      control: { type: "boolean" },
      description: "비활성화 여부",
    },
    children: {
      control: { type: "text" },
      description: "버튼 내용",
    },
  },
};

export default meta;

type Story = StoryObj<typeof BaseButton>;

export const Filled: Story = {
  args: {
    variant: "filled",
    color: "primary",
    size: "medium",
    children: "BUTTON",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "primary",
    size: "medium",
    children: "BUTTON",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    color: "primary",
    size: "medium",
    children: "BUTTON",
  },
};

export const Size: Story = {
  args: {
    variant: "filled",
    color: "primary",
    size: "medium",
    children: "BUTTON",
  },
  render: (args) => (
    <div>
      <BaseButton {...args} size="small">
        BUTTON
      </BaseButton>
      <BaseButton {...args} size="medium">
        BUTTON
      </BaseButton>
      <BaseButton {...args} size="large">
        BUTTON
      </BaseButton>
    </div>
  ),
};
