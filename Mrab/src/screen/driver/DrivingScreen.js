import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { BACKGROUND_COLOR, GRAY, THEME_COLOR } from '../../utils';
import Switch from './component/Switch';

export default class DrivingScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    onBackPress = () => {
        this.props.navigation.popToTop();
    }

    onFinish = () => {
        this.props.navigation.navigate('Finish');
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: BACKGROUND_COLOR }}>
                <ImageBackground source={require('./../../asset/image/map_driving.png')} style={{ flex: 1, justifyContent: 'space-between', paddingBottom: 20 }} resizeMode={'cover'}>
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
                    <TouchableOpacity activeOpacity={1} style={{flex: 1}} onPress={this.onFinish}></TouchableOpacity>
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