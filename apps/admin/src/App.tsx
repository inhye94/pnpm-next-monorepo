import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Gnb from "./components/Gnb";

function App() {
  return (
    <>
      <Gnb />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
