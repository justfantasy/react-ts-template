import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

request.interceptors.request.use(
  (config) => {
    if (config.method && ['post', 'put'].includes(config.method)) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default request;
