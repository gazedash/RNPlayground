import { HomeScreen, PopupScreen } from "./Screens";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Animated, Easing } from "react-native";

const midVertical = (sceneProps) => {
  const { layout, position, scene } = sceneProps;
  const index = scene.index;
  const height = layout.initHeight;

  const translateX = 0;
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0]
  });

  return {
    transform: [{ translateX }, { translateY }]
  };
};

const collapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];

  const scaleY = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });

  return scaleY;
};

const TransitionConfiguration = () => ({
  transitionSpec: {
    duration: 5000,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: (sceneProps) => {
    const { layout, position, scene } = sceneProps;
    // console.warn(Object.keys(scene));
    const { index } = scene;

    const height = layout.initHeight;
    const translateX = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [height / 10, 0, 0]
    });

    const translateY = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [height, 0, 0]
    });

    // Animated.spring(position, {

    // }).start()

    const opacity = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0, 1, 1]
    });

    const rotateY = position.interpolate({
      inputRange: [index - 1, index - 0.1, index, index + 1],
      outputRange: ["20deg", "10deg", "0deg", "0deg"]
    });

    const borderRadius = position.interpolate({
      inputRange: [index - 1, index - 0.1, index, index + 1],
      outputRange: [500, 400, 400, 400]
    });

    return {
      borderRadius,
      // opacity,
      transform: [
        {
          rotate: rotateY
        },
        { translateX },
        // { translateY },
        { scaleY: collapseExpand(index, position) },
      ]
    };
  }
});

export const Stack = createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Popup: PopupScreen
    },
    {
      initialRouteName: "Home",
      headerMode: "none",
      containerStyle: {
        backgroundColor: "black",
        borderRadius: 500,
        borderWidth: 20,
        borderColor: 'blue'
      },
      transitionConfig: TransitionConfiguration
    }
  )
);
