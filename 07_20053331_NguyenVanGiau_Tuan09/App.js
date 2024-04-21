import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './nav/BottomTabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <BottomTabs></BottomTabs>
        </NavigationContainer>
        <StatusBar barStyle="dark-content" />
      </SafeAreaView>
    </SafeAreaProvider >
  );
}