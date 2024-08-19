import "./BestRate.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductsItms from "../../components/ProductsItms/ProductsItms";

export default function BestRate() {
  const [products, setProducts] = useState([]);
  const mainData = useSelector((state) => state.mainData);

  useEffect(() => {
    const filterData = mainData.products.filter((i) => i.rate > 4);
    setProducts(filterData);
  }, [mainData]);

  return (
    <section className="BestRate  d-flex flex-column">
      <GlobalTitle title={"Best Rate"} />

      <Container className="BestRate__container">
        <ProductsItms products={products} />
      </Container>

      <Link className="BestRate__more main-btn m-auto mt-4" to={"categories"}>
        {"Show More >>"}
      </Link>
    </section>
  );
}
