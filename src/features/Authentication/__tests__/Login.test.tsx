/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import { render, screen, fireEvent } from '@testing-library/react-native';
import { Login } from '../screens/Login';

it('renders correctly', () => {
  const goback = jest.fn();
  const navigate = jest.fn();
  const setoptions = jest.fn();
  const { debug, getByTestId } = render(
    <Login navigation={{ goback, navigate, setoptions }} route={undefined} />,
  );
  debug();
  fireEvent.changeText(screen.getByTestId('username'), 'test');
  fireEvent.changeText(getByTestId('password'), 'secret');
  fireEvent.press(getByTestId('next'));
});
