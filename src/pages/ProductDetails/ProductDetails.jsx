import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../../store/cartSlice";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import {
  cleanproductDetails,
  getProductDetails,
} from "../../store/productDetailsSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { productDetails } = useSelector((state) => state.productDetails);

  const addCartHandle = (product) => {
    if (user) {
      dispatch(addToCart({ userId: user.id, proId: product.id }));
    } else {
      navigate("/login");
    }
  };

  const [activeImg, setActiveImg] = useState(0);
  const imgNum = (index) => setActiveImg(index);

  useEffect(() => {
    dispatch(getProductDetails(id));

    return () => dispatch(cleanproductDetails());
  }, [id, dispatch]);

  return (
    <section className="ProductDetails pt-3">
      <Container className="ProductDetails__container">
        <div className="ProductDetails__imgs">
          <img
            className="ProductDetails__big-img"
            src={productDetails.images && productDetails.images[activeImg]}
            alt="img"
          />

          <div className="ProductDetails__small-imgs">
            {productDetails.images &&
              productDetails.images.map((img, index) => {
                return (
                  <img
                    className={
                      activeImg === index
                        ? "ProductDetails__small-img active"
                        : "ProductDetails__small-img"
                    }
                    key={index}
                    src={img}
                    alt="img"
                    onClick={() => imgNum(index)}
                  />
                );
              })}
          </div>
        </div>

        <div className="ProductDetails__info">
          <h1 className="ProductDetails__info-title">{productDetails.title}</h1>

          <h5 className="ProductDetails__info-description">
            {productDetails.description}
          </h5>

          <p className="ProductDetails__info-price">{productDetails.price} $</p>

          <button
            className="ProductDetails__info-btn main-btn p-2 fs-3"
            onClick={() => addCartHandle(productDetails)}
          >
            Add To Cart <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </Container>

      <RelatedProducts product={productDetails} />
    </section>
  );
};

export default ProductDetails;
