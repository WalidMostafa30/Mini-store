import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Setting from "./components/Setting/Setting";
import Search from "./components/Search/Search";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
      <Setting />
      <Search />
    </main>
  );
}

export default App;
