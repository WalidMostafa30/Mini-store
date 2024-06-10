import "./NavBar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import BarsMenu from "../BarsMenu/BarsMenu";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import SideCart from "../sideCart/sideCart.jsx";
import Search from "../Search/Search.jsx";

export default function NavBar() {
  const [showSideCart, setShowSideCart] = useState(false);

  const [showNav, setShowNav] = useState(false);

  const [showSearch, setShowSearch] = useState(false);

  const handleSideCart = () => setShowSideCart(!showSideCart);

  const handleNav = () => setShowNav(!showNav);

  const handleSearch = () => setShowSearch(!showSearch);

  const cart = useSelector((state) => state.cart);

  const favourite = useSelector((state) => state.favourite);

  return (
    <>
      <div className="NavBar">
        <Container className="NavBar__container">
          <h1 className="NavBar__title">
            Mini<span>Store</span>
          </h1>
          <div
            className={showNav ? "NavBar__links open" : "NavBar__links"}
            onClick={handleNav}
          >
            <NavLink to={"/"} className="NavBar__link">
              Home
            </NavLink>
            <NavLink to={"categories"} className="NavBar__link">
              Category
            </NavLink>
            <NavLink to={"cart"} className="NavBar__link">
              Cart
            </NavLink>
          </div>

          <div className="NavBar__icons">
            <div className="NavBar__icon" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </div>

            <Link to={"/favourite"} className="NavBar__icon">
              <FontAwesomeIcon icon={faHeart} />
              {favourite.length > 0 && (
                <span className="NavBar__icon-quantity">
                  {favourite.length > 9 ? "+9" : favourite.length}
                </span>
              )}
            </Link>

            <div className="NavBar__icon" onClick={handleSideCart}>
              <FontAwesomeIcon icon={faCartShopping} />
              {cart.length > 0 && (
                <span className="NavBar__icon-quantity">
                  {cart.length > 9 ? "+9" : cart.length}
                </span>
              )}
            </div>

            <BarsMenu onClick={handleNav} className={showNav} />
          </div>
        </Container>
      </div>
      <SideCart showSideCart={showSideCart} handleSideCart={handleSideCart} />
      <Search handleSearch={handleSearch} showSearch={showSearch} />
    </>
  );
}
