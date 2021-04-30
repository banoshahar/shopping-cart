import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import useCartHooks from "../../redux/Shopping/Cart/cart-actions";
import { getProductDetails as singleProduct } from "../../redux/Shopping/Products/products-actions";
import { Button } from 'react-bootstrap';

const Details = () => {

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, currentItem } = productDetails;
  const { id = null } = useParams();
 
  useEffect(() => {
    
    if (!currentItem) {
      dispatch(singleProduct(id));
    }
  }, [dispatch, currentItem]);

  const { addToCart } = useCartHooks();
  return (
    <div className="container flex--col-grow view--container">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (!!currentItem && (
        <div className="prd--card prd--card-view">
      <div className="prd--card-img">
      <img
        src={currentItem.image}
        alt={currentItem.title}
      />
      </div>
      <div className="prd--card-body flex--col-grow">
        <h2 className="sm--hd dark--text font--semiBold mb-2">{currentItem.title}</h2>
        <p className="sm--para grey--text mb-2">{currentItem.description}</p>
        
      </div>

      <div className="prd--card-ftr">
      <p className="md--para grey--text">
           <span className="lg--para dark--text font--semiBold">$</span> {currentItem.price}
      </p>
      <div className="d-flex align-items-center justify-content-center mt-3 w-100">
        <Button variant="secondary" className="btn prd--card-btn mr-0" onClick={() => addToCart(currentItem._id)}>Add To Cart</Button>
      </div>  
      </div>
    </div>
        // <div className='container' >
        //   <img
        //     src={currentItem.image}
        //     alt={currentItem.title}
        //   />
        //   <div>
        //     <p>{currentItem.title}</p>
        //     <p>{currentItem.description}</p>
        //     <p>$ {currentItem.price}</p>

        //     <button onClick={() => addToCart(currentItem._id)}>
        //       Add To Cart
        //  </button>
        //   </div>
        // </div>
      ))}
    </div>
  );
};
export default Details;