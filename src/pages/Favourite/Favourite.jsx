import "./Favourite.css";
import { Container } from "react-bootstrap";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import imgFav from "../../assets/images/Favourite.webp";
import { cleanFavs, clearFav, getFav } from "../../store/favouriteSlice";
import ProductsItms from "../../components/ProductsItms/ProductsItms";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Favourite = () => {
  const { favourites, favsNums } = useSelector((state) => state.favourite);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getFav(user.id));
    }

    return () => dispatch(cleanFavs());
  }, [dispatch, user, favsNums]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="Favourite">
      <GlobalTitle title={"Favourite"} />

      {favourites.length !== 0 ? (
        <Container className="Favourite__container">
          <div className="col-12 text-center mb-3">
            <button
              className="main-btn py-1 px-3 fs-4"
              onClick={() => dispatch(clearFav())}
            >
              Clear All Favourite
            </button>
          </div>

          <ProductsItms products={favourites} />
        </Container>
      ) : (
        <Message msg={"No Favourites Yet... Add Some"} msgImg={imgFav} />
      )}
    </section>
  );
};

export default Favourite;
