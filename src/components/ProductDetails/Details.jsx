import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useCartHooks from "../../redux/Shopping/shopping-actions";


const Details = () => {
  const current = useSelector(state => state.shop.currentItem);
  const { addToCart, loadCurrentItem } = useCartHooks()
  const params = useParams();

  useEffect(() => {
    if (!current) {
      loadCurrentItem(Number(params.id))
    }
  }, [params]);

  return (
    <div>
      { !!current && (
         <div className='container' >
         <img
           src={current.image}
           alt={current.title}
         />
         <div>
           <p>{current.title}</p>
           <p>{current.description}</p>
           <p>$ {current.price}</p>
 
           <button onClick={() => addToCart(current.id)}>
             Add To Cart
         </button>
         </div>
       </div>
      )}  
    </div>
  );
};
export default Details;