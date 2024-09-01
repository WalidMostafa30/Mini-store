import "./FilterProducts.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import ProductsItms from "../../components/ProductsItms/ProductsItms";
import {
  cleanNewProducts,
  getNewProducts,
} from "../../store/filterProductsSlice";

export default function NewProducts() {
  const { newProducts } = useSelector((state) => state.filterProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewProducts());

    return () => dispatch(cleanNewProducts());
  }, [dispatch]);

  return (
    <section className="NewProducts d-flex flex-column">
      <GlobalTitle title={"New Products"} />

      <Container className="NewProducts__container">
        <ProductsItms products={newProducts} />
      </Container>

      <Link
        className="BestRate__more main-btn m-auto mt-4 py-3 px-4 fs-3"
        to={"categories"}
      >
        {"Show More >>"}
      </Link>
    </section>
  );
}
