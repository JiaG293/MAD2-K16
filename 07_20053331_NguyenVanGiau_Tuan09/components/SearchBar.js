import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, IconButton, TextInput } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchBar({ inputSearch, filterButton = false, inputFilter, onKeyPress, onChangeText = (e) => { console.log("onChangetext:", e); }, value = (e) => e }) {
    return (
        <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between' }}>
            <TextInput
                label="Search"
                placeholder="Type something"
                mode='outlined'
                left={<TextInput.Icon icon='magnify'></TextInput.Icon>}
                style={{ flex: 1 }}
                onKeyPress={onKeyPress}
                onChangeText={onChangeText}
                value={value}

            />
            {
                filterButton ?
                    <IconButton
                        icon="filter"
                        mode="outlined"
                        style={{ borderRadius: 7 }}
                        size={30}
                        onPress={() => console.log('Pressed')}>
                    </IconButton>
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({})