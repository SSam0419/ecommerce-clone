import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./database/products.json";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Scrollbar,
  Pagination,
  FreeMode,
  Navigation,
  Thumbs,
} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import AddToCart from "./component/AddToCart";
import Features from "./Features";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const productData = data.filter(
    (product) => product.id == id.replace(":", "")
  );

  const productId = productData[0].id;

  return (
    <>
      <div id="product-details-page">
        <div id="product-details-gallery">
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-pagination-color": "black",
            }}
            spaceBetween={5}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            centeredSlides={true}
          >
            <SwiperSlide>
              <img src={productData[0].img} />
            </SwiperSlide>

            {productData[0].secondaryImg.map((img) => {
              return (
                <SwiperSlide>
                  <img src={img} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={productData[0].img} />
            </SwiperSlide>

            {productData[0].secondaryImg.map((img) => {
              return (
                <SwiperSlide>
                  <img src={img} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div id="product-details-description">
          <h1>{productData[0].name}</h1>
          <h3>${productData[0].price}</h3>
          <p>{productData[0].description}</p>
          <AddToCart productId={productId} />
          <p>
            <h2>Features:</h2>
            {productData[0].features.map((feature) => {
              return <h5>{feature}</h5>;
            })}
          </p>
        </div>
      </div>
      <div className="product-detail-features">
        <Features />
      </div>
      <div className="product-detail-comments-container">
        <h2>Users Comments</h2>
        <div className="product-detail-comments">AAAA</div>
        <div className="product-detail-comments">BBBB</div>
        <div className="product-detail-comments">CCCC</div>
        <div className="product-detail-comments">DDDD</div>
        <button className="product-detail-comments">+</button>
      </div>
    </>
  );
};

export default ProductDetail;
