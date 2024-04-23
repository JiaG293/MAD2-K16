import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import BottomTabs from './nav/BottomTabs';
import MainStack from './nav/MainStack';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <MainStack></MainStack>
          {/* <BottomTabs></BottomTabs> */}
        </NavigationContainer>
        <StatusBar barStyle="dark-content" />
      </SafeAreaView>
    </SafeAreaProvider >
  );
}