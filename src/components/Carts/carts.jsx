import React, { useState } from "react";
import CartItem from "./Cart/cart";
import useCartHooks from '../../redux/Shopping/Cart/cart-actions';
import {
  Card,
  CardText,
  CardBody,
  Button,

} from "reactstrap";
import { useSelector } from 'react-redux';
import Checkout from './checkout'

const Cart = () => {
  const cart = useSelector(state => state.shop.cart);
  const [showModal, setShow] = useState(false);
  const handleShow = () => setShow(temp => !temp);
  const {cartTotal} = useCartHooks()
  const {count ,price } = cartTotal

  return (
    <div>
      <div>
        {cart.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
      <Card style={{ width: '100%', height: 'auto' }}>
        <h4>Cart Summary</h4>
        <CardBody>
          <CardText>TOTAL: ({count} items)</CardText>
          <CardText>$ {price}</CardText>
          <Button outline onClick={handleShow}>
            <span className="fa" /> Proceed To Checkout
          </Button>
          <Checkout showModal={showModal} handleShow={handleShow} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Cart;