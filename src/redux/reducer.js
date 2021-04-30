import { combineReducers} from "redux";
import shopReducer from "./Cart/cart-reducer";
import {
    getProductsReducer,
    getProductDetails,
  } from "./Products/products-reducer";
import {
    placeOrderReducer
  } from "./Order/order-reducer";
  import {
    authReducer
  } from "./Auth/auth-reducer";

const rootReducer = combineReducers({
    shop:shopReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetails,
    orderReducer:placeOrderReducer,
    authReducer:authReducer
});

export default rootReducer;

