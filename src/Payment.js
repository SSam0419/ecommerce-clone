import React, { useState } from "react";
import Map from "./component/Map";

const Payment = () => {
  const [delivery, setDelivery] = useState(true);

  return (
    <div className="payment-page-container">
      <div className="payment-page-select">
        <button
          onClick={() => setDelivery(true)}
          className={delivery ? "active" : ""}
        >
          <h2>Delivery</h2>
        </button>
        <button
          onClick={() => setDelivery(false)}
          className={!delivery ? "active" : ""}
        >
          <h2>Pick up</h2>
        </button>
      </div>
      {delivery && (
        <div className="payment-page-delivery">
          <label>
            <h3>Delivery Date:</h3>
            <input
              type={"date"}
              style={{ margin: "14px 0", width: "150px", padding: "6px" }}
            ></input>
          </label>
          <label>
            <h3>Delivery Time:</h3>
            <input
              type={"time"}
              style={{ margin: "14px 0", width: "150px", padding: "6px" }}
            ></input>
          </label>

          <h3>Delivery Details:</h3>

          <form
            onSubmit={(e) => {
              alert("Submited");
            }}
          >
            <label>
              Recipent
              <input type={"text"} required></input>
            </label>
            <label>
              Mobile
              <input type={"tel"} required></input>
            </label>
            <label>
              Email
              <input type={"email"} required></input>
            </label>
            <label>
              Address
              <input type={"//#region "} required></input>
            </label>
            <input
              type={"submit"}
              style={{ width: "100px", marginLeft: "auto" }}
            ></input>
          </form>
        </div>
      )}
      {!delivery && (
        <div className="payment-page-pick-up">
          <h2>Pick up location</h2>
          <div className="map">
            <div
              className="google-map"
              style={{ height: "500px", width: "500px" }}
            >
              <Map />
            </div>
          </div>

          <p>Please show your SMS notificaition to staff for pick up</p>

          <h3>Delivery Details:</h3>
          <form
            onSubmit={(e) => {
              alert("Submited");
            }}
          >
            <label>
              Recipent
              <input type={"text"} required></input>
            </label>
            <label>
              Mobile
              <input type={"tel"} required></input>
            </label>
            <label>
              Email
              <input type={"email"} required></input>
            </label>

            <input
              type={"submit"}
              style={{ width: "100px", marginLeft: "auto" }}
            ></input>
          </form>
        </div>
      )}
    </div>
  );
};

export default Payment;
