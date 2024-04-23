
import React from 'react';
import Home from '../views/Home';
import Search from '../views/Search';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../views/Splash';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator initialRouteName="SplashScreen" gestureEnabled={false}>
            <Stack.Screen name="SplashScreen" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="MainScreen" component={BottomTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

