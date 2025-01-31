import { ModalProvider } from "../../providers/ModalProvider";
import ModalClose from "./ModalClose";
import ModalContent from "./ModalContent";
import ModalOverlay from "./ModalOverlay";
import ModalPortal from "./ModalPortal";
import ModalTrigger from "./ModalTrigger";

/**
 * Modal 컴포넌트
 * 
 * 특징:
 * 1. 재사용성: 자유롭게 조립 가능
 * 2. 응집도: CCP 패턴으로 Modal 관련된 컴포넌트만 분류
 * 3. Portal: React Portal을 통한 DOM 계층 분리
 * 
 * 스타일:
 * 1. tailwind의 @layer components 사용 - ModalContent, ModalOverlay
 * 2. styles/components/modal.css
 * 
 * @param {React.ReactNode} 모달 내용
 * @example 
<Modal.Root>
  <Modal.Trigger>트리거</Modal.Trigger>
  <Modal.Portal>
    <Modal.Overlay />
    <Modal.Content>
      <Modal.Close>닫기</Modal.Close>
      <p>모달 내용</p>
    </Modal.Content>
  </Modal.Portal>
</Modal.Root>
 */

export default function Modal({ children }: { children: React.ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}

Modal.Root = Modal;
Modal.Portal = ModalPortal;
Modal.Content = ModalContent;
Modal.Trigger = ModalTrigger;
Modal.Close = ModalClose;
Modal.Overlay = ModalOverlay;
