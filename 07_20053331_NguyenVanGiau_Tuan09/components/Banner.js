import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Button } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function Banner({ data }) {

    const renderItem = ({ item }) => {
        return (
            <Image
                source={{ uri: item.image }}
                style={{
                    borderRadius: 20,
                    width: 400,
                    height: 150,
                    resizeMode: "cover",
                    marginHorizontal: 10,
                }}
            ></Image>
        )
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            pagingEnabled={true}
            contentContainerStyle={{ margin: 10, marginBottom: 50 }}
            style={{ alignContent: 'center' }}
        />
    );
}
