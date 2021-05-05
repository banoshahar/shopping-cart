import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import Product from "./Product";
import useProductHooks from "../../redux/Products/products-actions";
import { ProductStyled, ProductTitle, ProductHeading, ProductParagraph } from './product.style'

const Products = () => {

  const allProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = allProducts;
  const { getProducts } = useProductHooks();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductStyled className="container">
      <Row>
        <Col>
          <ProductTitle className="font-weight-bold mb-1 hd--line">Products</ProductTitle>
          <ProductHeading className="mb-2 dark--text interUi font--semiBold">Choose products</ProductHeading>
          <ProductParagraph paragraph className="mb-2 mb-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
          </ProductParagraph>
        </Col>
      </Row>
      <Row className="justify-content-center prd--card-row">

        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (!!products &&
          products.map((product) => (
            <Product
              key={product._id} product={product}
            />
          ))
        )}
      </Row>
    </ProductStyled>
  );
};

export default Products;