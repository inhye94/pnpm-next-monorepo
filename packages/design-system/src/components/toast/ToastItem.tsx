import classNames from "classnames";
import { useToastContext } from "../../providers/ToastProvider";
import IconButton from "../iconButton/IconButton";
import type { IToastMessage } from "./toast";

export default function ToastItem({ id, message, type }: IToastMessage) {
  const { removeToast } = useToastContext();

  return (
    <div className={classNames("toast", `is-${type}`)}>
      <p>{message}</p>
      <IconButton
        variant="ghost"
        icon="close"
        label="닫기"
        onClick={() => removeToast(id)}
        className="close-button"
      />
    </div>
  );
}
