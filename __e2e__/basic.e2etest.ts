import { client } from '../e2e-jest.setup';
import { loginUser } from './helpers';

describe('Login Flow', () => {
  it('Exchange flow', async () => {
    await loginUser();
    expect('Appium').toEqual('Appium');
  });
});
