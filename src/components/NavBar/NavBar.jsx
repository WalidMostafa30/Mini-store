import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faSearch,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { toggleSearch } from "../../store/showModalsSlice";
import { LogOutAct } from "../../store/authSlice";
import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const [userMenu, setUserMenu] = useState(false);

  const { cartNums } = useSelector((state) => state.cart);
  const { favsNums } = useSelector((state) => state.favourite);
  const { nav } = useSelector((state) => state.modals);
  const { user } = useSelector((state) => state.auth);

  const toggleUserMenu = () => setUserMenu((prev) => !prev);

  const getUserCart = () =>
    cartNums?.find((i) => i.userId === user?.id)?.cart || [];
  const getUserFavs = () =>
    favsNums?.find((i) => i.userId === user?.id)?.favourite || [];

  const numOfFavs = getUserFavs().length;
  const totalProducts = getUserCart().length;

  return (
    <nav className="NavBar">
      <div>
        {user ? (
          <div
            className="main-btn main-btn--light d-flex align-items-center gap-2 py-1 px-2 position-relative"
            onClick={toggleUserMenu}
          >
            <h4>{user.name}</h4>
            <FontAwesomeIcon icon={faCaretDown} />
            {userMenu && (
              <div className="user-menu">
                <h4>Profile</h4>
                <h4 onClick={() => dispatch(LogOutAct())}>Log Out</h4>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Link
              className="main-btn px-2 py-1 me-2 main-btn--light"
              to="/login"
            >
              Log In
            </Link>
            <Link className="main-btn px-2 py-1" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <div className={`NavBar__links ${nav ? "open" : ""}`}>
        <NavLink to="/" className="NavBar__link">
          Home
        </NavLink>
        <NavLink to="/categories" className="NavBar__link">
          Category
        </NavLink>
      </div>

      <div className="NavBar__icons">
        <div className="NavBar__icon" onClick={() => dispatch(toggleSearch())}>
          <FontAwesomeIcon icon={faSearch} />
        </div>

        <Link to="/favourite" className="NavBar__icon">
          <FontAwesomeIcon icon={faHeart} />
          {numOfFavs > 0 && (
            <span className="NavBar__icon-quantity">
              {numOfFavs > 9 ? "+9" : numOfFavs}
            </span>
          )}
        </Link>

        <Link to="/cart" className="NavBar__icon">
          <FontAwesomeIcon icon={faCartShopping} />
          {totalProducts > 0 && (
            <span className="NavBar__icon-quantity">
              {totalProducts > 9 ? "+9" : totalProducts}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
