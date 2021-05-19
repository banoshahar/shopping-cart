import * as actionTypes from "../shopping-types";

export const placeOrderReducer = (state = { data: [] , loading: false, error: null}, action) => {
    switch (action.type) {
        case actionTypes.PLACE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.PLACE_ORDER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
    
        case actionTypes.PLACE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };


        default:
            return state;
    }
};