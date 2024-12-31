import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const UseState = () => {
  const [name, setName] = useState ('Hemant');
  const updateName =() =>{
    setName('hello');
  };
  return (
    <View>
      <Text style={ { fontSize : 20 } }>UseState</Text>
      <Text style={ { fontSize : 20 } }>Name : { name }</Text>
      <Button title="Press" onPress={ updateName } />
      {/* <Button title="Press" onPress={ () => setName('Banjara') } /> */}
    </View>
  );
};

export default UseState;



