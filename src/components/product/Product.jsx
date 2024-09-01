/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../../store/cartSlice";
import { addToFav } from "../../store/favouriteSlice";
import "./Product.css";

const Product = ({ pro }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favsNums } = useSelector((state) => state.favourite);
  const { user } = useSelector((state) => state.auth);

  const isFavourite =
    user &&
    favsNums.find((i) => i.userId === user.id)?.favourite?.includes(pro.id);

  const handleAddToCart = () => {
    if (user) {
      dispatch(addToCart({ userId: user.id, proId: pro.id }));
    } else {
      navigate("/login");
    }
  };

  const handleAddToFavourite = () => {
    if (user) {
      dispatch(addToFav({ userId: user.id, proId: pro.id }));
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="Product">
      <div className="Product__img">
        <img src={pro.images?.[0]} alt={pro.title} loading="lazy" />
        <div className="Product__actions">
          <Link
            className="Product__icon"
            to={`/categories/products/${pro.catPrefix}/${pro.id}`}
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>

          <div className="Product__icon" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>

          <div
            className={`Product__icon ${isFavourite ? "active" : ""}`}
            onClick={handleAddToFavourite}
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>

      <h4 title={pro.title} className="Product__title">
        {pro.title}
      </h4>

      <p className="Product__price">{pro.price} $</p>
    </div>
  );
};

export default Product;
