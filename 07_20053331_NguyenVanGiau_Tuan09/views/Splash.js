import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';

export default function Splash({ navigation }) {
    const scale = useSharedValue(0.3);
    const opacity = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(1, { damping: 70, stiffness: 100 });
        opacity.value = withSpring(1, { damping: 10, stiffness: 100 });
        setTimeout(() => {
            navigation.replace('MainScreen');
        }, 5000);
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));
    const textAnimatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    return (
        <View style={[StyleSheet.absoluteFill, styles.container]}>
            <Animated.Image
                source={require('../assets/Avatar 10.png')}
                style={[styles.image, animatedStyle]}
                resizeMode="contain"
            />
            <Animated.Text style={[styles.text, textAnimatedStyle]}>Welcome to My App</Animated.Text>
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
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
