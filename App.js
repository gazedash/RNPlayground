import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Playground} from './components/Playground'
import { Stack } from './components/Transition'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <View style={styles.container}>
        // {/* <Text style={styles.welcome}>Playground</Text> */}
        // {/* <Playground /> */}
        <Stack />
      // {/* </View> */}
    );
  }
}

const styles = StyleSheet.create({
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
