import React from 'react';
import MyLogin from './src/components/MyLogin';
import { SafeAreaView } from 'react-native';
import "./global.css"

const App = () => {
  return (
    <SafeAreaView>
      <MyLogin />
    </SafeAreaView>
  );
};

export default App;