import Banner from "../../components/Banner/Banner";
import Landing from "../Landing/Landing";
import BestRate from "../FilterProducts/BestRate";
import NewProducts from "../FilterProducts/NewProducts";
import Services from "../Services/Service";
import "./Home.css";

const Home = () => {
  return (
    <section className="Home">
      <Landing />
      <NewProducts />
      <Banner />
      <BestRate />
      <Services />
    </section>
  );
};

export default Home;
