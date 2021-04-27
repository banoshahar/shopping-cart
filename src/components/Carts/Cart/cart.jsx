import React, { useState } from "react";
import useCartHooks from "../../../redux/Shopping/shopping-actions";
import { Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row
} from "reactstrap";

const CartItem = ({ item }) => {
  const [input, setInput] = useState(item.qty);
  const {adjustItemQty , removeFromCart}  = useCartHooks();

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustItemQty(item.id, e.target.value);
  };
  
  return (
    <div className="col-12 col-md-5 m-1">
    <Row>
    <Card style={{ width: '100%' , height: 'auto' }}>
      <CardImg top src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.description}</CardText>
        <CardText>$ {item.price}</CardText>
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
      </CardBody>
    </Card>
    </Row>
  </div>
);   
 
};


export default CartItem;