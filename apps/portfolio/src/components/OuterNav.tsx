export default function OuterNav() {
  return (
    <nav>
      <h2 className="visually-hidden">외부 링크</h2>

      <ul className="flex">
        <li>
          <a href="https://github.com/inhye94" target="_blank">
            깃허브
          </a>
        </li>
        <li>
          <a href="https://velog.io/@inhye94/posts" target="_blank">
            벨로그
          </a>
        </li>
      </ul>
    </nav>
  );
}
