import React from "react";
import { Link } from "react-router-dom";
import useCartHooks from "../../redux/Cart/cart-actions";

const Product = ({ product }) => {
  const {addToCart }  = useCartHooks();

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
        <Link to={`/product/${product._id}`}>
          <button>
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(product._id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};


export default Product;