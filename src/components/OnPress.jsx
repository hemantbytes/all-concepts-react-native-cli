import { View, Text, Button } from 'react-native';
import React from 'react';

const Onpress = () => {
  let name = 'Hemant';
  const getName = (name) => {
    name = "Aashna";           {/* button click change name */}
    // console.warn ('Functions');{/* jab Parameter Pass nhi  ho tab is tarike se */}
    console.warn ('Name: ' , name);{/* jab Parameter Pass ho tab is tarike se */}  
  };
  
  return (
    <View>
      <Text>{name}</Text>
      {/* <Button title="Press" onPress={  getName } />   */} {/* jab Parameter Pass nhi  ho tab is tarike se */}
      <Button title="Press" onPress={() => getName ('Hemant')} />   {/* jab Parameter Pass ho tab is tarike se */}  
        
    </View>
  )
}

export default Onpress;