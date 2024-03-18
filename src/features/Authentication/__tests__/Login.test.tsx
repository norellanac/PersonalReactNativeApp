/**
 * @format
 */
import React from 'react';

// Note: test renderer must be required after react-native.
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Login } from '../screens/Login';
import { renderWithProvider } from '../../../utils/testsUtils';

it('renders correctly', () => {
  const goback = jest.fn();
  const navigate = jest.fn();
  const setoptions = jest.fn();
  const { debug, getByTestId } = renderWithProvider(
    <Login navigation={{ goback, navigate, setoptions }} route={undefined} />,
  );
  //debug();
  //fireEvent.changeText(screen.getByTestId('username'), 'test');
  //fireEvent.changeText(getByTestId('password'), 'secret');
  //fireEvent.press(getByTestId('next'));
});
