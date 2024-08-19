import "./sideCart.css";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CartProducts from "../CartProducts/CartProducts";
import Message from "../Message/Message";
import imgCart from "../../assets/images/Cart.webp";
import { toggleSideCart } from "../../store/showModalsSlice";

export default function SideCart() {
  const cart = useSelector((state) => state.cart);
  const { sideCart } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  return (
    <Offcanvas
      className="SideCart"
      show={sideCart}
      onHide={() => dispatch(toggleSideCart())}
      placement="end"
    >
      <Offcanvas.Header className="d-flex justify-content-between">
        <Offcanvas.Title className=" fs-1">Cart</Offcanvas.Title>
        <button
          className="SideCart__close-btn"
          onClick={() => dispatch(toggleSideCart())}
        >
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
