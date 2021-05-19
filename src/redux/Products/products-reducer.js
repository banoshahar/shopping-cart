import * as actionTypes from "../shopping-types";

export const getProductsReducer = (state = { products: [], loading: false, error: null }, action) => {
    switch (action.type) {
      case actionTypes.GET_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case actionTypes.GET_PRODUCTS_SUCCESS:
        return {
          products: action.payload,
          loading: false,
        };
      case actionTypes.GET_PRODUCTS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
        

      default:
        return state;
    }
  };

  export const getProductDetails = (state = { currentItem: null }, action) => {
    switch (action.type) {
      case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          currentItem: action.payload,
        };
      case actionTypes.GET_PRODUCT_DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case actionTypes.GET_PRODUCT_DETAILS_RESET:
        return {
          ...state,
            currentItem: {},
        };
      default:
        return state;
    }
  };

