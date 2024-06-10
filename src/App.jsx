import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Setting from "./components/Setting/Setting";

function App() {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
      <Setting />
    </main>
  );
}

export default App;
