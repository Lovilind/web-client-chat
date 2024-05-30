import { http, HttpResponse } from 'msw';

const registeredEmails = ['test@test.com', 'user2@example.com'];

const certificationEmailNumber = { email: 'test1@example.com', code: '1234' };

const registeredUsersEmailsAndPasswords = [
  { email: 'test@test.com', password: 'qwer123!' },
  { email: 'user2@example.com', password: 'qwer123!' },
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
  http.post('/msw/certification-email', async ({ request }) => {
    try {
      const body = await request.json();

      const { email, code } = body as { email: string; code: string };

      if (
        certificationEmailNumber.email !== email ||
        certificationEmailNumber.code !== code
      ) {
        return HttpResponse.json(
          {
            message: '인증번호가 일치하지 않습니다.',
          },
          { status: 409 },
        );
      }

      return HttpResponse.json(
        {
          message: '이메일 인증이 완료되었습니다.',
        },
        { status: 200 },
      );
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return HttpResponse.json(
        {
          message: '잘못된 요청입니다.',
        },
        { status: 400 },
      );
    }
  }),

  // 이메일 중복 확인

  http.post('/msw/check-email', async ({ request }) => {
    try {
      const body = await request.json();

      const { email } = body as { email: string };

      await new Promise((resolve) => setTimeout(resolve, 500));

      // 이메일 중복 확인
      if (registeredEmails.includes(email)) {
        return HttpResponse.json(
          {
            message: '이미 가입된 이메일입니다.',
          },
          { status: 409 },
        );
      }

      // 중복되지 않은 경우
      return HttpResponse.json(
        {
          message: '인증번호를 전송했습니다.',
        },
        { status: 200 },
      );
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return HttpResponse.json(
        {
          message: '잘못된 요청입니다.',
        },
        { status: 400 },
      );
    }
  }),

  // 로그인
  http.post('/msw/signin', ({ request }) => {
    const { email, password } = request.body;

    return HttpResponse.status(201).json({
      message: 'Signin successful',
    });
  }),
  // 회원가입
  http.post('/msw/signup', ({ request }) => {
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
