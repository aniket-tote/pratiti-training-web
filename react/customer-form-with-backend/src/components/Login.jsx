import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  return (
    <div className="login">
      <span className="heading">Login Form</span>
      <form
        action=""
        method="post"
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          axios.post(`http://127.0.0.1:8080/login`, data).then((response) => {
            if (response.data.status) {
              navigate("/", {
                state: { customerData: response.data.customer },
              });
            } else {
              console.log(response.data.messageIfAny);
            }
          });
        }}
      >
        <input
          type="text"
          name="email"
          value={data.email}
          placeholder="email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <input
          type="text"
          name="password"
          id="password"
          value={data.password}
          placeholder="password"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <input type="submit" value="login"></input>
        <Link to="/register">Register here</Link>
      </form>
    </div>
  );
};

export default Login;
