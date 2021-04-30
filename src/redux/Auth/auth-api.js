import axios from "axios";

const headers = {
    'Content-Type': 'application/json',
  }

export const signin = async(data)  => { 
  return await axios.post('api/user/signin', data, {
    headers: headers
  });
}

export const signup = async(data)  => {
    return await axios.post('api/user/signup', data, {
      headers: headers
    });
  }

