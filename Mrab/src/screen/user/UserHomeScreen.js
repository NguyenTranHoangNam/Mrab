import React, { Component } from "react";
import { View, Image, Dimensions, Text, TouchableOpacity, Modal } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DialogTimKiem from "./DialogTimKiem";
import { THEME_COLOR } from "../../utils";
const { width, height } = Dimensions.get("screen");
export default class UserHomeScreen extends Component {
  state = {};

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            position: "absolute",
            zIndex: 2,
            top: 0,
            left: 0,
            right: 0,
            marginLeft: 20,
            marginRight: 20
          }}
        >
          <TextInput
            style={{
              width: '100%',
              height: 35,
              backgroundColor: "white",
              borderRadius: 8
            }}
          />
          <TextInput
            style={{
              width: '100%',
              height: 35,
              backgroundColor: "white",
              borderRadius: 8,
              marginTop: 10
            }}
          />
        </View>
        <View zIndex={1}>
          <Image
            source={require("../../asset/image/map.png")}
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
            height: height * 0.25,
            backgroundColor: 'white',
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <TextInput
            style={{
              width: '100%',
              height: 35,
              backgroundColor: "white",
              borderRadius: 8,
              marginTop: 10
            }}
            placeholder={'Bạn có mã khuyến mãi?'}
          />
          <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
            {/* <Image
              source={require('../../asset/image/motorbike.png')} style={{ width: 30, height: 30, resizeMode: 'contain', margin: 5 }}
            /> */}
            <View style={{ width: height * 0.0625, height: height * 0.0625, backgroundColor: THEME_COLOR, borderRadius: height * 0.0625 * 2, justifyContent: "center", alignItems: 'center' }}>
              <Image source={require('../../asset/image/bike.png')} style={{ width: height * 0.03, height: height * 0.03, margin: 5 }} />
            </View>
            <Text style={{ margin: 5, fontSize: 20 }}>Motor Bike</Text>
            <View style={{ width: 1, height: 30, backgroundColor: '#757575' }} />
            <Text style={{ margin: 5, fontSize: 20 }}>20.000VNĐ</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                this.modal.setModalVisible(true)
              }}
              style={{ backgroundColor: '#FF9100', width: '95%', margin: 10, justifyContent: "center", borderRadius: 4 }}
            >
              <Text style={{ textAlign: 'center', width: '95%', margin: 10, borderColor: '#757575', borderRadius: 10, color: 'white' }}>
                Đặt xe
                </Text>
            </TouchableOpacity>
          </View>
        </View>
        <DialogTimKiem
          navigation={this.props.navigation}
          ref={dialog => this.modal = dialog}
        />
      </View>
    );
  }
}
