import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Button, Card, IconButton, Paragraph, Title } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Recommend({ data }) {
    const [check, setCheck] = useState({})

    const handleToggleCheck = (id) => {
        setCheck(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: item.image }} resizeMode='cover' style={{ padding: 10 }} />
            <Card.Content>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <View>
                        <Title style={{ fontWeight: 700 }}>{item.titleCourse}</Title>
                        <Paragraph style={{ color: "#6a6970", fontWeight: 500 }}>Lecturer: {item.lecture}</Paragraph>
                        <Paragraph style={{ color: '#5a43de', fontWeight: 500 }}>${item.price}</Paragraph>
                    </View>
                    <Button mode="text" onPress={() => handleToggleCheck(item.id)}>
                        <MaterialCommunityIcons name={check[item.id] ? "bookmark-check-outline" : "bookmark-outline"} color={"black"} size={26} />
                    </Button>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: "row" }}>
                        <MaterialCommunityIcons name="star-outline" color={"#ebd21c"} size={26} />
                        <Paragraph style={{ fontWeight: 500 }}>
                            {item.rating} ({item.numberRating})
                        </Paragraph>
                    </View>
                    <Paragraph style={{ fontWeight: 500 }}>{item.numberLesson} lessons</Paragraph>
                </View>
            </Card.Content>
        </Card >
    );

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={styles.textTitle}>Recommended for you</Text>
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
                contentContainerStyle={styles.flatlistContent}
                horizontal={true}
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
    },
    card: {
        margin: 10,
        elevation: 4,
    },
});
