'use server';

import axiosInstance from '@/utils/axiosInstance';

export const fetchCheckEmail = async (email: { email: string }) => {
  const response = await axiosInstance.get(
    `/sign/available?email=${email.email}`,
  );
  const response3 = await axiosInstance.get(`/sign/issue?email=${email.email}`);
  console.log('response3', response3);
  const response4 = await axiosInstance.get(
    `/sign/confirm?email=${email.email}&code=010101`,
  );
  // const res2 = await axiosInstance.get('/auth');
  console.log('response4', response4);
  // const res2 = await fetch('/api/auth', {
  //   // method: 'GET',
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: email.email,
  //   }),
  // });
  // // const res2 = await axiosInstance.post('/auth', { data: email });
  // const res2Data = await res2.json();
  // console.log('res2', res2);
  // console.log('res2', res2Data);
  // const response = await axiosInstance.post('/msw/check-email', email);
  return response;
};
