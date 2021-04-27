import React, { useState } from "react";
import useCartHooks from "../../../redux/Shopping/shopping-actions";
import {
 
  Button,
  
} from "reactstrap";

const CartItem = ({ item }) => {
  const [input, setInput] = useState(item.qty);
  const {adjustQty , removeFromCart}  = useCartHooks();
  const state = {
    isModalOpen: false
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };
  
  const toggleModal= () => {
    state.isModalOpen= !state.isModalOpen
  }

  return (
    <div className="col-12 col-md-5 m-1">
      <img
        src={item.image}
        alt={item.title}
      />
      <div>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>$ {item.price}</p>
      </div>
      <div>
        <div>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <Button outline onClick={() => removeFromCart(item.id)}>
          <span className="fa minus-circle" /> Remove
        </Button>
      </div>
    </div>
  );
};


export default CartItem;