import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hello from "./components/Hello";
import Register from "./components/Register";
import ProductListing from "./components/ProductListing";
import Weather from "./components/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/hello", element: <Hello name={"aniket"} /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/weather", element: <Weather/> },
      { path: "/products", element: <ProductListing /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
