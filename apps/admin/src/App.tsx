import { Outlet } from "react-router";
import Gnb from "./components/Gnb";

function App() {
  return (
    <>
      <Gnb />
      <Outlet />
      <footer>푸터</footer>
    </>
  );
}

export default App;
