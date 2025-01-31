export interface IModalContext {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export interface IDefaultModalProps {
  children: React.ReactNode;
  className?: string;
}
