import React from "react";

const Contact = (props) => {
  return (
    <div className="contactLayout">
      <div className="left">
        <div className="name">{props.firstname + " " + props.lastname}</div>
        <div className="number">{props.number}</div>
      </div>
      <button>delete</button>
    </div>
  );
};

export default Contact;
