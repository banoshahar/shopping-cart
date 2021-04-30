import axios from "axios";


export const placeOrder = (data) => async () =>{
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
      }
      debugger
    console.log("chzskchsikc")
    return await axios.get('api/order/placeOrder/',data, {
        headers: headers
      });
}

