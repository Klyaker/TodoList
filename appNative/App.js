import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';
import {removeHandler} from './components/ListItem';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Buy milk', key: '1'},
    {text: 'Learn React', key: '2'},
    {text: 'Create App', key: '3'}
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return[
        {
          text: text,
          key: Math.random().toString(36).substring(7),
        },
        ...list
      ]
    })
  }

  const removeHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    });
  }

  return (
    <View>
      <Header/>
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => (
          <ListItem el={item} removeHandler={removeHandler}/>
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
