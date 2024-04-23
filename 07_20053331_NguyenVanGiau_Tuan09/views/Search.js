import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Profile from '../components/Profile'
import Banner from '../components/Banner'

export default function Search() {
  const [data, setData] = useState({
    dbSearch: [],
    dbBanner: [],
  })

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
    const dataSearch = await customFetch(`${url}/dbSearch`, 'GET', null)
    const dataBanner = await customFetch(`${url}/dbBanner`, 'GET', null)
    await setData({
      ...data,
      dbSearch: [...dataSearch],
      dbBanner: [...dataBanner],
    })

  }

  useEffect(() => {
    handleFetch('http://localhost:3000') // params url base
  }, [])

  useEffect(() => {
    console.log(data.dbSearch);
    console.log(data.dbBanner);
  }, [data]);

  return (
    <ScrollView>
      <SearchBar filterButton={true}></SearchBar>
      <Profile data={data.dbSearch} listHorizontal={false}></Profile>
      <Banner data={data.dbBanner}></Banner>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})