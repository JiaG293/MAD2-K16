import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

export default function Splash({ navigation }) {
    const opacity = useSharedValue(1);

    useEffect(() => {
        opacity.value = withTiming(0, { duration: 5000 }, () => {
            navigation.replace('MainScreen');
        });
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    return (
        <View style={[StyleSheet.absoluteFill, styles.container]}>
            <Animated.Image
                source={require('../assets/Avatar 10.png')}
                style={[styles.image, animatedStyle]}
                resizeMode="contain"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: '80%',
    },
});