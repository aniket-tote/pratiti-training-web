import "./App.css";
import Login from "./components/Login";
// import LuckyNum from "./components/LuckyNum";
import "./components/product.css";
import Register from "./components/Register";
// import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div className="App">
      {/* <ProductListing /> */}
      {/* {products.map((product)=>{
        return <Product url={product.url} name={product.name} price={product.price} />
      })} */}
      {/* <LuckyNum/> */}
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
