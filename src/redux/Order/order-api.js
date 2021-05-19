import axios , {cancelToken}from "../utills/api";

export const placeOrder = async(data)  => {

  return await axios.post('api/order/placeOrder/', data , { cancelToken: cancelToken.token });
}

