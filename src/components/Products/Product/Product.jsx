import React from "react";
import { Link } from "react-router-dom";
import useCartHooks from "../../../redux/Shopping/shopping-actions";

const Product = ({ product }) => {
  const {addToCart , loadCurrentItem}  = useCartHooks();

  return (
    <div className='container'>
      <img
        src={product.image}
        alt={product.title}
      />
      <div>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p> {product.price}</p>
      </div>

      <div>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product.id)}>
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(product.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};


export default Product;