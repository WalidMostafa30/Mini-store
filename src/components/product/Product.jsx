/* eslint-disable react/prop-types */
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { addToFav } from "../../store/favouriteSlice.js";
import { Link } from "react-router-dom";

export default function Product({ pro }) {
  const dispatch = useDispatch();
  const Favourite = useSelector((state) => state.favourite);

  const isFavourite = Favourite.some((item) => item.id === pro.id);

  return (
      <div className="Product">
        <div className="Product__img">
          <img src={pro.images && pro.images[0]} alt="img" loading="lazy" />
          <div className="Product__actions">
            <Link
              className="Product__icon"
              to={`/categories/products/${pro.catPrefix}/${pro.id}`}
            >
              <FontAwesomeIcon icon={faEye} />
            </Link>

            <div
              className="Product__icon"
              onClick={() => dispatch(addToCart(pro))}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </div>

            <div
              className={isFavourite ? "Product__icon active" : "Product__icon"}
              onClick={() => dispatch(addToFav(pro))}
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
}
