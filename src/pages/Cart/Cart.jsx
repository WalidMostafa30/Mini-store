import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { Container } from "react-bootstrap";
import CartProducts from "../../components/CartProducts/CartProducts";
import CartDetails from "../../components/CartDetails/CartDetails";
import Message from "../../components/Message/Message";
import imgCart from "../../assets/images/Cart.webp";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { cleanCart, getCart } from "../../store/cartSlice";

export default function Cart() {
  const { cart, cartNums } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getCart(user.id));
    }

    return () => dispatch(cleanCart());
  }, [dispatch, user, cartNums]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="Cart">
      <GlobalTitle title={"Cart"} />

      {cart.length > 0 ? (
        <Container className="Cart__container">
          <div className="Cart__details">
            <CartDetails />
          </div>

          <div className="Cart__products">
            <CartProducts user={user} />
          </div>
        </Container>
      ) : (
        <Message msg={"Cart Is Empty... Add Some Products"} msgImg={imgCart} />
      )}
    </section>
  );
}
