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
  console.log('!!', code);
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
