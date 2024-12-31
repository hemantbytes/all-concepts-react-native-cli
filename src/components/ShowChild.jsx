import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const ShowChild = () => {
  useEffect(() => {
    // console.log("I'm a child component");

    return () => {
      console.log("Child component unmounted");
    };
  }, []);

  return (
    <View>
      <Text>ShowChild</Text>
    </View>
  );
};

export default ShowChild;
