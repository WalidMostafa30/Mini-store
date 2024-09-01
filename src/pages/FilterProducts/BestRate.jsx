import "./FilterProducts.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import ProductsItms from "../../components/ProductsItms/ProductsItms";
import { cleanBestRate, getBestRate } from "../../store/filterProductsSlice";

export default function BestRate() {
  const { bestRate } = useSelector((state) => state.filterProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBestRate());

    return () => dispatch(cleanBestRate());
  }, [dispatch]);

  return (
    <section className="BestRate d-flex flex-column">
      <GlobalTitle title={"Best Rate"} />

      <Container className="BestRate__container">
        <ProductsItms products={bestRate} />
      </Container>

      <Link
        className="BestRate__more main-btn m-auto mt-4 py-3 px-4 fs-3"
        to={"categories"}
      >
        Show More
      </Link>
    </section>
  );
}
