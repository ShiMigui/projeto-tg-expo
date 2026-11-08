# Projeto TG — Expo

[![CI](https://github.com/ShiMigui/projeto-tg-expo/actions/workflows/ci.yml/badge.svg)](https://github.com/ShiMigui/projeto-tg-expo/actions/workflows/ci.yml)

A study app built with Expo and React Native. It bundles a calculator, math
tools, a temperature converter, a stopwatch and a Pomodoro timer in one mobile
application.

## Features

- Drawer navigation: Home, Ferramentas, Conversão, Timers, Calculadora and Sobre.
- **Ferramentas** with tab navigation:
  - **Operações** — addition, subtraction, multiplication and division.
  - **IMC** — body mass index.
  - **Bhaskara** — quadratic equation roots.
- **Conversão** — temperature conversion between Celsius, Fahrenheit and Kelvin.
- **Timers** — stopwatch and a 20-minute Pomodoro timer.
- Shared UI components: buttons, cards, text inputs, selects, display and
  feedback messages.
- Dark theme.

## Stack

| Area | Technology |
| --- | --- |
| Platform | Expo ~57, React Native 0.86 |
| UI | React 19, React Navigation 7 (drawer + bottom tabs) |
| Language | TypeScript |
| Animation and gestures | react-native-reanimated, react-native-gesture-handler |
| Layout | react-native-safe-area-context, react-native-screens |
| Startup | expo-splash-screen, expo-font, expo-status-bar |
| Logic | `services/MathUtils.ts` |

## Getting started

Requirements: Node.js and npm (the repository includes `package-lock.json`).

```bash
npm install
npm start
```

Then open the project in an Android emulator, an iOS simulator, or Expo Go.

### Scripts

| Script | Description |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Start on Android |
| `npm run ios` | Start on iOS |
| `npm run web` | Start in the browser |
| `npm run typecheck` | Run TypeScript without emitting files |

## Structure

```text
App.tsx              Drawer navigation and theme
screens/             Home, tools, conversion, timers, calculator and about
components/          Reusable UI components
services/MathUtils.ts  Arithmetic, IMC, Bhaskara and temperature logic
assets/              Icons, splash images and logos
```

## Notes

- The interface copy is in Portuguese.
- `app.json` still contains the original Snack identifiers (`primeiro-projeto`
  and a generated `snack-...` slug). Rename them before distributing the app.
- This repository does not currently include a license file.

## License

Released under the [MIT License](./LICENSE).
