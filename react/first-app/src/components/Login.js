import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [isvisible, setIsvisible] = useState(false);
  // const [allData, setAllData] = useState([]);

  const navigate = useNavigate();

  const toHome = () => {
    navigate("/home", {
      state: { username: data.username, password: data.password },
    });
  };

  return (
    <div className="login">
      <span className="heading">Login Form</span>
      <form
        action=""
        method="get"
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          setIsvisible(true);
          // setAllData([data]);
          // console.log(allData);
          if (data.username === "admin" && data.password === "root") {
            toHome();
          } else {
          }
        }}
      >
        <input
          type="text"
          name="username"
          value={data.username}
          placeholder="username"
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
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
        {isvisible && <div>your username and password is wrong</div>}
      </form>
    </div>
  );
};

export default Login;
