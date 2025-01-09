import Link from "next/link";

const Gnb = () => {
  return (
    <header>
      <h1>
        <Link href="/">Inhye&apos;s PortFolio</Link>
      </h1>

      <nav>
        <h2>외부 링크</h2>

        <ul>
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
    </header>
  );
};

export default Gnb;
