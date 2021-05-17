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

export const loginReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                data: action.payload,
                loading: false,
            };
    
        case actionTypes.LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };


        default:
            return state;
    }
};