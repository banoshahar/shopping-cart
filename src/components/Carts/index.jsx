import React, { useState } from "react";
import CartItem from "./cart";
import useCartHooks from '../../redux/Cart/cart-actions';
import {
  Card,
  CardBody,

} from "reactstrap";
import { useSelector } from 'react-redux';
import Checkout from './checkout'
import { Row } from 'react-bootstrap';
import { CartMain , CartHeading , ButtonStyled as Button} from './cart.style'


const Cart = () => {
  const cart = useSelector(state => state.shop.cart);
  const [showModal, setShow] = useState(false);
  const handleShow = () => setShow(temp => !temp);
  const {cartTotal} = useCartHooks()
  const {count ,price } = cartTotal

  return (
    <CartMain className="container flex--col-grow">
      <div>
      <Row className="justify-content-center">

        {cart.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
        </Row>
      </div>
      <Card className="smr--card">
        
        <CardBody className="d-flex flex-column align-items-center justify-content-center">
        <CartHeading className="md--hd dark--text mb-4 font--semiBold interUi">Cart Summary</CartHeading>
          <h3 className="lg--para dark--text mb-2 font--semiBold interUi d-flex align-items-center">TOTAL: <span className="grey--text sm--para font--medium ml-2">({count} items)</span></h3>
          <p className="md--para grey--text mb-4">
           <span className="lg--para dark--text font--semiBold">$</span> {price}
        </p>
          {/* <Button outline onClick={handleShow}>
            <span className="fa" /> Proceed To Checkout
          </Button> */}
          <Button variant="primary" onClick={handleShow} className="btn prd--card-btn login--btn">Proceed to checkout</Button>
          <Checkout showModal={showModal} handleShow={handleShow} />
        </CardBody>
      </Card>
    </CartMain>
  );
};

export default Cart;