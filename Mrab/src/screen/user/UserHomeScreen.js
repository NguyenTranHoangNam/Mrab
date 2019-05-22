import React, { Component } from "react";
import { View, Image, Dimensions, Text ,TouchableOpacity,Modal} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DialogTimKiem from "./DialogTimKiem";
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
            source={require("./../../asset/image/map.png")}
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
          <View style={{flexDirection:'row',justifyContent:"space-around"}}>
            <Image
              source={require('./asset/image/motorbike.png')} style={{ width: 30, height: 30, resizeMode: 'contain',margin:5 }}
            />
            <Text style={{margin:5,fontSize:20}}>Motor Bike</Text>
            <View style={{width:1,height:30,backgroundColor:'#757575'}}/>
            <Text style={{margin:5,fontSize:20}}>20.000VNĐ</Text>
          </View>
          <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            <TouchableOpacity
            onPress={()=>{
              this.modal.setModalVisible(true)
            }}
            style={{borderRadius:4,width:'80%',margin:10,borderColor:'#757575',borderWidth:1,justifyContent:"center"}}
            >
              <View style={{width:'80%',margin:10,borderColor:'#757575',justifyContent:'center',alignItems:'center'}}>
                <Text style={{textAlign:'center',width:'100%'}}>Đặt xe</Text>
              </View>
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
