import { Container } from "@workspace/design-system/components";
import classNames from "classnames";
import Logo from "../Logo";
import LocalNav from "./LocalNav";
import OuterNav from "./OuterNav";
import { GNB_HEIGHT } from "./constants";

export default function Gnb() {
  return (
    <header className="bg-background-dark z-gnb sticky inset-x-0 top-0 text-white">
      <Container
        className={classNames(
          "flex max-w-1200 items-center gap-30",
          `h-${GNB_HEIGHT}`,
        )}
      >
        <Logo />
        <LocalNav />
        <OuterNav />
      </Container>
    </header>
  );
}
