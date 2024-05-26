import { http, HttpResponse } from 'msw';

const registeredEmails = ['test@test.com', 'user2@example.com'];

export const handlers = [
  http.get('/todos', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),

  // Email check handler
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

  // Signup handler
  http.post('/api/signup', ({ request }) => {
    const { email } = request.body;

    if (registeredEmails.includes(email)) {
      return HttpResponse.status(409).json({
        message: 'Email already exists',
      });
    }

    // Simulate adding email to registered list
    registeredEmails.push(email);

    return HttpResponse.status(201).json({
      message: 'Signup successful',
    });
  }),
];
