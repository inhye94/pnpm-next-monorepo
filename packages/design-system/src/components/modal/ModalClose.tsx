import { useCallback } from "react";
import { useModalContext } from "../../providers/ModalProvider";
import { IDefaultModalProps } from "./modal";

interface IModalCloseProps extends IDefaultModalProps {
  onClick?: () => void;
}

const ModalClose = ({ children, className, onClick }: IModalCloseProps) => {
  const { closeModal } = useModalContext();

  const handleClose = useCallback(() => {
    closeModal();

    // NOTE: 주입된 클릭 이벤트
    if (onClick) {
      onClick();
    }
  }, [closeModal, onClick]);

  return (
    <button onClick={handleClose} className={className}>
      {children}
    </button>
  );
};

export default ModalClose;
