import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../../rtk/cartSlice";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const mainData = useSelector((state) => state.mainData);
  const dispatch = useDispatch();

  const addCartHandle = (product) => {
    dispatch(addToCart(product));
  };

  const [activeImg, setActiveImg] = useState(0);
  const imgNum = (index) => setActiveImg(index);

  useEffect(() => {
    const filterProduct = mainData.products.find((pro) => pro.id == id);
    setProduct(filterProduct);
    // console.log(product.images[1]);
  }, [id, mainData]);

  return (
    <section className="ProductDetails">
      <Container className="ProductDetails__container">
        <div className="ProductDetails__imgs">
          <img
            className="ProductDetails__big-img"
            src={product.images && product.images[activeImg]}
            alt="img"
          />

          <div className="ProductDetails__small-imgs">
            {product.images &&
              product.images.map((img, index) => {
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
          <h1 className="ProductDetails__info-title">{product.title}</h1>

          <h5 className="ProductDetails__info-description">
            {product.description}
          </h5>

          <p className="ProductDetails__info-price">{product.price} $</p>

          <button
            className="ProductDetails__info-btn main-btn"
            onClick={() => addCartHandle(product)}
          >
            Add To Cart <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </Container>

      <RelatedProducts product={product} />
    </section>
  );
};

export default ProductDetails;
