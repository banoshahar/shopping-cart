import * as actionTypes from '../shopping-types';
import { getAllProducts , getProductById } from './products-api';
import { useDispatch } from "react-redux";
import {compileError} from '../utills/api'

const useProductHooks = () =>{

    const dispatch = useDispatch();

    const getProducts =  async() => {
        try {
            dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    
            const {data} = await getAllProducts();
            const { result} = data
    
            dispatch({
                type: actionTypes.GET_PRODUCTS_SUCCESS,
                payload: result,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.GET_PRODUCTS_FAIL,
                payload: compileError(error)
            });
        }
    };
    
    const getProductDetails = async (id) => {
        try {
            dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
            
            
            const { data } = await getProductById(id);
            const {result} = data
    
            dispatch({
                type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
                payload: result,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
                payload:compileError(error)
            });
        }
    };

    return {
        getProducts , getProductDetails
    }
}

export  default useProductHooks;




