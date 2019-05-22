import React, { Component } from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import userStack from './userStack';
import driverStack from './driverStack';
import HomeScreen from '../screen/HomeScreen';
const rootNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        UserHome: userStack,
        DriverHome: driverStack
    },{
        headerMode:'none'
    }
)

export default createAppContainer(rootNavigator)