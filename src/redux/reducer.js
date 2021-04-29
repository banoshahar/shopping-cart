import { combineReducers} from "redux";
import shopReducer from "./Shopping/Cart/cart-reducer";
import {
    getProductsReducer,
    getProductDetails,
  } from "./Shopping/Products/products-reducer";

const rootReducer = combineReducers({
    shop:shopReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetails,
});

export default rootReducer;

