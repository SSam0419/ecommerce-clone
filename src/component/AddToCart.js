import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const AddToCart = ({ productId }) => {
  const { cartItems, setCartItems } = useContext(DataContext);

  return (
    <button
      onClick={() => {
        let exist = false;

        cartItems.map((item) => {
          if (Number(item.id) === Number(productId)) {
            exist = true;
          }
        });

        if (exist) {
          alert(
            "Product Added to cart already! You can change quantity purchased in shopping cart."
          );
        } else {
          alert("Added to shopping cart!");
          setCartItems((prev) => [...prev, { id: productId, quantity: 1 }]);
        }
      }}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
