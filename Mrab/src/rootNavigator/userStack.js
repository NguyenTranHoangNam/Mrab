import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import UserHomeScreen from '../screen/user/UserHomeScreen';
import TimTaiXe from '../screen/user/TimTaiXe';
import HoanThanhChuyen from '../screen/user/HoanThanhChuyen';
import Danhgia from '../screen/user/DanhGia';
const userStack = createStackNavigator(
    {
        UserHome: { screen: UserHomeScreen },
        TimTaiXe: { screen: TimTaiXe },
        HoanThanhChuyen: { screen: HoanThanhChuyen },
        Danhgia:{screen:Danhgia}
    },
    {
        headerMode: 'none',
        // initialRouteName:'Danhgia'
    }
)

export default userStack;