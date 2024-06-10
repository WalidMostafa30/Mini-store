/* eslint-disable react/prop-types */
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../rtk/cartSlice";
import { addToFav } from "../../rtk/favouriteSlice.js";
import { Link } from "react-router-dom";

export default function Product({ pro }) {
  const dispatch = useDispatch();
  const Favourite = useSelector((state) => state.favourite);

  const isFavourite = Favourite.some((item) => item.id === pro.id);

  return (
    <>
      <div className="Product">
        <div className="Product__img">
          <img src={pro.images && pro.images[0]} alt="img" />
          <div className="Product__img-back">
            <Link to={`/categories/products/${pro.catPrefix}/${pro.id}`}>
              <FontAwesomeIcon
                className="Product__img-back-icon"
                icon={faEye}
              />
            </Link>

            <FontAwesomeIcon
              className="Product__img-back-icon"
              icon={faCartShopping}
              onClick={() => dispatch(addToCart(pro))}
            />

            <FontAwesomeIcon
              className={
                isFavourite
                  ? "Product__img-back-icon active"
                  : "Product__img-back-icon"
              }
              icon={faHeart}
              onClick={() => dispatch(addToFav(pro))}
            />
          </div>
        </div>

        <h4 className="Product__title">{pro.title}</h4>

        <p className="Product__price">{pro.price} $</p>
      </div>
    </>
  );
}
