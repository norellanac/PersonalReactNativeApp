module.exports = {
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  testTimeout: 999000,
  bail: 0,
  //**************************************************************************************** */
  //**************************************************************************************** */
  //********************************UNIT TEST************************************************ */
  //*****UNcomment this section previos to execute UNIT  test and comment if you execute e2e test */
  preset: 'react-native',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  //*****UNcomment this section previos to execute UNIT  test and comment if you execute e2e test */
  //**************************************************************************************** */
  //**************************************************************************************** */
  //********************************E2E TEST************************************************ */
  //***** E2E TEST **********/
  //*****UNcomment this section previos to execute E2E test and comment if you execute UNIT test */
  // setupFilesAfterEnv: ['./e2e-jest.setup.js'],
  // testMatch: ['**/__e2e__/*.e2etest.ts'],
  //*****UNcomment this section previos to execute E2E test and comment if you execute UNIT test */
};
