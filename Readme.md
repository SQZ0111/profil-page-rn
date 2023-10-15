# Starter Guide

## Futher Reading (Documentation of used Software)


### General
- [react-native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.dev/get-started/installation/)


### UI
- [react-native-paper](https://callstack.github.io/react-native-paper/docs/guides/getting-started)
- [expo-custom-fonts](https://docs.expo.dev/versions/latest/sdk/font/)
- [react-native-navigation](https://reactnavigation.org/docs/getting-started/)
- [react-native-gestures](https://reactnative.dev/docs/panresponder)

### TypeScript
- [TypeScript](https://reactnative.dev/docs/typescript)

### Linting, Prettier
- [Prettier](https://prettier.io/docs/en/)
- [Eslint](https://eslint.org/docs/latest/use/getting-started)

### CI 
- [Husky](https://typicode.github.io/husky/)


## Cloning from git and installs

1. Clone the repository with `git clone <url>`
2. Go into the frontend directory and install necessary packages `cd frontend && npm install`.
3. Install **Expo** on your mobile device to later test.
4. Install Webpackage to run on the web `npx expo install react-dom react-native-web @expo/webpack-config`
5. Start application with npx expo start.
6. The url or the QR-Code can be used on the mobile device to open the app.

## Attention!

- react native navigation has some issues when is comes to the package `react-native-safe-area-context`. Make sure to install `@react-native-masked-view/masked-view`.


## Rebuilt it (German only!)
Wir bauen im folgenden eine Profilseite in *React Native*. *React Native* basiert auf React, jedoch mit Android/IOS optimierten Komponenten. Gewisse Verhaltensweise wie **fast-refresh** beim rendern unterscheiden sich von *react*, aber im Großen und Ganzen ist der Schritt von *react* zu *react native* kein all zu großer. Wir werden in diesem Zuge **TypeScript, Code linting, testing, pre-hooks, github Actions, sowie eine Testing Liberary** - in diesem Fall *jest* - anschauen. Ziel ist es eine eigenes mehrseitiges Profil zu haben und diesem Zuge weitere essentielle Teile des CI - CD Zyklus kennenzulernen.

## Aufsatz von React Native mit Expo
  1. Setze ein leeres React Native Projekt mit *Expo* auf. Expo ist ein Tooling für Monorepos in *react native*. Folgender [Link] führt dich zur Installation, ersten Start mit *Expo Go* und der Dateistruktur. Arbeite dich etwas in die Dokumentation rein und starte deine App auf deinem Handy. Ändere die Anzeige zu einer einfachen Überschrift. 
  2. Du kannst bereits deine App auf deinem Handy starten. *Expo* bietet verschiedene Debugging, Monitor und Interspecter an um die App zu untersuchen. Lese dich etwas [hier](https://docs.expo.dev/debugging/tools/#developer-menu) zum Developer Menu ein, wenn du möchtest. Wir werden im nächsten Schritt jedoch auch die Browservariante nutzen.
  3. Versuche nach dem Start von deiner App die den *dev-server* für den Browser aufzurufen. Du wirst einen **Dependecy Error** zurückbekommen. Was musst du noch installieren?

## Unsere erste Seite in React Native
  1. Du bekommst einen entsprechenden Zirkel angezeigt, solange die App lädt. Dies nennt sich der sogenannte *Splash-Screen*. Diesen kann man mit Hilfe von **Figmaprototyping** anpassen, sodass ein entsprechender Hintergrund vorgeladen wird. Außerdem ist es möglich die späteren Logos für die App anzupassen. Erstelle entsprechende *icons und splashscreen* mit Hilfe der [Dokumentation-splash](https://docs.expo.dev/develop/user-interface/splash-screen/) und [Dokumentation-icons](https://docs.expo.dev/develop/user-interface/app-icons/)
  2. Da auf Android und Ios ein bestimmter Bereich reserviert ist (z.B Statusbar bei Android) möchte man nur innerhalb eines sogenannten *safe-are-space* die App platzieren. Erkundinge dich nach dem `<SaveAreaProvider></SaveAreaProvider>`
  3. Wir beginnen zuerst, indem wir eine **custom theme** mit [react-native-paper](https://callstack.github.io/react-native-paper/docs/guides/getting-started) initialisieren. *React native paper* ist ein *UI-Framework* ähnlich wie *MUI* auf das *Material Design* beruht. Dein Ziel sollte sein eine eigene Theme (z.b fontSize...) basierend auf der default Theme von *MD3LightTheme* für die gesamte App bereitzustellen. 
  4. Es gibt die Möglichkeit *custom fonts* in die App zu laden und diese in die *custom theme* zu übergeben. Erkundige dich wie du *fonts* in *react native und expo* laden kannst.
  5. Nun kannst du deine eigene Startseite (die Seite auf der NutzerInnen zuerst landen) erstellen. Es gibt hierbei keine Einschränkung, jedoch solltest du beachten nicht zuviel einzubauen, sondern erst in weiteren Seiten. Ein schöner Hintergrund, ein Zitat/Motivation mit eventuellem Effekt reichen erstmal aus. Erstelle die benötigten Komponenten und überführe diese in eine `Home.jsx` Komponete. Diese wird zuletzt in die `App.jsx` übergeben.
  6. Falls du Animationen nutzen möchtest, eignen sich [react-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/your-first-animation/) oder [moti](https://moti.fyi/) ganz gut.
  7. Erstelle nun eine einfache Navigation. Es gibt hierbei mehrere Möglichkeiten, die von *react native paper* und direkt von der unterliegenden Navigationsbibliothek [react-navigation](https://reactnavigation.org/) angeboten werden.

### TypeScript
....

### Prettier, Linting und git Hooks
...