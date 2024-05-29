import { http, HttpResponse } from 'msw';

const registeredEmails = ['test@test.com', 'user2@example.com'];

const registeredUsersEmailsAndPasswords = [
  { email: 'test@test.com', password: 'qwer123!' },
];

/* 

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJuaWNrbmFtZSI6InRlc3ROaWNrbmFtZSIsImFkZHJlc3MiOiLshJzsmrjtirnrs4Tsi5wg6rCV64Ko6rWsIOyKpO2DgOuyheyKpCIsImJpcnRoX2RhdGUiOiIxOTk0LTAyLTIyIiwibWJ0aSI6IklOVEoiLCJpYXQiOjE1MTYyMzkwMjJ9.EhJdOzTaRJVldmqMMxqcZOaWVaB2u8GMcHgcuPZbadE

{
  "email": "test@test.com",
  "nickname": "testNickname",
  "address": "서울특별시 강남구 스타벅스",
  "birth_date": "1994-02-22",
  "mbti": "INTJ",
  "iat": 1516239022
}
*/

export const authHandler = [
  // 이메일 중복 확인
  http.post('/api/check-email', async ({ request }) => {
    // console.log(request.body.getReader('email'));
    // const data = await request.formData();
    await new Promise((resolve) => setTimeout(resolve, 500));
    const { email } = await request.json();
    console.log(email);

    if (registeredEmails.includes(email)) {
      return HttpResponse.json(
        {
          message: 'Email already exists',
        },
        { status: 409 },
      );
    }

    return HttpResponse.json(
      {
        message: 'Email is available',
      },
      { status: 200 },
    );
  }),

  // 로그인
  http.post('/api/signin', ({ request }) => {
    const { email, password } = request.body;

    return HttpResponse.status(201).json({
      message: 'Signin successful',
    });
  }),
  // 회원가입
  http.post('/api/signup', ({ request }) => {
    const { email } = request.body;

    if (registeredEmails.includes(email)) {
      return HttpResponse.status(409).json({
        message: 'Email already exists',
      });
    }

    // 회원가입 성공 시 이메일 저장
    registeredEmails.push(email);

    return HttpResponse.status(201).json({
      message: 'Signup successful',
    });
  }),
];
