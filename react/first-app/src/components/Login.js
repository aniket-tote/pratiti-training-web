import React, { useState } from "react";
import "../App.css";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [isvisible, setIsvisible] = useState(false);
  // const [allData, setAllData] = useState([]);

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
        }}
      >
        <input
          type="text"
          name="username"
          id="username"
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
        {isvisible && (
          <div>
            your username: {data.username}
            <br />
            your password: {data.password}
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
