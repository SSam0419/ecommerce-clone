import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "./context/DataContext";

const ShoppingCart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { cartItems, data, setCartItems, totalSpend } = useContext(DataContext);

  return (
    <div className="cart-item-row-container">
      {cartItems && cartItems.length === 0 ? (
        <div>
          Cart is empty <Link to="/products">Shop now!</Link>
        </div>
      ) : (
        <div>
          {cartItems.map((cartItem, idx) => {
            return (
              <>
                {data
                  .filter((item) => item.id == cartItem.id)
                  .map((element) => {
                    return (
                      <div>
                        <div className="cart-item-row">
                          <img
                            src={element.img}
                            height="200px"
                            width="200px"
                          ></img>

                          <div className="cart-item-row-description">
                            <h2>{element.name}</h2>
                            <h3>{element.description}</h3>
                            <h4>${element.price}</h4>
                            <div className="cart-item-row-quantity">
                              <button
                                onClick={() => {
                                  //remove
                                  setCartItems((prev) =>
                                    prev.filter(
                                      (item) => item.id !== cartItem.id
                                    )
                                  );
                                  //append
                                  setCartItems((prev) => [
                                    ...prev.slice(0, idx),
                                    {
                                      id: cartItems[idx].id,
                                      quantity: cartItems[idx].quantity + 1,
                                    },
                                    ...prev.slice(idx),
                                  ]);
                                }}
                              >
                                +
                              </button>
                              <span>{cartItem.quantity} </span>
                              <button
                                onClick={() => {
                                  if (cartItems[idx].quantity == 0) {
                                    return;
                                  }

                                  //remove
                                  setCartItems((prev) =>
                                    prev.filter(
                                      (item) => item.id !== cartItem.id
                                    )
                                  );
                                  //append
                                  setCartItems((prev) => [
                                    ...prev.slice(0, idx),
                                    {
                                      id: cartItems[idx].id,
                                      quantity: cartItems[idx].quantity - 1,
                                    },
                                    ...prev.slice(idx),
                                  ]);
                                }}
                              >
                                -
                              </button>
                            </div>

                            <button
                              onClick={() => {
                                setCartItems((prev) =>
                                  prev.filter((item) => item.id !== cartItem.id)
                                );
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </>
            );
          })}
          <div className="cart-total">
            <span>Total: ${totalSpend}</span>
            <button
              onClick={() => {
                navigate("/payment");
              }}
            >
              Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
