// utility file to extract the config for E2E testing at runtime
// for appium

let capabilities;

const android = {
  platformName: 'Android',
  'appium:platformVersion': '13.0',
  'appium:deviceName': 'Pixel 4 XL API 33',
  'appium:app': './android/app/build/outputs/apk/debug/app-debug.apk',
  'appium:automationName': 'UiAutomator2',
  'appium:newCommandTimeout': 360,
  'appium:autoGrantPermissions': true,
  'appium:enableBiometric': false,
  'appium:bstack:options': {
    enableBiometric: false,
  },
};

const ios = {
  platformName: 'iOS',
  'appium:platformVersion': '16.4',
  'appium:deviceName': 'iPhone 14',
  'appium:udid': '17B87411-A0D7-4093-9040-46ECCD92B049',
  'appium:automationName': 'XCUITest',
};

if (!process.env.E2E_DEVICE) {
  throw new Error('E2E_DEVICE environment variable is not defined');
}

if (
  !(
    process.env.E2E_DEVICE.includes('android') ||
    process.env.E2E_DEVICE.includes('ios')
  )
) {
  throw new Error('No e2e device configuration found');
}

if (process.env.E2E_DEVICE === 'android') {
  capabilities = android;
}

if (process.env.E2E_DEVICE === 'ios') {
  capabilities = ios;
}

export default capabilities;
