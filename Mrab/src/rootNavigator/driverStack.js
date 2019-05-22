import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import DriverHomeScreen from '../screen/driver/DriverHomeScreen';
import MovingScreen from '../screen/driver/MovingScreen';
import DrivingScreen from '../screen/driver/DrivingScreen';
import FinishScreen from '../screen/driver/FinishScreen';
const driverStack = createStackNavigator(
    {
        DriverHome: { screen: DriverHomeScreen },
        Moving: { screen: MovingScreen },
        Driving: {screen: DrivingScreen},
        Finish: {screen: FinishScreen}
    },
    {
        headerMode: 'none'
    }
)

export default driverStack;