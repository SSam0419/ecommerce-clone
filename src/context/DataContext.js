import { createContext, useState, useEffect } from "react";
import data from "../database/products.json";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });
  const [totalSpend, setTotalSpend] = useState(0);
  const [display, setDisplay] = useState(data);

  //save into local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    let total = 0;
    cartItems.map((item) => {
      total +=
        Number(data.filter((element) => element.id == item.id)[0].price) *
        item.quantity;
    });

    setTotalSpend(total);
  }, [cartItems]);

  return (
    <DataContext.Provider
      value={{ cartItems, setCartItems, display, setDisplay, totalSpend, data }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
