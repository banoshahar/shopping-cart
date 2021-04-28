import React from "react";
import Product from "./Product/Product";
import {  useSelector } from "react-redux";

const Products = () => {

  const products = useSelector(state => state.shop.products);
  return (
  
    <div className="col-12 col-md-5 m-1">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;