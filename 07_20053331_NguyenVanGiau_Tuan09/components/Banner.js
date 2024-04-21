import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Button, Title } from 'react-native-paper'

export default function Banner() {
    return (
        <View style={styles.container}>

            <ImageBackground source={require('../assets/Image 19.png')} style={styles.bannerImage}>
                <View style={{ margin: 20 }}>
                    <Text>
                        PROJECT MANAGEMENT
                    </Text>
                    <Title style={{
                        fontWeight: 700,
                    }}>20% OFF</Title>
                    <Button style={{
                        width: 120,
                        borderRadius: 5,
                    }}
                        mode="contained"
                        onPress={() => console.log('Pressed')}>
                        JOIN NOW
                    </Button>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    bannerImage: {
        width: "100%",
        height: 150,
        resizeMode: 'cover',
        borderRadius: 5,
        justifyContent: 'center',

    }
})