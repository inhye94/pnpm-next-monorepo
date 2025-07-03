import { Meta, StoryObj } from "@storybook/react";
import { ToastProvider } from "@workspace/design-system/providers";
import ToastItem from "./ToastItem";

const meta: Meta<typeof ToastItem> = {
  title: "Components/ToastItem",
  component: ToastItem,
  parameters: {
    layout: "centered",
  },
  // NOTE: 컴포넌트에 자동으로 생성된 Autodocs 항목
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: { type: "text" },
      description: "토스트의 id를 설정합니다.",
    },
    message: {
      control: { type: "text" },
      description: "토스트의 메세지를 설정합니다.",
    },
    type: {
      control: { type: "radio" },
      options: ["success", "error", "info"],
      description: "토스트의 색상을 설정합니다. 기본값은 없습니다.",
    },
  },
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
};

export default meta;

type Story = StoryObj<typeof ToastItem>;

export const Default: Story = {
  args: {
    id: "123",
    message: "안녕하세요!",
    type: "success",
  },
};
