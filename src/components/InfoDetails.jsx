import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const InfoDetails = ({count, points}) => {
    useEffect( () => {
          console.log("I'm a Child Components");
    }, [count]);
  return (
    <View>
      <Text style={ { fontSize : 20 } }>InfoDetails</Text>
      <Text style={ { fontSize : 20 } }>Count: {count}</Text>
      <Text style={ { fontSize : 20 } }>Points: {points}</Text>
    </View>
  );
};

export default InfoDetails;