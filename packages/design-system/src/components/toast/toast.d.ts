export interface IToastMessage {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

export interface IToastContext {
  toastMessages: IToastMessage[];
  showToast: (message: string, type: IToastMessage["type"]) => void;
  removeToast: (id: string) => void;
}
