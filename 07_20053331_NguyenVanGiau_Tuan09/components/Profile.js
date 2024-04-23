import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Card, Chip, Paragraph, Text, Title } from 'react-native-paper'
import { AirbnbRating, Rating } from 'react-native-ratings';

export default function Profile({ data, listHorizontal }) {
    const [visibleItems, setVisibleItems] = useState(3);
    const handleViewMore = () => {
        setVisibleItems(visibleItems + 5);
    };
    const renderItem = ({ item }) => {
        return (
            <Card style={styles.cardStyle} contentStyle={{ flexDirection: "row" }} >
                <View>
                    <Card.Cover
                        source={{ uri: item.image }}
                        style={styles.cardImg}
                    />
                    <AirbnbRating
                        count={5}
                        showRating={false}
                        defaultRating={item.rating}
                        size={13}
                        isDisabled={true}
                    />
                </View>
                <Card.Content style={{ justifyContent: 'center' }}>
                    {
                        item.topPerformer ?
                            <Chip
                                style={{
                                    width: "55",

                                    backgroundColor: '#f4e0ff',
                                    position: "absolute",
                                    marginTop: -70,
                                    marginLeft: 120,
                                    color: '#7617ad'
                                }}
                                onPress={() => console.log('Pressed')}>Top performer</Chip>
                            : null
                    }
                    <Title style={styles.cardTitle}>{item.name}</Title>
                    <Paragraph style={styles.cardSubtitle}>{item.profesional}</Paragraph>
                    <Paragraph style={styles.cardContent}>{item.info}</Paragraph>
                </Card.Content>
            </Card>
        )
    }
    return (
        <ScrollView style={{ padding: 10 }}>
            {/* SAMPLE */}
            {/* <Card style={styles.cardStyle} contentStyle={{ flexDirection: "row" }} >
                <View>
                    <Card.Cover
                        source={{ uri: 'https://picsum.photos/300' }}
                        style={styles.cardImg}
                    />
                    <AirbnbRating
                        count={5}
                        showRating={false}
                        defaultRating={3}
                        size={13}
                        isDisabled={true}
                    />
                </View>
                <Card.Content style={{ justifyContent: 'center' }}>
                    <Avatar.Text
                        size={24}
                        label="Top performer"
                        color='#7617ad'
                        style={{
                            width: "auto",
                            paddingHorizontal: 10,
                            backgroundColor: '#f4e0ff',
                            position: "absolute",
                            marginTop: -70,
                            marginLeft: 120,
                        }}
                    />
                    <Title style={styles.cardTitle}>Name</Title>
                    <Paragraph style={styles.cardSubtitle}>Profesional</Paragraph>
                    <Paragraph style={styles.cardContent}>Info</Paragraph>

                </Card.Content>
            
            
            
            
            </Card> */}
            {/* RENDER  */}
            <FlatList
                data={data.slice(0, visibleItems)}
                // data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={listHorizontal ?? false} //default vertical
                contentContainerStyle={styles.flastListStyle}

            />
            {data.length > visibleItems && (
                <Button mode='text' onPress={handleViewMore}>See more</Button>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        margin: 5,
        borderWidth: 1,
        borderColor: "#9e9e9e",
        padding: 10,
    },
    cardImg: {
        padding: 10,
        borderRadius: 50,
        width: 100,
        height: 100,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 700,
    },
    cardSubtitle: {
        opacity: 0.8,
        fontSize: 13
    },
    cardContent: {
        fontSize: 13
    },
    flastListStyle: {
        flex: 1
    },
})