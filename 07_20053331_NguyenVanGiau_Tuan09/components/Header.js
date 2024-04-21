import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textTitle}>Hello, {name}!</Text>
                <Text style={styles.textContent}>What do you want to learn today?</Text>
            </View>
            <View style={styles.wrapperIcon}>
                <Button
                    mode="text"
                    onPress={() => console.log('Pressed')}>
                    <MaterialCommunityIcons name="cart-outline" color={"white"} size={26} />
                </Button>
                <Button
                    mode="text"
                    onPress={() => console.log('Pressed')}>
                    <MaterialCommunityIcons name="bell-outline" color={"white"} size={26} />
                </Button>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5a43de",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textTitle: {
        fontSize: 26,
        fontWeight: 500,
        color: "white",
    },
    textContent: {
        fontSize: 16,
        fontWeight: 300,
        color: "white",
    },
    wrapperIcon: {
        flexDirection: "row",
    }
})