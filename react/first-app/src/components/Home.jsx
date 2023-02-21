import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <span> This is Home component </span>
      {location.state !== null ? (
        <span>Welcome back {location.state.username}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
