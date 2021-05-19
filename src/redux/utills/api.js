import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
});
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const  cancelToken = axios.CancelToken.source();

export const compileError = (error) => {
    return error.response?.data.message
        ? error.response.data.message
        : error.message
}
