import React from "react";
import { Link } from "react-router-dom";
import useCartHooks from "../../redux/Cart/cart-actions";
import { Col } from 'react-bootstrap';
import {ProductCard, ProductCardImg ,ProductParagraph, ProductCardBody,ProductHeading,
ProductCardFtr ,ProductCardParagraph} from './product.style'
import { ButtonStyled as Button} from '../Carts/cart.style'

const Product = ({ product }) => {
  const {addToCart }  = useCartHooks();
  const {image , title , description, price ,_id} = product
  return (
    <Col lg="4" md="6" xs="12" className="d-flex">
    <ProductCard>
      <ProductCardImg>
      <img src={image} alt={title}/>
      </ProductCardImg>
      <ProductCardBody className="flex--col-grow">
        <ProductHeading className="mb-2 dark--text font--semiBold">{title}</ProductHeading>
        <ProductParagraph description className="mb-2">{description}</ProductParagraph>
      </ProductCardBody>
      <ProductCardFtr>
      <ProductCardParagraph className="md--para grey--text">
           <span className="lg--para dark--text font--semiBold">$</span> {price}
      </ProductCardParagraph>
      <div className="d-flex align-items-center  mt-3 w-100">
        <Link to={`/product/${_id}`}>
          <Button variant="primary" className="btn prd--card-btn">View Item</Button>
        </Link>
        <Button variant="secondary" className="btn prd--card-btn mr-0" onClick={() => addToCart(_id)}>Add To Cart</Button>
      </div>  
      </ProductCardFtr>
    </ProductCard>
    </Col>
  );
};


export default Product;