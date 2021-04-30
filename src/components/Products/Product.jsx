import React from "react";
import { Link } from "react-router-dom";
import useCartHooks from "../../redux/Cart/cart-actions";
import { Button, Col } from 'react-bootstrap';

const Product = ({ product }) => {
  const {addToCart }  = useCartHooks();

  return (
    <Col lg="4" md="6" xs="12" className="d-flex">
    <div className='prd--card'>
      <div className="prd--card-img">
      <img
        src={product.image}
        alt={product.title}
      />
      </div>
      <div className="prd--card-body flex--col-grow">
        <h2 className="sm--hd dark--text font--semiBold mb-2">{product.title}</h2>
        <p className="sm--para grey--text mb-2">{product.description}</p>
        
      </div>

      <div className="prd--card-ftr">
      <p className="md--para grey--text">
           <span className="lg--para dark--text font--semiBold">$</span> {product.price}
      </p>
      <div className="d-flex align-items-center justify-content-center mt-3 w-100">
        <Link to={`/product/${product._id}`}>
          <Button variant="primary" className="btn prd--card-btn">View Item</Button>
        </Link>
        <Button variant="secondary" className="btn prd--card-btn mr-0" onClick={() => addToCart(product._id)}>Add To Cart</Button>
      </div>  
      </div>
    </div>
    </Col>
  );
};


export default Product;