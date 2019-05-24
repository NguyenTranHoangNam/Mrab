import React, { Component } from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
export default class HomeScreen extends Component {
    state = {  }
    
    onUserHomePress = () => {
        this.props.navigation.navigate('UserHome');
    }

    onDriverHomePress = () => {
        this.props.navigation.navigate('DriverHome');
    }
    
    render() {
        return (
            <View style={{flex:1,justifyContent:"center",alignContent:"center"}}>
                <TouchableOpacity
                style={{width:'100%',height:50,borderRadius:10}}
                onPress={this.onUserHomePress}>
                    <Text>Đặt xe</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onDriverHomePress}
                                style={{width:'100%',height:50,borderRadius:10}}
                >
                    <Text>Nhận xe</Text>
                </TouchableOpacity>
            </View>
        );
    }
}