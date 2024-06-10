import Banner from "../../components/Banner/Banner";
import BestRate from "../BestRate/BestRate";
import Landing from "../Landing/Landing";
import NewProducts from "../NewProducts/NewProducts";
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
