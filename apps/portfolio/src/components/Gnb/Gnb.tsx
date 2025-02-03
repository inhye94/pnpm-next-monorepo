import { Container } from "@workspace/design-system/components";
import Logo from "../Logo";
import LocalNav from "./LocalNav";
import OuterNav from "./OuterNav";

export default function Gnb() {
  return (
    <header className="bg-background-dark z-gnb sticky inset-x-0 top-0 text-white">
      <Container className="flex h-48 max-w-1200 items-center gap-30">
        <Logo />
        <LocalNav />
        <OuterNav />
      </Container>
    </header>
  );
}
