import React, { Component } from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation'

import HomeScreen from '../screen/HomeScreen';
import DriverStack from './driverStack'
import UserStack from './userStack'
const rootNavigator = createStackNavigator(
    {
        HomeScreen:HomeScreen,
        DriverHome:DriverStack,
        UserHome:UserStack
    },{
        headerMode:'none'
    }
)
export default createAppContainer(rootNavigator)