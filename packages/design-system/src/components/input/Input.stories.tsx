import type { Meta, StoryObj } from "@storybook/react";
import BaseInput from "./BaseInput";
import {
  InputRadiusType,
  InputSizeType,
  InputValidationStateType,
} from "./input";

const sizeList: InputSizeType[] = ["sm", "md", "lg"];
const radiusList: InputRadiusType[] = ["simple", "full"];
const validationStateList: InputValidationStateType[] = [
  "default",
  "valid",
  "invalid",
];

const meta: Meta<typeof BaseInput> = {
  title: "Components/Input",
  component: BaseInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "BaseInput 컴포넌트는 memo와 forwardRef를 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: sizeList,
      description: '인풋의 크기를 설정합니다. "md"는 기본 크기입니다.',
    },
    radius: {
      control: { type: "select" },
      options: radiusList,
      description: '인풋의 모서리를 설정합니다. "simple"은 기본 모서리입니다.',
    },
    validationState: {
      control: { type: "select" },
      options: validationStateList,
      description:
        '인풋의 유효성 상태를 설정합니다. "default"는 기본 상태입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {
  args: {
    size: "md",
    radius: "simple",
    validationState: "default",
    placeholder: "아무거나 입력해주세요",
  },
};

export const Size: Story = {
  args: {
    size: "md",
    radius: "simple",
    validationState: "default",
  },
  render: (args) => (
    <div className="flex items-center gap-x-4">
      {sizeList.map((size) => (
        <div key={size}>
          <BaseInput {...args} size={size} placeholder={size} />
        </div>
      ))}
    </div>
  ),
};

export const Radius: Story = {
  args: {
    size: "md",
    radius: "simple",
    validationState: "default",
  },
  render: (args) => (
    <div className="flex items-center gap-x-4">
      {radiusList.map((radius) => (
        <div key={radius}>
          <BaseInput {...args} radius={radius} placeholder={radius} />
        </div>
      ))}
    </div>
  ),
};

export const ValidationState: Story = {
  args: {
    size: "md",
    radius: "simple",
    validationState: "default",
  },
  render: (args) => (
    <div className="flex items-center gap-x-4">
      {validationStateList.map((state) => (
        <div key={state}>
          <BaseInput {...args} validationState={state} placeholder={state} />
        </div>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    size: "md",
    radius: "simple",
    validationState: "default",
    disabled: true,
    placeholder: "비활성화된 인풋입니다.",
  },
};
