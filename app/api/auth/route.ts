import axiosInstance from '@/utils/axiosInstance';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, res: NextResponse) => {
  const { email } = await req.json();
  console.log('email', email);
  console.log('req@@@@', req);
  console.log('res@@@@', res);

  // const response = await axiosInstance.get(
  //   `/sign/available?email=${email.email}`,
  // );
  const reqJson = await JSON.stringify(req);
  const resJson = await JSON.stringify(res);

  return NextResponse.json({
    req: reqJson,
    res: resJson,
    message: 'Hello, World!',
  });
  // return NextResponse.json({ message: 'Hello, World!' });
  // return NextResponse.json({ ...response });
};
export const POST = async (req: NextRequest) => {
  // console.log('req@@@@', req);
  // console.log('res@@@@', res);
  const { email } = await req.json();
  console.log('email', email);
  const response = await axiosInstance
    .get(`/sign/available?email=${email.email}`)
    .then((resp) => resp.data);
  console.log('@#@#', response);

  // return NextResponse.json({ ...response });
  return NextResponse.json({
    body: response.body,
    time: response.time,
  });
};
