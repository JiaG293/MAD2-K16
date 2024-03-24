import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen1 from "./screens/Screen1";
import Ex1 from "./screens/Ex1";
import Ex2 from "./screens/Ex2";
import Ex3 from "./screens/Ex3";
/* import Ex4 from './screens/Ex4';
import Ex5 from './screens/Ex5';
import Ex6 from './screens/Ex6'; */
import { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Ex1></Ex1>
        <Ex2></Ex2>
        <Ex3></Ex3>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
