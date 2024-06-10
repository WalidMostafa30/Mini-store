import "./NewProducts.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import Product from "../../components/product/Product";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function NewProducts() {
  const [products, setProducts] = useState([]);
  const mainData = useSelector((state) => state.mainData);

  useEffect(() => {
    const filterData = mainData.products.filter((i) => i.new === true);
    setProducts(filterData);
  }, [mainData]);

  return (
    <section className="NewProducts">
      <GlobalTitle title={"New Products"} />
      <Container className="NewProducts__container">
        {products.map((product) => {
          return (
            <div className="NewProducts__product" key={product.id}>
              <Product pro={product} />
            </div>
          );
        })}
      </Container>
      <Link className="NewProducts__more main-btn" to={"categories"}>
        {"Show More >>"}
      </Link>
    </section>
  );
}
