import { useParams } from "react-router-dom";
import "./Products.css";
import { Container } from "react-bootstrap";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import Message from "../../components/Message/Message";
import errImg from "../../assets/images/Oops!.webp";

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

      {products.length !== 0 ? (
        <Container className="Products__container">
          {products.map((pro) => {
            return (
              <div className="Products__product" key={pro.id}>
                <Product pro={pro} />
              </div>
            );
          })}
        </Container>
      ) : (
        <Message msg={"Products Not Found"} msgImg={errImg} />
      )}
    </section>
  );
};

export default Products;
