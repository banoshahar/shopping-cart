import * as actionTypes from '../shopping-types';
import { getAllProducts , getProductById } from './products-api';
import { useDispatch } from "react-redux";

const useProductHooks = () =>{

    const dispatch = useDispatch();

    const getProducts =  async() => {
        try {
            dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    
            const {data} = await getAllProducts();
    
            dispatch({
                type: actionTypes.GET_PRODUCTS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.GET_PRODUCTS_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };
    
    const getProductDetails = async (id) => {
        try {
            dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
            console.log(id)
    
            const { data } = await getProductById(id);
    
            dispatch({
                type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

    return {
        getProducts , getProductDetails
    }
}

export  default useProductHooks;




