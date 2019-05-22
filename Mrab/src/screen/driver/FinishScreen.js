import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { BACKGROUND_COLOR, GRAY, THEME_COLOR, BLUE } from '../../utils';
import Switch from './component/Switch';

export default class FinishScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            timer: 15,
        }
    }

    onBackPress = () => {
        this.props.navigation.popToTop();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: BACKGROUND_COLOR }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.onBackPress}>
                        <Image source={require('./../../asset/image/back.png')} style={{ height: 40, width: 40 }} resizeMode={'center'} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, color: '#000000' }}>Hoàn thành chuyến</Text>
                </View>
                <View style={{ backgroundColor: BACKGROUND_COLOR, flex: 1, padding: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View>
                        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 12, padding: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('./../../asset/image/avatar.png')} style={{ width: 45, height: 45 }} />
                                <View style={{ justifyContent: 'space-between', marginLeft: 15 }}>
                                    <Text style={{ color: '#000000', fontSize: 14 }}>Khách hàng:</Text>
                                    <Text style={{ color: '#000000', fontSize: 18 }}>Nguyễn Văn A</Text>
                                </View>
                            </View>
                            <Text style={{ color: '#9B9B9B', fontSize: 12, marginTop: 20 }}>GHI CHÚ: <Text style={{ color: '#000000' }}>Tôi chờ ở cổng chính</Text></Text>
                        </View>

                        <View style={styles.fromToInfo}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('./../../asset/image/from.png')} style={{ height: 20 }} resizeMode='center' />
                                <Image source={require('./../../asset/image/dots.png')} style={{ height: 25 }} resizeMode='center' />
                                <Image source={require('./../../asset/image/to.png')} style={{ height: 20 }} resizeMode='center' />
                            </View>
                            <View style={{ justifyContent: 'space-between', paddingLeft: 5, flex: 1 }}>
                                <Text style={{ lineHeight: 20, fontSize: 14, color: '#000000' }}>Trường đại học khoa học tự nhiên</Text>
                                <View style={{ width: '100%', height: 1, backgroundColor: BACKGROUND_COLOR }} />
                                <Text style={{ lineHeight: 20, fontSize: 14, color: '#000000' }}>The Coffee House</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={{ fontSize: 14, color: '#000000' }}>Thanh toán: <Text style={{ fontWeight: '500', fontSize: 16 }}>105.000 VND</Text></Text>
                            <View style={{ height: 25, width: 94, backgroundColor: BLUE, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, color: '#FFFFFF' }}>Tiền mặt</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity onPress={this.onBackPress} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: THEME_COLOR, borderRadius: 5, padding: 10 }}>
                        <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Hoàn thành</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#FFFFFF'
    },
    fromToInfo: {
        borderRadius: 12,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        marginTop: 20,
    },
})