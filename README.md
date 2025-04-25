# React Native Expo Boilerplate

A modern and feature-rich React Native boilerplate using Expo, designed to kickstart your mobile app development with best practices and essential configurations.

(_Will be regularly updated with new features and versions_)

## Features

### Core Technologies

- 📱 Expo SDK 52
- 🎯 TypeScript support
- ✨ New Architecture (Fabric) enabled

### UI & Navigation

- 🗺️ React Navigation v7 (Native Stack & Bottom Tabs)
- 🎨 Custom fonts support
- 🌓 Automatic dark/light theme support
- 💫 Custom splash screen configuration
- 🎭 Custom app icon setup

### State Management & Data Fetching

- 📊 TanStack Query (React Query v5)
- 🔄 Zustand for state management

### Development & Performance

- 📱 Expo Dev Client support
- 💾 MMKV for efficient storage
- 🔍 Monicon for icon management

## Upcoming Features

- 📱 Push Notification
- 📱 Error Handling

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn
- iOS: XCode (for iOS development)
- Android: Android Studio (for Android development)
- Expo CLI: `npm install -g expo-cli`

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ubaidjs/ExpoBoilerplate.git
cd ExpoBoilerplate
```

2. Install dependencies:

```bash
npm install
```

### Running the App

#### Development

```bash
# Generate Android & iOS folders
npx expo prebuild

# Start Expo development server
yarn start

# Run on iOS
npm run ios

# Run on Android
npm run android

```

## Environment Variables

Create a `.env` file in the root directory:

```
EXPO_PUBLIC_BASE_URL=your_api_url
```
