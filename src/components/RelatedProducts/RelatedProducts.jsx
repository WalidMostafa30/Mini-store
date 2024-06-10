/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import "./RelatedProducts.css";
import GlobalTitle from "../GlobalTitle/GlobalTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import Product from "../product/Product";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SiwperSlideBtn from "../SiwperSlideBtn/SiwperSlideBtn";

const RelatedProducts = ({ product }) => {
  const [relProducts, setRelProduct] = useState([]);
  const mainData = useSelector((state) => state.mainData);

  useEffect(() => {
    const filterProducts = mainData.products.filter(
      (pro) => pro.catPrefix === product.catPrefix && pro.id !== product.id
    );
    setRelProduct(filterProducts);
    // console.log(product.images[1]);
  }, [product, mainData]);

  return (
    <article className="RelatedProducts">
      <GlobalTitle title={"Related Products"} />
      <Container className="RelatedProducts__container">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          mousewheel={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Navigation, Mousewheel]}
          className="mySwiper"
        >
          <SiwperSlideBtn />
          {relProducts.map((pro) => {
            return (
              <SwiperSlide key={pro.id}>
                <Product pro={pro} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </article>
  );
};

export default RelatedProducts;
