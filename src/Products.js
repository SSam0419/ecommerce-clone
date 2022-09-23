import React, { useState, useContext, useEffect } from "react";
import DataContext from "./context/DataContext";
import ProductFeed from "./ProductFeed";
import { BiSearch } from "react-icons/bi";

const Products = () => {
  const [isShown, setIsShown] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [priceRange, setPriceRange] = useState(1000);
  const [type, setType] = useState({ headphone: false, earphone: false });
  const [features, setFeatures] = useState({
    noiceCancelling: false,
    phoneCalls: false,
  });
  const [name, setName] = useState("");
  const { display, setDisplay, data } = useContext(DataContext);

  useEffect(() => {
    display.length === 0 ? setEmpty(true) : setEmpty(false);
  }, [display]);

  useEffect(() => {
    let filteredData = data.filter((item) => Number(item.price) <= priceRange);

    if (name.replace(/\s/g, "") != "") {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (type.earphone) {
      filteredData = filteredData.filter((item) => item.type == "earphone");
    }
    if (type.headphone) {
      filteredData = filteredData.filter((item) => item.type == "headphone");
    }
    if (features.noiceCancelling) {
      filteredData = filteredData.filter((item) =>
        item.features.includes("noise-cancelling")
      );
    }
    if (features.phoneCalls) {
      filteredData = filteredData.filter((item) =>
        item.features.includes("phone-calling")
      );
    }

    setDisplay(filteredData);
  }, [priceRange, type, features, name]);

  return (
    <div>
      <div className="product-query-container">
        <div className="product-searh-bar">
          <span style={{ marginLeft: "10px" }}>
            <BiSearch />
          </span>

          <input
            placeholder="enter product name to search"
            onChange={(e) => setName(e.target.value)}
          ></input>

          {isShown ? (
            <button onClick={() => setIsShown((prev) => !prev)}>▲</button>
          ) : (
            <button onClick={() => setIsShown((prev) => !prev)}>▼</button>
          )}
        </div>
        {isShown && (
          <div className="product-filter">
            <h2>Products filter</h2>
            <div>
              <h3>Types</h3>
              <label>
                <input
                  type={"checkbox"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setType((prev) => ({ ...prev, ["headphone"]: true }));
                    } else {
                      setType((prev) => ({ ...prev, ["headphone"]: false }));
                    }
                  }}
                ></input>
                Headphone
              </label>
              <label>
                <input
                  type={"checkbox"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setType((prev) => ({ ...prev, ["earphone"]: true }));
                    } else {
                      setType((prev) => ({ ...prev, ["earphone"]: false }));
                    }
                  }}
                ></input>{" "}
                Earphone
              </label>
            </div>
            <div>
              <h3>Features</h3>
              <label>
                <input
                  type={"checkbox"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFeatures((prev) => ({
                        ...prev,
                        ["noiceCancelling"]: true,
                      }));
                    } else {
                      setFeatures((prev) => ({
                        ...prev,
                        ["noiceCancelling"]: false,
                      }));
                    }
                  }}
                ></input>{" "}
                Noise cancelling
              </label>
              <label>
                <input
                  type={"checkbox"}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFeatures((prev) => ({
                        ...prev,
                        ["phoneCalls"]: true,
                      }));
                    } else {
                      setFeatures((prev) => ({
                        ...prev,
                        ["phoneCalls"]: false,
                      }));
                    }
                  }}
                ></input>{" "}
                phone calls
              </label>
            </div>
            <div>
              <h3>Price</h3>
              <label id="price-range-query">
                $0 - ${priceRange}
                <input
                  style={{ display: "block" }}
                  type={"range"}
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange}
                  onChange={(e) => {
                    setPriceRange(e.target.value);
                  }}
                ></input>
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="products-container">
        {empty && <h1 style={{ margin: "auto" }}>No product is matched.</h1>}
        {display.map((product) => {
          return <ProductFeed product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
