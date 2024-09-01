// import { Link } from "react-router-dom";
import "./Header.css";
import { Container } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import BarsMenu from "../BarsMenu/BarsMenu.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../../store/showModalsSlice.js";

export default function Header() {
  const dispatch = useDispatch();
  const { nav } = useSelector((state) => state.modals);

  return (
    <header className="Header">
      <Container className="Header__container">
        <div className="Header__head d-flex align-items-center justify-content-md-center justify-content-between">
          <h1 className="Header__title">
            Mini<span>Store</span>
          </h1>
          <BarsMenu onClick={() => dispatch(toggleNav())} status={nav} />
        </div>

        <NavBar />
      </Container>
    </header>
  );
}
