
import { View } from 'react-native';
import React from 'react';
import UserCRUD from './src/components/UserCRUD';

const App = () => {
  return (
    <View className="flex-1">
      <UserCRUD />
    </View>
  );
};

export default App;