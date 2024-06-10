/* eslint-disable react/prop-types */
import "./sideCart.css";
import { Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartProducts from "../CartProducts/CartProducts";
import Message from "../Message/Message";
import imgCart from "../../assets/images/Cart.webp";

export default function SideCart({ showSideCart, handleSideCart }) {
  const cart = useSelector((state) => state.cart);

  return (
    <Offcanvas
      className="SideCart"
      show={showSideCart}
      onHide={handleSideCart}
      placement="end"
    >
      <Offcanvas.Header className="d-flex justify-content-between">
        <Offcanvas.Title className=" fs-1">Cart</Offcanvas.Title>
        <button className="SideCart__close-btn" onClick={handleSideCart}>
          X
        </button>
      </Offcanvas.Header>

      <Offcanvas.Body className="SideCart__body">
        {cart.length > 0 ? (
          <CartProducts />
        ) : (
          <Message
            msg={"Cart Is Empty... Add Some Products"}
            msgImg={imgCart}
          />
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
