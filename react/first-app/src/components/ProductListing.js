import React from 'react'
import Product from './Product'; 
import "./productlisting.css";

const ProductListing = () => {
    const products = [
        {
          url: "https://m.media-amazon.com/images/I/71H8ElS2p1L._AC_SL1500_.jpg",
          name: "Gaming Keyboard",
          price: "249",
        },
        {
          url: "https://m.media-amazon.com/images/I/61AQ4REoUJL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
          name: "Gaming Headphone",
          price: "119",
        },
        {
          url: "https://m.media-amazon.com/images/I/61t4mpabO+L._AC_SL1500_.jpg",
          name: "Gaming Chair",
          price: "99",
        },
      ];
      let p = [];
      for (const product of products) {
        p.push(
          <Product
            key={product.url}
            url={product.url}
            name={product.name}
            price={product.price}
          />
        );
      }
  return (
    <div className='productlisting'>{p}</div>
  )
}

export default ProductListing