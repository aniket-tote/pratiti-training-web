import React from "react";

const Contact = (props) => {
  const handledlt = () => {
    props.setDltIndx(props.index);
  };

  return (
    <div className="contactLayout">
      <div className="left">
        <div className="name">{props.firstname + " " + props.lastname}</div>
        <div className="number">{props.number}</div>
      </div>
      <button onClick={handledlt}>delete {props.index}</button>
    </div>
  );
};

export default Contact;
