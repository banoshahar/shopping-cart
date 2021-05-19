import React from "react";
import useCartHooks from "../../redux/Cart/cart-actions";
import { Col, Form } from 'react-bootstrap';
import {ButtonStyled as Button , CartStyled} from './cart.style'
import  {ProductCardFtr} from '../ProductDetails/details.style';

const CartItem = ({ item }) => {
  const { _id, image, title, description, price ,qty } = item;
  const { adjustItemQty, removeFromCart } = useCartHooks();
  

  const onChangeHandler = (e) => {
    const { value } = e.target;
    adjustItemQty(_id, value);
  };

  return (
      <CartStyled sm="6" xs="12" className="d-flex">
        <div className="prd--card-img">
          <img src={image} alt={title}/>
        </div>
        <div className="prd--card-body flex--col-grow">
          <h2 className="sm--hd dark--text font--semiBold mb-2">{title}</h2>
          <p className="sm--para grey--text mb-2">{description}</p>

        </div>
        <ProductCardFtr>
          <p className="md--para grey--text">
            <span className="lg--para dark--text font--semiBold">$</span> {price}
          </p>
          <Form className="my-1 w-100">
            <Form.Group controlId="formBasicPassword">
              <Form.Label htmlFor="qty" className="grey--text mb-1">Quantity</Form.Label>
              <Form.Control type="number" placeholder="Quantity" min="1" id="qty"
                name="qty"
                value={qty}
                onChange={onChangeHandler} />
            </Form.Group>
          </Form>
          <Button variant="danger" className="btn prd--card-btn mr-0 danger-btn" onClick={() => removeFromCart(_id)}>Remove Cart</Button>
        </ProductCardFtr>
      </CartStyled>
  );

};


export default CartItem;