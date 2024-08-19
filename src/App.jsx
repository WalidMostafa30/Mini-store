import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Setting from "./components/Setting/Setting";
import SideCart from "./components/sideCart/sideCart";
import Search from "./components/Search/Search";

function App() {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
      <Setting />
      <SideCart />
      <Search />
    </main>
  );
}

export default App;
