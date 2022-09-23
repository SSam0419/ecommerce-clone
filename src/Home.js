import React, { useEffect, useState, useRef } from "react";
import Features from "./Features";
import { useNavigate } from "react-router-dom";
import AddToCart from "./component/AddToCart";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();
  return (
    <div id="homePage">
      <div id="new-product-banner" className="big-banner">
        <div className="big-banner-description">
          <h2 className="big-banner-description-text">
            Introducing our brand new A100 Headphone
          </h2>
          <h4 className="big-banner-description-text">
            Added new features including noise cancelling!
          </h4>

          <AddToCart className="big-banner-description-text" productId={"1"} />

          <button
            className="big-banner-description-text"
            onClick={() => {
              navigate("./product/1");
            }}
          >
            More Details
          </button>
        </div>
      </div>

      <div className="featured-products">
        <Features />
      </div>

      <div id="big-promotion-banner" className="big-banner">
        <div className="big-banner-description">
          <h2 className="big-banner-description-text">
            Buy one pair of earphone and get one free!
          </h2>
          <h4 className="big-banner-description-text">
            promotion end at July-7!!!
          </h4>

          <AddToCart className="big-banner-description-text" productId={"3"} />

          <button
            className="big-banner-description-text"
            onClick={() => {
              navigate("./product/3");
            }}
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
