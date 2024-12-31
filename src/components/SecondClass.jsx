import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export class SecondClass extends Component {
  constructor() {
    super();
    this.state = {
      myName: 'Hemant',
    };
  }
  updateName = () =>{
    this.setState({myName : 'Yatish'});
  }

  render() {
    return (
      <View>
        <Text>Name: {this.state.myName} age:{this.props.data}</Text>
        <Button title='Update Name' onPress={this.updateName} />
      </View>
    );
  }
}

export default SecondClass;
