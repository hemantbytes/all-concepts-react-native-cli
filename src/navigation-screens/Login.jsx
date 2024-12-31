import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  return (
    <View>
      <TextInput placeholder="Enter Username"  onChangeText={setUsername} />
      <Button title="Go to About Screen"
      //  onPress={() => navigation.navigate('About', { username : 'Hemant', age : 24 })} 
       onPress={() => navigation.navigate('About', {username })}/>
    </View>
  );
};

export default Login;