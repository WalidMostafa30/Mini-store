import "./BestRate.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import Product from "../../components/product/Product";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function BestRate() {
  const [products, setProducts] = useState([]);
  const mainData = useSelector((state) => state.mainData);

  useEffect(() => {
    const filterData = mainData.products.filter((i) => i.rate > 4);
    setProducts(filterData);
  }, [mainData]);

  return (
    <section className="BestRate">
      <GlobalTitle title={"Best Rate"} />
      <Container className="BestRate__container">
        {products.map((product) => {
          return (
            <div className="BestRate__product" key={product.id}>
              <Product pro={product} />
            </div>
          );
        })}
      </Container>
      <Link className="BestRate__more main-btn" to={"categories"}>
        {"Show More >>"}
      </Link>
    </section>
  );
}
