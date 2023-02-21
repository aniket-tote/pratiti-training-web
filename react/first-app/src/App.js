import "./App.css";
import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
// import Weather from "./components/Weather";
// import LuckyNum from "./components/LuckyNum";
import "./components/product.css";
// import Register from "./components/Register";
// import ProductListing from "./components/ProductListing";
import { Outlet } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";
// import Hello from "./components/Hello";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/hello", element: <Hello /> },
//   { path: "/login", element: <Login /> },
//   { path: "/register", element: <Register /> },
//   { path: "/products", element: <ProductListing /> },
// ]);

function App() {
  return (
    <div className="App">
      {/* <ProductListing /> */}
      {/* {products.map((product)=>{
        return <Product url={product.url} name={product.name} price={product.price} />
      })} */}
      {/* <LuckyNum/> */}
      {/* <Login/>
      <Register/> */}
      {/* <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/hello" element={<Hello name={"Ani"} />}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
          <Route exact path="/product" element={<ProductListing />}></Route>
        </Routes>
      </Router> */}
      <Header />
      <Navbar />
      <Outlet />
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
