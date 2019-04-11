import React from "react";
import { Animated, TouchableOpacity } from "react-native";

export class AnimatedRect extends React.Component {
  handlePress = () => {};
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Animated.View style={{ width: 100, height: 50 }} />
      </TouchableOpacity>
    );
  }
}
