import axios from 'axios';

const chatInstance = axios.create({
  baseURL: 'https://api.lovlind.me/api',
  timeout: 5000,
});

chatInstance.interceptors.request.use(
  // 요청 전 작업 수행
  (config) => {
    return config;
  },
  // 요청 오류 작업
  (error) => Promise.reject(error),
);

chatInstance.interceptors.response.use(
  // 2xx 범위에 있는 상태 코드일 때 실행
  // 응답 데이터가 있는 작업 수행
  (response) => {
    return response;
  },
  // 2xx 외의 범위에 있는 상태 코드일 때 실행
  // 응답 오류가 있는 작업 수행
  (error) => {
    return Promise.reject(error);
  },
);

export default chatInstance;
