import axios from "axios";

export const signin = async (data) => {
  return await axios.post('api/user/signin', data);
}

export const signup = async (data) => {
  return await axios.post('api/user/signup', data);
}

export const signout = async () => {
  return await axios.get('api/user/signout');
}
