import React from "react";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="dashboard">
      dashboard
      {location.state !== null ? (
        <div>
          <span className="name">Name: {location.state.customerData.name}</span>
          <span className="name">
            Email: {location.state.customerData.email}
          </span>
          <span className="name">
            Date of birth: {location.state.customerData.dateOfBirth}
          </span>
          <span className="name">City: {location.state.customerData.city}</span>
          <span className="name">
            Pincode: {location.state.customerData.pincode}
          </span>
          <span className="name">
            State: {location.state.customerData.state}
          </span>
        </div>
      ) : (
        ""
      )}
      <Link to="/login">Login here</Link>
      <Link to="/register">Register here</Link>
    </div>
  );
};

export default Dashboard;
