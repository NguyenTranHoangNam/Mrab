import React, { Component } from "react";
import {
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  Modal
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DialogTimKiem from "./DialogTimKiem";
const { width, height } = Dimensions.get("screen");
export default class HoanThanhChuyen extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1 }}>
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
            bottom: 10,
            left: 0,
            right: 0,
            borderRadius: 8,
            height: height * 0.35,
            backgroundColor: "white",
            marginLeft: 20,
            marginRight: 20,
            // justifyContent:"center"
            alignItems: "center"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("./asset/image/message.png")}
              style={{
                width: height * 0.0625,
                height: height * 0.0625,
                margin: 5
              }}
            />
            <Image
              source={require("./asset/image/driver.png")}
              style={{
                width: height * 0.125,
                height: height * 0.125,
                margin: 5
              }}
            />
            <Image
              source={require("./asset/image/phone.png")}
              style={{
                width: height * 0.0625,
                height: height * 0.0625,
                margin: 5
              }}
            />
          </View>
          <Text>Nguyễn Văn A</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("./asset/image/star.png")}
              style={{
                width: 25,
                height: 25,
                margin: 5,
                resizeMode: "contain"
              }}
            />
            <Image
              source={require("./asset/image/star.png")}
              style={{
                width: 25,
                height: 25,
                margin: 5,
                resizeMode: "contain"
              }}
            />
            <Image
              source={require("./asset/image/star.png")}
              style={{
                width: 25,
                height: 25,
                margin: 5,
                resizeMode: "contain"
              }}
            />
            <Image
              source={require("./asset/image/star.png")}
              style={{
                width: 25,
                height: 25,
                margin: 5,
                resizeMode: "contain"
              }}
            />
            <Image
              source={require("./asset/image/star.png")}
              style={{
                width: 25,
                height: 25,
                margin: 5,
                resizeMode: "contain"
              }}
            />
          </View>
          <Text>51G - 22412</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack(null);
            }}
            style={{
              width: "80%",
              margin: 10,
              borderColor: "#757575",
              borderWidth: 1,
              justifyContent: "center",
              borderRadius: 4
            }}
          >
            <Text
              style={{
                textAlign: "center",
                width: "80%",
                margin: 10,
                borderColor: "#757575",
                borderRadius: 10
              }}
            >
              Hoàn thành chuyến
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
