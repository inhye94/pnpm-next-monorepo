import Link from "next/link";

const menus: string[] = ["career", "project", "skill"];

export default function Sidebar() {
  return (
    <nav>
      <h2>메뉴</h2>

      <ul>
        {menus.map((menu, index) => (
          <li key={`${menu}-detail-${index}`}>
            <Link href={`/123/${menu}`}>{menu} detail</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
