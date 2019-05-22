import React, { Component } from "react";
import { View, Image, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");
export default class Home extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <View
          style={{
            position: "absolute",
            zIndex: 2,
            top: 0,
            left: 0,
            right: 0,
            width
          }}
        >
          <TextInput
            style={{
              width: width - 50,
              height: 35,
              backgroundColor: "white",
              borderRadius: 8
            }}
          />
          <TextInput
            style={{
              width: width - 50,
              height: 35,
              backgroundColor: "white",
              borderRadius: 8,
              marginTop: 10
            }}
          />
        </View>
        <View zIndex={1}>
          <Image
            source={require("./asset/image/map.png")}
            style={{ width: "100%", height: "100%", zIndex: 1 }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            zIndex: 2,
            bottom: 0,
            left: 0,
            right: 0,
            width
          }}
        >
          <TextInput
            style={{
              width: width - 50,
              height: 35,
              backgroundColor: "white",
              borderRadius: 8
            }}
          />
          <TextInput
            style={{
              width: width - 50,
              height: 35,
              backgroundColor: "white",
              borderRadius: 8,
              marginTop: 10
            }}
          />
        </View>
      </View>
    );
  }
}
