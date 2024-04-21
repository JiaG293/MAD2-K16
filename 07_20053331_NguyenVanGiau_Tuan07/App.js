import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Ex4 from "./screens/Ex4";
import Ex5 from "./screens/Ex5";
import Ex6 from "./screens/Ex6";
import ExPanResponder from "./screens/ExPanResponder";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Ex4></Ex4>
        {/* <Ex4></Ex4>
        <Ex6></Ex6> */}
        <ExPanResponder></ExPanResponder>
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
