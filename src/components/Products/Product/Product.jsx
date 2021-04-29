import React from "react";
import { Link } from "react-router-dom";
import useCartHooks from "../../../redux/Shopping/Cart/cart-actions";

const Product = ({ product }) => {
  const {addToCart }  = useCartHooks();

  return (
    <div className='prd--card'>
      <div className="prd--card-img">
      <img
        src={product.image}
        alt={product.title}
      />
      </div>
      <div className="prd--card-body">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p> Price: ${product.price}</p>
      </div>

      <div className="prd--card-ftr">
        <Link to={`/product/${product._id}`}>
          <Button variant="primary">View Item</Button>
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