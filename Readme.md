# Starter Guide

## Futher Reading (Documentation of used Software)

- [react-native](https://reactnative.dev/docs/getting-started)
- [react-native-paper](https://callstack.github.io/react-native-paper/docs/guides/getting-started)
- [expo-custom-fonts](https://docs.expo.dev/versions/latest/sdk/font/)
- [react-native-navigation](https://reactnavigation.org/docs/getting-started/)
- [TypeScript](https://reactnative.dev/docs/typescript)

## Cloning from git and installs

1. Clone the repository with `git clone <url>`
2. Go into the frontend directory and install necessary packages `cd frontend && npm install`.
3. Install **Expo** on your mobile device to later test.
4. Install Webpackage to run on the web `npx expo install react-dom react-native-web @expo/webpack-config`
5. Start application with npx expo start.
6. The url or the QR-Code can be used on the mobile device to open the app.

## Attention!

- react native navigation has some issues when is comes to the package `react-native-safe-area-context`. Make sure to install `@react-native-masked-view/masked-view`.
