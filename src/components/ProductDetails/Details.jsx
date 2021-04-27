import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useCartHooks from "../../redux/Shopping/shopping-actions";
import store from '../../redux/configureStore'

const Details = () => {
  // window.onbeforeunload = (e) => {
  //   const state = store.getState();
  //   saveState(state);
  // }
  const current = useSelector(state =>  state.shop.currentItem);
  const {addToCart , loadCurrentItem}  = useCartHooks()
  const params = useParams();

  return (
    <div className='container'>
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
  );
};
export default  Details;