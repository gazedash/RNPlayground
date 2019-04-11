import React from "react";
import { View } from 'react-native'
import { TabJump } from "./TabJump";
import { AnimatedRect } from "./AnimatedRect";

export const Playground = () => {
  return (
    <View>
      <TabJump />
      <AnimatedRect />
    </View>
  );
};
