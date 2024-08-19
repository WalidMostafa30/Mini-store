import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import BarsMenu from "../BarsMenu/BarsMenu";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {
  toggleNav,
  toggleSearch,
  toggleSideCart,
} from "../../store/showModalsSlice.js";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);

  const favourite = useSelector((state) => state.favourite);

  const { nav } = useSelector((state) => state.modals);

  const dispatch = useDispatch();

  return (
    <>
      <div className="NavBar">
        <Container className="NavBar__container">
          <h1 className="NavBar__title">
            Mini<span>Store</span>
          </h1>
          <div className={nav ? "NavBar__links open" : "NavBar__links"}>
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
            <div
              className="NavBar__icon"
              onClick={() => dispatch(toggleSearch())}
            >
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

            <div
              className="NavBar__icon"
              onClick={() => dispatch(toggleSideCart())}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              {cart.length > 0 && (
                <span className="NavBar__icon-quantity">
                  {cart.length > 9 ? "+9" : cart.length}
                </span>
              )}
            </div>

            <BarsMenu onClick={() => dispatch(toggleNav())} status={nav} />
          </div>
        </Container>
      </div>
    </>
  );
}
