import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="topnav">
        <Link to="/home">Home</Link>
        <Link to="/hello">Hello</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/products" style={{ float: "right" }}>
          Products
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
