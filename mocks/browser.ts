/* eslint-disable import/no-extraneous-dependencies */
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
