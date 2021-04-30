import * as actionTypes from "../shopping-types";

export const authReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.REGISTER_SUCCESS:
            return {
                data: action.payload,
                loading: false,
            };
    
        case actionTypes.REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };


        default:
            return state;
    }
};