import * as actionTypes from './shopping-types';
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

const useCartHooks = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.shop.cart);

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

    const cartTotal = useMemo(() => {
        let count = 0;
        let price = 0;
        cart.forEach((item) => {
            count += item.qty;
            price += item.qty * item.price;
        });
        return {count ,price};
    }, [cart]);

    return {
        addToCart, removeFromCart, adjustItemQty, loadCurrentItem, cartTotal
    }
}

export default useCartHooks;
