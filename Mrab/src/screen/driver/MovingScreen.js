import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { BACKGROUND_COLOR, GRAY, THEME_COLOR } from '../../utils';
import Switch from './component/Switch';

export default class MovingScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    onBackPress = () => {
        this.props.navigation.goBack();
    }

    onDrivingPress = () => {
        this.props.navigation.navigate('Driving');
    }
    
    onCancel = () => {
        Alert.alert(
            'Thông báo',
            'Nếu hủy chuyến quá nhiều có thể bạn sẽ bị phạt!',
            [
              {
                text: 'Hủy',
                style: 'cancel',
              },
              {text: 'Đồng ý', onPress: () => this.onBackPress()},
            ],
            {cancelable: false},
          );
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: BACKGROUND_COLOR }}>
                <ImageBackground source={require('./../../asset/image/map_moving.png')} style={{ flex: 1, justifyContent: 'space-between', paddingBottom: 20 }} resizeMode={'cover'}>
                    <View style={styles.header}>
                        <TouchableOpacity style={{
                            width: 40, height: 40, borderRadius: 40, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                        }} onPress={this.onBackPress}>
                            <Image source={require('./../../asset/image/back.png')} style={{ height: 40 }} resizeMode={'center'} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={1} style={styles.walletInfo} onPress={this.onDrivingPress}>
                        <View style={{flex: 0.7}}>
                            <View style={{ width: '100%',}}>
                                <Text style={{ fontSize: 12, color: '#9B9B9B' }}>GHI CHÚ:</Text>
                                <Text style={{ fontSize: 14, color: '#000000' }}>Tôi chờ ở cổng chính</Text>
                            </View>
                            <TouchableOpacity onPress={this.onCancel} style={{ backgroundColor: THEME_COLOR, borderRadius: 5, height: 40, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                                <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Hủy</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 0.3, alignItems: 'center'}}>
                        <TouchableOpacity style={{width: 40, height: 40, borderRadius: 40, backgroundColor: THEME_COLOR, alignItems: 'center', justifyContent: 'center'}} onPress={this.onBackPress}>
                            <Image source={require('./../../asset/image/call.png')} style={{ height: 40 }} resizeMode={'center'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: 40, height: 40, borderRadius: 40, backgroundColor: THEME_COLOR, alignItems: 'center', justifyContent: 'center', marginTop: 20}} onPress={this.onBackPress}>
                            <Image source={require('./../../asset/image/message.png')} style={{ height: 40 }} resizeMode={'center'} />
                        </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 44,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'transparent',
    },
    walletInfo: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginLeft: 20,
        marginRight: 20,

        padding: 20,
        flexDirection: 'row'
    },
})