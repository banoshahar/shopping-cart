import * as actionTypes from './shopping-types';
import { useDispatch } from "react-redux";

const useCartHooks = () => {
    const dispatch = useDispatch()

    const addToCart = (itemID) => {
        dispatch({
            type: actionTypes.ADD_TO_CART,
            payload: {
                id: itemID,
            },
        });
    };

    const removeFromCart = (itemID) => {
        dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            payload: {
                id: itemID,
            },
        });
    };

    const adjustItemQty = (itemID, value) => {
        dispatch({
            type: actionTypes.ADJUST_ITEM_QTY,
            payload: {
                id: itemID,
                qty: value
            },
        });
    };

    const loadCurrentItem = (itemID) => {
        dispatch({
            type: actionTypes.LOAD_CURRENT_ITEM,
            payload: {
                id: itemID,
            },
        });
    };
    return {
        addToCart , removeFromCart , adjustItemQty ,loadCurrentItem
    }
}

export default useCartHooks;
