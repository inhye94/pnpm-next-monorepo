import { createPortal } from "react-dom";
import { useModalContext } from "../../providers/ModalProvider";
import type { IDefaultModalProps } from "./modal";

const ModalPortal = ({ children }: IDefaultModalProps) => {
  const { isOpen } = useModalContext();

  return isOpen
    ? createPortal(
        children,
        (document.getElementById("modal-root") as HTMLElement) || document.body,
      )
    : null;
};

export default ModalPortal;
