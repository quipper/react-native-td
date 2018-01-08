import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TreasureData from "react-native-td";

interface Props {}

interface State {}

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default class App extends Component<Props, State> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    TreasureData.addEventWithCallback(
      { event: "event_name" },
      "databse_name",
      "record_name",
      () => {
        console.log("onSuccess is called.");
      },
      (error, message) => {
        console.log(`Error: ${error}`);
        console.log(`Message: ${message}`);
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>react-native-td example</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
