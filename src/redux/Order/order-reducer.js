import * as actionTypes from "../shopping-types";

export const placeOrderReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case actionTypes.PLACE_ORDER_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.PLACE_ORDER_SUCCESS:
            return {
                data: action.payload,
                loading: false,
            };
    
        case actionTypes.PLACE_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };


        default:
            return state;
    }
};