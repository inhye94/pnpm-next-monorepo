import type { Meta, StoryObj } from "@storybook/react";
import RadioGroup from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "라디오 버튼 그룹 컴포넌트입니다. CCP 패턴으로 구현되었습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      description: "라디오 버튼 그룹의 제목을 설정합니다.",
    },
    name: {
      control: {
        type: "text",
      },
      description: "라디오 버튼 그룹의 이름을 설정합니다.",
    },
    error: {
      control: {
        type: "text",
      },
      description: "라디오 버튼 그룹의 오류 메시지를 설정합니다.",
    },
    defaultValue: {
      control: {
        type: "text",
      },
      description: "라디오 버튼 그룹의 기본값을 설정합니다.",
    },
    required: {
      control: {
        type: "boolean",
      },
      description: "라디오 버튼 그룹의 필수 여부를 설정합니다.",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "라디오 버튼 그룹의 비활성화 여부를 설정합니다.",
    },
    loop: {
      control: {
        type: "boolean",
      },
      description: "라디오 버튼 그룹의 루프 여부를 설정합니다.",
    },
    children: {
      control: {
        type: "object",
      },
      description: "라디오 버튼 그룹의 자식 요소를 설정합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    title: "타이틀",
    name: "title",
    error: "",
    defaultValue: "",
    required: false,
    disabled: false,
    loop: true,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroup.Item value="123" label="123" />
      <RadioGroup.Item value="456" label="456" />
    </RadioGroup>
  ),
};
