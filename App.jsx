// Firebase Authentication
import { View } from 'react-native';
import React from 'react';
import Register from './src/components/Register';
import "./global.css";

const App = () => {
  return (
    <View className="flex-1">
      <Register />
    </View>
  );
};

export default App;