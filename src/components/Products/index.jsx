import React , { useEffect }from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/Products/products-actions";


const Products = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (

    <div className="col-12 col-md-5 m-1">
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
    </div>
  );
};

export default Products;