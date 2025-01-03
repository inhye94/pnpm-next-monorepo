import type { Meta, StoryObj } from "@storybook/react";
import CheckboxGroup from "./CheckboxGroup";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "체크박스 그룹은 여러 개의 체크박스를 그룹화하여 사용자가 하나 이상의 옵션을 선택할 수 있도록 하는 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      description: "체크박스 버튼 그룹의 제목을 설정합니다.",
    },
    error: {
      control: {
        type: "text",
      },
      description: "체크박스 버튼 그룹의 오류 메시지를 설정합니다.",
    },
    required: {
      control: {
        type: "boolean",
      },
      description: "체크박스 버튼 그룹의 필수 여부를 설정합니다.",
    },
    children: {
      control: {
        type: "object",
      },
      description: "체크박스 버튼 그룹의 자식 요소를 설정합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  args: {
    title: "타이틀",
    error: "",
    required: false,
  },
  render: (args) => (
    <CheckboxGroup.Root {...args}>
      <CheckboxGroup.Item value="value1" name="example" label="value1" />
      <CheckboxGroup.Item value="value2" name="example" label="value2" />
    </CheckboxGroup.Root>
  ),
};
