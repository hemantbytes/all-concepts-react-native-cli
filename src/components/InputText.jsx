import React, { useState } from 'react'; // useState ko destructuring ke sath import karein
import {Button, View, Text, TextInput } from 'react-native';

const InputText = () => {
    const [userName, setUserName] = useState(''); // useState correctly imported and used here

    return (
        <View>
            <Text style={{ fontSize: 20 }}>InputText</Text>
            <Text style={{ fontSize: 20 }}>Username: {userName}</Text>
            <TextInput
                style={{
                    fontSize: 20,
                    borderWidth: 2,
                    borderColor: 'black',
                    margin: 10
                }}
                placeholder="Enter Your User Name" value={userName}
                onChangeText={(data) => setUserName(data)} // Update userName on text input
            />
            <Button title="Clear" onPress={()=> setUserName('')} />
        </View>
    );
};

export default InputText;
