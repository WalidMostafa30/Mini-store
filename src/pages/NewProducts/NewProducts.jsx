import "./NewProducts.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductsItms from "../../components/ProductsItms/ProductsItms";

export default function NewProducts() {
  const [products, setProducts] = useState([]);
  const mainData = useSelector((state) => state.mainData);

  useEffect(() => {
    const filterData = mainData.products.filter((i) => i.new === true);
    setProducts(filterData);
  }, [mainData]);

  return (
    <section className="NewProducts d-flex flex-column">
      <GlobalTitle title={"New Products"} />

      <Container className="NewProducts__container">
        <ProductsItms products={products} />
      </Container>

      <Link
        className="NewProducts__more main-btn m-auto mt-4"
        to={"categories"}
      >
        {"Show More >>"}
      </Link>
    </section>
  );
}
