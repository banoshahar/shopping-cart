import * as actionTypes from '../shopping-types';



const shopReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // Great Item data from products array
            const { products ,id } = action.payload
            const item = products.find(
                (product) => product._id === id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item._id === id ? true : false
            );
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item._id === id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload.id),
            };
        case actionTypes.ADJUST_ITEM_QTY:
            const { itemID , qty} = action.payload
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item._id === itemID
                        ? { ...item, qty: + qty }
                        : item
                ),
            };
        default:
            return state;
    }
};

export default shopReducer;