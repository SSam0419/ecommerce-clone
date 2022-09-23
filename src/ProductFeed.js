import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import { useNavigate } from "react-router-dom";

const ProductFeed = ({ product }) => {
  let navigate = useNavigate();
  const { cartItems, data, setCartItems } = useContext(DataContext);
  return (
    <div className="product-feed">
      <img src={product.img} width="350px" height="350px" />
      <div className="features-card-text">
        <h3>{product.name}</h3>
        <div>{"$" + product.price}</div>
        <div>{product.desription}</div>
      </div>
      <div className="product-actions">
        <button
          onClick={() => {
            let exist = false;
            cartItems.map((item) => {
              if (Number(item.id) === Number(product.id)) {
                exist = true;
              }
            });
            if (exist) {
              alert(
                "Product Added to cart already! You can change quantity purchased in shopping cart."
              );
            } else {
              alert("Added to shopping cart!");
              setCartItems((prev) => [
                ...prev,
                { id: product.id, quantity: 1 },
              ]);
            }
          }}
        >
          Add to cart
        </button>
        <button
          onClick={() => {
            navigate(`/product/:${product.id}`);
          }}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default ProductFeed;
