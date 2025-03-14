import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">홈</Link>
        </h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>푸터</footer>
    </>
  );
}

export default App;
