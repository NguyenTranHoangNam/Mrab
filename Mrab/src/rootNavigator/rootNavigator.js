import React, { Component } from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation'
import Home from '../Home'
import DatXe from '../DatXe'
import TimTaiXe from '../TimTaiXe';
import HoanThanhChuyen from '../HoanThanhChuyen';
const rootNavigator = createStackNavigator(
    {
        Home: { screen:Home  },
        DatXe: { screen: DatXe },
        TimTaiXe: { screen: TimTaiXe },
        HoanThanhChuyen: { screen: HoanThanhChuyen }
    },{
        headerMode:'none'
    }
)
export default createAppContainer(rootNavigator)