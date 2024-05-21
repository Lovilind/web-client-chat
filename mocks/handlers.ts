// import { http, HttpResponse } from 'msw';

// export const handlers = [
//   http.get('http://localhost:3000/todos', () => {
//     return HttpResponse.json({
//       firstName: 'John',
//       lastName: 'Maverick',
//     });
//   }),
// ];

import { http, HttpResponse } from 'msw';

const registeredEmails = ['user1@example.com', 'user2@example.com'];

export const handlers = [
  http.get('/todos', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),

  // Email check handler
  http.post('/api/check-email', ({ request }) => {
    const { email } = request.body;

    if (registeredEmails.includes(email)) {
      return HttpResponse.json({
        message: 'Email already exists',
      });
    }

    return HttpResponse.json({
      message: 'Email is available',
    });
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

// import { rest } from 'msw';

// const registeredEmails = ['user1@example.com', 'user2@example.com'];

// export const handlers = [
//   // Email check handler
//   rest.post('/api/check-email', (req, res, ctx) => {
//     const { email } = req.body;

//     if (registeredEmails.includes(email)) {
//       return res(
//         ctx.status(409),
//         ctx.json({
//           message: 'Email already exists',
//         }),
//       );
//     }

//     return res(
//       ctx.status(200),
//       ctx.json({
//         message: 'Email is available',
//       }),
//     );
//   }),

//   // Signup handler
//   rest.post('/api/signup', (req, res, ctx) => {
//     const { email } = req.body;

//     if (registeredEmails.includes(email)) {
//       return res(
//         ctx.status(409),
//         ctx.json({
//           message: 'Email already exists',
//         }),
//       );
//     }

//     // Simulate adding email to registered list
//     registeredEmails.push(email);

//     return res(
//       ctx.status(201),
//       ctx.json({
//         message: 'Signup successful',
//       }),
//     );
//   }),
// ];
