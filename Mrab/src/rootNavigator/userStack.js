import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import UserHomeScreen from '../screen/user/UserHomeScreen';
import TimTaiXe from '../screen/user/TimTaiXe';
import HoanThanhChuyen from '../screen/user/HoanThanhChuyen';

const userStack = createStackNavigator(
    {
        UserHome: { screen: UserHomeScreen },
        TimTaiXe: { screen: TimTaiXe },
        HoanThanhChuyen: { screen: HoanThanhChuyen },
    },
    {
        headerMode: 'none'
    }
)

export default userStack;