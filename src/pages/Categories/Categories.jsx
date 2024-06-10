import { Container } from "react-bootstrap";
import "./Categories.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import Category from "../../components/Category/Category";
import { useSelector } from "react-redux";

const Categories = () => {
  const mainData = useSelector((state) => state.mainData);
  return (
    <section className="Categories">
      <GlobalTitle title={"Categories"} />
      <Container className="Categories__container">
        {mainData.category.map((cat) => {
          return <Category key={cat.id} cat={cat} />;
        })}
      </Container>
    </section>
  );
};

export default Categories;
