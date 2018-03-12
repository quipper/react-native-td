# react-native-td [![CircleCI](https://circleci.com/gh/quipper/react-native-td.svg?style=svg)](https://circleci.com/gh/quipper/react-native-td) [![npm version](https://badge.fury.io/js/react-native-td.svg)](https://badge.fury.io/js/react-native-td)

react-native-td is an unofficial React Native SDK for Treasure Data.

The module is a light-weight layer sitting on-top of the TreasureData SDK for both [iOS](https://github.com/treasure-data/td-ios-sdk) and [Android](https://github.com/treasure-data/td-android-sdk).

## Installation

You can install react-native-td into your project in the following way.

```sh
npm install --save react-native-td
react-native link react-native-td
```

### iOS configuration

If you haven't introduced cocoapods, install it and run `pod init` under `ios/`and make sure lines below are in `Podfile`.

```diff
+ pod 'React', :path => '../node_modules/react-native', :subspecs => [
+   'Core',
+   'DevSupport', # Include this to enable In-App Devmenu if RN >= 0.43
+   'RCTText',
+   'RCTNetwork',
+   'RCTWebSocket', # needed for debugging
+ ]
+ pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga'
+ pod 'RNTreasureData', :path => '../node_modules/react-native-td'
```

## Usage

Basically react-native-td imitates the interface of TreasureData iOS/Android SDK as close as possible.

Hence to know more detail check official documents below.

- iOS: https://docs.treasuredata.com/articles/ios-sdk
- Android: https://docs.treasuredata.com/articles/android-sdk

### Instantiate with your API key

```ts
import TreasureData from "react-native-td";

TreasureData.initialize("your API key");
```

We recommend to use a write-only API key for the SDK. To obtain one, please:

1. Login to the Treasure Data Console at http://console.treasuredata.com;
2. Visit your Profile page at http://console.treasuredata.com/users/current;
3. Insert your password under the 'API Keys' panel;
4. In the bottom part of the panel, under 'Write-Only API keys', either copy the API key or click on 'Generate New' and copy the new API key.

### Add a event to local buffer

To add an event to local buffer, you can call `addEvent` or `addEventWithCallback` API.

```ts
TreasureData.addEventWithCallback(
  { event: "event_name" },
  "database_name",
  "record_name",
  () => {
    console.log("onSuccess is called.");
  },
  (error, message) => {
    console.log(`Error: ${error}`);
    console.log(`Message: ${message}`);
  }
);
```

Or simply:

```ts
TreasureData.addEvent("database_name", "table_name", { event: "event_name" });
```

### Upload buffered events to Treasure Data

To upload events buffered events to Treasure Data, you can call `uploadEvents` or `uploadEventsWithCallback` API.

```ts
TreasureData.uploadEventsWithCallback(
  () => {
    console.log("onSuccess is called.");
  },
  (error, message) => {
    console.log(`Error: ${error}`);
    console.log(`Message: ${message}`);
  }
);
```

Or simply:

```ts
TreasureData.uploadEvents();
```

### Start/End session

```ts
TreasureData.startSession("table_name");

TreasureData.endSession("table_name");
```

If you want to handle the following case, use a pair of methods `startSession` and `endSession` for global session tracking.

* User opens the application and starts session tracking using startSession
* User moves to home screen and finishes the session using endSession
* User reopens the application and restarts session tracking within default 10 seconds. But you want to deal with this new session as the same session.

```ts
TreasureData.setSessionTimeoutMilli(30 * 1000); // Default is 10 seconds

TreasureData.startSession();

TreasureData.endSession();
```

In this case, you can get the current session ID using `getSessionId`.

```ts
TreasureData.getSessionId().then(sessionId => {
  console.log(sessionId);
});
```

### Detect if it's the first running

You can detect if it's the first running or not easily using `isFirstRun` method and then clear the flag with `clearFirstRun`.

```ts
TreasureData.isFirstRun()
  .then(() => {
    TreasureData.clearFirstRun();
    TreasureData.uploadEvents();
  })
  .catch(error => {
    console.log(error);
  });
```

## About Error code

`addEventWithCallback` and `uploadEventsWithCallback` methods call back `onError` with errorCode argument.

This argument is useful to know the cause type of the error. There are the following error codes.

* `init_error` : The initialization failed.
* `invalid_param` : The parameter passed to the API was invalid
* `invalid_event` : The event was invalid
* `data_conversion` : Failed to convert the data to/from JSON
* `storage_error` : Failed to read/write data in the storage
* `network_error` : Failed to communicate with the server due to network problem
* `server_response` : The server returned an error response

## Additional Configuration

### Endpoint

```ts
TreasureData.initializeApiEndpoint("https://in.treasuredata.com");
TreasureData.initialize("your API key");
```

### Encryption key

```ts
TreasureData.initializeEncryptionKey("hello world");
```

### Default database

```ts
TreasureData.setDefaultDatabase("default_db");
```

### Adding UUID of the device to each event automatically

```ts
TreasureData.enableAutoAppendUniqId();
```

### Adding an UUID to each event record automatically

```ts
TreasureData.enableAutoAppendRecordUUID();
```

### Adding device model information to each event automatically

```ts
TreasureData.enableAutoAppendModelInformation();
```

### Adding application package version information to each event automatically

```ts
TreasureData.enableAutoAppendAppInformation();
```

### Adding locale configuration information to each event automatically

```ts
TreasureData.enableAutoAppendLocaleInformation();
```

### Use server side upload timestamp

```ts
TreasureData.enableServerSideUploadTimestamp();
// Add server side upload time as a customized column name
TreasureData.enableServerSideUploadTimestamp("server_upload_time");
```

### Enable/Disable debug log

```ts
TreasureData.enableLogging();
TreasureData.disableLogging();
```
