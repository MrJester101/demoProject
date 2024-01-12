import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Home from "./Home";
import Detail from "./Detail";

const stack=createStackNavigator();
const screenOptionStyle={
    headerShown : false,
};

const HomeStackNavigator =() =>{
    return (

        <stack.Navigator screenOption={screenOptionStyle}>
            <stack.Screen name="Home" componenet={Home} />
            <stack.Screen name="Detail" componenet={Detail} />
        </stack.Navigator>
    )
}
export default HomeStackNavigator;