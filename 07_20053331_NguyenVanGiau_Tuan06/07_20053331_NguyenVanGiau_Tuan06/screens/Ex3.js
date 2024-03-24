import {
  Animated,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState, useRef } from "react";

export default function Ex3() {
  //Bell ring
  const rotateBell = useRef(new Animated.Value(0)).current;

  const rotateBellInterpolate = rotateBell.interpolate({
    inputRange: [0, 10],
    outputRange: ["-10deg", "10deg"],
  });

  const handleBellRing = () => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(rotateBell, {
          toValue: 10,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(rotateBell, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
      ])
    );
  };

  ///Ying yang rotate
  const rotateYingYang = useRef(new Animated.Value(0)).current;

  const rotateYingYangInterpolate = rotateYingYang.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const handleYingYangRing = () => {
    return Animated.loop(
      Animated.timing(rotateYingYang, {
        toValue: 360,
        duration: 2000,
        useNativeDriver: false,
      })
    );
  };
  useEffect(() => {
    handleBellRing().start();
    handleYingYangRing().start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, width: "100%" }}>
      <View
        style={{
          flexDirection: "row-reverse",
          height: 100,
          width: "100%",
          borderColor: "1px solid black",
          borderWidth: 1,
        }}
      >
        <Animated.Image
          source={require("../assets/bell.svg")}
          style={{
            height: 50,
            width: 50,
            alignSelf: "center",
            marginHorizontal: 20,
            transform: [{ rotate: rotateBellInterpolate }],
          }}
        ></Animated.Image>
      </View>

      <View
        style={{
          justifyContent: "center",
        }}
      >
        <Animated.Image
          source={require("../assets/Yin_yang.svg.png")}
          style={{
            height: 300,
            width: 300,
            alignSelf: "center",
            marginHorizontal: 20,
            transform: [{ rotate: rotateYingYangInterpolate }],
          }}
        ></Animated.Image>
        <Text>Ying yang</Text>
        <View style={{ justifyContent: "space-around", alignContent: 'center' }}>
          <TextInput
            placeholder="user name"
            style={{
              borderColor: "black",
              borderWidth: 1,
              height: 30,
            }}
          ></TextInput>
          <TextInput
            placeholder="password"
            style={{
              borderColor: "black",
              borderWidth: 1,
              height: 30,
            }}
          ></TextInput>
          <View style={{ flexDirection: "row" }}>
            <Button title="show"></Button>
            <Button title="login"></Button>
            <Button title="cancel"></Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
