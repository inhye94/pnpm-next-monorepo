import { Dialog } from "radix-ui";

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

export default function ModalOverlay({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <Dialog.Overlay className="overlay">{children}</Dialog.Overlay>;
}
