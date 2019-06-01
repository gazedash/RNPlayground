// HomeScreen
// PopupScreen
import React from "react";
import { View, Text, Button, Image } from "react-native";

export class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
            backgroundColor: 'black'
        }}
      >
        <Button
          title={"Popup"}
          onPress={() => {
            this.props.navigation.navigate({
              routeName: "Popup",
              key: Math.random()
            });
          }}
        />
        <Text>BLBLBLBLBL</Text>
        <Image
          style={{
            width: 300,
            height: 300
          }}
          source={{ uri: "https://picsum.photos/id/237/200/300" }}
        />

        <Text>
          LOREM IPSUM LOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM
          IPSUMLOREM IPSUM LOREM IPSUMLOREM IPSUMLOREM IPSUM LOREM IPSUMLOREM
          IPSUM LOREM IPSUMLOREM IPSUMLOREM IPSUM
        </Text>
      </View>
    );
  }
}

export class PopupScreen extends React.Component {
  render() {
    const num = Math.ceil(Math.random() * 10) + 10;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          borderColor: 'red',
          borderWidth: 20,
          // borderRadius: 50
        }}
      >
        <Button
          title={"Popup"}
          onPress={() => {
            this.props.navigation.navigate({
              routeName: "Popup",
              key: Math.random()
            });
          }}
        />
        <Text>{Math.random()}</Text>
        <Image
          style={{
            width: 300,
            height: 300
          }}
          source={{ uri: `https://picsum.photos/id/${num}/200/300` }}
        />

        <Text>
          4435243dfs 35 435 2435 43fds naf jsf dsf 5435wfo dsaf dsf jasdp]f
          djsaf dsklf dsf dsf dsf
        </Text>

        <Image
          style={{
            width: 300,
            height: 300
          }}
          source={{ uri: `https://picsum.photos/id/${num}/200/300` }}
        />
      </View>
    );
  }
}
