import axios from "axios";


export const placeOrder = async(data)  => {
  const headers = {
    'Content-Type': 'application/json',
  }
  return await axios.post('api/order/placeOrder/', data, {
    headers: headers
  });
}

