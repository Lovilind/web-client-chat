import axiosInstance from '@/utils/axiosInstance';

export const getCheckValidEmail = async (email: string) => {
  return axiosInstance.get(`/sign/available?email=${email}`);
};

export const getSendEmailCertification = async (email: string) => {
  return axiosInstance.get(`/sign/issue?email=${email}`);
};

export const getCheckEmailCertification = async (
  email: string,
  code: string,
) => {
  return axiosInstance.get(`/sign/confirm?email=${email}&code=${code}`);
};

export interface PostSignUpPayload {
  email: string;
  password: string;
  loginType: string;
  rePassword: string;
  code: string;
}

export const postSignUp = async (payload: PostSignUpPayload) => {
  return axiosInstance.post('/sign/members', payload);
};

export interface PostLoginPayload {
  email: string;
  password: string;
}

export const postLogin = async (payload: PostLoginPayload) => {
  return axiosInstance.post('/login', payload);
};

export const getLogout = async () => {
  return axiosInstance.get('/logout');
};
