import "./Favourite.css";
import { Container } from "react-bootstrap";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/product/Product";
import Message from "../../components/Message/Message";
import imgFav from "../../assets/images/Favourite.webp";
import { clearFav } from "../../rtk/favouriteSlice";

const Favourite = () => {
  const Favourite = useSelector((state) => state.favourite);
  const dispatch = useDispatch();

  return (
    <section className="Favourite">
      <GlobalTitle title={"Favourite"} />

      {Favourite.length !== 0 ? (
        <Container className="Favourite__container">
          <div className="col-12 text-center mb-3">
            <button className="main-btn" onClick={() => dispatch(clearFav())}>
              Clear All Favourite
            </button>
          </div>

          <div className="Favourite__products">
            {Favourite.map((pro) => {
              return (
                <div className="Favourite__product" key={pro.id}>
                  <Product pro={pro} />
                </div>
              );
            })}
          </div>
        </Container>
      ) : (
        <Message msg={"No Favourites Yet... Add Some"} msgImg={imgFav} />
      )}
    </section>
  );
};

export default Favourite;
