import * as actionTypes from '../shopping-types';
import { placeOrder  } from './order-api';
import axios from "axios";

export const placeOrderAction = (reqData) => async (dispatch) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
          }
        dispatch({ type: actionTypes.PLACE_ORDER_REQUEST });
        console.log(reqData)
        const {data} = await axios.post('api/order/placeOrder/',reqData, {
            headers: headers
          });
        console.log(data)

        dispatch({
            type: actionTypes.PLACE_ORDER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.PLACE_ORDER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};





