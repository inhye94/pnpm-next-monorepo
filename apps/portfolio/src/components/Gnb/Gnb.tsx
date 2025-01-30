import { Container } from "@workspace/design-system/components";
import Logo from "../Logo";
import LocalNav from "./LocalNav";
import OuterNav from "./OuterNav";

export default function Gnb() {
  return (
    <header className="bg-neutral-10 z-gnb sticky top-0 left-0 w-full">
      <Container className="flex h-48 max-w-1200 items-center gap-30">
        <Logo />
        <LocalNav />
        <OuterNav />
      </Container>
    </header>
  );
}
