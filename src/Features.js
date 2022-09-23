import React from "react";
import data from "./database/products.json";
import ProductFeed from "./ProductFeed";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const Features = () => {
  return (
    <div className="features-cards-container">
      <h2>Featured Products</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        scrollbar={{ draggable: true, dragSize: 500 }}
        modules={[Autoplay, Scrollbar]}
      >
        {data.map((product) => {
          return (
            <SwiperSlide className="features-card">
              <ProductFeed product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Features;
