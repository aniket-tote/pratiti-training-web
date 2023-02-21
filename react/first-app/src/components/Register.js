import React, { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  // const [isvisible, setIsvisible] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <span className="heading">Registeration Form</span>
      <form
        action=""
        method="get"
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          // setIsvisible(true);
          console.log(e);
          //setData({ name: "", email: "", username: "", password: "" });
          for (let i = 0; i < e.nativeEvent.target.length - 1; i++) {
            setData((prev) => {
              return {
                ...prev,
                [e.nativeEvent.target[i].name]: "",
              };
            });
          }
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          placeholder="name"
          onChange={(e) => {
            // setData({ ...data, name: e.target.value });
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
            // setData({ ...data, email: e.target.value });
            handleChange(e);
          }}
        />
        <input
          type="text"
          name="username"
          id="username"
          value={data.username}
          placeholder="username"
          onChange={(e) => {
            // setData({ ...data, username: e.target.value });
            handleChange(e);
          }}
        />
        <input
          type="text"
          name="password"
          id="password"
          value={data.password}
          placeholder="password"
          onChange={(e) => {
            // setData({ ...data, password: e.target.value });
            handleChange(e);
          }}
        />
        <input type="submit" value="login"></input>
        {/* {isvisible && (
          <div>
            your username: {data.username}
            <br />
            your password: {data.password}
          </div>
        )} */}
      </form>
    </div>
  );
};

export default Register;
