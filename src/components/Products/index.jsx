import React , { useEffect }from "react";
import { useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import Product from "./Product";
import useProductHooks   from "../../redux/Products/products-actions";

const Products = () => {
  
  const allProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = allProducts;
  const { getProducts } = useProductHooks();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container prd--card-container flex--col-grow">
    <Row>
      <Col>
        <div className="purple--text font-weight-bold lg--para mb-1 hd--line">Products</div>
        <h1 className="md--hd dark--text mb-2 md--hd font--semiBold interUi">Choose products</h1>
        <p className="grey--text mb-2 normal--para mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
      </Col>
    </Row>
    <Row className="justify-content-center prd--card-row">
      
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : ( !!products && 
        products.map((product) => (
          <Product
            key={product._id} product={product}
          />
        ))
      )}
    </Row>
    </div>
  );
};

export default Products;