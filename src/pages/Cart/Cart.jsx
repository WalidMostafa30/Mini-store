import "./Cart.css";
import { useSelector } from "react-redux";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { Container } from "react-bootstrap";
import CartProducts from "../../components/CartProducts/CartProducts";
import CartDetails from "../../components/CartDetails/CartDetails";
import Message from "../../components/Message/Message";
import imgCart from "../../assets/images/Cart.webp";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <section className="Cart">
      <GlobalTitle title={"Cart"} />

      {cart.length > 0 ? (
        <Container className="Cart__container">
          <div className="Cart__details">
            <CartDetails />
          </div>

          <div className="Cart__products">
            <CartProducts />
          </div>
        </Container>
      ) : (
        <Message msg={"Cart Is Empty... Add Some Products"} msgImg={imgCart} />
      )}
    </section>
  );
}
