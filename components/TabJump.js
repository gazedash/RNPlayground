// All credits go to https://dev.to/hrastnik/lets-create-a-custom-animated-tab-bar-with-react-native-3496
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import posed from "react-native-pose";

const windowWidth = Dimensions.get("window").width;

const Scaler = posed.View({
  active: { scale: 1.25 },
  inactive: { scale: 1 }
});

const S = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flexDirection: "row",
    height: 52,
    width: windowWidth,
    elevation: 2,
    alignItems: "center"
  },
  spotlightInner: { width: 48, height: 48, borderRadius: 24 },
  tabButton: { flex: 1 },
  scaler: { flex: 1, alignItems: "center", justifyContent: "center" },
  defaultTab: {}
});

const SIZE = 30;

export class TabJump extends React.Component<Props, {}> {
  SpotLight = undefined;
  spotlightStyle = undefined;
  Inner = undefined;

  static defaultProps = {
    activeTintColor: "pink",
    inactiveTintColor: "blue"
  };

  constructor(props) {
    super(props);
    this.init();
    this.state = {
      route: 0
    };
  }

  init() {
    const numTabs = 3;

    const tabWidth = windowWidth / numTabs;

    const poses = Array.from({ length: numTabs }).reduce((poses, _, index) => {
      return { ...poses, [`route${index}`]: { x: tabWidth * index } };
    }, {});

    const styles = StyleSheet.create({
      spotlight: {
        width: tabWidth,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }
    });

    this.SpotLight = posed.View(poses);
    this.spotlightStyle = styles.spotlight;

    const tabColors = ["green", "yellow", "red"];

    this.Inner = posed.View({
      passive: {
        backgroundColor: [
          "x",
          {
            inputRange: Array.from({ length: numTabs }).map(
              (_, i) => i * tabWidth
            ),
            outputRange: tabColors
          },
          true
        ]
      }
    });
  }

  onTabPress = ({ route }) => {
    this.setState({
      route
    });
  };

  onTabLongPress = ({ route }) => {
    this.setState({
      route
    });
  };

  render() {
    const { activeTintColor, inactiveTintColor } = this.props;

    const { SpotLight, spotlightStyle, Inner } = this;
    const activeRouteIndex = this.state.route;
    const routes = [0, 1, 2];

    return (
      <View style={S.container}>
        <View style={StyleSheet.absoluteFillObject}>
          <SpotLight style={spotlightStyle} pose={`route${activeRouteIndex}`}>
            <Inner style={S.spotlightInner} />
          </SpotLight>
        </View>

        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

          return (
            <TouchableOpacity
              key={routeIndex}
              style={S.tabButton}
              onPress={() => {
                this.onTabPress({ route });
              }}
              onLongPress={() => {
                this.onTabLongPress({ route });
              }}
            >
              <Scaler
                pose={isRouteActive ? "active" : "inactive"}
                style={S.scaler}
              >
                <View style={[S.spotlightInner, S.defaultTab, S.scaler]}>
                  <Text style={{ color: "white" }}>{activeRouteIndex}</Text>
                </View>
              </Scaler>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
