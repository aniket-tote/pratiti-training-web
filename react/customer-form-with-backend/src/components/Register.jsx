import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    password: "",
    address: {
      pincode: "",
      city: "",
      state: "",
    },
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <span className="heading">Registration Form</span>
      <form
        action=""
        method="get"
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
          axios
            .post(`http://127.0.0.1:8080/register`, data)
            .then((response) => {
              console.log(response.data);
            });
          setData({
            name: "",
            email: "",
            dateOfBirth: "",
            password: "",
            address: {
              pincode: "",
              city: "",
              state: "",
            },
          });
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          placeholder="name"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          name="email"
          id="email"
          value={data.email}
          placeholder="email"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          name="dateOfBirth"
          id="dateOfBirth"
          value={data.dateOfBirth}
          placeholder="dateOfBirth"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          name="address.pincode"
          id="pincode"
          value={data.address.pincode}
          placeholder="pincode"
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              address: { ...prevData.address, pincode: e.target.value },
            }));
          }}
        />
        <input
          type="text"
          name="address.city"
          id="city"
          value={data.address.city}
          placeholder="city"
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              address: { ...prevData.address, city: e.target.value },
            }));
          }}
        />
        <input
          type="text"
          name="address.state"
          id="state"
          value={data.address.state}
          placeholder="state"
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              address: { ...prevData.address, state: e.target.value },
            }));
          }}
        />
        <input
          type="text"
          name="password"
          id="password"
          value={data.password}
          placeholder="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input type="submit" value="login"></input>
      </form>
    </div>
  );
};

export default Register;
