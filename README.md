This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## App Structure

This app features a navigation-based structure with multiple components:

### Home Component
- **Location**: `components/Home.tsx`
- **Features**: Main navigation hub with state management
- **Concepts**: useState hook, conditional rendering, TouchableOpacity navigation

### Cards Section
- **Location**: `components/Cards/Cards.tsx`
- **Features**: Collection of different card components
- **Components Included**:
  - **FlatCards** (`components/Cards/FlatCards.tsx`): Horizontal scrollable cards
  - **ElevatedCards** (`components/Cards/ElevatedCards.tsx`): Cards with shadow effects
  - **FancyCards** (`components/Cards/FancyCards.tsx`): Cards with images and content
  - **ActionCard** (`components/Cards/ActionCard.tsx`): Interactive cards with external links
  - **ContactList** (`components/Cards/ContactList.tsx`): User profile listings

### Password Generator
- **Location**: `components/passwordGenerator/PasswordGenerator.tsx`
- **Features**: Complete password generation utility with customizable options
- **Concepts**: Form validation with Yup, Formik form management, clipboard integration, keyboard handling

## Key React Native Concepts Demonstrated

- **Component Navigation**: State-based view switching without external navigation libraries
- **Props Interface**: TypeScript interfaces for component props
- **SafeAreaView**: Proper handling of device safe areas using react-native-safe-area-context
- **StyleSheet**: Organized styling with flexbox layout
- **ScrollView**: Vertical scrolling containers
- **TouchableOpacity**: Interactive button components with press handlers
- **useState Hook**: State management for view switching
- **Conditional Rendering**: Dynamic content based on state
- **Component Composition**: Modular component architecture

## Components Used by Library

### React Native Core Components
- **View**: Container component for layout and styling
- **Text**: Display text content with styling options
- **ScrollView**: Scrollable container for content that exceeds screen size
- **TouchableOpacity**: Touchable wrapper with opacity feedback
- **TextInput**: Input field for user text entry
- **KeyboardAvoidingView**: Automatically adjusts view when keyboard appears
- **Platform**: Access platform-specific information (iOS/Android)
- **StyleSheet**: Create optimized style objects

### React (Hooks)
- **useState**: Manage component state

### Third-Party Libraries
- **@react-native-clipboard/clipboard**: Copy text to device clipboard
- **formik**: Form state management and validation
- **yup**: Schema validation for forms
- **react-native-bouncy-checkbox**: Animated checkbox component
- **react-native-safe-area-context**: Handle device safe areas

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
