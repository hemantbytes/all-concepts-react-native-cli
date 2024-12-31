import { View, Text } from 'react-native';
import React from 'react';

const Child = (props) => {
    // console.log(props.data);
    let count = props.data;
    let item = props.items;
  return (
    <View>
      <Text style={ { fontSize : 20 } }>Child</Text>
      <Text style={ { fontSize : 20 } }>{ count }</Text>
      <Text style={ { fontSize : 20 } }>{ item }</Text>
    </View>
  )
}

export default Child