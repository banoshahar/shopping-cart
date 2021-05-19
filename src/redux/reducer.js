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
    authReducer ,loginReducer
  } from "./Auth/auth-reducer";

const rootReducer = combineReducers({
    shop:shopReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetails,
    orderReducer:placeOrderReducer,
    authReducer:authReducer,
    loginReducer:loginReducer
});

export default rootReducer;

