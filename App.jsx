
import { View } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import SwitchUI from './src/components/SwitchUI';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View className="flex-1">
      <SwitchUI />
    </View>
  );
};

export default App;