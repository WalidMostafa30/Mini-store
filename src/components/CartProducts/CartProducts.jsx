import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decressquantity,
  removeFromCart,
} from "../../rtk/cartSlice";
import "./CartProducts.css";

const CartProducts = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="CartProducts">
      {cart.map((pro) => {
        return (
          <div key={pro.id} className="CartProduct">
            <div className="CartProduct__head">
              <h4 className="CartProduct-title">{pro.title}</h4>

              <h3 className="CartProduct-price">{pro.price} $</h3>
            </div>

            <div className="CartProduct__body">
              <img className="CartProduct-img" src={pro.images[0]} alt="img" />

              <div className="CartProduct__actions">
                <h3 className="">{pro.price * pro.quantity} $</h3>

                <div className="CartProduct-quantity">
                  <button onClick={() => dispatch(decressquantity(pro))}>
                    -
                  </button>

                  <p>{pro.quantity}</p>

                  <button onClick={() => dispatch(addToCart(pro))}>+</button>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(pro))}
                  className="CartProduct-remove main-btn main-btn--danger"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartProducts;
