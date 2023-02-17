import React from "react";

const Product = (props) => {
  return (
    <div className="card">
      <img
        src={props.url}
        alt="Avatar"
      ></img>
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>${props.price}</p>
      </div>
    </div>
  );
};

export default Product;
