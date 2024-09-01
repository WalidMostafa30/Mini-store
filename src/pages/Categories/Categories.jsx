import { Container } from "react-bootstrap";
import "./Categories.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import Category from "../../components/Category/Category";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cleanCategories, getCategories } from "../../store/categoriesSlice";

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());

    return () => dispatch(cleanCategories());
  }, [dispatch]);

  return (
    <section className="Categories">
      <GlobalTitle title={"Categories"} />

      <Container className="Categories__container row m-auto w-100 align-items-center justify-content-center gap-5">
        {categories.map((cat) => {
          return <Category key={cat.id} cat={cat} />;
        })}
      </Container>
    </section>
  );
};

export default Categories;
