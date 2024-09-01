/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../../store/cartSlice";
import "./CartProducts.css";

const CartProducts = ({ user }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDecrease = (proId) => {
    dispatch(decreaseQuantity({ userId: user.id, proId }));
  };

  const handleIncrease = (proId) => {
    dispatch(addToCart({ userId: user.id, proId }));
  };

  const handleRemove = (proId) => {
    dispatch(removeFromCart({ userId: user.id, proId }));
  };

  return (
    <div className="CartProducts">
      {cart.map((product) => (
        <div key={product.id} className="CartProduct">
          <div className="CartProduct__head">
            <h4 className="CartProduct-title">{product.title}</h4>
            <h3 className="CartProduct-price">{product.price} $</h3>
          </div>

          <div className="CartProduct__body">
            <img
              className="CartProduct-img"
              src={product.images[0]}
              alt={product.title}
            />

            <div className="CartProduct__actions">
              <h3>{product.price * product.quantity} $</h3>

              <div className="CartProduct-quantity">
                <button onClick={() => handleDecrease(product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => handleIncrease(product.id)}>+</button>
              </div>

              <button
                onClick={() => handleRemove(product.id)}
                className="CartProduct-remove main-btn main-btn--danger py-1 px-2"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
