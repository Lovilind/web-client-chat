import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.lovlind.me/api',
  // baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.url?.startsWith('/msw')) {
      // msw용 테스트
      config.baseURL = 'http://localhost:3000';
    }
    if (config.url?.startsWith('/auth')) {
      // route handler용 테스트
      config.baseURL = 'http://localhost:3000/api';
    }
    const accessToken = localStorage.getItem('accessToken') ?? '';
    if (accessToken) {
      config.headers.Authorization = accessToken;
    } else {
      config.headers.delete('Authorization');
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.headers.authorization) {
      // 로그인 성공 시 accessToken을 localStorage에 저장 'Bearer token'형식으로 Bearer포함되서 헤더로 오는중
      localStorage.setItem('accessToken', response.headers.authorization);
    }

    return response;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
