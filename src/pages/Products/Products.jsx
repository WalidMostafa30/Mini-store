import { useParams } from "react-router-dom";
import "./Products.css";
import { Container } from "react-bootstrap";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import errImg from "../../assets/images/Oops!.webp";
import ProductsItms from "../../components/ProductsItms/ProductsItms";
import { cleanProducts, getProducts } from "../../store/productsSlice";

const Products = () => {
  const { prefix } = useParams();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(prefix));

    return () => dispatch(cleanProducts());
  }, [prefix, dispatch]);

  return (
    <section className="Products">
      <GlobalTitle title={"Products"} />

      <Container className="Products__container">
        {products.length !== 0 ? (
          <ProductsItms products={products} />
        ) : (
          <Message msg={"Products Not Found"} msgImg={errImg} />
        )}
      </Container>
    </section>
  );
};

export default Products;
