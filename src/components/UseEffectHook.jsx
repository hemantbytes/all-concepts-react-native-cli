import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
    const [count, setCount] = useState(1);
    useEffect (() => {
        console.log('Api Calling');
    }, []);
  return (
    <View>
      <Text>useEffectHook</Text>
      <Text>Count: {count}</Text>
      <Button title="Counter" onPress={ () => setCount(count + 1) } />
    </View>
  );
};

export default UseEffectHook;