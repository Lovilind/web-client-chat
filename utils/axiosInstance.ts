/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.lovlind.me/api',
  // baseURL: 'http://localhost:3000',
  // baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.url?.startsWith('/msw')) {
      // if (config.url?.startsWith('/msw')) {
      config.baseURL = 'http://localhost:3000';
    }
    if (config.url?.startsWith('/auth')) {
      console.log('config', config);
      // if (config.url?.startsWith('/msw')) {
      config.baseURL = 'http://localhost:3000/api';
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default axiosInstance;
