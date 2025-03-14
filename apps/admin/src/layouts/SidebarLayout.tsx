import { Link, Outlet } from "react-router";

export default function SidebarLayout() {
  return (
    <div>
      <div>
        <nav>
          <h2>사이드바 메뉴</h2>
          <li>
            <Link to="/skill">skill</Link>
          </li>
          <li>
            <Link to="/career">career</Link>
          </li>
          <li>
            <Link to="/project">project</Link>
          </li>
        </nav>

        <section>
          <h2>내용</h2>
          <Outlet />
        </section>
      </div>
    </div>
  );
}
