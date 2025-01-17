import LocalNav from "./LocalNav";
import Logo from "./Logo";
import OuterNav from "./OuterNav";

export default function Gnb() {
  return (
    <header className="bg-primary">
      <Logo />
      <LocalNav />
      <OuterNav />
    </header>
  );
}
