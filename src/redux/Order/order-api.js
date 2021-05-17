import axios from "axios";


export const placeOrder = async(data)  => {

  return await axios.post('api/order/placeOrder/', data);
}

