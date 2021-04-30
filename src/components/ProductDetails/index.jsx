import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useCartHooks from "../../redux/Cart/cart-actions";
import useProductHooks from "../../redux/Products/products-actions";

const Details = () => {

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, currentItem } = productDetails;
  const { id = null } = useParams();
  const { getProductDetails } = useProductHooks();
 
  useEffect(() => {
    if (!currentItem) {
      getProductDetails(id);
    }
  }, []);

  const { addToCart } = useCartHooks();
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (!!currentItem && (
        <div className='container' >
          <img
            src={currentItem.image}
            alt={currentItem.title}
          />
          <div>
            <p>{currentItem.title}</p>
            <p>{currentItem.description}</p>
            <p>$ {currentItem.price}</p>

            <button onClick={() => addToCart(currentItem._id)}>
              Add To Cart
         </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Details;