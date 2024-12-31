import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';

const StatusBarExample = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={'light-content'}
        // backgroundColor="red"
        backgroundColor="rgb(247, 127, 247)" 
        // hidden={true}
        hidden={false}
        translucent={true}
      />
      <Text style={styles.text}>StatusBarExample</Text>
    </View>
  );
};

export default StatusBarExample;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});
