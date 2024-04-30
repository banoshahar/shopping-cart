import React, { useState } from "react";
import useCartHooks from "../../redux/Cart/cart-actions";
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
  const {_id, image , title ,description , price} = item;

  const onChangeHandler = (e) => {
    const {value } = e.target;
    setInput(value);
    adjustItemQty(_id, value);
  };
  
  return (
    <div className="col-12 col-md-5 m-1">
    <Row>
    <Card style={{ width: '100%' , height: 'auto' }}>
      <CardImg top src={image} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardText>$ {price}</CardText>
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
        <Button outline onClick={() => removeFromCart(_id)}>
          <span className="fa minus-circle" /> Remove
        </Button>
      </CardBody>
    </Card>
    </Row>
  </div>
);   
 
};


export default CartItem;