import axios from 'axios';

export const BaseAPI = axios.create({
  baseURL: 'https://api.lovlind.me/api',
});
