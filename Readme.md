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

Wir bauen im folgenden eine Profilseite in _React Native_. _React Native_ basiert auf React, jedoch mit Android/IOS optimierten Komponenten. Gewisse Verhaltensweise wie **fast-refresh** beim rendern unterscheiden sich von _react_, aber im Großen und Ganzen ist der Schritt von _react_ zu _react native_ kein all zu großer. Wir werden in diesem Zuge **TypeScript, Code linting, testing, pre-hooks, github Actions, sowie eine Testing Liberary** - in diesem Fall _jest_ - anschauen. Ziel ist es eine eigenes mehrseitiges Profil zu haben und diesem Zuge weitere essentielle Teile des CI - CD Zyklus kennenzulernen.

## Aufsatz von React Native mit Expo

1. Setze ein leeres React Native Projekt mit _Expo_ auf. Expo ist ein Tooling für Monorepos in _react native_. Folgender [Link] führt dich zur Installation, ersten Start mit _Expo Go_ und der Dateistruktur. Arbeite dich etwas in die Dokumentation rein und starte deine App auf deinem Handy. Ändere die Anzeige zu einer einfachen Überschrift.
2. Du kannst bereits deine App auf deinem Handy starten. _Expo_ bietet verschiedene Debugging, Monitor und Interspecter an um die App zu untersuchen. Lese dich etwas [hier](https://docs.expo.dev/debugging/tools/#developer-menu) zum Developer Menu ein, wenn du möchtest. Wir werden im nächsten Schritt jedoch auch die Browservariante nutzen.
3. Versuche nach dem Start von deiner App die den _dev-server_ für den Browser aufzurufen. Du wirst einen **Dependecy Error** zurückbekommen. Was musst du noch installieren?

## Unsere erste Seite in React Native

1. Du bekommst einen entsprechenden Zirkel angezeigt, solange die App lädt. Dies nennt sich der sogenannte _Splash-Screen_. Diesen kann man mit Hilfe von **Figmaprototyping** anpassen, sodass ein entsprechender Hintergrund vorgeladen wird. Außerdem ist es möglich die späteren Logos für die App anzupassen. Erstelle entsprechende _icons und splashscreen_ mit Hilfe der [Dokumentation-splash](https://docs.expo.dev/develop/user-interface/splash-screen/) und [Dokumentation-icons](https://docs.expo.dev/develop/user-interface/app-icons/)
2. Da auf Android und Ios ein bestimmter Bereich reserviert ist (z.B Statusbar bei Android) möchte man nur innerhalb eines sogenannten _safe-are-space_ die App platzieren. Erkundinge dich nach dem `<SaveAreaProvider></SaveAreaProvider>`
3. Wir beginnen zuerst, indem wir eine **custom theme** mit [react-native-paper](https://callstack.github.io/react-native-paper/docs/guides/getting-started) initialisieren. _React native paper_ ist ein _UI-Framework_ ähnlich wie _MUI_ auf das _Material Design_ beruht. Dein Ziel sollte sein eine eigene Theme (z.b fontSize...) basierend auf der default Theme von _MD3LightTheme_ für die gesamte App bereitzustellen.
4. Es gibt die Möglichkeit _custom fonts_ in die App zu laden und diese in die _custom theme_ zu übergeben. Erkundige dich wie du _fonts_ in _react native und expo_ laden kannst.
5. Nun kannst du deine eigene Startseite (die Seite auf der NutzerInnen zuerst landen) erstellen. Es gibt hierbei keine Einschränkung, jedoch solltest du beachten nicht zuviel einzubauen, sondern erst in weiteren Seiten. Ein schöner Hintergrund, ein Zitat/Motivation mit eventuellem Effekt reichen erstmal aus. Erstelle die benötigten Komponenten und überführe diese in eine `Home.jsx` Komponete. Diese wird zuletzt in die `App.jsx` übergeben.
6. Falls du Animationen nutzen möchtest, eignen sich [react-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/your-first-animation/) oder [moti](https://moti.fyi/) ganz gut.
7. Erstelle nun eine einfache Navigation. Es gibt hierbei mehrere Möglichkeiten, die von _react native paper_ und direkt von der unterliegenden Navigationsbibliothek [react-navigation](https://reactnavigation.org/) angeboten werden.
8. Baue eine weitere Komponente, als Beispiel kann man hierfür die _work experience_ als verschiebare Karte einbauen. Verlinke diese in den Router.

### TypeScript

Falls du nicht initial bei dem Projektaufsatz mit `npx create-expo-app **NAME**` schon bereits Typescript als Basis für dein Projekt ausgewählt hast, kannst du weiterhin _TypeScript_ on top installieren.

1. Installiere TypeScript (_expo und npm sind bereits vorhanden_) mit `npm install --save-dev typescript`.
2. Mit `npx tsc --init` kannst du im _rootverzeichnis_ deines Projekts eine `tsconfig.json` mit grundlegenden Einstellungen erstellen. Diese Einstellungen steuern im wesentlichen das Verhalten des _TypeScript-Compilers_.
3. Falls die entsprechende Datei leer ist, kannst du entsprechend folgende Konfigurationseinstellungen übernehmen.

```json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "*": ["node_modules/*", "src/*", "assets/*"]
    }
  },
  "extends": "expo/tsconfig.base"
}
```

Das `"extends"` _property_ übernimmt die bereits in _expo_ vordefinierten grundlegenden Konfigurationseinstellungen. Mit `strg + Rechtsklick` kannst du dir die Konfiguration entsprechend einmal anschauen. 4. Benenne nun die Dateien in deinem `src` Ordner um. Statt `.js` haben diese die Endung `.tsc` oder statt `jsx` nun `tsx`. 5. Du kannst nun eine Typüberprüfung mit `npx tsc` durchführen. Stattdessen kann man auch in der `package.json` ein Skriptbefehl schreiben wie z.B `ts:check": "tsc --noEmit` wobei das Flag `--noEmit` weggelassen werden kann, da die `tsconfig.json` dies schon festlegt (zur es werden keine Compilierte js Dateien erzeugt, da wird expo dies schon für uns handhabt).

**<hr>**
Bevor wir nun weitermachen gibt es einen kleinen _Crash-Course_ in Typezuweisung:

Einfache Variablen kann folgend einen **Typ** zuweisen.

```ts
const text: string = "Hallo Welt";
```

Das funktioniert natürlich auch, wenn der Wert erst zur Laufzeit bestimmt wird, aber man trotzdessen schon ein bestimmten **Typen** erwartet:

```ts
const userInput: string = prompt("\n>>");
```

Um **properties** von Objekten zu beschreiben können wir entweder sogenannte `interfaces` oder `types` verwenden. Erstmal beide im in ihrer einfachen Anwendung:
**\*interface**

```tsc
interface User = {
    name: string,
    age: number,
    neet: boolean
}

const someUsers : User[] = [
    {
      name: "saqib",
      age : 27,
      neet: true
    },
    {
      name: "toto",
      age : 10,
      neet: true
   },
]
```

**_types_**

```tsc
type User = {
    name: string,
    age: number,
    neet: boolean
}

const someUsers : User[] = [
    {
      name: "saqib",
      age : 27,
      neet: true
    },
    {
      name: "toto",
      age : 10,
      neet: true
   },
]
```

An sich erstmal die gleiche Syntax. Der Hauptunterschied liegt in Wiedernutzung (interface durch `extends`) und in der Vereinigung von mehreren, schon vorhandenen **Typen**
**interface erweiterbar (Pluspunkt in Wiederverwertbarkeit und Modularisierung)**

```tsc
interface User = {
    name: string,
    age: number,
    neet: boolean
}

interface specialUsers extends User = {
    imgUrl: string
}


const someUsers : User[] = [
    {
      name: "saqib",
      age : 27,
      neet: true
    },
    {
      name: "toto",
      age : 10,
      neet: true
   },
]

const someUserWithImg : specialUsers[] = [
    {
      name: "saqib",
      age : 27,
      neet: true,
      imgUrl: "http://irgendein.dummer.link"
    },
    {
      name: "toto",
      age : 10,
      neet: true,
      imgUrl: "http://irgendein.dummer.link"
   },
]
```

**interface extendable (Pluspunkt in Wiederverwertbarkeit und Modularisierung)**

````

```tsc
type User = {
    name: string,
    age: number,
    neet: boolean
}

interface specialUsers extends User = {
    imgUrl: string
}


const someUsers : User[] = [
    {
      name: "saqib",
      age : 27,
      neet: true
    },
    {
      name: "toto",
      age : 10,
      neet: true
   },
]

const someUserWithImg : specialUsers[] = [
    {
      name: "saqib",
      age : 27,
      neet: true,
      imgUrl: "http://irgendein.dummer.link"
    },
    {
      name: "toto",
      age : 10,
      neet: true,
      imgUrl: "http://irgendein.dummer.link"
   },
]
````

**type intersection/union (wenn Typen manchmal zur Laufzeit klar sind oder sich ändern können)**

```tsc
type User = {
    name: string,
    age: number | string,
    neet: boolean
}

const someUsers : User[] = [
    {
      name: "saqib",
      age : "27",
      neet: true
    },
    {
      name: "toto",
      age : 10,
      neet: true
   },
]

const someUserWithImg : specialUsers[] = [
    {
      name: "saqib",
      age : 27,
      neet: true,
      imgUrl: "http://irgendein.dummer.link"
    },
    {
      name: "toto",
      age : 10,
      neet: true,
      imgUrl: "http://irgendein.dummer.link"
   },
]
```

Abgesehen davon kann man mit `type` auch **primitive Datentypen** (Abseits unseres Beispiels zu Variablen oben) und **Tupel** typisieren (wir werden diesen Begriff ab jetzt nutzen, um auszusagen, dass einem bestimmten Wert einen Datentypen zugeordnet wird).

```tsc

type Coordinate = number | number;
type ID = string | number;

```

**<hr>** 6. Wir fangen nun nach und nach an unsere Dateien mit `types` zu versehen. Zuerst wollen wir die **properties** mit einem jeweiligen `type` versehen. Suche dir dazu deine Komponente mit den **props** raus. Ich gebe dir nun ein Beispiel:

```tsx
type WorkingCardPropTypes = {
  position: string;
  years: string;
  location: string;
  description: string;
};

export function WorkingCard({
  position,
  years,
  location,
  description,
}: WorkingCardPropTypes): React.JSX.Element {
  //CODE
}
```

Da **props** innerhalb eines Objekt spezifiziert schreiben, schreiben wir ebenfalls ein entsprechende Objekt mit den entsprechenden **Schlüssel** und den entsprechenden **Datentypen**. Das Zuweisen geschieht hier mit einem Doppeltpunkt.

Im nächsten Schritt möchten wir unsere Funktionen (hier unsere Komponenten und "normalen" Funktionen) annotieren mit sogenannten _return types_. Tue dies für in dem untenstehenden Beispiel für alle Funktionen in deinem Projekt.

```typescript
const App = ({ message }: AppProps): React.JSX.Element => <div>{message}</div>;
```

Darauffolgend können wir die entsprechenden _Hooks_ mit _Typescript_ versehen. Für `useState` kann entweder das _inferred type system_ genutzt werden, welches bereits den entsprechenden Datentyp an die _state-variable_ verweist oder aber die _null-ish_ Zuweisung nach entsprechenden Schema:

```typescript
const [user, setUser] = useState<User | null>(null);
```

Für _custom hooks_ müssen wir jedoch bei der Definition beachten, dass wir nicht, dass _inferred type system_ nutzen wollen, denn dieses würde in einem _union_ (entweder _boolean_ oder _typeof setstate_) zu einem möglichen Fehler führen. Man spricht hier von der typischen Typescript Eigenschaft des _widening_. Stattdessen nutzen wir hier etwas namens [const-assertion](https://devblogs.microsoft.com/typescript/announcing-typescript-3-4/#const-assertions). Dies verhidert die dynamische Zuweisung mit dem _union_:

```typescript
import { useState } from "react";

export function useLoading() {
  const [isLoading, setState] = useState(false);
  const load = (aPromise: Promise<any>) => {
    setState(true);
    return aPromise.finally(() => setState(false));
  };
  return [isLoading, load] as const; // infers [boolean, typeof load] instead of (boolean | typeof load)[]
}
```

`UseRef` Hooks sollten so genau wie möglich die entsprechende Referenz (also in diesem Fall das entsprechende `HTMLElement`) spezifizieren:

```typescript
const divRef = useRef<HTMLDivElement>(null);
```

Wie nutzen wir `useEffect` innerhalb von _TypeScript_? Da `useEffect`als sogenannte _'side effect and clean-up'_ Funktion (also es soll irgendwas wie ein _request_ innerhalb des `useEffect` ausgeführt werden) im Regelfall keinen _return value_ außer die übergebene anonyme Funktion hat (lass dir das nochmal durch den Kopf gehen), muss nicht viel getan werden:

```typescript
type DelayedEffectPropsTypes = {
  timerMs: number;
};
function DelayedEffect({ timerMs: DelayedEffectPropsTypes }): void {
  useEffect(() => {
    setTimeout(() => {
      /* do stuff */
    }, timerMs);
  }, [timerMs]);
  // better; use the void keyword to make sure you return undefined like above
  return null;
}
```

Styles können nochmals mit einem eigenem _type_ je Komponente versehen werden, müssen jedoch nicht unbedingt, da auch hier durch `StyleSheet.create` bereits das _inferred type system_ zum Zuge kommt.

```typescript
type StylesHomeType = {
  container: {
    flex: number;
    flexDirection:
      | "row"
      | "column"
      | "row-reverse"
      | "column-reverse"
      | undefined;
    justifyContent:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "space-evenly"
      | undefined;
    alignItems: FlexAlignType;
  };
};

const homeStyles: StylesHomeType = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
```

### Prettier, Linting und git Hooks

...
