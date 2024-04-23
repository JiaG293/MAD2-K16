import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { category, course, teacher } from '../data/data'
import Populate from '../components/Populate'
import Recommend from '../components/Recommend'
import Inspire from '../components/Inspire'
import TopTeacher from '../components/TopTeacher'
import NetworkError from '../components/NetworkError'

export default function Home() {
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
        const categoryData = await customFetch(`${url}/dbCategory`, 'GET', null)
        const courseData = await customFetch(`${url}/dbCourse`, 'GET', null)
        const teacherData = await customFetch(`${url}/dbTeacher`, 'GET', null)
        console.log(categoryData);

        await setData({
            category: categoryData,
            course: courseData,
            teacher: teacherData,
        })

    }

    useEffect(() => {
        handleFetch('http://localhost:3000') // params url base
    }, [])

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        // USING DATA JSON SERVER IN FOLDER API
        <ScrollView style={styles.container}>
            <Header name={"Rosie"}></Header>
            <Banner></Banner>
            {
                data?.category ?
                    <View>
                        <Categories data={data.category}></Categories>
                        <Populate data={data.course}></Populate>
                        <Recommend data={data.course}></Recommend>
                        <Inspire data={data.course}></Inspire>
                        <TopTeacher data={data.teacher}></TopTeacher>
                    </View>
                    :
                    <NetworkError onReconnect={()=> {
                        
                    }} ></NetworkError>
            }
        </ScrollView>


        // USING DATA MODULE IMPORT
        /*  <ScrollView style={styles.container}>
             <Header name={"Rosie"}></Header>
             <Banner></Banner>
             <Categories data={category}></Categories>
             <Populate data={course}></Populate>
             <Recommend data={course}></Recommend>
             <Inspire data={course}></Inspire>
             <TopTeacher data={teacher}></TopTeacher>
         </ScrollView> */
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
})