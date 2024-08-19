import { useParams } from "react-router-dom";
import "./Products.css";
import { Container } from "react-bootstrap";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import errImg from "../../assets/images/Oops!.webp";
import ProductsItms from "../../components/ProductsItms/ProductsItms";

const Products = () => {
  const { prefix } = useParams();
  const [products, setProducts] = useState([]);
  const mainData = useSelector((state) => state.mainData);

  useEffect(() => {
    const filterData = mainData.products.filter(
      (data) => data.catPrefix === prefix
    );
    setProducts(filterData);
  }, [mainData, prefix]);
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
