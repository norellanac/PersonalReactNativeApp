import { fetch, Headers, Request, Response } from 'cross-fetch';
import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node';
import dummyData from './data.json';
import { renderWithProvider } from '../../utils/testsUtils';
import { renderHook } from '@testing-library/react-native';
import { useGetAllCrypstosQuery } from '../cryptoApi';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  http.get(
    'https://api.coinlore.net/api/tickers/?start=0&limit=20',
    async () => {
      await delay(150);
      return HttpResponse.json('dummyData  response');
    },
  ),
];

export const server = setupServer(...handlers);

// Enable the API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable the API mocking after the tests finished.
afterAll(() => server.close());

describe.skip('App', function () {
  test('useGetAllCrypstosQuery should fetch data', async () => {
    const { result } = renderHook(() => useGetAllCrypstosQuery());
    console.log(result.current);
    // Add more assertions based on your use case
  });
});
