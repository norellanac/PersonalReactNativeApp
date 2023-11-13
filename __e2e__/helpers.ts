import { client } from '../e2e-jest.setup';

export const tapButton = async (buttonId: string) => {
  const button = await client.$(`~${buttonId}`);
  await button.click();
  expect(button.isDisplayed()).toBeTruthy();
};

export const enterValueOn = async (inputId: string, value: string) => {
  const input = await client.$(`~${inputId}`);
  await client.hideKeyboard();
  await input.setValue(value);
  expect(input).toBeTruthy();
};

export const seconds = async (seconds: number) => {
  await client.pause(seconds * 1000);
  expect(seconds).toBeTruthy();
};

export const tapArrayButtons = async (numberKeys: string[]) => {
  for (const key of numberKeys) {
    await tapButton(key);
  }
};

export const loginUser = async (
  username: string = 'test',
  password: string = '123456',
) => {
  tapButton('register');
  await seconds(4);
  await enterValueOn('username', username);
  await seconds(5);
  await enterValueOn('password', password);
  await seconds(5);
  tapButton('next');
  await seconds(5);
  expect(await client.$('~logout')).toBeTruthy();
};
