import classNames from "classnames";
import { motion } from "motion/react";
import { useToastContext } from "../../providers/ToastProvider";
import IconButton from "../iconButton/IconButton";
import type { IToastMessage } from "./toast";

export default function ToastItem({ id, message, type }: IToastMessage) {
  const { removeToast } = useToastContext();

  return (
    <motion.div
      className={classNames("toast", `is-${type}`)}
      initial={{ translateY: "16px" }}
      animate={{ translateY: 0 }}
    >
      <p>{message}</p>
      <IconButton
        variant="ghost"
        icon="close"
        label="닫기"
        onClick={() => removeToast(id)}
        className="close-button"
      />
    </motion.div>
  );
}
