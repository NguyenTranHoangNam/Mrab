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
            <View style={{flex:1,backgroundColor:"blue"}}>
                <TouchableOpacity onPress={this.onUserHomePress}>
                    <Text>Đặt xe</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onDriverHomePress}>
                    <Text>Nhận xe</Text>
                </TouchableOpacity>
            </View>
        );
    }
}