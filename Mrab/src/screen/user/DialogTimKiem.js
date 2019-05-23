import React, { Component } from "react";
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    Dimensions,
    Image
} from "react-native";

const { width, height } = Dimensions.get("screen");

export default class DialogTimKiem extends Component {
    state = {
        modalVisible: false
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
        if (visible == true) {
            const self = this
            setTimeout(function () {
                self.setState({ modalVisible: false });
                self.props.navigation.navigate('TimTaiXe')
            }, 5000);
        }
        else {
           
        }
    }
    timer = () => {
        const self = this
        setTimeout(function () {
            self.setState({ modalVisible: false });
            self.props.navigation.navigate('TimTaiXe')
        }, 5000);
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                animationType={"fade"}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }}
                >
                    <View
                        style={{
                            width: width * 0.4,
                            height: width * 0.4,
                            backgroundColor: "white",
                            borderRadius: 10
                        }}
                    >
                        <View
                            style={{
                                width: "100%",
                                height: "80%",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source={require("../../asset/image/search-1.png")}
                                style={{ width: "30%", height: "30%", resizeMode: "contain" }}
                            />
                            <Text>Đang tìm tài xế...</Text>
                        </View>
                        <TouchableHighlight
                            style={{
                                width: "100%",
                                height: "20%",
                                borderTopColor: "#757575",
                                borderTopWidth: 1
                            }}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}
                        >
                            <Text style={{ textAlign: "center" }}>Huỷ</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        );
    }
}
