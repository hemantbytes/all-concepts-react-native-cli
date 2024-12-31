import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SecondClass from './SecondClass';

export class ClassComponets extends Component {
  
  render() {
    const age = 24 ;
    return (
      <View>
        <Text> Class Components </Text>
        <SecondClass data={age} />
      </View>
    );
  };
};

export default ClassComponets;
