import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "./Cart/cart";
import { Card,
  CardText,
  CardBody,
  Button,
  
} from "reactstrap";
import Checkout from './checkout'

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [showModal, setShow] = useState(false);
  const handleShow = () => setShow(temp => !temp); 

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Card style={{ width: '100%', height: 'auto' }}>
        <h4>Cart Summary</h4>
        <CardBody>
          <CardText>TOTAL: ({totalItems} items)</CardText>
          <CardText>$ {totalPrice}</CardText>
          <Button outline onClick={handleShow}>
                <span className="fa" /> Proceed To Checkout
          </Button>
          <Checkout showModal={showModal} handleShow={handleShow} />
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);