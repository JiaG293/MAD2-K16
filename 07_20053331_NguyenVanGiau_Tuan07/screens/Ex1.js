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

export default function Ex1() {
  const fadeText = useRef(new Animated.Value(0)).current;

  const handleFadeIn = (time) => {
    Animated.loop(
      Animated.timing(fadeText, {
        toValue: 1,
        duration: time,
        useNativeDriver: false,
      })
    ).start();
  };

  useEffect(() => {
    handleFadeIn(3000);
  }, []);
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Animated.Text style={{ fontSize: 13, opacity: fadeText }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Animated.Text>
      <Animated.Text style={{ fontSize: 24, opacity: fadeText }}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </Animated.Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
