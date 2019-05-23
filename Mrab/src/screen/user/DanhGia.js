import React, { Component } from 'react';
import { View, Image, Dimensions, Text, TextInput,TouchableOpacity } from 'react-native';
import { THEME_COLOR } from '../../utils';
const { width, height } = Dimensions.get('screen')
export default class DanhGia extends Component {
    state = {}
    render() {
        return (
            <View
                style={{ alignItems: 'center' }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../asset/image/driver.png')} style={{ width: height * 0.125, height: height * 0.125, margin: 5 }} />
                </View>
                <Text>Nguyễn Văn A</Text>
                <TextInput
                    editable={false}
                    style={{
                        width: '80%',
                        height: 35,
                        backgroundColor: "white",
                        borderRadius: 8,
                        borderColor: '#757575',
                        borderWidth: 1
                    }}
                    value={'KHTN'}
                />
                <TextInput
                    editable={false}
                    value={'KHTN'}
                    style={{
                        width: '80%',
                        height: 35,
                        backgroundColor: "white",
                        borderRadius: 8,
                        marginTop: 10,
                        borderColor: '#757575',
                        borderWidth: 1
                    }}
                />
                <Text>Thanh toán: 20.000 VNĐ</Text>
                <Text>Đánh giá:</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../asset/image/star.png')} style={{ width: 25, height: 25, margin: 5, resizeMode: 'contain' }} />
                    <Image source={require('../../asset/image/star.png')} style={{ width: 25, height: 25, margin: 5, resizeMode: 'contain' }} />
                    <Image source={require('../../asset/image/star.png')} style={{ width: 25, height: 25, margin: 5, resizeMode: 'contain' }} />
                    <Image source={require('../../asset/image/star.png')} style={{ width: 25, height: 25, margin: 5, resizeMode: 'contain' }} />
                    <Image source={require('../../asset/image/star.png')} style={{ width: 25, height: 25, margin: 5, resizeMode: 'contain' }} />
                </View>
                <Text>Đánh giá:</Text>
                <View style={{ flexDirection: 'row', justifyContent: "space-around", flexWrap: 'wrap' }}>
                    <View style={{ borderRadius: 4, borderColor: '#757575', borderWidth: 1, margin: 5 }}>
                        <Text style={{ padding: 5 }}>Lái lụa</Text>
                    </View>
                    <View style={{ borderRadius: 4, borderColor: '#757575', borderWidth: 1, margin: 5 }}>
                        <Text style={{ padding: 5 }}>An toàn</Text>
                    </View>
                    <View style={{ borderRadius: 4, borderColor: '#757575', borderWidth: 1, margin: 5 }}>
                        <Text style={{ padding: 5 }}>Lái ẩu</Text>
                    </View>
                    <View style={{ borderRadius: 4, borderColor: '#757575', borderWidth: 1, margin: 5 }}>
                        <Text style={{ padding: 5 }}>Tài xế thân thiện</Text>
                    </View>
                </View>
                <TouchableOpacity
              onPress={() => {
                // this.modal.setModalVisible(true)
                this.props.navigation.popToTop()
              }}
              style={{ backgroundColor: '#FF9100', width: '80%', margin: 10, justifyContent: "center", borderRadius: 4 }}
            >
              <Text style={{ textAlign: 'center', width: '80%', margin: 10, borderColor: '#757575', borderRadius: 10, color: 'white' }}>
                Xác nhận 
                </Text>
            </TouchableOpacity>
            </View>
        );
    }
}