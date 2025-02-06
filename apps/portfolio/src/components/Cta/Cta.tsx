import EmailCopyButton from "./EmailCopyButton";
import ScrollTopButton from "./ScrollTopButton";

export default function Cta() {
  return (
    <aside className="z-cta fixed right-16 bottom-60">
      <h4 className="visually-hidden">퀵 버튼</h4>

      <div className="flex flex-col gap-y-8">
        <EmailCopyButton />
        <ScrollTopButton />
      </div>
    </aside>
  );
}
