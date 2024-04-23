import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';



export default function Categories({ data }) {
    const renderItem = ({ item }) => (
        <Button
            mode="outlined"
            onPress={() => console.log('Pressed')}
            style={styles.button}
            contentStyle={styles.buttonContent}
        >
            <View style={styles.buttonCategory}>
                <Image style={styles.icon} source={item.icon}></Image>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </Button>
    );

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={styles.textTitle}>Categories</Text>
                <Button
                    mode="text"
                    style={styles.butonViewMore}
                    onPress={() => console.log('Pressed')}>
                    View more
                </Button>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatlistContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    button: {
        flex: 1,
        margin: 5,

    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonCategory: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
    },
    text: {
        marginHorizontal: 5,
    },
    flatlistContent: {
        flexGrow: 1,
    },

    textTitle: {
        fontSize: 32,
        fontWeight: 500,
    },
    butonViewMore: {
        width: 100,
        fontSize: 22,
    }
});
