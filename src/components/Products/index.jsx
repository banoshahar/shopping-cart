import React , { useEffect }from "react";
import Product from "./Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/Shopping/Products/products-actions";
import { Row, Col } from 'react-bootstrap';


const Products = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="container header--spacing flex--col-grow">
    <Row>
      <Col lg="4" md="6" xs="12">
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
      </Col>
    </Row>
    </div>
  );
};

export default Products;