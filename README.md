
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press


## Running Tests

This project can run Unit test using @testing-library/react-native

```bash
  yarn run test
```

## NOTE: check comments on jest.config.js and package.json how to switch beetwen unit test and e2e test
# E2E testing for React Native with Jest, Appium and WebDriverIO (iOS and Android)


In this repo you will find a sample project to showcase how to do E2E testing with [Jest](https://jestjs.io/) + [Appium](https://appium.io/) + [WebDriverIO](https://webdriver.io/) for Android and iOS on react-native.

_It's a bit janky but it serves the purpose of showcasing how to a basic setup needs to be correctly wired._

## How to use

First off, install the needed tooling:

```bash
npm install appium@2.0.0-beta.53 -g
appium driver install uiautomator2
appium driver install xcuitest
```

> More details about drivers in Appium [here](https://appium.github.io/appium/docs/en/2.0/guides/managing-exts/) and [here](https://appium.github.io/appium/docs/en/2.0/quickstart/uiauto2-driver/)

After this, run the app on the Android emulator/ iOS simulator via `yarn android`/`yarn ios` - **you need to do this at least once** (for simplicity sake, we want the app to be already installed on the simulator/emulator before testing).

Once the app is on the emulator/simulator and Metro is running, you can open a new terminal window and start the Appium server via `yarn appium`.

With the server is running, you can use the commands `test:e2e:android` and `test:e2e:ios` to try out the E2E loop, or use `test:e2e:all` to run both one after the other.

### A note on setup

Please make sure that your local emulator/simulator config matches the `e2e-config.js` setup or it will fail 'cause it won't be able to connect to the platform.

### Notes on E2E: how does it work?

The basic premise is that this is, from Appium's perspective, just a project like any other: the app it needs to test is a black box, and it gets to communicate with it via webdriverIO's client.

Via the command `test:e2e:android` we start the testing, that starts up the `basicE2E.test.js` script - this file gets via an helper script `e2e-config.js` which platform to test (passed as an ENV variable, `E2E_DEVICE` during the yarn command, check `test:e2e:android` in `package.json`) and goes into the `package.json`, section `e2e`, and uses those info the `beforeAll` to stand up the webdriverIO client.

Then the actual testing is done by using as "communication point" to invoke the native components this following pattern `client.$('~<string>')` (the ~ is intentional, and important!). The `<string>` here is what we setup in `App.js`, and it should be just the `accessibilityID` option (that RN passes back to the native component) but actually we need to use a bit of a workaround script called `testProps` (at the top of `App.js`) to tailor this use for iOS/Android and for the `Text` component. (_huge props to Slav Kurochkin for finding this out and explaining it [in this article](http://93days.me/testing-react-native-application/)_)

This way we can interact with all the elements on screen that have their string setup as props via `{...testProps(<string>)}`.

If this isn't clear enough or you'd like a blogpost on this subject, feel free to [open an issue](https://github.com/kelset/react-native-e2e-jest-appium-webdriverio/issues/new) or talk to me [over on Twitter](https://twitter.com/kelset).

### Inspiration and resources

Getting this together was quite a bit of work because there aren't many resources around that walk you through the entire setup for React Native Android/iOS - I pieced this sample app together by following and taking bit and pieces from multiple places. In no particular order:

- https://appium.io/docs/en/about-appium/intro/?lang=en
- https://github.com/kelset/react-native-e2e-jest-appium-webdriverio