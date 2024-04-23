import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Title } from 'react-native-paper'

export default function Category({ categoryTitle, data, listHorizontal }) {

    const renderItem = ({ item }) => (
        <Card style={styles.cardStyle}>
            <Card.Cover
                source={{ uri: item.image }}
                style={styles.cardImg}
                resizeMode='cover'
            />
            <Card.Title
                title={item.title}
                titleStyle={styles.cardTitle}
            />
            <Card.Content>
                <Text
                    style={styles.cardSubtitle}
                    numberOfLines={4}
                >
                    {item.subtitle}
                </Text>
            </Card.Content>
        </Card>
    );
    return (
        <View style={{ padding: 20 }}>
            {/* SAMPLE */}
            {/* <Title style={{ fontWeight: 700, fontSize: 24, marginVertical: 20 }}>Life style</Title>
            <Card>
                <Card.Cover
                    source={{ uri: 'https://picsum.photos/300' }}
                    style={styles.cardImg}
                />
                <Card.Title
                    title="Card Title"
                    titleStyle={styles.cardTitle}
                    subtitle="Card Subtitlef sfs dfsfs fsdfsfsfs fsdf sd fsdf"
                    subtitleStyle={styles.cardSubtitle}
                />
            </Card> */}
            {/* RENDER  */}
            <Title style={{ fontWeight: 700, fontSize: 24, marginVertical: 20 }}>{categoryTitle}</Title>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={listHorizontal ?? false} //default vertical
                contentContainerStyle={styles.flastListStyle}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        width: 200,
        margin: 5,
        borderWidth: 1,
        borderColor: "#9e9e9e",
    },
    cardImg: {
        padding: 10,

    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 700,
    },
    cardSubtitle: {
        opacity: 0.8,
        fontSize: 13
    },
    flastListStyle: {
        flex: 1,
    }
})