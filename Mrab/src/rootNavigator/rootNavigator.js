import React, { Component } from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import Home from '../Home'
import DatXe from '../DatXe'
const rootNavigator = createStackNavigator(
    {
        Home: { screen:Home  },
        DatXe: { screen: DatXe }
    },{
        headerMode:'none'
    }
)
export default createAppContainer(rootNavigator)