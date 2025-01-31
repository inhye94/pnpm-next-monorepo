import { useCallback } from "react";
import { useModalContext } from "../../providers/ModalProvider";

/**
 * Overlay 컴포넌트
 *
 * 특징:
 * 1. 클릭 이벤트 적용됨 - 모달 닫힘
 * 2. 클릭 이벤트를 주입받음
 *
 * 스타일:
 * 1. tailwind의 @layer components 사용
 * 2. styles/components/modal.css > .overlay
 *
 * @param {function} onClick 클릭 이벤트 핸들러
 */

// type
interface IModalOverlayProps {
  onClick?: () => void;
}

// component
const ModalOverlay = ({ onClick }: IModalOverlayProps) => {
  const { closeModal } = useModalContext();

  const handleClick = useCallback(() => {
    closeModal();

    // NOTE: 주입된 클릭 이벤트
    if (onClick) {
      onClick();
    }
  }, [closeModal, onClick]);

  return <div className="overlay" onClick={handleClick} aria-hidden></div>;
};

export default ModalOverlay;
