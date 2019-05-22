import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import UserHomeScreen from '../screen/user/UserHomeScreen';
const userStack = createStackNavigator(
    {
        UserHome: { screen: UserHomeScreen },
    },
    {
        headerMode: 'none'
    }
)

export default userStack;