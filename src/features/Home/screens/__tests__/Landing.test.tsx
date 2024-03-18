/**
 * @format
 */
import React from 'react';

// Note: test renderer must be required after react-native.
import {
  render,
  screen,
  fireEvent,
  waitFor,
  renderHook,
} from '@testing-library/react-native';
import { Landing } from '../Landing';
import { renderWithProvider } from '../../../../utils/testsUtils';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/native';

//jest.useRealTimers();

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const server = setupServer();

// Enable the API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable the API mocking after the tests finished.
afterAll(async () => {
  await server.close();
});

describe('App', () => {
  const goback = jest.fn();
  const navigate = jest.fn();
  const setoptions = jest.fn();
  it('handles good response', async () => {
    renderWithProvider(
      <Landing
        navigation={{ goback, navigate, setoptions }}
        route={undefined}
      />,
    );

    //screen.getByText('Loading...');

    // expect(img.src).toBe(
    //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    // );
  });

  it('handles error response', async () => {
    renderWithProvider(
      <Landing
        navigation={{ goback, navigate, setoptions }}
        route={undefined}
      />,
    );

    //screen.getByText('Loading...');
  });
});

it('renders correctly', async () => {
  const goback = jest.fn();
  const navigate = jest.fn();
  const setoptions = jest.fn();
  const { debug, queryByText } = renderWithProvider(
    <Landing navigation={{ goback, navigate, setoptions }} route={undefined} />,
  );
  await screen.findByText('Bitcoin');
  //debug();
});
