import * as actionTypes from '../shopping-types';
import { placeOrder  } from './order-api';
import { useSelector ,useDispatch } from "react-redux";
import useCartHooks from '../Cart/cart-actions';

const useOrderHooks = () =>{

    const dispatch = useDispatch()
    const {cartTotal} = useCartHooks()
    const cart = useSelector(state => state.shop.cart);
    const{price} = cartTotal
    
    const placeOrderAction =  async (address,name) => {
        try {
            const reqData = {address,name,product:cart,total:price}

            dispatch({ type: actionTypes.PLACE_ORDER_REQUEST });
            const {data} = await placeOrder(reqData)

            dispatch({
                type: actionTypes.PLACE_ORDER_SUCCESS,
                payload: data,
            });
            alert("Your order has been placed!")
        } catch (error) {
            dispatch({
                type: actionTypes.PLACE_ORDER_FAIL,
                payload:
                    error.response?.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };
    return {
        placeOrderAction
    }
}

export default useOrderHooks;
 





