import React , { useEffect }from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import useProductHooks   from "../../redux/Products/products-actions";


const Products = () => {
  
  const allProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = allProducts;
  const { getProducts } = useProductHooks();

  useEffect(() => {
    getProducts();
  }, []);

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