import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View} from 'react-native';

export default function Form({ addHandler }) {

    const [text, setValue] = useState('');

    const onchange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onchange} placeholder='Enter the task...'/>
            <Button onPress={() => addHandler(text)} title='Add your task'/>
        </View>
    );
    }

const styles = StyleSheet.create({
   input: {
       borderBottomWidth: 1,
       borderColor: '#000',
       padding: 10,
       marginVertical: 30,
       marginHorizontal: '20%',
       width: '60%'

   },
   
  
});