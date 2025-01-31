import type { Meta, StoryObj } from "@storybook/react";
import BaseButton from "../button/BaseButton";
import Icon from "../icon";
import Modal from "./BaseModal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "모달입니다. CCP 패턴으로 구현되었습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "object",
      },
      description: "모달 바디의 자식 요소를 설정합니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal.Root>
      <Modal.Trigger>
        <BaseButton>모달 열기</BaseButton>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Close>
            <Icon name="close" label="닫기" className="text-16" />
          </Modal.Close>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  ),
};
