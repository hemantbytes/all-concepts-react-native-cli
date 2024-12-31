import { View, Text } from 'react-native';
import React from 'react';

const JSX = () => {
    let name = "Hemant";
    const getAge = () =>{
          return 22;
    }
  return (
    <View>
      <Text  style={ { fontSize : 20 } }>JSX</Text>
      <Text  style={ { fontSize : 20 } }>{ name }</Text>
      <Text  style={ { fontSize : 20 } }>{ 5+5 }</Text>
      <Text  style={ { fontSize : 20 } }>{ getAge () }</Text>
    </View>
  )
}

export default JSX;