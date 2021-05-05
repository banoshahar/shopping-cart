import React, { useState } from "react";
import useCartHooks from "../../redux/Cart/cart-actions";
import { Button } from "reactstrap";
import { Row, Col, Form } from 'react-bootstrap';

const CartItem = ({ item }) => {
  const [input, setInput] = useState(item.qty);
  const { adjustItemQty, removeFromCart } = useCartHooks();
  const { _id, image, title, description, price } = item;

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setInput(value);
    adjustItemQty(_id, value);
  };

  return (
    <Col sm="6" xs="12" className="d-flex">
      <div className='prd--card'>
        <div className="prd--card-img">
          <img
            src={image}
            alt={title}
          />
        </div>
        <div className="prd--card-body flex--col-grow">
          <h2 className="sm--hd dark--text font--semiBold mb-2">{title}</h2>
          <p className="sm--para grey--text mb-2">{description}</p>

        </div>

        <div className="prd--card-ftr">
          <p className="md--para grey--text">
            <span className="lg--para dark--text font--semiBold">$</span> {price}
          </p>
          <Form className="my-1 w-100">
            <Form.Group controlId="formBasicPassword">
              <Form.Label htmlFor="qty" className="grey--text mb-1">Quantity</Form.Label>
              <Form.Control type="number" placeholder="Quantity" min="1" id="qty"
                name="qty"
                value={input}
                onChange={onChangeHandler} />
            </Form.Group>
          </Form>
          <Button variant="danger" className="btn prd--card-btn mr-0 danger-btn" onClick={() => removeFromCart(_id)}>Remove Cart</Button>
        </div>
      </div>
    </Col>
  );

};


export default CartItem;