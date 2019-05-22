import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { BACKGROUND_COLOR, GRAY, THEME_COLOR } from '../../utils';
import Switch from './component/Switch';

export default class DriverHomeScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            timer: 15,
        }
    }

    onComingCall = () => {
        this.setState({
            showModal: true,
            timer: 15
        }, this.startTimer())
    }

    onCloseModal = () => {
        console.log('Đóng modal')
        this.setState({
            showModal: false
        })
    }

    startTimer = () => {
        this.clockCall = setInterval(() => {
            this.decrementClock();
        }, 1000);
    }

    componentWillUnmount() {
        if (this.clockCall) {
            clearInterval(this.clockCall);
        }
    }

    decrementClock = () => {
        this.setState((prevstate) => ({ timer: prevstate.timer - 1 }), () => { if (this.state.timer === 0) { this.onCloseModal(); clearInterval(this.clockCall); } });
    };

    onAccept = () => {
        this.setState({
            showModal: false
        }, () => {
            if (this.clockCall) {
                this.onCloseModal();
                clearInterval(this.clockCall);
                this.props.navigation.navigate('Moving');
            }
        })
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: BACKGROUND_COLOR }}>
                <View style={styles.header}>
                    <Image source={require('./../../asset/image/avatar.png')} style={{ height: 40 }} resizeMode={'center'} />
                    <Image source={require('./../../asset/image/logo.png')} />
                    <Switch />
                </View>
                <ImageBackground source={require('./../../asset/image/map.png')} style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 20 }}>
                    <TouchableOpacity activeOpacity={1} style={styles.walletInfo} onPress={this.onComingCall}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: '#000000', fontWeight: '500' }}>Số dư ví</Text>
                            <Text style={{ fontSize: 16, color: '#000000', fontWeight: '500' }}>20.000.000 <Text style={{ fontSize: 10 }}>(VND)</Text></Text>
                        </View>
                        <View style={{ width: '100%', height: 1, backgroundColor: GRAY, marginTop: 10, marginBottom: 10 }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '50%', alignItems: 'center' }}>
                                <Image source={require('./../../asset/image/topup.png')} style={{ height: 20 }} resizeMode={'center'} />
                                <Text style={{ fontSize: 14, color: '#000000' }}>Nạp tiền</Text>
                            </View>
                            <View style={{ height: '80%', width: 1, backgroundColor: GRAY, }} />
                            <View style={{ width: '50%', alignItems: 'center' }}>
                                <Image source={require('./../../asset/image/withdraw.png')} style={{ height: 20 }} resizeMode={'center'} />
                                <Text style={{ fontSize: 14, color: '#000000' }}>Rút tiền</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </ImageBackground>
                <Modal
                    onRequestClose={() => { }}
                    animationType={'none'}
                    transparent={true}
                    visible={this.state.showModal}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalBackground} onPress={this.onCloseModal}>
                        <View style={styles.contanier}>
                            <Text style={{ fontSize: 20, paddingTop: 10, paddingBottom: 10, color: '#000000' }}>Marb Car - 4 chỗ</Text>
                            <View style={styles.comingInfo}>
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
                                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center', marginTop: 5, marginBottom: 5 }}>
                                    <Text style={{ fontSize: 16, color: '#000000' }}>1.5 KM</Text>
                                    <Text style={{ fontSize: 10, color: '#000000' }}>(cách nơi đón <Text>5 phút</Text>)</Text>
                                </View>
                            </View>

                            <View style={styles.noteInfo}>
                                <View style={{ width: '100%', padding: 20 }}>
                                    <Text style={{ fontSize: 12, color: '#9B9B9B' }}>GHI CHÚ:</Text>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>Tôi chờ ở cổng chính</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <TouchableOpacity onPress={this.onCloseModal} style={{ backgroundColor: '#FFFFFF', borderColor: THEME_COLOR, borderWidth: 1, borderRadius: 5, height: 40, marginLeft: 5, paddingLeft: 30, paddingRight: 30, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, color: THEME_COLOR }}>Hủy</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onAccept} style={{ backgroundColor: THEME_COLOR, borderRadius: 5, height: 40, marginLeft: 5, flexDirection: 'row', paddingLeft: 30, paddingRight: 30, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Đồng ý nhận</Text>
                                    <View style={{ width: 30, height: 30, borderRadius: 30, backgroundColor: '#B56700', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                                        <Text style={{ fontSize: 15, color: '#FFFFFF' }}>{this.state.timer}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </TouchableOpacity>
                </Modal>
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
        backgroundColor: THEME_COLOR
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
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000040'
    },
    comingInfo: {
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        borderRadius: 12,
        backgroundColor: GRAY,
    },
    contanier: {
        width: '90%',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        borderRadius: 12,

        padding: 20,
    },
    fromToInfo: {
        borderRadius: 12,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
    },
    noteInfo: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        borderRadius: 12,
        backgroundColor: '#FFFFFF',
    }
})