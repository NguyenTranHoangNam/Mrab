import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import DriverHomeScreen from '../screen/driver/DriverHomeScreen';
const driverStack = createStackNavigator(
    {
        DriverHome: { screen: DriverHomeScreen }
    },
    {
        headerMode: 'none'
    }
)

export default driverStack;