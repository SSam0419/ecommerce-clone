import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div>
        <NavLink className="nav-bar-links" to="/">
          <h3>E-commerce Clone</h3>
        </NavLink>
      </div>

      <div className="nav-bar-right">
        <NavLink className="nav-bar-links" to="/products">
          Products
        </NavLink>
        <NavLink className="nav-bar-links" to="/shopping-cart">
          Shopping Cart
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
