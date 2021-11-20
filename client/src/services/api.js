import axios from 'axios';

const api = axios.create({
  headers: {
    post: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
});

export default api;
