import axios , {cancelToken}from "../utills/api";
 
export const signin = async (data) => {
  return await axios.post('api/user/signin', data, { cancelToken: cancelToken.token });
}

export const signup = async (data) => {
  return await axios.post('api/user/signup', data, { cancelToken: cancelToken.token });
}

export const signout = async () => {
  return await axios.get('api/user/signout',{ cancelToken: cancelToken.token });
}
