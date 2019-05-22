import React, { Component } from 'react';

import { StyleSheet, View, Platform, TouchableOpacity } from 'react-native'
import { THEME_COLOR, GRAY, BLUE } from '../../../utils';


export default class Switch extends Component {

    constructor(props) {
        super(props)

        this.state = {
            checked: props.checked
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.checked
        })
    }

    onPress = () => {
        let checked = !this.state.checked;
        this.setChecked(checked)
    }

    setChecked = (checked) => {
        this.setState({
            checked: checked
        })

        if (this.props.onCheckedChanged) {
            this.props.onCheckedChanged(checked)
        }
    }

    getChecked = () => {
        return this.state.checked
    }

    render() {
        return (
            <TouchableOpacity style={[this.props.style, styles.container]}
                activeOpacity={1}
                onPress={this.onPress}
            >
                <View style={{ flex: 1, height: 26, justifyContent: 'center' }}>
                    <View style={{
                        position: 'absolute',
                        backgroundColor: this.state.checked ? BLUE : GRAY,
                        opacity: 0.3, width: 30,
                        height: 16, borderRadius: 8,
                        marginTop: 5, marginLeft: 2
                    }} />

                    {this.state.checked ? null :
                        <View style={{ position: 'absolute', backgroundColor: GRAY, width: 20, height: 20, borderRadius: 10, marginTop: 3 }} />
                    }

                    {this.state.checked ? <View style={{ position: 'absolute', backgroundColor: BLUE, width: 20, height: 20, borderRadius: 10, marginTop: 3, right: 0 }} />
                        : null}

                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        width: 34,
        height: 26,
    }
})