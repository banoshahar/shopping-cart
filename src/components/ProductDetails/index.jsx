import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useCartHooks from "../../redux/Cart/cart-actions";
import useProductHooks from "../../redux/Products/products-actions";
import  { ProductDetailsMain , ProductCardView ,ProductCardFtr} from './details.style';
import { ButtonStyled as Button} from '../Carts/cart.style'

const Details = () => {

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, currentItem } = productDetails;
  const { id = null } = useParams();
  const { getProductDetails } = useProductHooks();

  useEffect(() => {
    if (!currentItem) {
      getProductDetails(id);
    }
  }, []);

  const { addToCart } = useCartHooks();
  return (
    <ProductDetailsMain className="container flex--col-grow">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (!!currentItem && (
        <ProductCardView className="prd--card">
          <div className="prd--card-img">
            <img
              src={currentItem.image}
              alt={currentItem.title}
            />
          </div>
          <div className="prd--card-body flex--col-grow">
            <h2 className="sm--hd dark--text font--semiBold mb-2">{currentItem.title}</h2>
            <p className="sm--para grey--text mb-2">{currentItem.description}</p>

          </div>

          <ProductCardFtr>
            <p className="md--para grey--text">
              <span className="lg--para dark--text font--semiBold">$</span> {currentItem.price}
            </p>
            <div className="d-flex align-items-center justify-content-center mt-3 w-100">
              <Button variant="secondary" className="btn prd--card-btn mr-0" onClick={() => addToCart(currentItem._id)}>Add To Cart</Button>
            </div>
          </ProductCardFtr>
        </ProductCardView>
      ))}
    </ProductDetailsMain>
  );
};
export default Details;