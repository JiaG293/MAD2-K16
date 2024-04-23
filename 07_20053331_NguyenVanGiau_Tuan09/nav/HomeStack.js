
import React from 'react';
import Home from '../views/Home';
import Search from '../views/Search';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    );
}

