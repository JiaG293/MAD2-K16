import {
  Animated,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState, useRef } from "react";

export default function Ex2() {
  const rotateSquare = useRef(new Animated.Value(50)).current;

  const rotateInterpolate = rotateSquare.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const handleRotateSquare = (time) => {
    return Animated.loop(
      Animated.timing(rotateSquare, {
        toValue: 360,
        duration: time,
        useNativeDriver: false,
      })
    );
  };

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Animated.View
        style={{
          transform: [{ rotate: rotateInterpolate }],
          fontSize: 32,
          borderColor: "black",
          borderWidth: 1,
          height: 200,
          width: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Square
      </Animated.View>
      <View style={{ flex: 1, flexDirection: "row", marginTop: 200 }}>
        <Button
          title="Start"
          onPress={() => {
            handleRotateSquare(1000).start();
          }}
        ></Button>
        <Button
          title="Stop"
          onPress={() => {
            handleRotateSquare(1000).stop();
          }}
        ></Button>
        <Button
          title="Restart"
          //day co the dung start() duoc vi khi start van se bat dau vi 0 do re-render neu current value = 0
          //Khong ro vi sao reset() khong the dung duoc
          onPress={() => {
            rotateSquare.setValue(0);
            handleRotateSquare(1000).start();
          }}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
