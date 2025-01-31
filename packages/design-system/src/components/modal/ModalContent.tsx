import classNames from "classnames";
import type { IDefaultModalProps } from "./modal";

/**
 * MocalComponent 컴포넌트
 *
 * 스타일:
 * 1. tailwind의 @layer components 사용
 * 2. styles/components/modal.css > .modal, .modal-content
 */

const ModalContent = ({ children, className }: IDefaultModalProps) => {
  return (
    <div className="modal">
      <div className={classNames("modal-content", className)}>{children}</div>
    </div>
  );
};

export default ModalContent;
