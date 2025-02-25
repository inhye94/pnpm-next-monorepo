import { Container } from "@workspace/design-system/components";
import Link from "next/link";

const menus = ["career", "project", "skill"];
const id = "12345";

export default function Gnb() {
  return (
    <header className="bg-neutral-10 text-white">
      <Container>
        <h1>
          <Link href="/">Portfolio admin</Link>
        </h1>

        <nav className="flex items-center gap-12">
          <h2 className="visually-hidden">내부 링크</h2>

          <Link href="/">home</Link>
          <Link href="/auth">auth</Link>

          {menus.map((menu, index) => (
            <Link key={`${menu}-detail-${index}`} href={`/${id}/${menu}`}>
              {menu} detail
            </Link>
          ))}
          {menus.map((menu, index) => (
            <Link key={`${menu}-edit-${index}`} href={`/${id}/${menu}/edit`}>
              {menu} edit
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
