import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "TextField 컴포넌트는 forwardRef를 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    required: {
      control: "boolean",
      description: "필수 입력 필드 여부를 설정합니다.",
    },
    label: {
      control: "text",
      description: "인풋의 레이블을 설정합니다.",
    },
    error: {
      control: "text",
      description: "인풋의 에러 메시지를 설정합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    required: true,
    label: "이름",
    placeholder: "이름을 입력해주세요",
    error: "",
  },
};
