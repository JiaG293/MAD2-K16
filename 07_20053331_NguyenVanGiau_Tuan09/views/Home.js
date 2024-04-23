import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Category from '../components/Category'


export default function Home({ navigation }) {
    const [data, setData] = useState({})

    async function customFetch(url, method = 'GET', data = null) {
        try {
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data ? JSON.stringify(data) : null,
            };

            const response = await fetch(url, options);
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message || 'Something went wrong');
            }

            return responseData;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
    const handleFetch = async (url) => {
        const homeData = await customFetch(`${url}/dbHome`, 'GET', null)
        console.log(homeData);
        await setData({
            dbHome: homeData,
        })

    }

    useEffect(() => {
        handleFetch('http://localhost:3000') // params url base
    }, [])

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter pressed!');
            navigation.navigate('Search')
        }
    };

    return (
        <ScrollView style={styles.container}>
            <SearchBar onKeyPress={handleKeyPress}></SearchBar>
            <Category categoryTitle={"Lifestyle"} data={data.dbHome} listHorizontal={true}></Category>
            <Category categoryTitle={"Bussiness"} data={data.dbHome} listHorizontal={true}></Category>
            <Category categoryTitle={"Art"} data={data.dbHome} listHorizontal={true}></Category>
            <Category categoryTitle={"Technology"} data={data.dbHome} listHorizontal={true}></Category>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
})
