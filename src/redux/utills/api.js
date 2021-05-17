import axios from 'axios';

export default  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
});

axios.defaults.headers.common['Content-Type'] = 'application/json';