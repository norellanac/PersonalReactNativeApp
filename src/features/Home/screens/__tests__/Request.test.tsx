// CryptoDataComponent.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import { setupApi } from '@reduxjs/toolkit/query/react';
import { renderWithProvider } from '../../../../utils/testsUtils';
import { Landing } from '../Landing';
import { cryptoApi } from '../../../../services/cryptoApi';

// Setup the mock service
const api = setupApi(cryptoApi);
const { useGetAllCrypstosQuery } = api;

// Mock the API
jest.mock('@reduxjs/toolkit/query/react', () => ({
  ...jest.requireActual('@reduxjs/toolkit/query/react'),
  setupApi: () => api,
}));

test('it fetches crypto data successfully', async () => {
  //TODO: Review the test and make it works
  // Mock the API response
  api.useGetAllCrypstosQuery.mockReturnValueOnce({
    data: {
      data: [
        { id: '1', name: 'Bitcoin' },
        { id: '2', name: 'Ethereum' },
      ],
    },
  });

  // Render your component
  const goback = jest.fn();
  const navigate = jest.fn();
  const setoptions = jest.fn();
  const { debug, queryByText } = renderWithProvider(
    <Landing navigation={{ goback, navigate, setoptions }} route={undefined} />,
  );

  // Perform assertions based on your component's behavior
  await waitFor(() => {
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
  });

  // Optionally, you can check if the useGetCryptoDataQuery function was called
  expect(api.useGetCryptoDataQuery).toHaveBeenCalled();
});
