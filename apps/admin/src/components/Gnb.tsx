import { Container } from "@workspace/design-system/components";
import { Link } from "react-router";

export default function Gnb() {
  return (
    <header className="bg-neutral-10 text-white">
      <Container>
        <div className="flex h-48 items-center justify-between">
          <h1 className="text-24 text-shadow after:bg-primary font-bold text-white italic transition-all [text-shadow:_0_0_0_var(--color-blue-60)] hover:[text-shadow:_4px_0_0_var(--color-blue-60)]">
            <Link to="/">Portfolio Admin</Link>
          </h1>
        </div>
      </Container>
    </header>
  );
}
